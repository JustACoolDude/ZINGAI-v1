const Discord = require('discord.js');
module.exports = {
    name: 'evego',
    aliases:['e'],
    usage:['[Optionally, use "w" to see the WonderWord version]'],
    description: 'Gives a diagram of Eve\'s language, called "Evego".\
    \nUsing "w" as an argument shows the WonderWord project\'s version, where "Q" is known and "Z" is different.',
    cooldown: 20,
	execute(message, args) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Evego')
       // .setURL('https://discord.js.org/')
     //   .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        //.setDescription('Some description here')
      //  .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setImage('https://i.imgur.com/4M4C8j3.jpg')
        .setTimestamp()
        //.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        const embed2 = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Evego (Wonderword)')
        .setImage('https://i.imgur.com/3xCeQtT.jpg')
        .setTimestamp()
    if (args.length > 0){
      if ((args[0] === 'w' || args[0] === 'W') && args.length == 1){
        message.channel.send(embed2)
        }
      else{
        message.reply("This is an invalid argument!")
      }
    }
    else{
    message.channel.send(exampleEmbed);
    }


    }
}