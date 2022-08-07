"use strict";
const {
downloadContentFromMessage, 
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./db/function/color')
const { getBuffer, fetchJson, serialize, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("./db/function/myfunc");
const fs = require ("fs");
const Jimp = require('jimp');
const { Brainly } = require("brainly-scraper-v2");
const brain = new Brainly("id");
const { Cabul } = require('cabul');
const reddit = new Cabul() 
const RA = require('ra-api')
const ReadText = require('text-from-image')
const { recognize } = require('./db/function/ocr')
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const setting = JSON.parse(fs.readFileSync('./admin/config.json')); 
const daftar = JSON.parse(fs.readFileSync('./db/function/daftar.json')); 
const antilink = JSON.parse(fs.readFileSync('./db/function/antilink.json')); 
const welcome = JSON.parse(fs.readFileSync('./db/function/welcome.json')); 
var tebakgambar = JSON.parse(fs.readFileSync('./db/function/tebakgambar.json')); 
const speed = require("performance-now");
const Exif = require("./db/function/exif")
const exif = new Exif()
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(nayla, nay, m, setting, store, welcome) => {
try {
let { ownerNumber, botName, donas, namaowner, kodeprem} = setting
let { allmenu } = require('./admin/help')

const { type, quotednay, mentioned, now, fromMe } = nay
if (nay.isBaileys) return
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(nay.message)
const from = nay.key.remoteJid
const chats = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type === 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type === 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type === 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotednay.fromMe && nay.message.buttonsResponseMessage.selectedButtonId ? nay.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotednay.fromMe && nay.message.templateButtonReplyMessage.selectedId ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotednay.fromMe && nay.message.listResponseMessage.singleSelectReply.selectedRowId ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const toJSON = j => JSON.stringify(j, null,'\t')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const isGroup = nay.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid
const isOwner = ownerNumber == sender ? true : false
const pushname = nay.pushName
const body = chats.startsWith(prefix) ? chats : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const command1 = body.slice(6).trim().split(/ +/).shift().toLowerCase()
const isCmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const isAntilink = antilink.includes(from) ? true : false
const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net'
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
 


// Link Image Source
const imgSourceRaw	= [
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/blue_archive.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/durandal.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/dusk.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/hayase_yuuka.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/kiana_kaslana.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/raiden_mei.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/rozaliya.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/shirasu_azusa.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/shirasu_azusa2.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/skadi.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/sunaookami_shiroko.png'
]
const imgSource = imgSourceRaw[Math.floor(Math.random()*(imgSourceRaw.length))]



const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
function jsonformat(string) {return JSON.stringify(string, null, 2)}

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = nayla.sendMessage(from, { text: teks, mentions: mems })
return res } else { let res = nayla.sendMessage(from, { text: teks, mentions: mems }, { quoted: nay })
return res}}
 
const reply = (teks) => {nayla.sendMessage(from, { text: teks }, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `*_Azusa Bot_*\Uptime : ${runtime(process.uptime())}` }}}  })}
const textImg = (teks) => {return nayla.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: nay })}
const sendMess = (hehe, teks) => {nayla.sendMessage(hehe, { text, teks })}
const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return nayla.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	
 
function _0x3868(_0x627f37,_0x49331d){var _0x324f88=_0x543e();return _0x3868=function(_0x44c4e6,_0x2bc8f4){_0x44c4e6=_0x44c4e6-(0x5*-0x635+-0x11b3+0x3127);var _0x32b9ce=_0x324f88[_0x44c4e6];return _0x32b9ce;},_0x3868(_0x627f37,_0x49331d);}(function(_0x1144ae,_0x309e0c){var _0x5a988b=_0x3868,_0x27dc4b=_0x1144ae();while(!![]){try{var _0x378967=parseInt(_0x5a988b(0x76))/(-0x2238*0x1+-0x3bb*-0x1+0x1e7e)*(parseInt(_0x5a988b(0x80))/(0x188d+-0xa*-0x20+-0x19cb))+parseInt(_0x5a988b(0x95))/(-0x1011*0x1+0x2426*0x1+-0x1*0x1412)*(parseInt(_0x5a988b(0x8f))/(0x60*-0x53+-0x7*-0x26c+0x1*0xe30))+parseInt(_0x5a988b(0xad))/(0x5*0x4e5+-0x18fd+0x1*0x89)+parseInt(_0x5a988b(0x7d))/(-0x1d*-0x11b+-0x25c7+0x5be)+-parseInt(_0x5a988b(0xa3))/(0x653+-0x1b*0x2a+0x1de*-0x1)*(-parseInt(_0x5a988b(0x82))/(0x1137+-0x6c0+0x1*-0xa6f))+parseInt(_0x5a988b(0x9f))/(0x5*-0x565+0x205a+-0x558)+-parseInt(_0x5a988b(0x81))/(0x7*-0x115+0x1*-0x6fd+0xe9a)*(parseInt(_0x5a988b(0x97))/(0x240a+0x2*-0x100d+-0x3e5));if(_0x378967===_0x309e0c)break;else _0x27dc4b['push'](_0x27dc4b['shift']());}catch(_0xd8cad9){_0x27dc4b['push'](_0x27dc4b['shift']());}}}(_0x543e,0x26*0x221b+-0x4c2b*-0x7+-0x79ee*0x8));async function textOverlay(_0x16eb99,_0x167200){var _0x212708=_0x3868,_0x4b2789={'XNMSD':_0x212708(0x85),'LAImF':_0x212708(0xa0)+_0x212708(0x86)+_0x212708(0xa9)+_0x212708(0x7a)+_0x212708(0xa5)+_0x212708(0x93)+_0x212708(0x79)+_0x212708(0x88)+_0x212708(0x6d)+_0x212708(0x71)+_0x212708(0xaf)+_0x212708(0x6f)+_0x212708(0x78)+_0x212708(0x7e)+_0x212708(0x77)+_0x212708(0xb1)+_0x212708(0x9e)+_0x212708(0x90)+_0x212708(0x99)+_0x212708(0x8e)+_0x212708(0x6b)+_0x212708(0x73)+_0x212708(0x9d)+_0x212708(0x7b)+_0x212708(0x8a)+_0x212708(0x91)+_0x212708(0x9c)+_0x212708(0xb7),'wyppN':_0x212708(0x96)+_0x212708(0xb2)+_0x212708(0xac)+_0x212708(0x74)+_0x212708(0xb6),'HZxYn':_0x212708(0xa4)+_0x212708(0xaa)};try{var _0xba02af=await nayla[_0x212708(0x6c)+_0x212708(0xb8)](sender,_0x4b2789[_0x212708(0x84)]);}catch(_0x2eb148){var _0xba02af=_0x4b2789[_0x212708(0x7f)];}let _0x2aea9b=await Jimp[_0x212708(0x72)](_0xba02af);_0x2aea9b=_0x2aea9b[_0x212708(0x94)](0x22ab+-0x38a*-0x6+-0x121d*0x3,0x238a+-0x1*0xc39+0x15c1*-0x1);const _0x3e8bc2=await Jimp[_0x212708(0x72)](_0x4b2789[_0x212708(0x87)]);_0x2aea9b=await _0x2aea9b,_0x3e8bc2[_0x212708(0x89)](_0x2aea9b,-0x63a*-0x3+0x1497+-0x2448,0x1ec7*-0x1+0x19db+0x55f,{'mode':Jimp[_0x212708(0xb5)+_0x212708(0xa1)],'opacityDest':0x1,'opacitySource':0x1});const _0x2fda38=await Jimp[_0x212708(0x8c)](Jimp[_0x212708(0x83)+_0x212708(0x9b)]);_0x3e8bc2[_0x212708(0xb9)](_0x2fda38,0x1*-0x971+-0x2457+0x2dfa,0x153d+-0x11*-0x139+0x9fd*-0x4,_0x16eb99),await _0x3e8bc2[_0x212708(0x98)](_0x4b2789[_0x212708(0x8b)]),nayla[_0x212708(0xba)+'e'](from,{'image':{'url':_0x4b2789[_0x212708(0x8b)]},'caption':_0x167200});}async function textOverlaymenu(_0x426628,_0x3266ee){var _0x4e960c=_0x3868,_0x4bb265={'HMhdl':_0x4e960c(0x85),'MRqgL':_0x4e960c(0xa0)+_0x4e960c(0x86)+_0x4e960c(0xa9)+_0x4e960c(0x7a)+_0x4e960c(0xa5)+_0x4e960c(0x93)+_0x4e960c(0x79)+_0x4e960c(0x88)+_0x4e960c(0x6d)+_0x4e960c(0x71)+_0x4e960c(0xaf)+_0x4e960c(0x6f)+_0x4e960c(0x78)+_0x4e960c(0x7e)+_0x4e960c(0x77)+_0x4e960c(0xb1)+_0x4e960c(0x9e)+_0x4e960c(0x90)+_0x4e960c(0x99)+_0x4e960c(0x8e)+_0x4e960c(0x6b)+_0x4e960c(0x73)+_0x4e960c(0x9d)+_0x4e960c(0x7b)+_0x4e960c(0x8a)+_0x4e960c(0x91)+_0x4e960c(0x9c)+_0x4e960c(0xb7),'EjQkt':_0x4e960c(0x96)+_0x4e960c(0xb2)+_0x4e960c(0xac)+_0x4e960c(0x74)+_0x4e960c(0xb6),'UlECa':_0x4e960c(0xa4)+_0x4e960c(0xaa),'kfuoI':_0x4e960c(0x75)+_0x4e960c(0x6e)+_0x4e960c(0xa7),'ewVnx':_0x4e960c(0x70)+_0x4e960c(0xbb)+_0x4e960c(0xa7),'QWjuH':_0x4e960c(0xae)+_0x4e960c(0xa6)+_0x4e960c(0xa7),'UaXVZ':_0x4e960c(0x8d)+_0x4e960c(0x92)};try{var _0x3bd636=await nayla[_0x4e960c(0x6c)+_0x4e960c(0xb8)](sender,_0x4bb265[_0x4e960c(0xb3)]);}catch(_0x30e241){var _0x3bd636=_0x4bb265[_0x4e960c(0xa2)];}let _0x4e7bfd=await Jimp[_0x4e960c(0x72)](_0x3bd636);_0x4e7bfd=_0x4e7bfd[_0x4e960c(0x94)](-0xc8e*-0x1+0x2357*-0x1+0x17*0x10f,-0x3fa+0x2453*0x1+0x6f*-0x47);const _0x17eb8f=await Jimp[_0x4e960c(0x72)](_0x4bb265[_0x4e960c(0xb4)]);_0x4e7bfd=await _0x4e7bfd,_0x17eb8f[_0x4e960c(0x89)](_0x4e7bfd,-0xe34+0x78e*0x1+0x1*0x9a3,-0x142*0xc+0x1a78+-0xaed,{'mode':Jimp[_0x4e960c(0xb5)+_0x4e960c(0xa1)],'opacityDest':0x1,'opacitySource':0x1});const _0x588857=await Jimp[_0x4e960c(0x8c)](Jimp[_0x4e960c(0x83)+_0x4e960c(0x9b)]);_0x17eb8f[_0x4e960c(0xb9)](_0x588857,0x25d5+0x1775*0x1+0x55*-0xb8,-0xeaa*-0x1+0x72*-0x45+-0x2*-0x911,_0x426628),await _0x17eb8f[_0x4e960c(0x98)](_0x4bb265[_0x4e960c(0x9a)]),nayla[_0x4e960c(0xba)+'e'](from,{'image':{'url':_0x4bb265[_0x4e960c(0x9a)]},'caption':_0x3266ee,'mentions':[_0x4bb265[_0x4e960c(0xab)],_0x4bb265[_0x4e960c(0xa8)],_0x4bb265[_0x4e960c(0xb0)],_0x4bb265[_0x4e960c(0x7c)]]});}function _0x543e(){var _0x286117=['UaXVZ','349392CrVYEJ','pAHpOg0X8M','LAImF','14gWSiLR','758630UAjvyc','8rqVGkv','FONT_SANS_','XNMSD','image','ogger.goog','wyppN','PtiKiQ-fAm','composite','_npqY/s736','HZxYn','loadFont','0@s.whatsa','vyvs4TgtwX','788ayeIIk','ZA8FgFT1x1','/pp%20wa%2','pp.net','xl/AVvXsEg','resize','2571qnfgQU','https://i.','165CxSnfk','writeAsync','FuQx3H1571','UlECa','64_WHITE','0kosong-10','-E43ru2vgR','RLg2vJ_o4m','2649204phwkrp','https://bl','CE_OVER','MRqgL','1744043YZSTSo','./db/image','g/b/R29vZ2','455@s.what','sapp.net','ewVnx','leusercont','/satu.jpg','kfuoI','dD6n/20220','1031535zYIknM','6283856085','3X-CUmrJre','QWjuH','mEdC9IUVpF','ibb.co/6bS','HMhdl','EjQkt','BLEND_SOUR','-1.jpg','.jpg','tureUrl','print','sendMessag','412@s.what','8AUE4HQpbO','profilePic','KMwbkgx5hj','729@s.what','AluiymqBAM','6285785445','jBeah-EDZO','read','5inaXjvEQp','801-104459','6282347260','54233qcszBG','RoCAEwcF92','G77oZZkhHd','RNnf_kEJfw','ent.com/im','7wkG2cZl6s'];_0x543e=function(){return _0x286117;};return _0x543e();}

