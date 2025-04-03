const config = require('../config.json');
module.exports = {
	name: 'mvcharacters',
    description: 'Get a list of major/debut characters (that have names) from any Music Video.\nUse the abbreviations from !mvl\nSome characters have cameo appearances in the MVs, which are not listed here. For more details, use !s [character name]',
    aliases: ['mvc'],
    usage:['[abbreviation of MV]'],
    args: true,
	execute(message, args) {
        var intro = '**__List of Characters in ';
        var x = config.abbs_array;
        var detect = x.includes(args[0]);
        
        
        var y = [];
        
        for (let i = 0;i < config.abbs_array.length;i++){
           y.push(config.abbs_array[i].toLowerCase());
        }

        var detect2 = y.includes(args[0]);

        var unknown = "No names are known."


        if (!detect && !detect2) {return message.reply('that is not a valid MV name!')}

        if (args[0] === ('NL') || args[0] === ('nl')){
            return message.channel.send(intro+'Nonsense Literature:__**\
            \n- Bun\n- Hitotsume\n- Pylon\n- Sebastian\n- Usa\n- Tamago')
        }

        if (args[0] === ('S') || args[0] === ('s')){
            return message.channel.send(intro+'Sister:__**\
            \n- The Boy (S)\n- The Girl (S)')
        }

        if (args[0] === ('TG') || args[0] === ('tg')){
            return message.channel.send(intro+'Tokyo Ghetto:__**\
            \n- The Boy (TG)\n- The Girl (TG)\n- Janitor\n- Hitotsume(?)\n- Kumataro\n- Kurukuru');
        }

        if (args[0] ===('HF') || args[0] === ('hf')){
            return message.channel.send(intro+'Heart Forecast:__**\
            \n- Akane\n- Yukie\n- Momo\n- Daisuke \n- Shinichirou\n- Akira\n- Hitotsume');
        }

        if (args[0] === ('ASYL') || args[0] === ('asyl')){
            return message.channel.send(intro+'As You Like It:__**\
            \n- The Boy (ASYL)\n- The Girl (ASYL)\n- Handman');
        }

        if (args[0] === ('HTDL') || args[0] === ('htdl')){
            return message.channel.send(intro+'How To Devour Life:__**\
            \n- Inochi\n- Noppo\n- Maruiro\n- Kuroko\n- Oyashirazu\n- The Headless Dragon\n- Unako\n- Oni\n- Thazen');
        }

        if (args[0] === ('BE') || args[0] === ('be')){
            return message.channel.send(intro+'Baumkuchen End"__**\
            \n- The Boy (BE)\n- The Girl (BE)');
        }

        if (args[0] === ('DN') || args[0] === ('dn')){
            return message.channel.send(intro+'Dark Night (Yamiyo):__**\n- Vans\n- Warasshi');
        }
        
        if (args[0] === ('O') || args[0] === ('o')){
            return message.channel.send(intro+'Outsider:__**\
            \n- Pattun\n- Mocchi\n- Edogon\n- Ibex Rabbit\n- Unagi\n- Salamander');
        }

        if (args[0] === ('LD') || args[0] === ('ld')){
            return message.channel.send(intro+'Last Dance:__**\
            \n- Dancer\n- Mika\n- Sensei\n- Dorothy\n- Pierrot');
        }

        if (args[0] === ('RD') || args[0] === ('rd')){
            return message.channel.send(intro+'raison d\'etre:__**\
            \n- Raison\n- D\'etre');
        }

        if (args[0] === ('D') || args[0] === ('d')){
            return message.channel.send(intro+'Dramaturgy:__**\n- Hitotsume\n- Kurukuru\n- Fukuro\n- Saru');
        }

        if (args[0] === ('DDT') || args[0] === ('ddt')){
            return message.channel.send(intro+'Demon Dance Tokyo:__**\n- The Boy (DDT)\n- Shiro\n- Mickey');
        }

        if (args[0] === ('AS') || args[0] === ('as')){
            return message.channel.send(intro+'The Secret About That Girl (Anoko Secret):__**\
            \n- Yoh Shirono\n- Kumataro\n- The Girl (AS)')
        }

        if (args[0] === ('A') || args[0] === ('a')){
            return message.channel.send(intro+'Ambivalent:__**\n- The Boy (A)\n- The Cat');
        }

        if (args[0] === ('WSU') || args[0] === ('wsu')){
            return message.channel.send(intro+'We\'re Still Underground__**\
            \n- The Boy (WSU)\n- The Girl (WSU)')
        }

        if (args[0] === ('TWTY') || args[0] === ('twty')){
            return message.channel.send(intro+'This World To You__**\n- The Boy (WSU)\n- The Girl (WSU)')
        }
        
        if (args[0] === ('LEO') || args[0] === ('leo')){
            return message.channel.send(intro+'LEO__**\n'+ unknown)
        }
        
        if (args[0] === ('Snow') || args[0] === ('snow')){
            return message.channel.send(intro+'Snow__**\n- The Boy (Snow)\n- The Fairy')
        }

        if (args[0] === ('P') || args[0] === ('p')){
            return message.channel.send(intro+'Promise (Yakusoku)__**\
            \n- Green\n- Pink')
        }

        if (args[0] === ('HS') || args[0] === ('hs')){
            return message.channel.send(intro+'Heart Sea (Shinkai)__**\
            \n- E2\n- 2P\n- Neko')
        }



      

	},
};