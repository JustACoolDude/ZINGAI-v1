const config = require('../config.json');
const env = require('dotenv');
module.exports = {
	name: 'canonicity',
    description: 'Get a list of reasons why a video is/isn\'t/maybe canon.\n Use the abbreviations from !mvl',
    aliases: ['ca'],
    usage:['[abbreviation of MV]'],
    cooldown: 10,
    args: true,
	execute(message, args) {
        var reason = '**__Reasons why ';
        var canon = ' Is Canon__**';
        var notCanon = ' Is Not Canon__**';
        var maybeCanon = ' Could Be Canon__**';
        var x = config.abbs_array;
        var detect = x.includes(args[0]);
        
        var y = [];
        env.config();
        for (let i = 0;i < config.abbs_array.length;i++){
           y.push(config.abbs_array[i].toLowerCase());
        }

        var detect2 = y.includes(args[0]);

        //under construction
        if (message.guild.id != process.env.serverID) return message.reply('this command is currently under construction. Please try again later.');

        if (!detect && !detect2) {return message.reply('that is not a valid MV name!')}

        if (args[0] === ('NL') || args[0] === ('nl')){
            return message.channel.send(reason+'Nonsense Literature'+canon)
        }

        if (args[0] === ('S') || args[0] === ('s')){
            return message.channel.send(intro+' Sister__**\n- The Boy (S)\n- The Girl (S)')
        }

        if (args[0] ===('HF') || args[0] === ('hf')){
            return message.channel.send(intro+' Heart Forecast__**\n- Akane\n- Yukie\n- Momo\n- Hitotsume');
        }

    



      

	},
};