async function addLogin(satu) { daftar.push(satu)
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}

async function sendMedia(satu, dua, tiga) {
if (satu == "image") { nayla.sendMessage(from, {image:{url:dua}, caption:tiga},{quoted:{key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Runtime : ${runtime(process.uptime())}` }}}})}
}

async function dataJson(satu, dua, tiga) {
Object.keys(daftar).forEach((i) => {

if (satu == "+claim") { 
if (daftar[i].id == dua) {daftar[i].claim += tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "-claim") { 
if (daftar[i].id == dua) {daftar[i].claim -= tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "±claim") { 
if (daftar[i].id == dua) {daftar[i].claim = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "+uang") { 
if (daftar[i].id == dua) {daftar[i].uang += tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "-uang") { 
if (daftar[i].id == dua) {daftar[i].uang -= tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "+exp") { 
if (daftar[i].id == dua) {daftar[i].exp += tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "-exp") { 
if (daftar[i].id == dua) {daftar[i].exp -= tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "+exp") { 
if (daftar[i].id == dua) {daftar[i].exp += tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "+level") { 
if (daftar[i].id == dua) {daftar[i].level += tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "-level") { 
if (daftar[i].id == dua) {daftar[i].level -= tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "+energi") { 
if (daftar[i].id == dua) {daftar[i].energi += tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "-energi") { 
if (daftar[i].id == dua) {daftar[i].energi -= tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "+medali") { 
if (daftar[i].id == dua) {daftar[i].medali += tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "-medali") { 
if (daftar[i].id == dua) {daftar[i].medali -= tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "±karakter") { 
if (daftar[i].id == dua) {daftar[i].karakter = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "±status") { 
if (daftar[i].id == dua) {daftar[i].status = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

if (satu == "±emote") { 
if (daftar[i].id == dua) {daftar[i].emote = tiga
fs.writeFileSync('./db/function/daftar.json', JSON.stringify(daftar))}}

})}

if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
const jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
reply("Jawaban Anda Benar!\nAnda mendapatkan $100 Uang & 5000 medali")
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./db/function/tebakgambar.json", JSON.stringify(tebakgambar))
dataJson("+medali", sender, 5000)
dataJson("+uang", sender, 100)
}}


const MyData = (satu, dua) => {
let position = false
Object.keys(daftar).forEach((i) => {
if (daftar[i].id === dua) {
position = i
}})
if (position !== false) {
if (satu == "id") { return daftar[position].id }
if (satu == "uang") { return daftar[position].uang }
if (satu == "exp") { return daftar[position].exp }
if (satu == "medali") { return daftar[position].medali }
if (satu == "karakter") { return daftar[position].karakter }
if (satu == "energi") { return daftar[position].energi }
if (satu == "claim") { return daftar[position].claim }
if (satu == "status") { return daftar[position].status }
if (satu == "emote") { return daftar[position].emote }
}}
const harga = (satu) => {
reply(`• *Uang kamu* : $${MyData("uang", sender)}
• *Harga item* : $${satu}
Maaf uang kamu kurang $${satu - MyData("uang", sender)} untuk membeli item ini`)
}
const harga2 = (satu) => {
reply(`• *Medali kamu* : $${MyData("medali", sender)}
• *Harga item* : $${satu}
Maaf medali kamu kurang $${satu - MyData("medali", sender)} untuk membeli item ini`)
}
const sendAudio = (satu) => {
nayla.sendMessage(from, {audio:{url:`./db/audio/audio${satu}.mp3`}, mimetype:"audio/mp4", ptt:true})
}
const reactionMessage = { react: { text: `${MyData("emote", sender)}`, key: nay.key}}
if (!isGroup && isCmd && !fromMe) { 
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(nay.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
 dataJson("+exp", sender, 92)
if (MyData("status", sender) == true) {nayla.sendMessage(from, reactionMessage)}
}
if (isGroup && isCmd && !fromMe) { 
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(nay.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
dataJson("+exp", sender, 92)
if (MyData("status", sender) == true) {nayla.sendMessage(from, reactionMessage)}} 

if (MyData("uang", sender) <= 1) { dataJson("±uang", sender, 10)}
(function(_0xaac211,_0x16169b){const _0x3be895=_0x3331,_0x181e2f=_0xaac211();while(!![]){try{const _0x227132=-parseInt(_0x3be895(0xd8))/(0x1603+0x12e5+-0x28e7)*(-parseInt(_0x3be895(0xd4))/(-0x546+0x3a*-0x2+0x5bc))+-parseInt(_0x3be895(0xd9))/(-0x1*0x1b3f+-0x2*-0x1297+-0x4*0x27b)*(-parseInt(_0x3be895(0xe1))/(-0x301+-0x23a2*-0x1+-0x209d))+parseInt(_0x3be895(0xe8))/(-0xc24+0xd*-0x1fd+0x2602)*(parseInt(_0x3be895(0xcd))/(-0x7*0x3ec+-0x24b+0x1dc5))+-parseInt(_0x3be895(0xda))/(0x14aa+-0x1*-0xcc4+-0x1*0x2167)*(parseInt(_0x3be895(0xdb))/(-0x7*-0x567+0x141a+-0x39e3))+-parseInt(_0x3be895(0xce))/(-0x1c61+-0x3e8*0xa+0x437a*0x1)*(parseInt(_0x3be895(0xe2))/(-0x17dc+0xe91+0x955))+parseInt(_0x3be895(0xe0))/(-0x170*-0x3+-0x15*0x6b+0x1*0x482)+parseInt(_0x3be895(0xd2))/(-0x1a39+0xc*0x2ad+-0x73*0xd);if(_0x227132===_0x16169b)break;else _0x181e2f['push'](_0x181e2f['shift']());}catch(_0x1e2e3c){_0x181e2f['push'](_0x181e2f['shift']());}}}(_0x3de8,0x2f910+0x2*-0x28d5d+0x10*0x7321));function _0x3331(_0x536da8,_0x24c6e1){const _0x540cbc=_0x3de8();return _0x3331=function(_0x341e41,_0x283adb){_0x341e41=_0x341e41-(0x1*-0x14cf+-0x116f+0x270b);let _0x30af34=_0x540cbc[_0x341e41];return _0x30af34;},_0x3331(_0x536da8,_0x24c6e1);}async function maker(_0x668074,_0x1f2c46,_0x4dc4e8,_0x1f77a4,_0x309385,_0x228196,_0x47a3c1){const _0x54485a=_0x3331,_0x537c6b={'mKCYa':_0x54485a(0xcf)+_0x54485a(0xdd)+'g','WJaOy':function(_0x7752d8,_0x121a9a,_0x42df9b,_0x4e52be){return _0x7752d8(_0x121a9a,_0x42df9b,_0x4e52be);},'tKaEB':_0x54485a(0xd7)};let _0x3c8ca8=await Jimp[_0x54485a(0xe9)](_0x47a3c1);_0x3c8ca8=_0x3c8ca8[_0x54485a(0xdf)](-0x166b+-0x65*0x3f+-0x9e*-0x4f,0x47*0x3b+-0xa27+-0x4ba);const _0x2eed76=await Jimp[_0x54485a(0xe9)](_0x54485a(0xcf)+'/'+_0x668074+_0x54485a(0xdc));_0x3c8ca8=await _0x3c8ca8,_0x2eed76[_0x54485a(0xe7)](_0x3c8ca8,_0x1f2c46,_0x4dc4e8,{'mode':Jimp[_0x54485a(0xe5)+_0x54485a(0xd1)],'opacityDest':0x1,'opacitySource':0x1});const _0x47b197=await Jimp[_0x54485a(0xd5)](Jimp[_0x54485a(0xde)+_0x54485a(0xe4)]);_0x2eed76[_0x54485a(0xd3)](_0x47b197,_0x309385,_0x228196,_0x1f77a4),await _0x2eed76[_0x54485a(0xd6)](_0x537c6b[_0x54485a(0xe3)]),_0x537c6b[_0x54485a(0xe6)](sendMedia,_0x537c6b[_0x54485a(0xd0)],_0x537c6b[_0x54485a(0xe3)],':3');}function _0x3de8(){const _0x1b6be6=['10TXPTIa','mKCYa','64_WHITE','BLEND_SOUR','WJaOy','composite','5SGdyZn','read','897978DJIMvs','5948091JkZGVR','./db/maker','tKaEB','CE_OVER','231000OZtSBQ','print','14BJJyWd','loadFont','writeAsync','image','67157myIJlS','16302eSnxky','7LqsRIz','404504Pnbafz','.jpg','/sukses.jp','FONT_SANS_','resize','1877326GsRWKj','172gderMl'];_0x3de8=function(){return _0x1b6be6;};return _0x3de8();}

await nayla.sendPresenceUpdate('available', from) 

switch(command) { 




// own case
case 'nyoba':
var thisListMenu =`
nyoba cuk
nyoba cuk`
mentions(thisListMenu)
break

case 'nyobacuk': {
if (MyData("status", sender) == false) { var sts = "Free User"
var x = "[🔒]" }
if (MyData("status", sender) == true) { var sts = "Premium User"
 var x = "" }

reply(`

*_Shirasu Azusa Bot_*


[ *YOUR-INFO* ]
Status : ${sts}
Energi : ${MyData("energi", sender)}
Karakter : ${MyData("karakter", sender)}
Medali : ${MyData("medali", sender)}
Exp : ${MyData("exp", sender)}
Uang : ${MyData("uang", sender)}

[ GROUP ]
${prefix}antilink
${prefix}editinfo
${prefix}group
${prefix}promote
${prefix}demote
${prefix}add
${prefix}kick
${prefix}resetlink
${prefix}linkgroup
${prefix}setdesc
${prefix}setname

[ GAME ]
${prefix}buykarakter
${prefix}buyenergi
${prefix}theworld
${prefix}judi
${prefix}sell
${prefix}tebakgambar

[ CEK ]
${prefix}mykarakter
${prefix}myuang
${prefix}mymedali
${prefix}myexp
${prefix}myenergi
${prefix}claim ${x}

[ CREATIVE X ]
${prefix}anjing1
${prefix}anjing2
${prefix}anjing3
${prefix}meme1
${prefix}meme2
${prefix}tampar
${prefix}cerdas
${prefix}tokdalang
${prefix}tom
${prefix}ampun
*Note : Input(Text)

~[ CREATIVE Y ]
${prefix}curiga
${prefix}anda
${prefix}anjing4
${prefix}heran
${prefix}macan
${prefix}mobil
*Note : Input(Text1 & text2)

[ CREATIVE Z ]
${prefix}maker1 
${prefix}maker2 
${prefix}maker3 
${prefix}maker4 
${prefix}maker5 
${prefix}maker6 
${prefix}maker7 
${prefix}maker8 
${prefix}maker9 
${prefix}maker10 
Note : Input(image & text)

[ ISLAMIC ]
${prefix}tahlil
${prefix}asmaulhusna
${prefix}doaharian
${prefix}ayatkursi
${prefix}niatshalat
${prefix}bacaanshalat

[ NSFW-NEW ]
${prefix}kanmusunights ${x} 
${prefix}arknuts ${x} 
${prefix}rule34 ${x} 
${prefix}pokeporn ${x} 
${prefix}inumimi ${x} 
${prefix}dtittytouching ${x} 
${prefix}handbras ${x} 
${prefix}taihou ${x} 
${prefix}christmascake ${x} 
${prefix}officelady ${x} 
${prefix}nekomimi ${x} 
${prefix}waifusgonewild ${x} 
${prefix}gameovergirls ${x} 
${prefix}sukebei ${x} 
${prefix}corruptionhentai ${x} 
${prefix}tentai ${x} 
${prefix}atago ${x} 
${prefix}yaoi ${x} 
${prefix}netorare ${x} 
${prefix}kemonomimi ${x} 
${prefix}yuri ${x} 
${prefix}ahegao ${x} 
${prefix}pantsu ${x} 
${prefix}hentai ${x} 
${prefix}ecchi ${x}

[ NEWS ]
${prefix}beritanews1
${prefix}beritanews2
${prefix}beritanews3
${prefix}beritanews4
${prefix}beritanews5
${prefix}beritanews6
${prefix}beritanews7
${prefix}beritanews8
${prefix}beritanews9
${prefix}beritanews10
${prefix}beritanews11
${prefix}beritanews12
${prefix}beritanews13
${prefix}beritanews14
${prefix}beritanews15
${prefix}beritanews16
${prefix}beritanews17
${prefix}beritanews18
${prefix}beritanews19
${prefix}beritanews20

[ MENFESS ]
${prefix}chat <chat>
${prefix}simi <chat>

[ RANDOM ]
${prefix}brainly <soal>
${prefix}setemote ${x}
${prefix}getprem




[ OWNER-BOT (👨)]
wa.me/${ownerNumber.split('@')[0]}
 
[ THX-TO ]
• HENT4I IMPACT 3
• RIMURUBOTZ
• GITHUB

By @adiwajshing/baileys`)
}
break
case 'menulite':{
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (MyData("status", sender) == false) { var sts = "Free User"
var x = "[🔒]" }
if (MyData("status", sender) == true) { var sts = "Premium User"
 var x = "" }
//m
const textLite = `

*_Shirasu Azusa Bot_*


[ *YOUR-INFO* ]
Status : ${sts}
Energi : ${MyData("energi", sender)}
Karakter : ${MyData("karakter", sender)}
Medali : ${MyData("medali", sender)}
Exp : ${MyData("exp", sender)}
Uang : ${MyData("uang", sender)}

[ GROUP ]
${prefix}antilink
${prefix}editinfo
${prefix}group
${prefix}promote
${prefix}demote
${prefix}add
${prefix}kick
${prefix}resetlink
${prefix}linkgroup
${prefix}setdesc
${prefix}setname

[ GAME ]
${prefix}buykarakter
${prefix}buyenergi
${prefix}theworld
${prefix}judi
${prefix}sell
${prefix}tebakgambar

[ CEK ]
${prefix}mykarakter
${prefix}myuang
${prefix}mymedali
${prefix}myexp
${prefix}myenergi
${prefix}claim ${x}

[ CREATIVE X ]
${prefix}anjing1
${prefix}anjing2
${prefix}anjing3
${prefix}meme1
${prefix}meme2
${prefix}tampar
${prefix}cerdas
${prefix}tokdalang
${prefix}tom
${prefix}ampun
*Note : Input(Text)

[ CREATIVE Y ]
${prefix}curiga
${prefix}anda
${prefix}anjing4
${prefix}heran
${prefix}macan
${prefix}mobil
*Note : Input(Text1 & text2)

[ CREATIVE Z ]
${prefix}maker1 
${prefix}maker2 
${prefix}maker3 
${prefix}maker4 
${prefix}maker5 
${prefix}maker6 
${prefix}maker7 
${prefix}maker8 
${prefix}maker9 
${prefix}maker10 
*Note : Input(image & text)

[ ISLAMIC ]
${prefix}tahlil
${prefix}asmaulhusna
${prefix}doaharian
${prefix}ayatkursi
${prefix}niatshalat
${prefix}bacaanshalat

[ NSFW-NEW ]
${prefix}kanmusunights ${x} 
${prefix}arknuts ${x} 
${prefix}rule34 ${x} 
${prefix}pokeporn ${x} 
${prefix}inumimi ${x} 
${prefix}dtittytouching ${x} 
${prefix}handbras ${x} 
${prefix}taihou ${x} 
${prefix}christmascake ${x} 
${prefix}officelady ${x} 
${prefix}nekomimi ${x} 
${prefix}waifusgonewild ${x} 
${prefix}gameovergirls ${x} 
${prefix}sukebei ${x} 
${prefix}corruptionhentai ${x} 
${prefix}tentai ${x} 
${prefix}atago ${x} 
${prefix}yaoi ${x} 
${prefix}netorare ${x} 
${prefix}kemonomimi ${x} 
${prefix}yuri ${x} 
${prefix}ahegao ${x} 
${prefix}pantsu ${x} 
${prefix}hentai ${x} 
${prefix}ecchi ${x}

[ NEWS ]
${prefix}beritanews1
${prefix}beritanews2
${prefix}beritanews3
${prefix}beritanews4
${prefix}beritanews5
${prefix}beritanews6
${prefix}beritanews7
${prefix}beritanews8
${prefix}beritanews9
${prefix}beritanews10
${prefix}beritanews11
${prefix}beritanews12
${prefix}beritanews13
${prefix}beritanews14
${prefix}beritanews15
${prefix}beritanews16
${prefix}beritanews17
${prefix}beritanews18
${prefix}beritanews19
${prefix}beritanews20

[ MENFESS ]
${prefix}chat <chat>
${prefix}simi <chat>

[ RANDOM ]
${prefix}brainly <soal>
${prefix}setemote ${x}
${prefix}getprem




[ OWNER-BOT ]
wa.me/${ownerNumber.split('@')[0]}
 
[ THX-TO ]
• HENT4I IMPACT 3
• RIMURUBOTZ
• GITHUB

By @adiwajshing/baileys`
var joni = await getBuffer(`${imgSource}`)
var captionBuff = `${textLite}`
sendMedia("image", joni, captionBuff).catch(err => console.log("Error silahkan coba Lagi.."))
}
break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok': case 'gay' : case 'badut': case 'pedo': case 'ampazz':
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': case 'sepuh':                	   
				   if (!isGroup) return reply(`GROUP ONLY`)
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   sendMessage(D1, true)
				   break 
case 'tagall':  
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `➪ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
sendMessage(teks, members_id, true)
break
case 'hidetag':        
if (!isGroup) return reply(`GRUP ONLY`)
if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
    var value = body.slice(9)
    var group = await nayla.groupMetadata(from)
    var member = group['participants']
    var mem = []
member.map( async adm => {
    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))}
)
var options = {
    text: value,
    contextInfo: { mentionedJid: mem },
    quoted: nay
}
sendMessage(from, options, text, true)					 
break

case'donasi':
reply(donas)
break
case 'menu':
case 'help':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
textOverlaymenu(pushname, allmenu(prefix, MyData, sender, ownerNumber), `No : ${sender.split("@")[0]}`);
break
case 'daftar':
if (MyData("id", sender) == sender) return textOverlay(pushname, "Anda Sudah terdaftar sebelumnya", `No : ${sender.split("@")[0]}`);
textOverlay("SUKSES TERDAFTAR", "Sukses Terdaftar", `No : ${sender.split("@")[0]}`);
addLogin({id: sender, uang: 1000, exp:1, level:1, karakter:false, energi:100, medali:1000, claim:1, status:false, emote: "👑"})
break
case 'buykarakter':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
const liskarakter = `[ *KARAKTER SHOP* ]

~> *WINDBOT*
 > *Harga* : $500
 > *Buy?* : ${prefix + command} windbot

~> *WATER*
 > *Harga* : $12000
 > *Buy?* : ${prefix + command} waterbot
 
~> *SOILBOT*
 > *Harga* : $25500
 > *Buy?* : ${prefix + command} soilbot
 
~> *LISTRIKBOT*
 > *Harga* : $49200
 > *Buy?* : ${prefix + command} listrikbot

~> *FIREBOT*
 > *Harga* : $65000
 > *Buy?* : ${prefix + command} firebot
 
=> *Note* : Sesudah membeli *Karakter* Maka karakter sebelum nya akan tergantikan(TerHapus)`
if (!q) return sendMedia("image","./db/image/karakter.jpg",liskarakter)
if (q == "windbot") { 
if (MyData("uang", sender) <= 500) return harga(500)
dataJson("-uang", sender, 500)
dataJson("±karakter", sender, q)
textOverlay(pushname, "SUKSES MEMBELI KARAKTER:3", `No : ${sender.split("@")[0]}`)
}
if (q == "waterbot") { 
if (MyData("uang", sender) <= 12000) return harga(12000)
dataJson("-uang", sender, 12000)
dataJson("±karakter", sender, q)
textOverlay(pushname, "SUKSES MEMBELI KARAKTER:3", `No : ${sender.split("@")[0]}`)
} 
if (q == "soilbot") {
if (MyData("uang", sender) <= 25500) return harga(25500) 
dataJson("-uang", sender, 25500)
dataJson("±karakter", sender, q)
textOverlay(pushname, "SUKSES MEMBELI KARAKTER:3", `No : ${sender.split("@")[0]}`)
} 
if (q == "listrikbot") { 
if (MyData("uang", sender) <= 49200) return harga(49200)
dataJson("-uang", sender, 49200)
dataJson("±karakter", sender, q)
textOverlay(pushname, "SUKSES MEMBELI KARAKTER:3", `No : ${sender.split("@")[0]}`)
} 
if (q == "firebot") { 
if (MyData("uang", sender) <= 65000) return harga(65000)
dataJson("-uang", sender, 65000)
dataJson("±karakter", sender, q)
textOverlay(pushname, "SUKSES MEMBELI KARAKTER:3", `No : ${sender.split("@")[0]}`)
} 
dataJson("+exp", sender, 133)
break
case 'theworld':
if (isGroup) return reply("Bot ini mengalami bug saat mengirim button/listmessage pada group, jadi silahkan gunakan fitur ini di pesan pribadi")
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (MyData("karakter", sender) == false) return textOverlay(pushname + " [ false ]", "Maaf anda belum memiliki karakter, silahkan beli karakter terlebih dahulu di #buykarakter", `No : ${sender.split("@")[0]}`);
if (MyData("energi", sender) <= 20) return reply("Energi kamu di bawah 20, Ayo isi energi terlebih dahulu di #buyenergi")
const buttons = [{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'GO!!!!'}, type: 1}]
const buttonMessage = { image: {url: 'https://t-2.tstatic.net/tribunkaltimwiki/foto/bank/images/peta-indonesia.jpg'}, caption: "[ *THE WORLD* ]", footer: 'Ayoo selamat kan dunia, dan dapatkan hadiah:3, Semakin tinggi level karakter anda, maka semakin tinggi juga hadiah yang di dapatkan', buttons: buttons, headerType: 4}
if (!q) return nayla.sendMessage(from, buttonMessage)
if (MyData("karakter", sender) == "windbot") { var hadiah1 = [410,482,489,417,418,472,891,620] }
if (MyData("karakter", sender) == "waterbot") { var hadiah1 = [1410,2482,3489,1417,2418,3472,1891,2620] }
if (MyData("karakter", sender) == "soilbot") { var hadiah1 = [2410,3482,4489,5417,3418,4472,5891,3620] }
if (MyData("karakter", sender) == "listrikbot") { var hadiah1 = [4410,5482,6489,7417,5418,6472,8891,7620] }
if (MyData("karakter", sender) == "firebot") { var hadiah1 = [10410,11482,12489,13417,12418,11472,13891,11620] }
const energi = [20,32,43,57,62,79,82,92][Math.floor(Math.random() * ([20,32,43,57,62,79,82,92].length))]
const uang = [1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9].length))]
const hadiah = hadiah1[Math.floor(Math.random() * (hadiah1.length))]
if (q == 1) {
const buttonss = [{buttonId: `${prefix + command} 1`, buttonText: {displayText: 'GO AGAIN!!!!'}, type: 1}]
const buttonMessagee = { image: {url: 'https://t-2.tstatic.net/tribunkaltimwiki/foto/bank/images/peta-indonesia.jpg'}, caption: "[ *THE WORLD* ]", footer: `*Status* : Sukses\n*Hadiah* : ${hadiah} *Medali*\n*Uang* : $${uang}\n*Energi* : ${MyData("energi", sender) - energi}\nMasih banyak musuh diluar sana, ayo serang lagi,\nNote: Kumpulkan medali sebanyak mungkin, dan jual di ${prefix}sell\nSetiap serangan membutuhkan energi`, buttons: buttonss, headerType: 4}
nayla.sendMessage(from, buttonMessagee)
dataJson("-energi", sender, energi)
dataJson("+medali", sender, hadiah)
dataJson("+uang", sender, uang)}
break
case 'buyenergi':
if (isGroup) return reply("Bot ini mengalami bug saat mengirim button/listmessage pada group, jadi silahkan gunakan fitur ini di pesan pribadi")
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
const sections = [{title: "ENERGI", rows: [
{title: "105 Energi", rowId: `${prefix + command} 1`, description: "Harga $100 "},
{title: "225 Energi", rowId: `${prefix + command} 2`, description: "Harga $200 "},
{title: "320 Energi", rowId: `${prefix + command} 3`, description: "Harga $300 "},
{title: "450 Energi", rowId: `${prefix + command} 4`, description: "Harga $400 "},
{title: "570 Energi", rowId: `${prefix + command} 5`, description: "Harga $500 "}]}]
const listMessage = { text: `> Uang kamu sekarang *$${MyData("uang",sender)}*`, footer: "Gratis ongkir seluruh indonesia", title: "[ *BELANJA SEMUA DI SHOPEE* ]", buttonText: "LIST ENERGI",sections}
if (!q) return nayla.sendMessage(from, listMessage)
if (q == 1) { if (MyData("uang",sender) <= 99) return harga(100)
sendMedia("image", "https://cdns.klimg.com/merdeka.com/i/w/news/2020/03/12/1155217/540x270/10-fungsi-hati-bagi-manusia-pengatur-utama-metabolisme-tubuh.jpg",`[ *BELANJA SEMUA DI SHOPEE* ]\nSukses membeli energi\n*Uang sisa* : $${MyData("uang", sender) - 100}\n*Energi sekarang* : ${MyData("energi", sender) + 105}\n*Ongkir* : $0`)
dataJson("-uang", sender, 100)
dataJson("+energi", sender, 105)
}
if (q == 2) { if (MyData("uang",sender) <= 199) return harga(200)
sendMedia("image", "https://cdns.klimg.com/merdeka.com/i/w/news/2020/03/12/1155217/540x270/10-fungsi-hati-bagi-manusia-pengatur-utama-metabolisme-tubuh.jpg",`[ *BELANJA SEMUA DI SHOPEE* ]\nSukses membeli energi\n*Uang sisa* : $${MyData("uang", sender) - 200}\n*Energi sekarang* : ${MyData("energi", sender) + 225}\n*Ongkir* : $0`)
dataJson("-uang", sender, 200)
dataJson("+energi", sender, 225)
}
if (q == 3) { if (MyData("uang",sender) <= 299) return harga(300)
sendMedia("image", "https://cdns.klimg.com/merdeka.com/i/w/news/2020/03/12/1155217/540x270/10-fungsi-hati-bagi-manusia-pengatur-utama-metabolisme-tubuh.jpg",`[ *BELANJA SEMUA DI SHOPEE* ]\nSukses membeli energi\n*Uang sisa* : $${MyData("uang", sender) - 300}\n*Energi sekarang* : ${MyData("energi", sender) + 320}\n*Ongkir* : $0`)
dataJson("-uang", sender, 300)
dataJson("+energi", sender, 320)
}
if (q == 4) { if (MyData("uang",sender) <= 399) return harga(400)
sendMedia("image", "https://cdns.klimg.com/merdeka.com/i/w/news/2020/03/12/1155217/540x270/10-fungsi-hati-bagi-manusia-pengatur-utama-metabolisme-tubuh.jpg",`[ *BELANJA SEMUA DI SHOPEE* ]\nSukses membeli energi\n*Uang sisa* : $${MyData("uang", sender) - 400}\n*Energi sekarang* : ${MyData("energi", sender) + 450}\n*Ongkir* : $0`)
dataJson("-uang", sender, 400)
dataJson("+energi", sender, 450)
}
if (q == 5) { if (MyData("uang",sender) <= 499) return harga(500)
sendMedia("image", "https://cdns.klimg.com/merdeka.com/i/w/news/2020/03/12/1155217/540x270/10-fungsi-hati-bagi-manusia-pengatur-utama-metabolisme-tubuh.jpg",`[ *BELANJA SEMUA DI SHOPEE* ]\nSukses membeli energi\n*Uang sisa* : $${MyData("uang", sender) - 500}\n*Energi sekarang* : ${MyData("energi", sender) + 570}\n*Ongkir* : $0`)
dataJson("-uang", sender, 500)
dataJson("+energi", sender, 570)
}
break
case 'mykarakter':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (MyData("karakter", sender) == false) return textOverlay(pushname + " [ false ]", "Maaf anda belum memiliki karakter, silahkan beli karakter terlebih dahulu di #buykarakter", `No : ${sender.split("@")[0]}`);
textOverlay(pushname, `Karakter anda : ${MyData("karakter", sender)}`, `${MyData("karakter", sender)}`,"menu-img")
break
case 'myuang':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
textOverlay(`Uang : $${MyData("uang",sender)}`, pushname, `No : ${sender.split("@")[0]}`)
break
case 'myexp':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
textOverlay(`Exp : ${MyData("exp",sender)}`, pushname, `No : ${sender.split("@")[0]}`)
break
case 'mymedali':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
textOverlay(`Medali : ${MyData("medali",sender)}`, pushname, `No : ${sender.split("@")[0]}`)
break
case 'myenergi':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
textOverlay(`Energi : ${MyData("energi",sender)}`, pushname, `No : ${sender.split("@")[0]}`)
break
case 'sell':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (isGroup) return reply("Bot ini mengalami bug saat mengirim button/listmessage pada group, jadi silahkan gunakan fitur ini di pesan pribadi")
const listMessagse1 = { text: `> Medali kamu sekarang *$${MyData("medali",sender)}*`, footer: "Note: Tidak ada diskon pada penjualan ini", title: "[ *MEDALI TO UANG* ]", buttonText: "LIST",
sections: [{title: "MEDALI", rows: [
{title: "Penawaran (1)", rowId: `${prefix + command} x1`, description: "100 Medali => $1"},
{title: "Penawaran (2)", rowId: `${prefix + command} x2`, description: "1.000 Medali => $10"},
{title: "Penawaran (3)", rowId: `${prefix + command} x3`, description: "10.000 Medali => $100"},
{title: "Penawaran (4)", rowId: `${prefix + command} x4`, description: "100.000 Medali => $1000"},]
}]}
if (!q) return nayla.sendMessage(from, listMessagse1)
if (q == "x1"){
var x1 = 1
var x2 = 100
if (MyData("medali", sender) <= x2) return harga2(x2)
dataJson("+uang", sender, x1)
dataJson("-medali", sender, x2)
reply("SUKSES MENUKAR MEDALI MENJADI UANG, SILAHKAN CEK UANG ANDA SEKARANG")
}
if (q == "x2"){
var x1 = 10
var x2 = 1000
if (MyData("medali", sender) <= x2) return harga2(x2)
dataJson("+uang", sender, x1)
dataJson("-medali", sender, x2)
reply("SUKSES MENUKAR MEDALI MENJADI UANG, SILAHKAN CEK UANG ANDA SEKARANG")
}
if (q == "x3"){
var x1 = 100
var x2 = 10000
if (MyData("medali", sender) <= x2) return harga2(x2)
dataJson("+uang", sender, x1)
dataJson("-medali", sender, x2)
reply("SUKSES MENUKAR MEDALI MENJADI UANG, SILAHKAN CEK UANG ANDA SEKARANG")
}
if (q == "x4"){
var x1 = 1000
var x2 = 100000
if (MyData("medali", sender) <= x2) return harga2(x2)
dataJson("+uang", sender, x1)
dataJson("-medali", sender, x2)
reply("SUKSES MENUKAR MEDALI MENJADI UANG, SILAHKAN CEK UANG ANDA SEKARANG")
}


