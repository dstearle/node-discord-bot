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
client.on('message', (message) => {

    console.log(`${message.content}`);

});

// Login for the discord bot
client.login(process.env.DISCORDJS_BOT_TOKEN)