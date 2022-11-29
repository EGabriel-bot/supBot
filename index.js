const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
  intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
  ],
})

client.on('ready', () => {
  console.log('The bot is ready')
})

client.emit('voiceStateUpdate', answer => {
  answer.reply('someone is connected');
})

client.login(process.env.TOKEN)