break 
case 'judi':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (isGroup) return reply("Bot ini mengalami bug saat mengirim button/listmessage pada group, jadi silahkan gunakan fitur ini di pesan pribadi")
const listMessagse = { text: `> Uang kamu sekarang *$${MyData("uang",sender)}*`, footer: "Note: Kesempatan menang pada judi *15%*", title: "[ *JUDI-DOLAR* ]", buttonText: "LIST TARUHAN",
sections: [{title: "JUDI", rows: [
{title: "easy", rowId: `${prefix + command} x1`, description: "Taruhan $15"},
{title: "medium", rowId: `${prefix + command} x2`, description: "Taruhan $120"},
{title: "hard", rowId: `${prefix + command} x3`, description: "Taruhan $560"},
{title: ":v", rowId: `${prefix + command} x4`, description: "Taruhan $1480"}]}]
}
const judi = [false, false, true, false][Math.floor(Math.random() * ([false, false, true, false].length))]
if (!q) return nayla.sendMessage(from, listMessagse)
if (q == "x1") { const judii = 15 
if (MyData("uang", sender) <= judii) return harga(judii)
if (judi == true) { textOverlay(`$${MyData("uang", sender)}` +  ` + ${judii} = $${MyData("uang", sender) + judii}`, `[ *JUDI EASY* ]\n*Status* : Menang\n*Taruhan* : $${judii}\n*Hasil* : $${judii + judii}`, `No : ${sender.split("@")[0]}`)
dataJson("+uang", sender, judii + judii)}
if (judi == false) { textOverlay(`$${MyData("uang", sender)}` + ` - ${judii} = $${MyData("uang", sender) - judii}`, `[ *JUDI EASY* ]\n*Status* : Kalah\n*Taruhan* : $${judii}\n*Hasil* : 0\n*Kerugian* : $${judii}`, `No : ${sender.split("@")[0]}`)
dataJson("-uang", sender, judii) }}

