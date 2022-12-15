

const Discord = require('discord.js');

const perfix ='!';

const client = new Discord.Client({
    allowedMentions: {
        parse: [`users`, `roles`],
        repliedUser: true,

    },
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildPresences",
        "GuildMembers",
        "GuildMessageReactions",
    ],
        

});

client.on("ready", () => {
    console.log("Bot Is Online!")
} )

client.login("Your TOKEN here")