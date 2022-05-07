const { MessageEmbed, MessageAttachment } = require('discord.js');
const { readdirSync, readFileSync } = require('fs');
const axios = require('axios')

module.exports = {
    name: 'randomvtuber',
    description: 'Random Vtuber Image',
    run: async (client, interaction) => {
        axios.get('https://vtuber-api-production.up.railway.app/randomvtuber/?apikey=DjisTNQfWctm').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random vtuber')
        interaction.reply({ embeds: [embed] })
      })
    },
};