if (q == "x2") { const judii = 120
if (MyData("uang", sender) <= judii) return harga(judii)
if (judi == true) { textOverlay(`$${MyData("uang", sender)}` +  ` + ${judii} = $${MyData("uang", sender) + judii}`, `[ *JUDI EASY* ]\n*Status* : Menang\n*Taruhan* : $${judii}\n*Hasil* : $${judii + judii}`, `No : ${sender.split("@")[0]}`)
dataJson("+uang", sender, judii + judii)}
if (judi == false) { textOverlay(`$${MyData("uang", sender)}` + ` - ${judii} = $${MyData("uang", sender) - judii}`, `[ *JUDI EASY* ]\n*Status* : Kalah\n*Taruhan* : $${judii}\n*Hasil* : 0\n*Kerugian* : $${judii}`, `No : ${sender.split("@")[0]}`)
dataJson("-uang", sender, judii) }}

if (q == "x3") { const judii = 560 
if (MyData("uang", sender) <= judii) return harga(judii)
if (judi == true) { textOverlay(`$${MyData("uang", sender)}` +  ` + ${judii} = $${MyData("uang", sender) + judii}`, `[ *JUDI EASY* ]\n*Status* : Menang\n*Taruhan* : $${judii}\n*Hasil* : $${judii + judii}`, `No : ${sender.split("@")[0]}`)
dataJson("+uang", sender, judii + judii)}
if (judi == false) { textOverlay(`$${MyData("uang", sender)}` + ` - ${judii} = $${MyData("uang", sender) - judii}`, `[ *JUDI EASY* ]\n*Status* : Kalah\n*Taruhan* : $${judii}\n*Hasil* : 0\n*Kerugian* : $${judii}`, `No : ${sender.split("@")[0]}`)
dataJson("-uang", sender, judii) }}

