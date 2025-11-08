# Complete AI Learning Journey : From Local Models to Discord Bots

A beginner-friendly, step-by-step guide to learning AI development. This repository takes you from running your first AI model locally to building a fully functional Discord bot with AI capabilities.

## 🎯 What You'll Build

This is a **3-part learning series** where each project builds on the previous one:

1. **Run AI Locally** → Learn the basics of AI models
2. **Agentic AI** → Build AI that can perform actions
3. **Discord AI Bot** → Deploy your AI to Discord

By the end, you'll have a working Discord bot that can read files, answer questions, and interact with users!

---

## 📚 The Complete Learning Path

### Part 1: Run Ollama Locally 🚀
**Start here if you're completely new to AI**

Learn how to run AI models on your own computer (no cloud needed!).

**What you'll learn:**
- Install and set up Ollama
- Run your first AI model
- Send questions and get AI responses
- Understand how AI models work

**Time needed:** 15-30 minutes

**Folder:** `Run Ollama Locally`

---

### Part 2: Agentic AI with Ollama 🛠️
**Build AI that can DO things**

Create an AI agent that can read files, process data, and use tools.

**What you'll learn:**
- Give AI the ability to use tools
- Let AI read and analyze files
- Build conversation memory
- Create interactive AI assistants

**Time needed:** 1-2 hours

**Folder:** `Agentic A.I. With Ollama`

---

### Part 3: Discord AI Bot 🤖
**Deploy your AI to Discord**

Turn your AI agent into a Discord bot that anyone can chat with!

**What you'll learn:**
- Set up a Discord bot
- Connect AI to Discord
- Handle user messages
- Split long responses
- Deploy a real bot

**Time needed:** 1-2 hours

**Folder:** `Discord Agentic A.I. Bot`

---

## 🚀 Getting Started

### Step 1: Install Prerequisites

Before starting, you need these tools installed:

