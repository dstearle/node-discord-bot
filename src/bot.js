// Imports
require('dotenv').config();

// Retrieves class 'Client' from discord
const { Client } = require('discord.js');
// New instance of 'Client' class
const client = new Client();

const PREFIX = "$";

// Informs terminal that the bot has logged in successfully (ready event)
client.on('ready', () => {

    console.log(`${client.user.tag} (${client.user.username}) has logged in!`);

});

// Prints server messages to the terminal (message event)
// client.on('message', (message) => {

//     console.log(`${message.content}`);

// });


// Example One

// Replies to friendly users (message event)
// client.on('message', (message) => {

//     // Prevents the bot from replying to itself
//     if(message.author.bot === true) return;

//     // Prints server messages with user tag to the terminal
//     console.log(`[${message.author.tag}]: ${message.content}`);

//     // If anyone on the server says the following greetings have the bot say hi back
//     if(message.content === 'hello' || 'hi' || 'bonjour' || 'guttentag' || 'hola') {

//         message.reply('Howdy there pardner :) !');

//     }

// });

// Example Two

// A list of commands to be executed on the server via a user (message event)
// client.on('message', (message) => {

//     // Prevents the bot from replying to itself
//     if(message.author.bot === true) return;

//     // If message starts with a command prefix (in this case "$") commit the command
//     if(message.content.startsWith(PREFIX)) {

//         // Allows for multiple commands separated by white space
//         const [CMD_NAME, ...args] = message.content
//             .trim()
//             .substring(PREFIX.length)
//             .split(/\s+/);

//         // The $sneed command
//         if(CMD_NAME === 'sneed') {

//             message.channel.send('SNEEDS FEED & SEED');

//         }

//         // The $chuck command
//         else if(CMD_NAME === 'chuck') {

//             message.channel.send('CHUCKS FUCK & SUCK');

//         }

//     }

// });

// Example Three

// A kick user command (message event)
client.on('message', async (message) => {

    // Prevents the bot from replying to itself
    if(message.author.bot === true) return;

    // If message starts with a command prefix (in this case "$") commit the command
    if(message.content.startsWith(PREFIX)) {

        // Allows for multiple commands separated by white space
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);

        // The $formerly command
        if(CMD_NAME === 'formerly') {

            // Checks to see if user has permission to kick members
            if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Looks like you dont have that BDE fam!');

            // If user does not provide args to the command inform error
            if(args.length === 0) return message.reply('Please provide an user ID!');

            // The ID of the member to be formerly'd
            const member = message.guild.members.cache.get(args[0]);

            // If member is part of group kick them
            if(member) {

                member.kick()
                .then((member) => message.channel.send(`formerly ${member}.`))
                .catch((err) => message.channel.send("A BLOO BLOO! No permissions for you :'( !"));

            }

            // Inform user that said user is not in the server
            else {

                message.channel.send('That member was not found!');

            }

        }

        // Checks to see if user has ability to ban others
        else if(CMD_NAME === 'b&') {

            // Checks to see if user has permission to kick members
            if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Looks like you dont have that BDE fam!');

            // If user does not provide args to the command inform error
            if(args.length === 0) return message.reply('Please provide an user ID!');

            // Bans the user from the server
            try {

                const user = await message.guild.members.ban(args[0]);
                message.channel.send('User was B& successfully!');

            }

            // If an error occurs give report
            catch(err) {

                console.log(err);
                message.channel.send('That member was not found!');

            }
                
        }

    }

});

// Login for the discord bot
client.login(process.env.DISCORDJS_BOT_TOKEN)