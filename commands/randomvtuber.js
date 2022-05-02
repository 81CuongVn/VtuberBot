const { MessageEmbed, MessageAttachment } = require('discord.js');
const { readdirSync, readFileSync } = require('fs');
module.exports = {
    name: 'randomvtuber',
    description: 'Random Vtuber Image',
    run: async (client, interaction) => {
        const folder = readdirSync("../image/random-vtuber");
        const randomFile = folder[Math.floor(Math.random() * folder.length)];
        const file = readFileSync(`.../image/random-vtuber/${randomFile}`);
        const ext = randomFile.slice(-3);
        const attachment = new MessageAttachment(file, `vtuber.${ext}`);
        const embed = new MessageEmbed()
            .attachFiles(attachment)
            .setImage(`attachment://vtuber.${ext}`)
            .setFooter('Random Vtuber');
        interaction.reply(embed);
    },
};