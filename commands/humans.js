module.exports = {
    name: 'humans', 
    aliases:['h'],
    description: 'Get an alphabetically organized list of all Human characters. \nHumans here marked with a "(?)" may not be entirely human, though this has not be confirmed.\nWhen using commands such as !s, do not include the (?)',
    usage:['[leave blank, or a number from 1-4]'],
    cooldown: 1,
    execute(message, args) {
        
        var max = 4
        var intro = '__**Human List (Page '+args[0] +' of '+max+ ')**__\n';
        length = args.length;
        var parsed = parseInt(args[0],10);
    
    
    if (args.length > 1){
        return message.reply('that page does not exist!');
    }

    if (!(Number.isInteger(parsed)) && args.length == 1){
        return message.reply('that page does not exist!');
    }

    if (parsed>max){
        return message.reply('that page does not exist!');
    }

    if (parsed == 0){
        return message.reply('that page does not exist!');
    }
    if (args[0] === "2"){
        return message.channel.send(intro+'- Monitor Girl\n- Pattun\n- Raison (?)\n- Shinichirou\n- Shiro\n- The Boy (BE)\n- The Boy (DDT) (?)');
    }
    if (args[0] === "3"){
        return message.channel.send(intro+'- The Boy (S)\n- The Boy (Snow)\n- The Boy (TG)\n- The Boy (WSU)\n- The Girl (AS)\n- The Girl (S)\n- The Girl (TG) (?)')
    }
    if (args[0] === "4"){
        return message.channel.send(intro+'- The Girl (WSU)\n- Vans\n- Yoh Shirono\n- Yukie')
    }
    else{
        return message.channel.send('__**Human List (Page 1 of '+max+')**__\n- Akane\n- Akira\n- Bun\n- Inochi (?)\n- Mickey\n- Mika\n- Momo');
    }
   



}
};