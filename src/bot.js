// Imports
require('dotenv').config();

// Retrieves class 'Client' from discord
const { Client } = require('discord.js');
// New instance of 'Client' class
const client = new Client();

// Informs terminal that the bot has logged in successfully
client.on('ready', () => {

    console.log(`${client.user.tag} (${client.user.username}) has logged in!`);

});

// Login for the discord bot
client.login(process.env.DISCORDJS_BOT_TOKEN)