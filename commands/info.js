module.exports = {
	name: 'info',
	description: 'Get info on a character or Music Videos (MVs), such as secrets written in Evego.\nFor character names, use the names from commands such as !mvc.\nFor MV names, use the abbreviations from !mvl.\n This command is still mostly under construction. Please pardon any dust.',
    args: true,
    aliases:['i'],
    usage: ['[Name of Character/MV]'],
    execute(message, args) {
    var length = args.length;
    var existError = 'you have entered invalid arguments!';
    var intro = '**__Information for '
    var noInfo = 'There is currently no info to be shown. Please try again later.'
    
    
        if (length == 1){
            //MVs
            if (args[0] === ('NL') || args[0] === ('nl')){
                return message.channel.send(intro+'Nonsense Literature:__**\nEve\'s second Music Video.')
            }
    
            if (args[0] === ('S') || args[0] === ('s')){
                return message.channel.send(intro+'Sister:__**\nEve\'s sixth music video.')
            }
    
            if (args[0] === ('TG') || args[0] === ('tg')){
                return message.channel.send(intro+'Tokyo Ghetto:__**\neve\'s eigth music video.');
            }
    
            if (args[0] ===('HF') || args[0] === ('hf')){
                return message.channel.send(intro+'Heart Forecast:__**\nEve\'s fifteenth music video.');
            }
    
            if (args[0] === ('ASYL') || args[0] === ('asyl')){
                return message.channel.send(intro+'As You Like It:__**\nEve\'s fifth music video');
            }
    
            if (args[0] === ('HTDL') || args[0] === ('htdl')){
                return message.channel.send(intro+'How To Devour Life:__**\nEve\'s eighteenth music video.\n- Decoding HTDL, by u/TheLastScholar: <https://www.reddit.com/goit0t>');
            }
    
            if (args[0] === ('BE') || args[0] === ('be')){
                return message.channel.send(intro+'Baumkuchen End"__**\nEve\'s thirteenth music video.');
            }
    
            if (args[0] === ('DN') || args[0] === ('dn')){
                return message.channel.send(intro+'Dark Night (Yamiyo):__**\nEve\'s tweflth music video.');
            }
            
            if (args[0] === ('O') || args[0] === ('o')){
                return message.channel.send(intro+'Outsider:__**\nEve\'s seventh music video.');
            }
    
            if (args[0] === ('LD') || args[0] === ('ld')){
                return message.channel.send(intro+'Last Dance:__**\nEve\'s ninth music video.');
            }
    
            if (args[0] === ('RD') || args[0] === ('rd')){
                return message.channel.send(intro+'raison d\'etre:__**\nEve\'s fourteenth music video. Eve talks with the creators of the MV: https://twitter.com/harapecoEN/status/1262511380625645568?s=20');
            }
    
            if (args[0] === ('D') || args[0] === ('d')){
                return message.channel.send(intro+'Dramaturgy:__**\nEve\'s fourth music video.');
            }
    
            if (args[0] === ('DDT') || args[0] === ('ddt')){
                return message.channel.send(intro+'Demon Dance Tokyo:__**\nEve\'s first Music Video.');
            }
    
            if (args[0] === ('AS') || args[0] === ('as')){
                return message.channel.send(intro+'The Secret About That Girl (Anoko Secret):__**\nEve\'s third music video.')
            }
    
            if (args[0] === ('A') || args[0] === ('a')){
                return message.channel.send(intro+'Ambivalent:__**\nEve\'s eigth music video.');
            }
    
            if (args[0] === ('WSU') || args[0] === ('wsu')){
                return message.channel.send(intro+'We\'re Still Underground__**\nEve\'s tenth music video.')
            }
            
            if (args[0] === ('TWTY') || args[0] === ('twty')){
                return message.channel.send(intro+'This World To You__**\nEve\'s eleventh music video.')
            }
            
            if (args[0] === ('LEO') || args[0] === ('leo')){
                return message.channel.send(intro+'LEO__**\nEve\'s sixteenth music video.')
            }
            
            if (args[0] === ('Snow') || args[0] === ('snow')){
                return message.channel.send(intro+'Snow__**\nEve\'s seventeenth music video.')
            }
            

            
            
            //Heart Forecast
            
                    if (args[0]==='Akane'||  args[0] === 'akane'){
                        return message.channel.send(intro+'Akane:__**\n'+noInfo);
                    }        `       `
            
                    if (args[0] === 'Yukie' ||  args[0] === 'yukie'){
                        return message.channel.send(intro+'Yukie:__**\n'+noInfo);
                    }
            
                    if (args[0] === 'Momo' ||  args[0] === 'momo'){
                        return message.channel.send(intro+'Momo:__**\n'+noInfo);
                    }
            
                    if (args[0] === 'Akira' ||  args[0] === 'akira'){
                        return message.channel.send(intro+'Akira:__**\n'+noInfo);
                    }
            
                    if (args[0] === 'Shinichirou' ||  args[0] === 'shinichirou'){
                        return message.channel.send(intro+'Shinichirou:__**\n'+noInfo);
                    }
            
                    if (args[0] === 'Daisuke' || args[0] === 'daisuke'){
                        return message.channel.send(intro+'Daisuke:__**\n'+noInfo);
                    }
            
            
            //Nonsense Literatire/Dramaturgy
                    if (args[0] === 'Hitotsume' ||  args[0] === 'hitotsume'){
                        return message.channel.send(intro+'Hitotsume:__**\n'+noInfo);
                    }
            
                    if (args[0] === 'Bun' ||  args[0] === 'bun'){
                        return message.channel.send (intro+'Bun:__**\n'+noInfo)
                    }
            
                    if (args[0] === 'Usa' ||  args[0] === 'usa'){
                        return message.channel.send(intro+'Usa:__**\n'+noInfo)
                    }
            
                    if (args[0] === 'Tamago' ||  args[0] === 'tamago'){
                        return message.channel.send(intro+'Tamago:__**\n'+noInfo)
                    }
            
                    if (args[0] === 'Sebastian' ||  args[0] === 'sebastian'){
                        return message.channel.send(intro+'Sebastian:__**\n'+noInfo)
                    }
            
                    if (args[0] === 'Saru' ||  args[0] === 'saru'){
                        return message.channel.send(intro+'Saru:__**\n'+noInfo)
                    }
            
                    if (args[0] === 'Pylon' ||  args[0] === 'pylon'){
                        return message.channel.send(intro+'Pylon:__**\n'+noInfo);
                    }
                    
                    if (args[0] === 'Kurukuru' ||  args[0] === 'kurukuru'){
                        return message.channel.send(intro+'Kurukuru:__**\n'+noInfo);
                    }
            
                    if (args[0] === 'Fukuro' ||  args[0] === 'fukuro'){
                        return message.channel.send(intro+'Fukuro:__**\n'+noInfo);
                    }
            //How to Devour Life
                    if (args[0] === 'Inochi' ||  args[0] === 'inochi'){
                        return message.channel.send(intro+'Inochi:__**\n- HTDL Characters by u/ppdingo: <https://www.reddit.com/gq2w51>')
                    }
            
                    if (args[0] === 'Noppo' ||  args[0] === 'noppo'){
                        return message.channel.send(intro+'Noppo:__**\n- HTDL Characters by u/ppdingo: <https://www.reddit.com/gq2w51>');
                    }
                    
                    if (args[0] === 'Unako' ||  args[0] === 'unako'){
                        return message.channel.send(intro+'Unako:__**\n- HTDL Characters by u/ppdingo: <https://www.reddit.com/gq2w51>');
                    }
            
                    if (args[0] === 'Maruiro' ||  args[0] === 'maruiro'){
                        return message.channel.send(intro+'Maruiro:__**\n- HTDL Characters by u/ppdingo: <https://www.reddit.com/gq2w51>');
                    }
            
                    if (args[0] === 'Kuroko' ||  args[0] === 'kuroko'){
                        return message.channel.send(intro+'Kuroko:__**\n- HTDL Characters by u/ppdingo: <https://www.reddit.com/gq2w51>');
                    }
                    if (args[0] === 'Thazen' ||  args[0] === 'thazen'){
                        return message.channel.send(intro+'Thazen:__**\n- HTDL Characters by u/ppdingo: <https://www.reddit.com/gq2w51>');
                    }
                    if (args[0] === 'Oyashirazu' ||  args[0] === 'oyashirazu'){
                        return message.channel.send(intro+'Oyashirazu:__**\n- HTDL Characters by u/ppdingo: <https://www.reddit.com/gq2w51>');
                    }
                // Outsider
                    if (args[0] === 'Pattun' ||  args[0] === 'pattun'){
                        return message.channel.send(intro+'Pattun:__**\n'+noInfo)
                    }
                    if (args[0] === 'Mocchi' ||  args[0] === 'mocchi'){
                        return message.channel.send(intro+'Mocchi:__**\n'+noInfo)
                    }
                    if (args[0] === 'Salamander' ||  args[0] === 'salamander'){
                        return message.channel.send(intro+'Salamander:__**\n'+noInfo)
                    }
                    if (args[0] === 'Edogon' ||  args[0] === 'edogon'){
                        return message.channel.send(intro+'Edogon:__**\n'+noInfo)
                    }
                    if (args[0] === 'Unagi' ||  args[0] === 'unagi'){
                        return message.channel.send(intro+'Unagi:__**\n'+noInfo)
                    }
                // Dark Night
                    if (args[0] === 'Vans' ||  args[0] === 'vans'){
                        return message.channel.send(intro+'Vans:__**\n'+noInfo)
                    }
                    if (args[0] === 'Warasshi' ||  args[0] === 'warasshi'){
                        return message.channel.send(intro+'Warasshi:__**\n'+noInfo)
                    }
                // Last Dance
                    if (args[0] === 'Dorothy' ||  args[0] === 'dorothy'){
                        return message.channel.send(intro+'Dorothy:__**\n'+noInfo)
                    }
                    if (args[0] === 'Dancer' ||  args[0] === 'dancer'){
                        return message.channel.send(intro+'Dancer:__**\n'+noInfo)
                    }
                    if (args[0] === 'Mika' ||  args[0] === 'mika'){
                        return message.channel.send(intro+'Mika:__**\n'+noInfo)
                    }
                    if (args[0] === 'Sensei' ||  args[0] === 'sensei'){
                        return message.channel.send(intro+'Sensei:__**\n'+noInfo)
                    }
                    if (args[0] === 'Pierrot' ||  args[0] === 'pierrot'){
                        return message.channel.send(intro+'Pierrot:__**\n'+noInfo)
                    }
            
            
            
                   
                
                // Raison d'Etre
                    if (args[0] === 'Raison' ||  args[0] === 'raison'){
                        return message.channel.send(intro+'Raison:__**\n'+noInfo)
                    }
                    if (args[0] === 'D\'etre' ||  args[0] === 'd\'etre' || args[0] === 'Detre' ||  args[0] === 'detre'){
                        return message.channel.send(intro+'D\'etre:__**\n'+noInfo)
                    }
                
                //Tokyo Ghetto
                    if (args[0] === 'Janitor' ||  args[0] === 'janitor'){
                        return message.channel.send(intro+'Janitor:__**\n'+noInfo)
                    }
               
                //Demon Dance Tokyo
                    if (args[0] === 'Mickey' ||  args[0] === 'mickey'){
                        return message.channel.send(intro+'Mickey:__**\n'+noInfo);
                    }
            
                    if (args[0] === 'Shiro' ||  args[0] === 'shiro'){
                        return message.channel.send(intro+'Shiro:__**\n'+noInfo);
                    }
                // As You Like It and Baumkuchen End
                    if (args[0] === 'Handman' ||  args[0] === 'handman'){
                        return message.channel.send(intro+'Handman:__**\n'+noInfo)
                    }
                // Anoko Secret
                    if (args[0] === 'Kumataro' ||  args[0] === 'kumataro'){
                        return message.channel.send(intro+'Kumataro:__**\n'+noInfo)
                    }
                //Kara no Kioku
                    if (args[0] === 'Q-ta' ||  args[0] === 'q-ta'){
                        return message.channel.send(intro+'Q-ta:__**\n'+noInfo)
                    }
                
                 return message.reply(existError);
                
            }
            
                   
            // two args
                if (length == 2){
                    if ((args[0] === 'The' && args[1] ==='Boy') || (args[0] === 'the' && args[1]==='boy')){
                        return message.reply(unspecific);
                    }
                    if ((args[0] === 'The' && args[1] === 'Girl') || (args[0] === 'the' && args[1] === 'girl')){
                        return message.reply(unspecific);
                    }
                    if ((args[0] === 'Rei' && args[1] === 'Tsukumo') || (args[0] === 'rei' && args[1] === 'tsukumo')){
                        return message.channel.send(intro+'Rei Tsukumo:__****\n'+noInfo);
                    }

                    if ((args[0] === 'Yukito' && args[1]) || (args[0] === 'yukito' && args[1] === 'mutsuki')){
                        return message.channel.send(intro+'Yukito Mutsuki:__****\n'+noInfo)
                    }
            
                    if ((args[0] === 'The' && args[1] === 'Cat') || (args[0] === 'the' && args[1] === 'cat')){
                        return message.channel.send(intro+'The Cat:__**\n'+noInfo);
                    }
            
                    if ((args[0] === 'The' && args[1] === 'Fairy') || (args[0] === 'the' && args[1] === 'fairy')){
                        return message.channel.send(intro+'The Fairy:__**\n'+noInfo);
                    }
            
                    if ((args[0] === 'Monitor' && args[1] === 'Girl') || (args[0] === 'monitor' && args[1] === 'girl')){
                        return message.channel.send(intro+'Monitor Girl:__**\n'+noInfo);
                    }
            
                    if ((args[0] === 'Yoh' && args[1] === 'Shirono') || (args[0] === 'yoh' && args[1] === 'shirono')){
                        return message.channel.send(intro+'Yoh Shirono:__**\n'+noInfo);
                    }
            
                    if ((args[0] === 'Ibex' && args[1] === 'Rabbit') || (args[0] === 'ibex' && args[1] === 'rabbit')){
                        return message.channel.send(intro+'Ibex Rabbit:__**\n'+noInfo);
                    }
            
            
            
                    return message.reply(existError);
                }
            // three args
            
                if (length == 3){
                    if ((args[0] === 'The' && args[1]==='Boy') || (args[0] === 'the' && args[1]==='boy')){
                        if (args[2] === '(BE)' || args[2]==='(be)'){
                            return message.channel.send(intro+'The Boy (Baumkuchen End):__**\n'+noInfo);
                        }
                        if (args[2] === '(DDT)' || args[2] ==='(ddt)'){
                            return message.channel.send(intro+'The Boy (Demon Dance Tokyo):__**\n'+noInfo);
                        }
                        if (args[2] === '(TG)' || args[2] === '(tg)'){
                            return message.channel.send(intro+'The Boy (Tokyo Ghetto):__**\n'+noInfo);
                        }
                        if (args[2] === '(S)' || args[2] === '(s)'){
                            return message.channel.send(intro+'The Boy (Sister):__**\n'+noInfo)
                        }
                        if (args[2] === '(A)' || args[2] === '(a)'){
                            return message.channel.send(intro+'The Boy (Ambivalent):__**\n'+noInfo)
                        }
                        if (args[2] === '(WSU)' || args[2] === '(WSU)'){
                            return message.channel.send(intro+'The Boy (We\'re Still Underground):__**')
                        }
                        return message.reply(existError);
                    }
            
                    if ((args[0] === 'The' && args[1] === 'Girl') || (args[0] ==='the' && args[1] === 'girl')){
                        if (args[2] === '(BE)' || args[2] === '(be)'){
                            return message.channel.send(intro+'The Girl (Baumkuchen End):__**\n'+noInfo);
                        }
                        if (args[2] === '(TG)' || args[2] === '(tg)'){
                            return message.channel.send(intro+'The Girl (Tokyo Ghetto):__**\n'+noInfo);
                        }
                        if (args[2] === '(S)' || args[2] === '(s)'){
                            return message.channel.send(intro+'The Girl (Sister):__**\n'+noInfo);
                        }
                        if (args[2] === '(WSU)' || args[2] === '(WSU)'){
                            return message.channel.send(intro+'The Girl (We\'re Still Underground):__**\n'+noInfo)
                        }
                    }
            
                    if ((args[0] === 'The' && args[1] === 'Headless' && args[2] === 'Dragon') || (args[0] === 'the' && args[1] === 'headless' && args[2] === 'dragon')){
                            return message.channel.send(intro+'The Headless Dragon:__**\n'+noInfo)
                    }
                    
                    return message.reply(existError);
            
                    
                    
                }
            


		
	},
};