import { Ollama } from 'ollama';

// Establish a connection to Ollama
const ollama = new Ollama({ host: 'http://localhost:11434' });

// This is where our main logic will go
async function main() {
  console.log("Starting our AI interaction...");

  // 1. Define the question we want to ask the AI
  const userPrompt = "What is life ?";

  console.log(`\nYour Question: ${userPrompt}`);

  // 2. Send the prompt to the AI model and wait for the answer
  const response = await ollama.chat({
    model: 'gemma3',
    messages: [{ role: 'user', content: userPrompt }],
  });

  // 3. Store the AI's answer in a variable
  const aiAnswer = response.message.content;

  console.log(`\nAI's Answer: ${aiAnswer}`);
}

// Run the main function
main();