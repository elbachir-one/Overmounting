require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) =>{
    console.log('I am online and full of errors, sincerly', `${c.user.username}`);
});

client.on('messageCreate', async (message) => {
    console.log(message.author.username + ": " + message.content);
    if (message.author.bot) {
        return;
    }

    if (message.content == "hello") {
        message.reply(":wave:")
    }
   
});

client.login(process.env.token);