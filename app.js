const { Client, GatewayIntentBits, Partials } = require('discord.js');
const config = require("./discord")

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [ 
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.ThreadMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent
  ]
});

client.login(config.client.token).then(() => {
  console.log(`${client.user.username} is ready`);
})