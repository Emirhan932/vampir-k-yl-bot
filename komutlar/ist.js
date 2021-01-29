const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let msg = message
   const bune = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('VK BOTU  \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("»**Botun Sahibi**", "<@420691365777899530>| ♅ LoZ 'Bey ♅#0001  ")
  .addField("»**Geliştirici** ","<@420691365777899530>| ♅ LoZ 'Bey ♅#0001 ")
  .addField("»**Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("»**Çalışma süresi**", bune)
  .addField('»**Müzik Çalınan Sunucu Sayısı**;', bot.voiceConnections.size)
  .addField('»**Kullanıcılar**:', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField("»**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("»**Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("»**Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("»**Node.JS sürüm**", `${process.version}`, true)
  .addField("»**Ping**", bot.ping+" ms", true)
  .addField("»**CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("»**Bit**", `\`${os.arch()}\``, true)
  .addField("»**İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=697274029756776499&scope=bot&permissions=8)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/WxNZ5d)", )
  .addField("**» Voteleme sayfası**", " [OYLAR MISIN?]()", )
   //mayfeBot
 return message.channel.send(annencilermaldır);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};