const env = require('dotenv');
const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json'); 
const client = new Discord.Client();
const { Client, Permissions } = require('discord.js');
const cooldowns = new Discord.Collection();
const util = require('util');


 client.commands = new Discord.Collection();
 const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
 

 const prefix = '!'; 
 
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.once('ready',()=> {
    //bot.user.setUsername("T.A.M.A.G.O");
    console.log('I am Online!');
})

client.on('message', message =>{
    if (!message.guild){return;}
    if ((message.guild.id != process.env.serverID) && (message.guild.id != process.env.serverIDK) && (message.guild.id != process.env.serverIDP)) {return message.channel.send('You are currently attempting to use the Z.I.N.G.A.I bot in an unauthorized server. Please cease.');}
    const link = "http://discordapp.com/channels/" + message.guild.id + "/" + message.channel.id + "/" + message.id;
    if(message.channel.id == process.env.channelIDA){
    if (message.attachments.size > 0 || message.content.includes("youtu")) {
            var i = 0;
            {
                //message.react('👍');
                message.react('711783461207146496');
                
                const filter = (reaction, user) => {
                    return reaction.emoji.name === 'clapclap' && user.id != process.env.botID;
                };
                
                const collector = message.createReactionCollector(filter, { dispose: true });
                
                collector.on('collect', (reaction, user) => {
                const member = message.guild.members.cache.get(message.author.id);
                    
                   
                    if (reaction.emoji.name === 'clapclap'){
                    i+=1;
                   }
                    
                   if (i == 20){
                    let g = message.guild;
                    var role = g.roles.cache.find(role => role.name === "Talented Artists");
                    
                    if (message.member.roles.cache.some(role => role.name === 'Talented Artists')) {
                        return;
                     }
                    else{
                    member.roles.add(role)
                    return message.channel.send('Congratulations <@'+message.author.id+'>, you have gained the `Talented Artists` role!\nSee which artwork got you it!\n'+link);
                    }
                 }
                 collector.on('remove', (reaction, user) => {
                    if (reaction.emoji.name === 'clapclap'){
                        i-=1;
                       }
                   });
                });

                
            }
           
           
        
        }
        else{
            if (!(message.member.roles.cache.some(role => role.name === 'Moderators') 
            || message.member.roles.cache.some(role => role.name === 'Administrators') 
            || message.author.bot
            || message.content.includes("youtu"))){
                message.delete();
            }
        }
        

  }

 

  
  
  
  
  
  
  
  

  
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.channel.id == process.env.channelIDA) {return;}

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();


    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    if (command.args && !args.length){
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }


   
    
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
  
        if (timestamps.has(message.author.id)) {
            var isCooldownOn = false;
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
            if (now < expirationTime) {
                if (message.author.id != process.env.ownerID){
                isCooldownOn = true;
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
                }
            }
        }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

      
  
  

  //theoryvote
  if (message.channel.id == process.env.channelIDL){
    if (!message.content.includes('!tv')) {return;}
    if (isCooldownOn){
      return message.channel.send('You haven\'t waited the required time!');
  }
        
    
    var j = 0;
    message.react('711778394962133033');
    const filter = (reaction, user) => {
        return reaction.emoji.name === 'BigThink' && user.id != process.env.botID;
    };
    
    const collector = message.createReactionCollector(filter);
    
    collector.on('collect', (reaction, user) => {
       
        if (reaction.emoji.name === 'BigThink'){
        j++;
          }

       if (j == 8){
        return message.channel.send('<@379794732009914369>, please review this theory!\n'+link);
         }
    });

    collector.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.emoji.name === 'BigThink'){
            j--;
        }
        
     //   if (reaction.emoji.name === '🥔'){

       // }
    });
  
 // }
}






    }
)




env.config();
client.login(process.env.TOKEN);
