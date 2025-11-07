import { Ollama } from 'ollama';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Establish connection to Ollama
const ollama = new Ollama({ host: 'http://localhost:11434' });

// Store conversation history
let conversationHistory = [];

// Files directory - use absolute path
const FILES_DIR = path.join(__dirname, 'Files');

// List all files in the Files folder
async function listFiles() {
    try {
        // Ensure the Files directory exists
        await fs.ensureDir(FILES_DIR);
        
        const files = await fs.readdir(FILES_DIR);
        console.log('\nFiles in folder:');
        files.forEach((file, index) => {
            console.log(`${index + 1}. ${file}`);
        });
        return files;
    } catch (error) {
        console.log('Error listing files:', error.message);
        return [];
    }
}

// Read different types of files
async function readFile(fileName) {
    try {
        const filePath = path.join(FILES_DIR, fileName);

        if (!await fs.pathExists(filePath)) {
            console.log(`File "${fileName}" not found`);
            return null;
        }

        const extension = path.extname(fileName).toLowerCase();
        console.log(`Reading ${fileName}...`);

        let content = null;
            // Read as text (txt, json, etc.)
            content = await fs.readFile(filePath, 'utf-8');
            return { fileName, type: 'text', content };


    } catch (error) {
        console.log(`Error reading ${fileName}:`, error.message);
        return null;
    }
}
// Define tools for the AI
const tools = [
    {
        type: 'function',
        function: {
            name: 'list_files',
            description: 'List all files in the Files folder',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    },
    {
        type: 'function',
        function: {
            name: 'read_file',
            description: 'Read a specific file from the Files folder',
            parameters: {
                type: 'object',
                properties: {
                    fileName: {
                        type: 'string',
                        description: 'Name of the file to read'
                    }
                },
                required: ['fileName']
            }
        }
    }
];

// Execute tool functions
async function executeTool(toolCall) {
    const { name, arguments: args } = toolCall.function;

    if (name === 'list_files') {
        const files = await listFiles();
        return files;
    }
    else if (name === 'read_file') {
        const fileData = await readFile(args.fileName);
        if (fileData && fileData.content) {
            return fileData.content;
        }
        return 'Could not read file';
    }

    return 'Unknown tool';
}

// Chat with AI
async function chatWithAI(userMessage) {
    try {
        // Add user message to history
        conversationHistory.push({ role: 'user', content: userMessage });

        // System prompt
        const systemPrompt = `You are a helpful file management assistant for Discord. You have access to tools that can read files from a Files folder.

AVAILABLE TOOLS:
1. list_files() - Shows all available files
2. read_file(fileName) - Reads and returns the content of any file

CRITICAL INSTRUCTIONS:
- When users ask about files or specific people/documents, ALWAYS use your tools
- First use list_files() to see what's available
- Then use read_file() to access the specific file content
- You can read JSON files, csv files and text files
- Always provide detailed information based on the actual file content
- Never say you cannot access files, you have tools to read them

FORMATTING RULES FOR DISCORD:
- DO NOT use tables or table formatting
- Use bullet points (•, -, *) for lists instead of tables
- Use **bold** for emphasis and headings
- Use line breaks and spacing to organize information
- Keep responses clear and readable in plain text format
- Use numbered lists (1., 2., 3.) for sequential information
- Use emojis sparingly for visual appeal if appropriate
- Format data as simple lists or paragraphs, NOT as tables
- Strictly keep the character limit under 2000 characters

WORKFLOW:
1. User asks about files → Use list_files()
2. User asks about specific file → Use read_file(fileName)
3. Analyze the content and provide comprehensive answers in Discord-friendly format

Be direct and helpful. Always use your tools when file-related questions are asked. Format all responses for Discord chat, avoiding tables and complex formatting.`;

        // Prepare messages
        const messages = [
            { role: 'system', content: systemPrompt },
            ...conversationHistory
        ];

        // Send to AI with tools
        const response = await ollama.chat({
            model: 'gpt-oss:20b',
            messages: messages,
            tools: tools,
        });

        let aiResponse = response.message.content;

        // Handle tool calls
        if (response.message.tool_calls && response.message.tool_calls.length > 0) {

            // Add AI message with tool calls to history
            conversationHistory.push({
                role: 'assistant',
                content: aiResponse,
                tool_calls: response.message.tool_calls
            });

            // Execute each tool
            for (const toolCall of response.message.tool_calls) {
                const toolResult = await executeTool(toolCall);
                
                // Add tool result to history
                conversationHistory.push({
                    role: 'tool',
                    content: JSON.stringify(toolResult),
                    tool_call_id: toolCall.id
                });
            }

            // Get final response from AI
            const finalMessages = [
                { role: 'system', content: systemPrompt },
                ...conversationHistory
            ];

            const finalResponse = await ollama.chat({
                model: 'gpt-oss:20b',
                messages: finalMessages,
            });

            aiResponse = finalResponse.message.content;
        }

        // Add AI response to history
        conversationHistory.push({ role: 'assistant', content: aiResponse });

        return aiResponse;

    } catch (error) {
        console.log('Error chatting with AI:', error.message);
        return 'Sorry, I had trouble processing that.';
    }
}

// Export the function for use in other files
export { chatWithAI };