// Imports
require('dotenv').config();

// Retrieves class 'Client' from discord
const { Client } = require('discord.js');
// New instance of 'Client' class
const client = new Client();

// Login for the discord bot
client.login(process.env.DISCORDJS_BOT_TOKEN)