if (q == "x4") { const judii = 1480 
if (MyData("uang", sender) <= judii) return harga(judii)
if (judi == true) { textOverlay(`$${MyData("uang", sender)}` +  ` + ${judii} = $${MyData("uang", sender) + judii}`, `[ *JUDI EASY* ]\n*Status* : Menang\n*Taruhan* : $${judii}\n*Hasil* : $${judii + judii}`, `No : ${sender.split("@")[0]}`)
dataJson("+uang", sender, judii + judii)}
if (judi == false) { textOverlay(`$${MyData("uang", sender)}` + ` - ${judii} = $${MyData("uang", sender) - judii}`, `[ *JUDI EASY* ]\n*Status* : Kalah\n*Taruhan* : $${judii}\n*Hasil* : 0\n*Kerugian* : $${judii}`, `No : ${sender.split("@")[0]}`)
dataJson("-uang", sender, judii) }}
break
case 'claim':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (MyData("status", sender) == false) return reply("Fitur ini khusus User premium")
const medaliz = [1000,2000,3000,4000,5000][Math.floor(Math.random() * ([1000,2000,3000,4000,5000].length))]
dataJson("+medali", sender, medaliz)
reply(`Sukses claim,\n*Total* : ${medaliz}\n\nNote: Medali bisa di jual menjadi uang di ${prefix}sell`)
break
case 'anjing1': case 'ampun': case 'tom': case 'tokdalang': case 'cerdas': 
case 'tampar': case 'meme2': case 'meme1': case 'anjing3': case 'anjing2': 
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!q) return reply("Masukkan text\n" + `Contoh? ${prefix + command} Yo ndak tau kok tanya saya`)
sendMedia("image", `https://md-devs.herokuapp.com/api/rimurubotz?type=${command}&text=${q}`, ":3")
break
// 2
case 'curiga':case 'anda':case 'anjing4':case 'heran':case 'macan':case 'mobil':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!q) return reply("Masukkan text\n" + `Contoh? ${prefix + command} udin&jamal`)
if (q2 && q1) {
sendMedia("image", `https://md-devs.herokuapp.com/api/rimurubotz?type=${command}&text1=${q1}&text2=${q2}`, ":3")
} else { reply(`Masukkan text1&text2\nContoh? ${prefix + command} udin&jamal`)}
break
case 'simi':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!q) return reply("Masukkan chat:3\n" + `*Contoh* : ${prefix + command} halo`)
fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
.then(simi1 => {reply(simi1.success)})
break
case 'brainly':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
const { Brainly } = require("brainly-scraper-v2");
const brain = new Brainly("id"); 
if (!q) return reply("Masukkan soal")
const nx = await brain.searchWithMT(q, "id")
reply(`[ *BRAINLY* ]\n
• *Soal* : ${q}
• *Pelajaran* : ${nx[0].question.education}
• *Kelas* : ${nx[0].question.grade}
• *Jawaban* : ${nx[0].answers[0].content}`) 
break
case 'sticker': case 'stiker': case 's':
    await reply("Sebentar ya su...")
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (isImage || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else if (isVideo || isQuotedVideo) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else {
reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 5 detik!`)
}
break 
case 'audio1': case 'audio2': case 'audio3': case 'audio5': case 'audio4': case 'audio6': case 'audio7': case 'audio8': case 'audio9': case 'audio10': case 'audio11': case 'audio12': case 'audio13': case 'audio14': case 'audio15': case 'audio16': case 'audio17': case 'audio18': case 'audio19': case 'audio20': 
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
sendAudio(command1)
break
case 'owner':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
const ownewr = ownerNumber.split('@')[0]
nayla.sendMessage(from, {text: `@${ownewr}`, mentions: [ownerNumber]} )
break
 
case 'sc': case 'script':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
reply(`nope`)
break
case 'tebakgambar': 
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
const kuis1 = await fetchJson(`https://md-devs.herokuapp.com/api/rimurubotz?type=tebakgambar`)
sendMedia("image", kuis1.result.image, `[ *TEBAKGAMBAR* ]\n> *Clue* : ${kuis1.result.clue}\n> *Note* : Jawab jawaban ini dengan benar sebelum 30 detik, Dan dapatkan hadiah`).then(() => {
tebakgambar[sender.split('@')[0]] = kuis1.result.jawaban.toLowerCase()
fs.writeFileSync("./db/function/tebakgambar.json", JSON.stringify(tebakgambar))
sleep(30000)})
console.log(kuis1.result.jawaban)
setTimeout( () => {
reply(`[ *WAKTU HABIS:(* ]\n> *Jawaban* : ${kuis1.result.jawaban}`)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./db/function/tebakgambar.json", JSON.stringify(tebakgambar))
}, 30000)
break
case 'antilink':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply(`[ *ANTILINK* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
if (q == "on"){
antilink.push(from)
fs.writeFileSync('./db/function/antilink.json', JSON.stringify(antilink))
reply("SUKSES ON")}
if (q == "off"){
antilink.splice(from, 1)
fs.writeFileSync('./db/function/antilink.json', JSON.stringify(antilink))
reply("SUKSES OFF")}
break

case 'welcome':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply(`[ *WELCOME* ]\n~> *ON*\n• ${prefix + command} on\n~> *OFF*\n• ${prefix + command} off`)
if (q == "on"){
welcome.push(from)
fs.writeFileSync('./db/function/welcome.json', JSON.stringify(welcome))
reply("SUKSES ON")}
if (q == "off"){
welcome.splice(from, 1)
fs.writeFileSync('./db/function/welcome.json', JSON.stringify(welcome))
reply("SUKSES OFF")}
break

case 'editinfo':
case 'editinfogroup':
case 'editinfogrup':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (args[0] === 'all') {
await nayla.groupSettingUpdate(from, 'unlocked')
} else if (args[0] === 'admin') {
await nayla.groupSettingUpdate(from, 'locked')
} else {
reply("Masukkan query all/admin")
}
break
case 'group':
case 'grup':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (args[0] === 'close') {
await nayla.groupSettingUpdate(from, 'announcement')
} else if (args[0] === 'open') {
await nayla.groupSettingUpdate(from, 'not_announcement')
} else {
reply("Masukkan query open/close")
}
break
case 'promote':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dipromosikan menjadi admin group');
const men = nay.message.extendedTextMessage.contextInfo.mentionedJid;
nayla.groupParticipantsUpdate(from, men,"promote");
break
case 'demote':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin di demote di group ini');
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid;
await nayla.groupParticipantsUpdate(from, mention,"demote");
break
case 'add':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukan nomor yang ingin ditambahkan di group\nex: !add 62881xxxxxxx")
nomor = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
await nayla.groupParticipantsUpdate(from, [nomor],"add")
break
case 'kick':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dikeluarkan dari group ini')
const mentioyn = nay.message.extendedTextMessage.contextInfo.mentionedJid
await nayla.groupParticipantsUpdate(from, mentioyn,"remove")
break
case 'resetlink':
case 'revoke':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
await nayla.groupRevokeInvite(from)
break
case 'linkgroup':case 'linkgc':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
const code = await nayla.groupInviteCode(from)
reply("https://chat.whatsapp.com/" + code)
break
case 'setdesc':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukkan text")
nayla.groupUpdateDescription(from, q)
break
case 'setname':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!isGroup) return reply("ONLY GROUP");
if (!isGroupAdmins) return reply("ONLY ADMIN");
if (!isBotGroupAdmins) return reply("BOT BUKAN ADMIN");
if (!q) return reply("Masukkan text")
nayla.groupUpdateSubject(from, q);
break
case 'getprem':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (isGroup) return reply("Gunakan fitur ini di pesan pribadi")
if (MyData("status", sender) == true) return reply("Anda Adalah user premium")
if (!q) return reply("Masukkan kodeprem")
if (q == kodeprem){reply("Selamat anda telah menjadi user premium")
dataJson("±status", sender, true)} else {reply("kodeprem Salah, Silahkan dapatkan kode prem di owner")}
break
case 'setemote': case 'setemoji':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (MyData("status", sender) == false) return reply("FITUR INI KHUSUS USER PREMIUM\n\n" + `~> Dapatkan premium di\n> ${prefix}getprem\n~> Atau beli premium Di Owner bot`)
if (q.length > 2) return reply("Emote cukup 1, contoh 😀")
dataJson("±emote", sender, q)
nayla.sendMessage(from, { react: { text: q, key: nay.key}})
reply("Done")
break
case 'chat':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!q) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q1) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q2) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
if (!q3) return reply(`Masukkan nomer&nama&chat\n> *Contoh?* : ${prefix + command} 6282347260729&Jokowi&Selamat pagi`)
nayla.sendMessage(`${q1}@s.whatsapp.net`, {image:{url:"https://cdn-icons-png.flaticon.com/512/4712/4712029.png"}, caption:`Halo Ada pesan nih:3\n> *Dari* : ${q2}\n> *Jam* : ${jam}\n> *Pesan* : ${q3}`})
reply("Sukses")
break


case 'maker1': 
case 'maker2': 
case 'maker3': 
case 'maker4': 
case 'maker5': 
case 'maker6': 
case 'maker7': 
case 'maker8': 
case 'maker9': 
case 'maker10': 
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!q) return reply("Kirim image dengan caption, contoh?? https://i.ibb.co/pQd9ZnH/Screenshot-2022-07-30-06-43-46-66-6012fa4d4ddec268fc5c7112cbb265e7.jpg")
if (isImage || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync("./sukses.jpg", buffer)
var x1 = 1
var x2 = 1
var x3 = 1
var x4 = 1
if (command == "maker1") { x1 = 254, x2 = 73, x3 = 110, x4 = 553 }
if (command == "maker2") { x1 = 233, x2 = 149, x3 = 448, x4 = 600 } 
if (command == "maker3") { x1 = 809, x2 = 50, x3 = 75, x4 = 580 }
if (command == "maker4") { x1 = 150, x2 = 122, x3 = 480, x4 = 562 }
if (command == "maker5") { x1 = 703, x2 = 70, x3 = 140, x4 = 560 }
if (command == "maker6") { x1 = 702, x2 = 70, x3 = 140, x4 = 560 }
if (command == "maker7") { x1 = 120, x2 = 104, x3 = 540, x4 = 543 }
if (command == "maker8") { x1 = 656, x2 = 129, x3 = 520, x4 = 598 }
if (command == "maker9") { x1 = 245, x2 = 104, x3 = 520, x4 = 598 }
if (command == "maker10") { x1 = 106, x2 = 140, x3 = 470, x4 = 580 }
maker(command, x1, x2, q, x3, x4, "./sukses.jpg")  
} else {reply("Kirim image dengan caption, contoh?? https://i.ibb.co/pQd9ZnH/Screenshot-2022-07-30-06-43-46-66-6012fa4d4ddec268fc5c7112cbb265e7.jpg")}
break

case 'tahlil':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!q) return  reply(`Pilih angka 1-44\ncontoh ${prefix + command} 13\nUntuk list Angka(Nama) Silahkan cek di https://md-devs.herokuapp.com/list-tahlil`)
fetchJson("https://islamic-api-zhirrr.vercel.app/api/tahlil")
.then(x => { 
var tahlil = "[ *TAHLIL* ]\n\n"
Object.keys(x.data).forEach((i) => {
if (x.data[i].id == q){
tahlil += `• *Id* : ${x.data[i].id}\n`
tahlil += `• *Title* : ${x.data[i].title}\n`
tahlil += `• *Arabic* : ${x.data[i].arabic}\n`
tahlil += `• *Translation* : ${x.data[i].translation}\n`
}}) 
tahlil += `\n*Note* : Pilih angka 1-44\ncontoh ${prefix + command} 13\nUntuk list Angka(Nama) Silahkan cek di https://md-devs.herokuapp.com/list-tahlil`
reply(tahlil)})
break
case 'asmaulhusna':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson("https://islamic-api-zhirrr.vercel.app/api/asmaulhusna")
.then(x => { 
const xx = x.data[Math.floor(Math.random() * (x.data.length))]
reply(`[ *ASMAULHUSNA* ]\n• *No* : ${xx.index}\n• *Latin* : ${xx.latin}\n• *Arab* : ${xx.arabic}\n• *Id* : ${xx.translation_id}\n• *En* : ${xx.translation_en}\n\nNote: Asmaul husna random 1-99`)
})
break
case 'doaharian':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson("https://islamic-api-zhirrr.vercel.app/api/doaharian")
.then(x => { 
const xx = x.data[Math.floor(Math.random() * (x.data.length))]
reply(`[ *DOA HARIAN* ]\n• *Title* : ${xx.title}\n• *Arabic* : ${xx.arabic}\n• *Translation* : ${xx.translation}\n\nNote: Doa harian random`)})
break
case 'ayatkursi':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson("https://islamic-api-zhirrr.vercel.app/api/ayatkursi")
.then(x => { 
reply(`[ *AYAT KURSI* ]\n• *Tafsir* : ${x.data.tafsir}\n• *Arabic* : ${x.data.arabic}\n• *Latin* : ${x.data.latin}\n• *Translation* : ${x.data.translation}`)})
break
case 'niatshalat': case 'niatsholat':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson("https://islamic-api-zhirrr.vercel.app/api/niatshalat")
.then(x => { 
var niatshalat = "[ *NIAT SHOLAT* ]\n"
Object.keys(x).forEach((i) => {
niatshalat += `• *Id* : ${x[i].id}\n`
niatshalat += `• *Name* : ${x[i].name}\n`
niatshalat += `• *Arabic* : ${x[i].arabic}\n`
niatshalat += `• *Latin* : ${x[i].latin}\n`
niatshalat += `• *Terjemahan* : ${x[i].terjemahan}\n`
})
reply(niatshalat)
})
case 'bacaanshalat': case 'bacaansholat':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson("https://islamic-api-zhirrr.vercel.app/api/bacaanshalat")
.then(x => {
var bacaanshalat = "[ *BACAAN SHOLAT* ]\n"
Object.keys(x).forEach((i) => {
bacaanshalat += `• *Id* : ${x[i].id}\n`
bacaanshalat += `• *Name* : ${x[i].name}\n`
bacaanshalat += `• *Arabic* : ${x[i].arabic}\n`
bacaanshalat += `• *Latin* : ${x[i].latin}\n`
bacaanshalat += `• *Terjemahan* : ${x[i].terjemahan}\n`
})
reply(bacaanshalat)
})
break
case 'runtime':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
reply(`Runtime : ${runtime(process.uptime())}`)
break
case 'kanmusunights': 
case 'arknuts': 
case 'rule34': 
case 'pokeporn': 
case 'inumimi': 
case 'dtittytouching': 
case 'handbras': 
case 'taihou': 
case 'christmascake': 
case 'officelady': 
case 'nekomimi': 
case 'waifusgonewild': 
case 'gameovergirls': 
case 'sukebei': 
case 'corruptionhentai': 
case 'tentai': 
case 'atago': 
case 'yaoi': 
case 'netorare': 
case 'kemonomimi': 
case 'yuri': 
case 'ahegao': 
case 'pantsu': 
case 'hentai': 
case 'ecchi': 
if (MyData("status", sender) == false) return reply("FITUR INI KHUSUS USER PREMIUM\n\n" + `~> Dapatkan premium di\n> ${prefix}getprem\n~> Atau beli premium Di Owner bot`)
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
try{ const res = await reddit.hentai(command, "hot") 
var hentai = res.data.url_overridden_by_dest
} catch (err) { console.log(err)
var hentai = "https://www.womgp.com/blog/wp-content/uploads/2021/03/error-404.jpg"}
sendMedia("image", hentai, "Nih kack...").catch(err => console.log("Error silahkan coba Lagi.."))
break
case 'beritanews1':case 'beritanews2':case 'beritanews3':case 'beritanews4':case 'beritanews5':case 'beritanews6':case 'beritanews7':case 'beritanews8':case 'beritanews9':case 'beritanews10':
case 'beritanews11':case 'beritanews12':case 'beritanews13':case 'beritanews14':case 'beritanews15':case 'beritanews16':case 'beritanews17':case 'beritanews18':case 'beritanews19': case 'beritanews20':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson("https://newsapi.org/v2/top-headlines?country=id&apiKey=a7c95681a36046248b57a714d933fd5a").then(x => {
sendMedia("image", x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].urlToImage ,`[ *BERITA[${body.slice(11).trim().split(/ +/).shift().toLowerCase()}]* ]
• *Source* : ${x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].source.name}\n
• *Author* : ${x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].author}\n
• *Title* : ${x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].title}\n
• *Desk* : ${x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].description}\n
• *Url* : ${x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].url}\n
• *Public* : ${x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].publishedAt}\n
• *Content* : ${x.articles[body.slice(11).trim().split(/ +/).shift().toLowerCase()].content}\n`)
})
break
case 'recipes':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson("https://md-devs.herokuapp.com/api/rimurubotz?type=recipes").then(x => {
var recipes = "[ *RECIPES* ]\n"
Object.keys(x.data.results).forEach((i) => {
recipes += `• *Title* : ${x.data.results[i].title}\n`
recipes += `• *Key* : ${x.data.results[i].key}\n`
recipes += `• *Times* : ${x.data.results[i].times}\n`
recipes += `• *Portion* : ${x.data.results[i].portion}\n`
recipes += `• *Dificulty* : ${x.data.results[i].dificulty}\n\n`
})
reply(recipes)
}).catch(err => console.log(err))
break
case 'recipespage':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
const recipespage = [1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9].length))]
fetchJson(`https://md-devs.herokuapp.com/api/rimurubotz?type=recipespage&text=${recipespage}`).then(x => {
var recipespage = "[ *RECIPES PAGE* ]\n"
Object.keys(x.data.results).forEach((i) => {
recipespage += `• *Title* : ${x.data.results[i].title}\n`
recipespage += `• *Key* : ${x.data.results[i].key}\n`
recipespage += `• *Times* : ${x.data.results[i].times}\n`
recipespage += `• *Portion* : ${x.data.results[i].portion}\n`
recipespage += `• *Dificulty* : ${x.data.results[i].dificulty}\n\n`
})
reply(recipespage)
}).catch(err => console.log(err))
break
case 'recipeslimit':
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
const recipeslimit = [1,2,3,4,5,6,7,8,9][Math.floor(Math.random() * ([1,2,3,4,5,6,7,8,9].length))]
fetchJson(`https://md-devs.herokuapp.com/api/rimurubotz?type=recipeslimit&text=${recipeslimit}`).then(x => {
var recipeslimit = "[ *RECIPES LIMIT* ]\n"
Object.keys(x.data.results).forEach((i) => {
recipeslimit += `• *Title* : ${x.data.results[i].title}\n`
recipeslimit += `• *Key* : ${x.data.results[i].key}\n`
recipeslimit += `• *Times* : ${x.data.results[i].times}\n`
recipeslimit += `• *Portion* : ${x.data.results[i].portion}\n`
recipeslimit += `• *Dificulty* : ${x.data.results[i].dificulty}\n\n`
})
reply(recipeslimit)
}).catch(err => console.log(err))
break
case 'recipescategory': 
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
fetchJson(`https://md-devs.herokuapp.com/api/rimurubotz?type=recipesbycategory&text=masakan-hari-raya`).then(x => {
var recipescategory = "[ *RECIPES CATEGORY* ]\n"
Object.keys(x.data.results).forEach((i) => {
recipescategory += `• *Title* : ${x.data.results[i].title}\n`
recipescategory += `• *Key* : ${x.data.results[i].key}\n`
recipescategory += `• *Times* : ${x.data.results[i].times}\n`
recipescategory += `• *Portion* : ${x.data.results[i].portion}\n`
recipescategory += `• *Dificulty* : ${x.data.results[i].dificulty}\n\n`
})
reply(recipescategory)
}).catch(err => console.log(err))
break
case 'searchcategory': 
if (MyData("id", sender) !== sender) return textOverlay(pushname, "Anda belum terdaftar di database bot, silahkan daftar terlebih dahulu, gunakan command #daftar", "Daftar dulu ya kak:3");
if (!q) return reply("Masukkan query")
fetchJson(`https://md-devs.herokuapp.com/api/rimurubotz?type=searchrecipes&text=${q}`).then(x => {
var searchcategory = "[ *RECIPES SEARCH* ]\n"
Object.keys(x.data.results).forEach((i) => {
searchcategory += `• *Title* : ${x.data.results[i].title}\n`
searchcategory += `• *Key* : ${x.data.results[i].key}\n`
searchcategory += `• *Times* : ${x.data.results[i].times}\n\n`
})
reply(searchcategory)
}).catch(err => console.log(err))
break

default:
/*if (m.messages[0].type == "protocolMessage"){
console.log("=>>>>>>>>>>>>>>>>>>>>>>\n")
nayla.sendMessage(from, {text:`@${sender.split('@')[0]} Terdeteksi menghapus pesan`, mentions: [sender]}, {quoted:nay})
}
if (budy.includes("$")){
if (!isOwner) return reply("Only Owner")
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
}
*/// BLOM SELESAI BANG YG INI:3

if (isAntilink) {
if (!isGroup) return
if (budy.includes("http")) { reply("ANTILINK")
await nayla.groupParticipantsUpdate(from, [sender], "remove")}
}
}
} catch (err) {
console.log(color('[ERROR]', 'red'), err)
}
}