1. **Ollama** (the AI platform)
   - Download from [ollama.ai](https://ollama.ai)
   - Install and run it

2. **Node.js** (version 16 or higher)
   - Download from [nodejs.org](https://nodejs.org)

3. **AI Models** (download these after installing Ollama)
   ```bash
   ollama pull gemma3
   ollama pull gpt-oss:20b
   ```

4. **Discord Account** (for Part 3)
   - Create a free account at [discord.com](https://discord.com)

### Step 2: Clone This Repository

```bash
git clone <repository-url>
cd <repository-name>
```

---

## 📖 Part 1: Run Ollama Locally

### What's Inside

A simple Node.js script that talks to AI. Perfect for understanding the basics!

### How to Run

```bash
cd "Run Ollama Locally"
npm install
node index.js
```

### What Happens

The script will:
1. Connect to Ollama running on your computer
2. Send a question to the AI
3. Print the AI's response

### Key Concepts

- **Local AI**: The AI runs on YOUR computer, not in the cloud
- **Prompts**: Questions or instructions you give to AI
- **Models**: Different AI "brains" for different tasks

### Try This

After running the example, open `index.js` and:
- Change the question to something else
- Try different AI models
- Add more questions

---

## 📖 Part 2: Agentic AI with Ollama

### What's Inside

An AI agent that can:
- List files in a folder
- Read different file types (JSON, CSV, TXT)
- Remember your conversation
- Answer questions about your files

### How to Run

```bash
cd "Agentic A.I. With Ollama"
npm install
npm start
```

### What Happens

You'll get an interactive chat where you can:
- Ask "What files do you have?"
- Request "Read Krishna Singh.txt"
- Ask questions about the file contents

### Key Concepts

- **Tools**: Functions the AI can call
- **Agentic AI**: AI that can perform actions
- **Context**: AI remembers previous messages
- **File Processing**: AI can read and analyze files

### Sample Files Included

The `Files` folder contains:
- `Krishna Singh Portfolio.json` - Portfolio data
- `Krishna Singh.txt` - Bio information
- `Values.csv` - Sample CSV data
- `Passwords.txt` - Example text file

### Try This

- Add your own files to the `Files` folder
- Ask the AI to analyze them
- Modify the tools to add new capabilities

---

## 📖 Part 3: Discord AI Bot

### What's Inside

A complete Discord bot that:
- Responds when mentioned (@bot)
- Uses the AI agent from Part 2
- Can read files and answer questions
- Splits long messages automatically
- Handles errors gracefully

### How to Set Up

#### 1. Create a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Give it a name and create
4. Go to "Bot" section
5. Click "Add Bot"
6. Copy the bot token (keep it secret!)

#### 2. Enable Intents

In the Bot settings, enable:
- ✅ Message Content Intent
- ✅ Server Members Intent

#### 3. Invite Bot to Your Server

1. Go to "OAuth2" → "URL Generator"
2. Select scopes: `bot`
3. Select permissions: 
   - Send Messages
   - Read Messages/View Channels
   - Read Message History
4. Copy the generated URL
5. Open it in browser and invite bot to your server

#### 4. Configure and Run

```bash
cd "Discord Agentic A.I. Bot"
npm install
```

Open `bot.js` and replace `YOUR_BOT_TOKEN` with your actual token:
```javascript
client.login("your-bot-token-here");
```

Or use environment variable:
```bash
export DISCORD_BOT_TOKEN="your-bot-token-here"
node bot.js
```

### How to Use

1. Start the bot: `node bot.js`
2. Go to your Discord server
3. Mention the bot: `@YourBot hello`
4. Ask questions: `@YourBot what files do you have?`
5. Request file info: `@YourBot tell me about Krishna Singh`

### Key Concepts

- **Discord.js**: Library for building Discord bots
- **Intents**: Permissions for what the bot can see
- **Message Handling**: Responding to user messages
- **Message Splitting**: Breaking long responses into chunks
- **Error Handling**: Gracefully handling problems

### Features

✅ Responds to mentions  
✅ Uses AI to answer questions  
✅ Can read and analyze files  
✅ Splits long messages (Discord has 2000 char limit)  
✅ Handles errors without crashing  
✅ Maintains conversation context  

### Try This

- Ask the bot about different files
- Request summaries or analysis
- Add more files to the `Files` folder
- Customize the bot's personality in `index.js`

---

## Technical Details

### Technologies Used

- **Node.js** - JavaScript runtime
- **Ollama** - Local AI platform
- **Discord.js** - Discord bot framework
- **fs-extra** - File system operations
- **ES Modules** - Modern JavaScript

### AI Models

- **gemma3** - Fast, good for basic tasks
- **gpt-oss:20b** - Larger, better reasoning

### Project Structure

```
├── Run Ollama Locally/          # Part 1: Basics
│   ├── index.js                 # Simple AI chat
│   └── package.json
│
├── Agentic A.I. With Ollama/    # Part 2: Tools
│   ├── index.js                 # AI agent with tools
│   ├── Files/                   # Sample data
│   └── package.json
│
└── Discord Agentic A.I. Bot/    # Part 3: Discord
    ├── bot.js                   # Discord bot logic
    ├── index.js                 # AI agent (from Part 2)
    ├── Files/                   # Sample data
    └── package.json
```

---

## 🎓 What You'll Learn

### Beginner Level (Part 1)
- How AI models work
- Running AI locally
- Basic prompting
- JavaScript async/await

### Intermediate Level (Part 2)
- Function calling
- Tool integration
- File processing
- Conversation management

### Advanced Level (Part 3)
- Discord bot development
- API integration
- Error handling
- Message formatting
- Production considerations

---

## Tips for Success

1. **Follow the order** - Each part builds on the previous one
2. **Read the code** - Everything is commented for learning
3. **Experiment** - Change things and see what happens
4. **Start small** - Get each part working before moving on
5. **Ask questions** - Use the AI itself to explain the code!

---

## Common Issues & Solutions

### Ollama not connecting
```bash
# Make sure Ollama is running
ollama serve
```

### Model not found
```bash
# Pull the required models
ollama pull gemma3
ollama pull gpt-oss:20b
```

### Discord bot not responding
- Check bot token is correct
- Verify Message Content Intent is enabled
- Make sure bot has permissions in the server
- Check bot is online (green dot in Discord)

### "Cannot send empty message" error
- This is fixed in the code with validation
- Make sure AI is returning responses
- Check Ollama is running

### Files not found
- The bot uses absolute paths now
- Files folder is created automatically
- Add your own files to test

---

## 🚀 Next Steps

After completing all three parts, you can:

1. **Customize the bot**
   - Change the personality
   - Add more tools
   - Process different file types

2. **Deploy to production**
   - Use environment variables for tokens
   - Host on a server (Railway, Heroku, etc.)
   - Add database for persistence

3. **Add more features**
   - Slash commands
   - Buttons and menus
   - Image generation
   - Voice channel support

4. **Learn more**
   - Vector databases (RAG)
   - Fine-tuning models
   - Multi-modal AI
   - Scaling and optimization

---

## Contributing

Found a bug? Have a suggestion? Want to add more examples?

Feel free to:
- Open an issue
- Submit a pull request
- Share your improvements
- Help other learners

---

## License

This project is open source and free for educational use. Learn, modify, and share!

---

## You Did It!

Congratulations on completing the AI learning journey! You now know how to:

✅ Run AI models locally  
✅ Build agentic AI systems  
✅ Create Discord bots  
✅ Integrate AI into applications  

**Keep building and experimenting!**

---

**Questions?** Open an issue or ask the AI bot you just built!
