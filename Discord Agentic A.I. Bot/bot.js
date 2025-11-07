import { Client, GatewayIntentBits } from 'discord.js';
import { chatWithAI } from './fileManager.js';

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// When the client is ready, run this code
client.once('clientReady', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Listen for messages
client.on('messageCreate', async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;
    
    // Check if the bot is mentioned in the message
    if (message.mentions.has(client.user)) {
        try {
            // Extract the user's message (remove the mention)
            const userMessage = message.content.replace(/<@!?\d+>/g, '').trim();
            
            // If no message after mention, use a default greeting
            const queryMessage = userMessage || 'Hello';
            
            // Get AI response
            const aiResponse = await chatWithAI(queryMessage);
            
            // Reply with AI response
            message.reply(aiResponse);
        } catch (error) {
            console.error('Error processing message:', error);
            message.reply('Sorry, I encountered an error while processing your request.');
        }
    }
});

// Login to Discord with your bot token
client.login("BOT_KEY_HERE");