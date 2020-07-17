let token = "discord token"
let allowedusers = ["add ids of users you want to have access"]
let color = "color you want"
//===============================================================================
const discord = require("discord.js");
const bot = new discord.Client();
bot.on("ready", ready => {});
bot.on("message", message => {
  if (message.content.startsWith("!")) {
    //slices args and command away from prefix
    const args = message.content
      .slice(1)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(command);
    console.log(args);
    if (
      command == "massdm" && (allowedusers.includes(message.author.id))
    ) {
      let roleid = args.shift();
      let messtosend = args.join(" ");
	  message.channel.send("Sending all DMs").then(msg=>{
		 bot.guilds.get(message.guild.id).members.forEach(member => {
			if(member.roles.has(roleid) || roleid == "all"){
				const exampleEmbed = new Discord.RichEmbed()
					.setColor(color)
					.setTitle('Important Announcement')
					.setDescription(messtosend)
					.setTimestamp()
					.setFooter(message.guild.name, message.guild.iconURL);
			member.send(exampleEmbed);
          msg.edit("DMed "+member.user.tag)
			}

      });
	  })
      console.log("DMED EVERYONE!")
      message.reply("DMED EVERYONE!")
    }
  }
});
bot.login(token)
 
