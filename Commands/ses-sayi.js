const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
const mongoose = require('mongoose')
const ms = require('ms')
const moment = require('moment')
const Database = require('../Models/ExecutorModel.js')
const { rolVer, renk,embedCreator } = require('../functions');
exports.run = async(client, message, args) => {


    if (!message.member.hasPermission('ADMINISTRATOR')) return message.react(ayarlar.emojiler.red);
    let sunucu = client.guilds.cache.get(ayarlar.guildSettings.guildID);

    let embed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }));
    let sessayi = sunucu.members.cache.filter(x => x.voice.channel).size;
    return embedCreator("#4D0A0A", `> Şu Anda Seste **${sessayi}** Kadar Üye Var `,message,[true,10000])

};

exports.commandSettings = {
    name: "sesayi",
    aliases: ["ses"],
    guildOnly: true, 
    coolDown: 3000, 
    description: ""
}