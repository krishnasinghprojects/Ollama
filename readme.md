# 🤖 Generative AI Learning Journey

A comprehensive, beginner-friendly guide to understanding and implementing Generative AI using Ollama. This repository provides step-by-step tutorials and practical examples to help you master AI development from basic concepts to advanced agentic systems.

## 🎯 What You'll Learn

- **Fundamentals**: How to set up and run AI models locally
- **Basic Interactions**: Simple chat and question-answering systems
- **Agentic AI**: Building AI agents that can interact with files and perform tasks
- **Tool Integration**: Creating AI systems that can use external tools and functions
- **Real-world Applications**: Practical examples with actual data and use cases

## 📚 Learning Path

### 1. **Run Ollama Locally** 
*Start here if you're new to AI*

Learn the fundamentals of running AI models on your local machine using Ollama. This section covers:

- Setting up Ollama on your system
- Installing and managing AI models
- Basic chat interactions with AI
- Understanding prompts and responses

**What's included:**
- Simple Node.js setup with Ollama SDK
- Basic chat example using Gemma3 model
- Clear, commented code for beginners

### 2. **Agentic AI with Ollama**
*Advanced AI that can perform actions*

Build intelligent agents that can interact with your files and perform complex tasks. This section covers:

- Creating AI agents with tool capabilities
- File management and data processing
- Conversation history and context management
- Function calling and tool integration

**What's included:**
- Advanced file manager AI agent
- Tool integration system
- Sample data files (JSON, CSV, TXT)
- Interactive chat interface

## 🚀 Quick Start

### Prerequisites

1. **Install Ollama**: Download from [ollama.ai](https://ollama.ai)
2. **Install Node.js**: Version 16 or higher
3. **Pull AI Models**: 
   ```bash
   ollama pull gemma3
   ollama pull gpt-oss:20b
   ```

### Getting Started

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Start with Basic AI (Recommended for beginners)**
   ```bash
   cd "Run Ollama Locally"
   npm install
   node index.js
   ```

3. **Try Advanced Agentic AI**
   ```bash
   cd "Agentic A.I. With Ollama"
   npm install
   npm start
   ```

## 📖 Detailed Guides

### Basic AI Setup (`Run Ollama Locally`)

This folder contains your first AI application. The code demonstrates:

- **Connection Setup**: How to connect to Ollama running locally
- **Simple Prompting**: Sending questions to AI and getting responses
- **Model Selection**: Using different AI models for different tasks

**Key Learning Points:**
- Understanding AI model hosting
- Basic prompt engineering
- Handling AI responses in JavaScript

### Agentic AI (`Agentic A.I. With Ollama`)

This advanced example shows how to build AI agents that can:

- **Read Files**: Access and process different file types (JSON, CSV, TXT)
- **Use Tools**: Execute functions based on user requests
- **Maintain Context**: Remember conversation history
- **Interactive Chat**: Provide a continuous chat experience

**Key Learning Points:**
- Function calling and tool integration
- File system interactions
- Conversation management
- Advanced prompt engineering

**Sample Data Included:**
- Personal portfolio information (JSON format)
- Text descriptions and bios
- CSV data for processing
- Password management examples

## 🛠️ Technical Stack

- **Runtime**: Node.js with ES modules
- **AI Platform**: Ollama (local AI model hosting)
- **Models Used**: 
  - Gemma3 (basic interactions)
  - GPT-OSS:20b (advanced reasoning)
- **Dependencies**:
  - `ollama` - Official Ollama SDK
  - `fs-extra` - Enhanced file system operations
  - `prompt-sync` - Terminal input handling

## 🎓 Learning Outcomes

By completing this guide, you'll understand:

1. **AI Fundamentals**
   - How AI models work locally
   - Prompt engineering basics
   - Model selection criteria

2. **Practical Implementation**
   - Setting up AI development environment
   - Integrating AI into applications
   - Handling AI responses and errors

3. **Advanced Concepts**
   - Building agentic AI systems
   - Tool integration and function calling
   - Context management and conversation flow

4. **Real-world Applications**
   - File processing with AI
   - Data analysis and extraction
   - Interactive AI assistants

## 🔮 What's Coming Next

This repository is designed to grow with additional learning modules:

- **Vector Databases & RAG**: Learn retrieval-augmented generation
- **Fine-tuning Models**: Customize AI for specific tasks
- **Multi-modal AI**: Working with images, audio, and text
- **AI Web Applications**: Building full-stack AI apps
- **Production Deployment**: Scaling AI applications

## 💡 Tips for Success

1. **Start Simple**: Begin with the basic Ollama setup before moving to advanced topics
2. **Experiment**: Modify the code and try different prompts
3. **Read Comments**: All code is thoroughly commented for learning
4. **Practice**: Try building your own variations of the examples
5. **Ask Questions**: Use the AI agents to learn about the code itself!

## 🤝 Contributing

This is a learning resource that grows with the community. Feel free to:
- Suggest improvements to explanations
- Add more example use cases
- Share your own AI experiments
- Report issues or unclear instructions

## 📄 License

This project is open source and available for educational purposes. Feel free to use, modify, and share for learning.

---

**Ready to start your AI journey?** Begin with the `Run Ollama Locally` folder and work your way through each example. Remember, the best way to learn AI is by building with it! 🚀