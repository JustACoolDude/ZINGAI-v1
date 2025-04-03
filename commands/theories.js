const config = require('../config.json');
module.exports = {
	name: 'theories',
    description: 'Get a list of Discord/Reddit theories for any Music Video.\n Use the abbreviations from !mvl, or for general theories, use "general" as an argument.\nIf you have a theory that you\' like to have listed here, nominate it using !tv.\nUse !help tv for more info.',
    aliases: ['t'],
    usage:['[abbreviation of MV, or "general"]'],
    args: true,
	execute(message, args) {
       
        var intro = '**__Theories for:';
        var x = config.abbs_array;
        var detect = x.includes(args[0]);
        var none = 'There are currently no theories on this MV available for listing.';
        
        var y = [];
        
        for (let i = 0;i < config.abbs_array.length;i++){
           y.push(config.abbs_array[i].toLowerCase());
        }

        var detect2 = y.includes(args[0]);

        if (args[0] === ('NL') || args[0] === ('nl')){
            return message.channel.send(intro+'Nonsense Literature:__**\n'+none)
        }

        if (args[0] === ('S') || args[0] === ('s')){
            return message.channel.send(intro+'Sister:__**\n'+none)
        }

        if (args[0] === ('TG') || args[0] === ('tg')){
            return message.channel.send(intro+'Tokyo Ghetto:__**\n'+none);
        }

        if (args[0] ===('HF') || args[0] === ('hf')){
            return message.channel.send(intro+'Heart Forecast:__**\n'+none);
        }

        if (args[0] === ('ASYL') || args[0] === ('asyl')){
            return message.channel.send(intro+'As You Like It:__**\n'+none);
        }

        if (args[0] === ('HTDL') || args[0] === ('htdl')){
            return message.channel.send(intro+'How To Devour Life:__\n**'+none);
        }

        if (args[0] === ('BE') || args[0] === ('be')){
            return message.channel.send(intro+'Baumkuchen End"__\n**'+none);
        }

        if (args[0] === ('DN') || args[0] === ('dn')){
            return message.channel.send(intro+'Dark Night (Yamiyo):__\n**'+none);
        }
        
        if (args[0] === ('O') || args[0] === ('o')){
            return message.channel.send(intro+'Outsider:__\n**'+none);
        }

        if (args[0] === ('LD') || args[0] === ('ld')){
            return message.channel.send(intro+'Last Dance:__\n**'+none);
        }

        if (args[0] === ('RD') || args[0] === ('rd')){
            return message.channel.send(intro+'raison d\'etre:__\n**'+none);
        }

        if (args[0] === ('D') || args[0] === ('d')){
            return message.channel.send(intro+'Dramaturgy:__**\n'+none);
        }

        if (args[0] === ('DDT') || args[0] === ('ddt')){
            return message.channel.send(intro+'Demon Dance Tokyo:__**\n'+none);
        }

        if (args[0] === ('AS') || args[0] === ('as')){
            return message.channel.send(intro+'The Secret About That Girl (Anoko Secret):__**\n'+none)
        }

        if (args[0] === ('A') || args[0] === ('a')){
            return message.channel.send(intro+'Ambivalent:__**\n'+none);
        }

        if (args[0] === ('WSU') || args[0] === ('wsu')){
            return message.channel.send(intro+'We\'re Still Underground__**\n'+none)
        }
        
        if (args[0] === ('TWTY') || args[0] === ('twty')){
            return message.channel.send(intro+'This World To You__**\n'+none)
        }
        
        if (args[0] === ('LEO') || args[0] === ('leo')){
            return message.channel.send(intro+'LEO__**\n'+none)
        }
        
        if (args[0] === ('Snow') || args[0] === ('snow')){
            return message.channel.send(intro+'Snow__**\n'+none)
        }      

	},
};