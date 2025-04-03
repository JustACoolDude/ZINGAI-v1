module.exports = {
    name: 'sightings',
    aliases:['s'],
    description: 'Gives a list of MVs where a character has been seen.\
    \nAlso notes if it was a major or minor appearance.\
    \nBe sure to use the names from !ch\
    \nD\'etre\'s name can be spelled without the apostrophe.\
    \nA question mark means that a character may be there, but it\'s not 100% clear.',
    usage:['[character name]'],
    cooldown: 2,
    args: true,
	execute(message, args) {
        var x = args[0].toLowerCase();
        var sight = '__Sightings for ';
        var major = '**Major Appearances:**';
        var minor = '**Minor Appearances:**';
        var length = args.length;
        var existError = 'that character does not exist!';
        var unspecific = 'please be more specific!';
    
    if (length === 1){
// Promise
        if (args[0] === 'Green' || x === 'green'){
            return message.channel.send(sight+'Green:__\n'+major+'\n- Promise (Debut)')
        }
// Heart Sea
        if (args[0] === 'E2' || x === 'e2'){
            return message.channel.send(sight+'E2:__\n'+major+'\n- Heart Sea (Debut)')
        }
        if (args[0] === '2P' || x === '2p'){
            return message.channel.send(sight+'2P:__\n'+major+'\n-Heart Sea (Debut')
        }
        if (args[0] === 'Neko' || x === 'neko'){
            return message.channel.send(sight + 'Neko__\n'+major+'\nHeart Sea (Debut)')
        }

//Heart Forecast

        if (args[0]==='Akane'|| x === 'akane'){
            return message.channel.send(sight+'Akane:__\n'+major+'\n- Heart Forecast (Debut)'+minor+'\n- Promise (Cameo)');
        }        `       `

        if (args[0] === 'Yukie' || x === 'yukie'){
            return message.channel.send(sight+'Yukie:__\n'+major+'\n- Heart Forecast (Debut)'+minor+'\n- Promise (Cameo)');
        }

        if (args[0] === 'Momo' || x === 'momo'){
            return message.channel.send(sight+'Momo:__\n'+major+'\n- Heart Forecast (Debut)'+minor+'\n- Promise (Cameo)');
        }

        if (args[0] === 'Akira' || x === 'akira'){
            return message.channel.send(sight+'Akira:__\n'+minor+'\n- Heart Forecast (Debut)'+minor+'\n- Promise (Cameo)');
        }

        if (args[0] === 'Shinichirou' || x === 'shinichirou'){
            return message.channel.send(sight+'Shinichirou:__\n'+minor+'\n Heart Forecast (Debut)'+minor+'\n- Promise (Cameo)');
        }

        if (args[0] === 'Daisuke' || args[0] === 'daisuke'){
            return message.channel.send(sight+'Daisuke:__\n'+minor+'\n Heart Forecast (Debut)');
        }


//Nonsense Literatire/Dramaturgy
        if (args[0] === 'Hitotsume' || x === 'hitotsume'){
            return message.channel.send('__Sightings for Hitotsume:__\n**Major Appearances:**\n- Literary Nonsense (Debut)\n- Dramaturgy\n- Kara no Kioku (Manga)\
            \n**Minor Appearances:**\n- Outsider (Cameo)\n- Tokyo Ghetto (?)\n- Last Dance (Cameo)\
            \n- We\'re Still Underground (Cameo)\n- Heart Forecast (Cameo)\n- Snow (Cameo)\
            \n- How to Devour Life (Cameo)\n- Promise (Cameo)');
        }

        if (args[0] === 'Bun' || x === 'bun'){
            return message.channel.send (sight+'Bun:__\n'+major+'\n- Nonsense Literature (Debut)\n'
            +minor+'\n- Promise (Cameo) (?)')
        }

        if (args[0] === 'Usa' || x === 'usa'){
            return message.channel.send(sight+'Usa:__\n'+minor+'\n- Nonsense Literature (Debut)\n- Last Dance (Cameo)\
            \n- Heart Forecast (Cameo)\n- Promise (Cameo)')
        }

        if (args[0] === 'Tamago' || x === 'tamago'){
            return message.channel.send(sight+'Tamago:__\n'+minor+'\n- Nonsense Literature (Debut)\
            \n- Last Dance (Cameo)\n- We\'re Still Underground (Cameo)\n- Heart Forecast (Cameo)\
            \n- Promise (Cameo) \n- Kara no Kioku (Manga)')
        }

        if (args[0] === 'Sebastian' || x === 'sebastian'){
            return message.channel.send(sight+'Sebastian:__\n'+minor+'\n- Nonsense Literature (Debut)\
            \n- Last Dance (Cameo)\n- Heart Forecast (Cameo)\n- Promise (Cameo)\
            \n- Kara no Kioku (Manga)')
        }

        if (args[0] === 'Saru' || x === 'saru'){
            return message.channel.send(sight+'Saru:__\n'+minor+'\n-Dramaturgy (Debut)\n- Last Dance (Cameo)\n'
            +minor+ '\n- Promise (Cameo)')
        }

        if (args[0] === 'Pylon' || x === 'pylon'){
            return message.channel.send(sight+'Pylon:__\n'+minor+'\n- Nonsense Literature (Debut)'
            +minor+'\n- Promise (Cameo)');
        }
        
        if (args[0] === 'Kurukuru' || x === 'kurukuru'){
            return message.channel.send(sight+'Kurukuru:__\n'+major+'\n- Dramaturgy (Debut)\n'+minor+'\n- Outsider (Cameo)\n- Tokyo Ghetto (Cameo)\n- Last Dance (Cameo)\n- We\'re Still Underground (Cameo)\n- Heart Forecast(Cameo)\n- How To Devour Life(Cameo)');
        }

        if (args[0] === 'Fukuro' || x === 'fukuro'){
            return message.channel.send(sight+'Fukuro:__\n'+major+'\n- Dramaturgy (Debut)\n'+minor+'\n- Last Dance (Cameo)');
        }
//How to Devour Life
        if (args[0] === 'Inochi' || x === 'inochi'){
            return message.channel.send(sight+'Inochi:__\n'+major+'\n- How to Devour Life (Debut)'+'\n- Kara no Kioku (Manga)\n'
            +minor+'\n- Promise (Cameo) (?)')
        }

        if (args[0] === 'Noppo' || x === 'noppo'){
            return message.channel.send(sight+'Noppo:__\n'+major+'\n- How to Devour Life (Debut)\n- Kara no Kioku (Manga)');
        }
        
        if (args[0] === 'Unako' || x === 'unako'){
            return message.channel.send(sight+'Unako:__\n'+minor+'\n- How to Devour Life (Debut)');
        }

        if (args[0] === 'Maruiro' || x === 'maruiro'){
            return message.channel.send(sight+'Maruiro:__\n'+minor+'\n- How to Devour Life (Debut)');
        }

        if (args[0] === 'Kuroko' || x === 'kuroko'){
            return message.channel.send(sight+'Kuroko:__\n'+minor+'\n- How to Devour Life (Debut)');
        }
        if (args[0] === 'Thazen' || x === 'thazen'){
            return message.channel.send(sight+'Thazen:__\n'+minor+'\n- How to Devour Life (Debut)');
        }
        if (args[0] === 'Oyashirazu' || x === 'oyashirazu'){
            return message.channel.send(sight+'Oyashirazu:__\n'+minor+'\n- How to Devour Life (Debut)');
        }
    // Outsider
        if (args[0] === 'Pattun' || x === 'pattun'){
            return message.channel.send(sight+'Pattun:__\n'+major+'\n- Outsider (Debut)\n'+minor+'\n- How to Devour Life (Cameo)')
        }
        if (args[0] === 'Mocchi' || x === 'mocchi'){
            return message.channel.send(sight+'Mocchi:__\n'+major+'\n- Outsider (Debut)\n'+minor+'\n- How to Devour Life (Cameo)')
        }
        if (args[0] === 'Salamander' || x === 'salamander'){
            return message.channel.send(sight+'Salamander:__\n'+major+'\n- Outsider (Debut)')
        }
        if (args[0] === 'Edogon' || x === 'edogon'){
            return message.channel.send(sight+'Edogon:__\n'+major+'\n- Outsider (Debut)\n'+minor+'\n- Last Dance (Cameo)')
        }
        if (args[0] === 'Unagi' || x === 'unagi'){
            return message.channel.send(sight+'Unagi:__\n'+major+'\n- Outsider (Debut)')
        }
    // Dark Night
        if (args[0] === 'Vans' || x === 'vans'){
            return message.channel.send(sight+'Vans:__\n'+major+'\n- Dark Night (Debut)')
        }
        if (args[0] === 'Warasshi' || x === 'warasshi'){
            return message.channel.send(sight+'Warasshi:__\n'+major+'\n- Dark Night (Debut)')
        }
    // Last Dance
        if (args[0] === 'Dorothy' || x === 'dorothy'){
            return message.channel.send(sight+'Dorothy:__\n'+minor+'\n- Last Dance (Debut)\n- We\'re Still Underground (Cameo)')
        }
        if (args[0] === 'Dancer' || x === 'dancer'){
            return message.channel.send(sight+'Dancer:__\n'+major+'\n- Last Dance (Debut)\n'+minor+'\n- Promise (Cameo)')
        }
        if (args[0] === 'Mika' || x === 'mika'){
            return message.channel.send(sight+'Mika:__\n'+major+'\n- Last Dance (Debut)\n'+minor+'\n- Promise (Cameo)')
        }
        if (args[0] === 'Sensei' || x === 'sensei'){
            return message.channel.send(sight+'Sensei:__\n'+minor+'\n- Last Dance (Debut)')
        }
        if (args[0] === 'Pierrot' || x === 'pierrot'){
            return message.channel.send(sight+'Pierrot:__\n'+minor+'\n- Last Dance (Debut)')
        }



       
    
    // Raison d'Etre
        if (args[0] === 'Raison' || x === 'raison'){
            return message.channel.send(sight+'Raison:__\n'+major+'\n- raison d\'etre (Debut)\n'+minor+'\n- Promise (Cameo)')
        }
        if (args[0] === 'D\'etre' || x === 'd\'etre' || args[0] === 'Detre' || x === 'detre'){
            return message.channel.send(sight+'D\'etre:__\n'+major+'\n- raison d\'etre (Debut)')
        }
    
    //Tokyo Ghetto
        if (args[0] === 'Janitor' || x === 'janitor'){
            return message.channel.send(sight+'Janitor:__\n'+major+'\n- Tokyo Ghetto (Debut)\n'
            +minor+'\n- We\'re Still Underground (Cameo)\n- How to Devour Life (Cameo)\n- Janitor (Cameo) (?)')
        }
   
    //Demon Dance Tokyo
        if (args[0] === 'Mickey' || x === 'mickey'){
            return message.channel.send(sight+'Mickey:__\n'+major+'\n- Demon Dance Tokyo (Debut)\n'+minor+'\n- Promise (Cameo)');
        }

        if (args[0] === 'Shiro' || x === 'shiro'){
            return message.channel.send(sight+'Shiro:__\n'+major+'\n- Demon Dance Tokyo (Debut)');
        }
    // As You Like It and Baumkuchen End
        if (args[0] === 'Handman' || x === 'handman'){
            return message.channel.send(sight+'Handman:__\n'+major+'\n- As You Like It (Debut)\n'
            +minor+'\n- Baumkuchen End (Cameo)\n- How To Devour Life (Cameo)\n- Promise(Cameo)')
        }
    // Anoko Secret
        if (args[0] === 'Kumataro' || x === 'kumataro'){
            return message.channel.send(sight+'Kumataro:__\n'+major+'- The Secret About That Girl (Debut)'+minor+'\n-Heart Forecast (Cameo)')
        }
    //Kara no Kioku
        if (args[0] === 'Q-ta' || x === 'q-ta'){
            return message.channel.send(sight+'Q-ta:__\n'+major+'- Kara no Kioku (Debut) (Manga)')
        }
    
     return message.reply(existError);
    
}

       
// two args
    if (length === 2){
        if ((args[0] === 'The' && args[1] ==='Boy') || (args[0] === 'the' && args[1]==='boy')){
            return message.reply(unspecific);
        }
        if ((args[0] === 'The' && args[1] === 'Girl') || (args[0] === 'the' && args[1] === 'girl')){
            return message.reply(unspecific);
        }
        if ((args[0] === 'Rei' && args[1] === 'Tsukumo') || (args[0] === 'rei' && args[1] === 'tsukumo')){
            return message.channel.send(sight+'Rei Tsukumo:__\n'+major+'\n- Kara no Kioku (Debut) (Manga)');
        }

        if ((args[0] === 'The' && args[1] === 'Cat') || (args[0] === 'the' && args[1] === 'cat')){
            return message.channel.send(sight+'The Cat:__\n'+major+'\n- Ambivalent (Debut)\n'+minor+'\n- Heart Forecast (cameo)');
        }

        if ((args[0] === 'The' && args[1] === 'Fairy') || (args[0] === 'the' && args[1] === 'fairy')){
            return message.channel.send(sight+'The Fairy:__\n'+major+'\n- Snow');
        }

        if ((args[0] === 'Monitor' && args[1] === 'Girl') || (args[0] === 'monitor' && args[1] === 'girl')){
            return message.channel.send(sight+'Monitor Girl:__\n'+major+'\n- How To Devour Life (Idea Board)');
        }

        if ((args[0] === 'Yoh' && args[1] === 'Shirono') || (args[0] === 'yoh' && args[1] === 'shirono')){
            return message.channel.send(sight+'Yoh Shirono:__\n'+major+'\n- The Secret About That Girl (Debut)\n'
            +minor+'\n- Promise (Cameo)');
        }

        if ((args[0] === 'Ibex' && args[1] === 'Rabbit') || (args[0] === 'ibex' && args[1] === 'rabbit')){
            return message.channel.send(sight+'Ibex Rabbit:__\n'
            +minor+'\n- Outsider (Debut)\n- Last Dance (Cameo)\n- We\'re Still Underground\n- Heart Forecast (Cameo)\
            \n- Promise (Cameo)');
        }

        if ((args[0] === 'Yukito' && args[1] === 'Mutsuki') || (args[0] === 'yukito' && args[1] === 'mutsuki')){
            return message.channel.send(sight+'Yukito Mutsuki:__\n'+major+'\n- Kara no Kioku (Manga)')
        }


        return message.reply(existError);
    }
// three args

    if (length === 3){
        if ((args[0] === 'The' && args[1]==='Boy') || (args[0] === 'the' && args[1]==='boy')){
            if (args[2] === '(BE)' || args[2]==='(be)'){
                return message.channel.send(sight+'The Boy (Baumkuchen End):__\n'+major+'\n- Baumkuchen End (Debut)');
            }
            if (args[2] === '(DDT)' || args[2] ==='(ddt)'){
                return message.channel.send(sight+'The Boy (Demon Dance Tokyo):__\n'+major+'\n- Demon Dance Tokyo (Debut)');
            }
            if (args[2] === '(TG)' || args[2] === '(tg)'){
                return message.channel.send(sight+'The Boy (Tokyo Ghetto):__\n'+major+'\n- Tokyo Ghetto (Debut)\n'
                +minor+'\n- How To Devour Life (Cameo)\n- Promise (Cameo)');
            }
            if (args[2] === '(S)' || args[2] === '(s)'){
                return message.channel.send(sight+'The Boy (Sister):__\n'+major+'\n- Sister (Debut)')
            }
            if (args[2] === '(A)' || args[2] === '(a)'){
                return message.channel.send(sight+'The Boy (Ambivalent):__\n'+major+'\n- Ambivalent (Debut)\n'+
                minor+'- Promise (Cameo)')
            }
            if (args[2] === '(WSU)' || args[2] === '(WSU)'){
                return message.channel.send(sight+'The Boy (We\'re Still Underground):__\n'+major+'\n- We\'re Still Underground (Debut)')
            }
            if (args[2] === '(Snow)' || args[2] === '(snow)'){
                return message.channel.send(sight+'The Boy (Snow):__\n'+major+'\n- Snow\n' + minor + '\n- Promise (Cameo)')
            }
            if (args[2] === '(ASYL)' || args[2] === '(asyl)'){
                return message.channel.send(sight+'The Boy (As You Like It):__\n'+major+'\n- As You Like IT (Debut)\n'
                +minor+'\n- Promise (Cameo)')
            }
            return message.reply(existError);
        }

        if ((args[0] === 'The' && args[1] === 'Girl') || (args[0] ==='the' && args[1] === 'girl')){
            if (args[2] === '(BE)' || args[2] === '(be)'){
                return message.channel.send(sight+'The Girl (Baumkuchen End):__\n'+major+'\n- Baumkuchen End (Debut)');
            }
            if (args[2] === '(TG)' || args[2] === '(tg)'){
                return message.channel.send(sight+'The Girl (Tokyo Ghetto):__\n'+major+'\n- Toyko Ghetto (Debut)\n'
                +minor+'\n- Promise (Cameo)');
            }
            if (args[2] === '(S)' || args[2] === '(s)'){
                return message.channel.send(sight+'The Girl (Sister):__\n'+major+'\n- Sister (Debut)');
            }
            if (args[2] === '(WSU)' || args[2] === '(WSU)'){
                return message.channel.send(sight+'The Girl (We\'re Still Underground):__\n'+major+'\n- We\'re Still Underground (Debut)\n'
                +minor+'\n- Promise (Cameo)')
            }
            if (args[2] === '(ASYL)' || args[2] === '(asyl)'){
                return message.channel.send(sight+'The Girl (As You Like It):__\n'+major+'\n- As You Like It (Debut)\n'
                +minor+'\n- Promise (Cameo)')
            }
            if (args[2] === '(AS)' || args[2] === '(as)'){
                return message.channel.send(sight+'The Secret About That Girl (Anoko Secret):__\n'+major+'\n- Anoko Secret (Debut)\n'
                +minor+'\n- Promise (Cameo)')
            }
        }

        if ((args[0] === 'The' && args[1] === 'Headless' && args[2] === 'Dragon') || (args[0] === 'the' && args[1] === 'headless' && args[2] === 'dragon')){
                return message.channel.send(sight+'The Headless Dragon:__\n'+major+'\n- How To Devour Life (Debut)')
        }
        
        return message.reply(existError);

        
        
    }


	},
};