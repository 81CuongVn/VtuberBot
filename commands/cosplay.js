const { MessageEmbed, MessageAttachment } = require('discord.js');
const { readdirSync, readFileSync } = require('fs');
const axios = require('axios')

module.exports = {
    name: 'cosplay',
    description: 'Random Cosplay Image',
    run: async (client, interaction) => {
        axios.get('https://vtuber-api-production.up.railway.app/cosplay/?apikey=DjisTNQfWctm').then((res) => {
        const embed = new MessageEmbed()
        .setImage(res.data.url)
        .setColor('BLUE')
        .setTimestamp()
        .setFooter('Random Cosplay')
        interaction.reply({ embeds: [embed] })
      })
    },
};
