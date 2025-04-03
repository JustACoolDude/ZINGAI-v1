module.exports = {
    name: 'characters', 
    aliases:['ch'],
    description: 'Get an alphabetically organized list of **all** characters. Using !ch takes you to page one, while using numbers starting from 1 takes you to the corresponding page #.\nIf you\'re looking for only humans/zingai/unknowns, try !h, !z, or !u.',
    usage:['[leave blank, or a number from 1-9]'],
    cooldown: 1,
    execute(message, args) {
        var max = 9
        var intro = '__**Character List (Page '+args[0] +' of '+max+ ')**__\n';
        var int = parseInt(args,10);
        length = args.length;
        var parsed = parseInt(args[0],10);
    
    if (args.length > 1){
        return message.reply('that page does not exist!');
    }

    if (parsed>max){
        return message.reply('that page does not exist!');
    }

    if (parsed == 0){
        return;
    }

    if(args[0] === "2"){
        return message.channel.send(intro+'- E2\n- Edogon\n- Fukuro\n- Green\n- Handman\n- Hitotsume\n- Ibex Rabbit\n- Inochi\n- Janitor');
    }

    else if (args[0] === "3"){
        return message.channel.send(intro+'- Kumataro\n- Kuroko\n- Kurukuru\n- Maruiro\n- Mickey\n- Mika\n- Mocchi\n- Momo');
    }
    else if (args[0]==="4"){
        return message.channel.send(intro+'- Monitor Girl\n- Neko\n- Noppo\n- Oni\n- Oyashirazu\n- Pattun\n- Pierott\n- Pink');
    }
    else if (args[0] === "5"){
        return message.channel.send(intro+'- Pylon\n- Q-ta\n- Raison\n- Rei Tsukumo\n- Salamander\n- Saru\n- Sebastian')
    }
    else if (args[0] === "6"){
        return message.channel.send(intro+'- Sensei\n- Shinichirou\n- Shiro\n- Tamago\n- Thazen\n- The Boy (BE)\n- The Boy (DDT)')
    }
    else if (args[0] === "7"){
        return message.channel.send(intro+'- The Boy (Snow)\n- The Boy (TG)\n- The Boy (WSU)\n- The Cat\n- The Girl (AS)\n- The Girl (BE)')
    }
    else if (args[0] === "8"){
        return message.channel.send(intro+'- The Girl (S)\n- The Girl (TG)\n- The Girl (WSU)\n- The Fairy\n- The Headless Dragon\n- Unagi\n- Unako')
    }
    else if (args[0] === "9"){
        return message.channel.send(intro+'- Usa\n- Vans\n- Warasshi\n- Yoh Shirono\n- Yukie\n- Yukito Mutsuki')
    }
    else{ 
        return message.channel.send('__**Character List (Page 1 of '+max+ ')**__\n- 2P\n- Akane\n- Akira\n- Bun\n- D\'etre\n- Daisuke\n- Dorothy');
    }


		
	},
};