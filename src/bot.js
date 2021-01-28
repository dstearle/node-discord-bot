// Imports
require('dotenv').config();

// Retrieves class 'Client' from discord
const { Client } = require('discord.js');
// New instance of 'Client' class
const client = new Client();

// Informs terminal that the bot has logged in successfully (ready event)
client.on('ready', () => {

    console.log(`${client.user.tag} (${client.user.username}) has logged in!`);

});

// Prints server messages to the terminal (message event)
// client.on('message', (message) => {

//     console.log(`${message.content}`);

// });

// Replies to friendly users (message event)
client.on('message', (message) => {

    // Prevents the bot from replying to itself
    if(message.author.bot === true) return;

    // Prints server messages with user tag to the terminal
    console.log(`[${message.author.tag}]: ${message.content}`);

    // If anyone on the server says the following greetings have the bot say hi back
    if(message.content === 'hello' || 'hi' || 'bonjour' || 'guttentag' || 'hola') {

        message.reply('Hello there :) !');

    }

});

// Login for the discord bot
client.login(process.env.DISCORDJS_BOT_TOKEN)