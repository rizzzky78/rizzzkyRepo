/*
================================ README ====================
Original Source from:
============[Sunaookami Shiroko ]============
Real case from : naylachan
Open source project
Revision ver 1.0
Last edited: 12 Nov 2021
================================
Marketing Bot | Auto Reply WhatsApp Bot
Last Edited 09 January 2022
Dilarang keras menyalin project ini!
Owner Script wa.me/6281329585825
===============================
*/
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const { nyz } = require('./private')
const imgbb = require('imgbb-uploader')  
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))


/* ===================================================[  CHANGELOG BOT  ]==============================================================

	   All Features are removed and replaced, changing into marketing Bot

   ===================================================[ BOT WHATSAPP ]==============================================================*/
             	   
const { 
	bayarLimit, 
	limitAdd
} = require('./lib/limitatm.js') 
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

grub1 = setting.grub1
grub2 = setting.grub2
grub3 = setting.grub3
apikey = nayz.apikey
elitrespon = nayz.elitrespon
connet = nayz.connet
auth0r = nayz.auth0r
replytroli = nayz.replytroli
prefix = setting.prefix
limitawal = 40
blocked = []
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz
lort = setting.lort
tz = setting.tz 
cr1 = setting.cr1
cr2 = setting.cr2
numberbot = setting.numberbot
apivhtear = setting.apivhtear
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
naylachan = setting.naylachan
namebot = setting.namebot
ownername = setting.ownername
donasi = setting.donasi
l0lhuman = setting.l0lhuman
pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo
dana = setting.dana
// Secondary Database
	const NameBot = 'S...'
const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const bulan = nayBulan[moment().format('MM') - 1]
const isElite = checkEliteUser(sender)
/*Sections 0 - 6
Commands:
	0 => help. <includes shortcut: produk, social media, market places, ekspedisi, contact person, etc>
	1 => produk <includes: NameProduct, PriceProduct, DescriptionsProduct>
	2 => social media
	3 => market place
	4 => ekspedisi
	5 => contact person
	6 => info developer bot
*/
//->Pictures-Cloud/Hosting Sections, starts here
	// Main-blob , refers to <help> commands <message with media(img)>
	const thisMainPicRaw = ['sample 1','sample 2','sample 2']
		const MainPic = thisMainPicRaw[Math.floor(Math.random() * (thisMainPicRaw.length))] // Randomize
	// Main-Product, (replace <code> with name's product)
		// Herbs
			const Herbs_code = ['sample']
			const Herbs_code = ['sample']
			const Herbs_code = ['sample']
			const Herbs_code = ['sample']
		// Health Food & Beverages
			const HealthBeverages_code = ['sample']
			const HealthBeverages_code = ['sample']
			const HealthBeverages_code = ['sample']
			const HealthBeverages_code = ['sample']
		// Cosmetics and Home Care
			const CostHomecare_code = ['sample']
			const CostHomecare_code = ['sample']
			const CostHomecare_code = ['sample']
			const CostHomecare_code = ['sample']
//<-Pictures-Cloud/Hosting Sections, ends here			

	//Link picture menus Bot
	const pictMenusX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg'] //for Menus and All Menus <1>
	const pictNSFWX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu2.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu3.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu4.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu5.jpg']
	//['1','2','3','4','5','6','7','8','9'] //NSFW Menus <2>
	const pictRMenuX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu2.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu3.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu4.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu5.jpg']
	//['1','2','3','4','5','6','7','8','9'] //for randomize menus pict <3>

	const pictMenus = pictMenusX[Math.floor(Math.random() * (pictMenusX.length))] // <1>
	const pictNSFW = pictNSFWX[Math.floor(Math.random() * (pictNSFWX.length))] // <2>
	const pictRMenu = pictRMenuX[Math.floor(Math.random() * (pictRMenuX.length))] // <3>

//Auto reply - auto reply sections
/* Salam
must include = Assalamualaikum | Assalamuallaikum | Asalamualaikum | Misi | ==> lower case = | assalamualaikum | asalamualaikum |*/
const saySalamX = ['Walaikumsalam warohmatullohiwabarakatuh','Walaikumussalam...','Walaikumsalam kak','Walaikumusallam kak']
	const saySalam = saySalamX[Math.floor(Math.random() * (saySalamX.length))]
/* Sapaan
must include = Halo | Permisi | Punten | Misi | ==> lower case = | halo | permisi | punten | misi |*/
const SapaanX = ['Halo kak terimakasih telah menghubungi ','','','','']
	const sapaan = SapaanX[Math.floor(Math.random() * (SapaanX.length))]
//balesan terimakasih
const replyThxZ = ['Ya sama-sama kak','Terimakasih kembali kak','Oke kak, makasih juga','Sama-sama kak']
	const reactBotZ = ['Y']
	//math floor random starts here! --> stringfy to default section
	const reactBot = reactBotZ[Math.floor(Math.random() * (reactBotZ.length))] //--> string to above statement
	const replyThx = replyThxZ[Math.floor(Math.random() * (replyThxZ.length))]
	//ends here			                      
// ends here
   
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse(fs.readFileSync('./myBot/Elite.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./myBot/antilink.json'))
const event = JSON.parse(fs.readFileSync('./myBot/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./myBot/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./myBot/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./myBot/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./myBot/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./myBot/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./myBot/antibocil.json'))
const _limit = JSON.parse(fs.readFileSync('./myBot/limit.json'))
const botx = JSON.parse(fs.readFileSync('./myBot/botx.json')) 
const nayXi = JSON.parse(fs.readFileSync('./myBot/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./myBot/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./myBot/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./myBot/nayXix.json')) 
    
/*======================================================[ TIME BOT ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)} Jam ~ ${pad(minutes)} Menit ~ ${pad(seconds)} Detik`
            }

/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CONNECTING  ]==============================================================*/                  	    
                	 
            async function starts() {
        	const nayla = new WAConnection()
	        nayla.logger.level = 'warn'
	        console.log(banner.string)
        	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('My Bot - Marketing Bot'))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Connecting...')		   
        	})
	        nayla.on('open', () => {
	    	success('2', 'My Bot - Marketing Bot') // 1000 ms = 1 dtk
	    	setTimeout( () => {
	    	console.log(color(`Sedang memulai Bot`, 'pink'))
	    	}, 1000)
	    	setTimeout( () => {
	    	console.log(color(`Menyiapkan file index.js untuk dieksekusi`, 'pink'))
	    	}, 2000)
	    	setTimeout( () => {
	    	console.log(color(`Node index.js sedang memulai...`, 'pink'))
	    	}, 3000)
	    	setTimeout( () => {
	    	console.log(color(`Berhasil memulai, menyiapkan koneksi...`, 'pink'))
	    	}, 4000)
	    	setTimeout( () => {
	    	console.log(color(`Connecting.... mengecek jaringan`, 'pink'))
	    	}, 5000)
	    	setTimeout( () => {
	    	console.log(color(`Sukses memulai Bot dan siap dipakai dan pastikan koneksi internet selalu menyala dan stabil`, 'pink'))
	    	}, 6000)	
			setTimeout( () => {
			console.log(color(`Pastikan koneksi internet selalu menyala dan stabil`, 'pink'))
	    	}, 7000)    	     	
         	})         	
         	nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, `Bot sukses connect pak, siap dipakai!`, MessageType.text)
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ WELCOME ]==============================================================*/                  	    
            nayla.on('group-participants-update', async (anu) => {
	    	if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    try { //make an alternate
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`) //ambil pp yg br masuk grub
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		    }
			teks = `*Halo kak @${num.split('@')[0]}*\n` //member
			teks += `*Selamat Datang di Grub*\n`
			teks += `*${mdata.subject}*\n`
			teks += `Semoga betah ya...`			
			let buff = await getBuffer(ppimg)
		    nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0] //out dari grub
			try {
			ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`) //ini kalo pp nya kosonk
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `Selamat tinggal!,bye bye~ 🥳 @${num.split('@')[0]} jasamu akan Shiro-chan kubur dalam² \nSemoga tenang disana yaaa 😘`
			let buff = await getBuffer(ppimg)
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	        
             
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	                 
	        
	        nayla.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.prefix
			global.blocked				 
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
	      	runtime = process.uptime()   
	      	const fake3 = `- *${namebot}* -\nWaktu Aktif: ${kyun(runtime)}` 	
	      	const nay1 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": fake3} } } 
			const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false
			const isNayXi = isGroup ? nayXi.includes(from) : false			     
			const isNayXix = isGroup ? nayXix.includes(from) : false			 		 
			const isPrem = prem.includes(sender) || isOwner				
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotx = isGroup ? botx.includes(from) : false
			//const istebakgambar = isGroup ? tebakgambar.includes(from) : false
			pushname = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined									            
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR ${command} TIDAK TERDAFTAR DIDALAM MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const reply = (teks) => {
			nayla.sendMessage(from, teks, text)
			}				
			/*const reply = (teks) => {
				jds = []
				mentions(teks, jds, true(from, teks, text))
			}*/
			const nayz = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addEliteUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        _Elite.push(obj)
          	fs.writeFileSync('./nayla/Elite.json', JSON.stringify(_Elite))
            }	
            const checkEliteUser = (sender) => {
	        let status = false
	        Object.keys(_Elite).forEach((i) => {
		    if (_Elite[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }                  
			var chat1 = `0@s.whatsapp.net`
		    var split = `Sunaookami Shiroko`
		    var chat2 =         {
				contextInfo:{
					participant: chat1,
						quotedMessage: {
							extendedTextMessage: {
	    					text: split,
	     					}
     					}
	    		}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD'
		   const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: KEI BOTv7\n` 
            + `ORG: AUTHOR;\n`
            + `TEL;type=CELL;type=VOICE;waid=6281329585825:+62 813-2958-5825\n`
            + 'END:VCARD' 
            colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NAMA', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('➻', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NAMA', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('➻', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))			 
            const xxx = '```'  
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`Yahh maaf ya , tapi limit  sudah habis :(`, text,{ quoted: nay})
            nayla.sendMessage(from, `Sisa Limit  : *${limitCounts}*`, text, { quoted : nay})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            nayla.sendMessage(from, `Sisa Limit  : *${limitCounts}*`, text)
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            nayla.sendMessage(from, `Maaf ya  :( *${pushname}* Limit  sudah habis. \nLimit bisa didapatkan kembali dengan cara level up atau mulung dengan cara ketik *#claim*`, text, {quoted: nay})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json',JSON.stringify(_limit))
            return false
            }
            }    
            if (isGroup && isElite && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            bayarLimit(sender, 3)
            await reply(nyz.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
            }
            } catch (err) {
            console.error(err)
            }
            }     
             
            switch (command) {
/*Initial starts:

*/
/*Sections 0 - 6
Commands:
	0 => help. <includes shortcut: produk, social media, market places, ekspedisi, contact person, etc>
	1 => produk <includes: NameProduct, PriceProduct, DescriptionsProduct>
	2 => social media
	3 => market place
	4 => ekspedisi
	5 => contact person
	6 => info developer bot
*/
/*for example nayla.Starts<this command>.(from, where to where, <media type>, {quoted or not, captioned or not}) //ends here

This section is subtitude of all menus, products, CP, etc
must include => | Produk | Social Media | Market place | Ekspedisi | Contact Person | Info Developer Bot
	=> Produk = | Perawatan Herbal | Suplemen/Obat Herbal | Lain-lain | Semua Produk |
		=> | Detail Produk | <must include: pictures, description, price, etc> per products
	=> Social Media = | Facebook Page/Fanspage | Instagram Page | etc |
	=> Market Place = | Tokopedia | Shopee | Bukalapak | etc |
	=> Ekspedisi = | JNE, JNT, POS, SiCepat, dll |
	=> Contact Person = | WhatsApp Number/Facebook profile through messengger |
		-> mw Wa is wa.me/6281329585825 <make an alternate> wa.me/ini nomor telp
*the path shortcut of pictures hosting sources can be seen in JS Ln 200 */
//0	
case 'help':
case 'bantuan':
	reply(`Mohon tunggu sebentar ya kak...`)		
	iniPictureBantuan =	await getBuffer(`${kosonk}`)	
iniTextBantuan = `
Halo kak ${pushname}, Terima kasih telah menghubungi Dzakiy Herb HNI

${iniPromosiGan}

Berikut adalah daftar informasi yang dapat kami berikan kepada kakak:
| ${prefix}produk
| Untuk melihat semua produk yang tersedia di marketplace kami

| ${prefix}social
| Untuk melihat platform akun sosial media yang kami gunakan

| ${prefix}ekspedisi
| Merupakan daftar ekspedisi yang tersedia untuk pengiriman dan perkiraan jumlah ongkos kirim sesuai lokasi

| ${prefix}cp
| Contact Person atau nomor handphone seller yang dapat dihubungi

| ${prefix}info
| Berisikan informasi lengkap tentang marketplace kami beserta pengembang Bot WhatsApp ini

Silahkan kakak gunakan perintah diatas untuk melihat detailnya
Cara penggunaan perintah ${prefix}perintah, contoh ketik ${prefix}produk

Terimakasih, semoga sehat selalu.
`	       	 			   
nayla.sendMessage(from, iniPictureBantuan, image, { quoted: nay, caption: iniTextBantuan })         
break

//1
case 'Produk':
case 'produk':
reply(`Mohon tunggu sebentar ya kak...`)
iniPictureAllProduct = await getBuffer(`${kosonk}`)
iniTextMenuProduk = `
Halo kak ${pushname}, Terimakasih telah menghubungi Dzakiy Herb HNI

${iniPromosiGan}

Berikut adalah daftar produk HNI herbal yang tersedia di marketplace kami:

| ${prefix}herbal
| Produk Herbal, obat herbal yang terbukti khasiatnya dan tidak memiliki efek samping tertentu serta bebas untuk dikonsumsi

| ${prefix}suplemen
| Health Food & Beverages, makanan/minuman pendukung untuk menjaga kamu tetap sehat

| ${prefix}perawatan
| Cosmetics and Home Care, tidak hanya obat/suplemen herbal tetapi kami juga menyediakan produk untuk perawatan tubuh dan lain-lain

Silahkan kakak gunakan perintah diatas untuk melihat detailnya, contoh: Ketik ${prefix}suplemen

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...
`
nayla.sendMessage(from, iniPictureAllProduct, image, { quoted: nay, caption: iniTextMenuProduk })
break

//2
case 'Social':
case 'social':
	iniPictureSocialMedia = await getBuffer(`${kosonk}`)
iniTextSocialMedia = `
Nih ya kak...
FaceBook  : ...
Instagram : ...

Mungkin followers ny baru sedikit atau belum terlalu famous ya kak, tapi kita mempriotitaskan pelanggan agar dapat mencapai kepuasan maksimal
Kakak juga bisa share ke temen-temen kakak biar lebih rame lagi yaa...

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...
`
nayla.sendMessage(from, iniPictureSocialMedia, image, { quoted: nay, caption: iniTextSocialMedia })
break

case 'grupmenu':                      
if (!isElite) return reply(nyz.nayzelite(pushname, prefix)) 
reply(`${pushname} ~\nGathering data, please wait....`)                             
GMenu = await getBuffer(`${pictRMenu}`)  
grupMenu =`
╭─── 「 Shiroko Bot 」── 
├ • *Nama :* Sunaookami Shiroko
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

Grup Menu
│${tz} ${xxx}${prefix}add${xxx}
│${tz} ${xxx}${prefix}kick${xxx}
│${tz} ${xxx}${prefix}promote${xxx}
│${tz} ${xxx}${prefix}demote${xxx}
│${tz} ${xxx}${prefix}antilink${xxx}
│${tz} ${xxx}${prefix}welcome${xxx}
│${tz} ${xxx}${prefix}hidetag10${xxx}
│${tz} ${xxx}${prefix}group${xxx}
│${tz} ${xxx}${prefix}linkgc${xxx}
│${tz} ${xxx}${prefix}tagall
│${tz} ${xxx}${prefix}delete
╰──❲ ${xxx}${NameBot}${xxx}`					 
nayla.sendMessage(from, GMenu, image, { quoted: nay, caption: grupMenu }) 
                    break  
                    case 'ownermenu':       
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))  
					reply(`${pushname} ~\nGathering data, please wait....`)
					OMenu = await getBuffer(`${pictRMenu}`)               
OwnMenu =`╭─── 「 Shiroko Bot 」── 
├ • *Nama :* Sunaookami Shiroko
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ ${xxx}Owner Menu${xxx}
│${xxx}*FYI: hanya khusus utk Owner Bot!${xxx}	
│${tz} ${xxx}${prefix}dellprem${xxx} 
│${tz} ${xxx}${prefix}addprem${xxx}
│${tz} ${xxx}${prefix}clearall${xxx}
│${tz} ${xxx}${prefix}bc${xxx}
│${tz} ${xxx}${prefix}owner${xxx}
│${tz} ${xxx}${prefix}author${xxx}
│${tz} ${xxx}${prefix}setout${xxx}
│${tz} ${xxx}${prefix}setwelcome${xxx}
│${tz} ${xxx}${prefix}settz${xxx}
│${tz} ${xxx}${prefix}setthum${xxx}
│${tz} ${xxx}${prefix}setpp${xxx}
│${tz} ${xxx}${prefix}setprefix${xxx}
│${tz} ${xxx}${prefix}setreply${xxx}
│${tz} ${xxx}${prefix}setplugin-leveling${xxx}
╰──❲ ${xxx}${NameBot}${xxx}` 
nayla.sendMessage(from, OMenu, image, { quoted: nay, caption: OwnMenu })                                                     
                    break                                                                                                                                                                                                                                                                            				                                                                                                                                                                              
/* ==================================================[ -MENU ]==============================================================*/
case 'join':  
if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
if (isLimit(sender)) return
await limitAdd(sender) 
if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
const bug11 = body.slice(5)
if (bug11.length > 300) return nayla.sendMessage(from, 'Maaf  Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*Shirogane Kei BOT v2*`} } }})
var nomor = nay.participant
const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
var optionsp = {
text: bug22,
contextInfo: {mentionedJid: [nomor]},
}                     
nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `PREINVITE`} } } })                    
reply('BOT AKAN SEGERA MASUK. DITUNGGU YA')                     
break  
case 'claim':
	jds = []
if (!isGroup) return reply(`GRUP ONLY`)
if (!isBotx) return reply(`MODE LEVELING TIDAK AKTIF\nSILAHKAN KETIK ${prefix}leveling`)
Limit =`selamat ${pushname} berhasil mendapatkan Limit sebesar: *${nayla3}*`
mentions(Limit, jds, true)
addLevelingLevel(sender, 1)
bayarLimit(sender, nayla3) 
break
case 'mygrub':
case 'mygrup':
	jds = []
my1 = `*GRUP LIST*\n`
my1 += `➻ *GRUB1* = ${grub1}\n`
my1 += `➻ *GRUB2* = ${grub2}\n`
my1 += `➻ *GRUB3* = ${grub3}\n`
mentions(my1, jds, true)
break
//ganti ini setiap perbaharuan script!				
case 'aboutbot':
abt = `For Your Information, please read carefuly!
-
Last updated on: 12 Nov 2021
Limit awal set up to 40
-
> Bot ini literally cuma buat seneng-seneng aja ya beb
> Fitur Bot ini limited BANGET, jd jgn komplen
> Untuk fitur-fitur lain please refer to another Bot yg udh ada
> Tidak menerima request fitur, belibet ah
> Udahlah ya, males gw ngetiknya... bye
< makasih yg udah baca sampe akhir hehe...
-
Regards
Shiro chan
`
mentions(abt, jds, true)
break					
case 'daftar':
case 'reg' :
const serialUser = createSerial(20)
veri = sender
if (isGroup) {
addEliteUser(sender, pushname, time, serialUser)
try {					 
} catch {						 
}
   reply(nyz.elitenay(pushname, prefix))
console.log(color(`Nama : ${pushname} Sukses terdaftar!`, 'pink'))
} else {
addEliteUser(sender, pushname, time, serialUser)
try {						 
} catch {						  
}
 reply(nyz.elitenay(pushname, prefix))
 console.log(color(`Nama : ${pushname} Sukses terdaftar!`, 'pink'))
}
break                      	                                                                   
                    case 'toimg':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'nihh kak....jgn lupa bilang makasih peko'})
				    fs.unlinkSync(ran)
					})					
			    	break 
                    case 'readmore':  
			    	case 'more':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'chatlist':  
		         	case 'cekchat':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `Sunaookami Shiroko`
		     		var selepbot ={
						contextInfo:{
							participant: itsme,
								quotedMessage: {
									extendedTextMessage: {
										text: split,
	     							}
     							}
	    				}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	                case 'addsticker':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)          
			    	if (!isQuotedSticker) return reply('Reply stiker nya kak')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay1})
      				break
		        	case 'addvn':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedAudio) return reply('Reply vnnya kak!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa kak?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
		         	case 'getvn':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
			        case 'getsticker':  
		        	case 'gets':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
		        	case 'listvn':  
	         		case 'vnlist':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		        	case 'addimage':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		if (!isQuotedImage) return reply('Reply imagenya kaj!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa kak?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
		        	case 'getimage':  
                    case 'getimg':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		        	case 'imagelist':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
		        	case 'addvideo':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedVideo) return reply('Reply videonya kak!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa kak?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
			        case 'getvideo':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
		           	case 'listvideo':  
	           		case 'videolist':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
                    case 'setprefix':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Owner bot only!`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
					case 'setreply':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Owner bot only!`)
                    naylachan = body.slice(10)
                    reply(`Change reply To ${naylachan} SUCCESS!`)					 
					break 
					case 'setpp':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`Owner bot only!`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Sukses')
			        break 
			        case 'setthum':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`Owner bot only!`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef1.png', delb)
		            reply('Sukses')
			        break 
					case 'setwelcome':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome1 = body.slice(12)
                    reply(`Change welcome To ${welcome1} SUCCESS!`)					 
					break
					case 'setout':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Owner bot only!`)
                    welcome2 = body.slice(8)
                    reply(`Change out To ${welcome2} SUCCESS!`)					 
					break  
					case 'settz':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    tz = args[0]
                    reply(`Change tz To ${tz} SUCCESS!`)					 
					break 					 
                    case 'admin':  
         	        case 'owner':  
         	        case 'creator':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Itu kak, tolong jaga jaga norma, etika dan kesopanan dalam komunikasi ya kak :)',MessageType.text, { quoted: nay} )				
					break  
					case 'other':  
         	        case 'author':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return 
			        await limitAdd(sender)         	       
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vnayla}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Itu kak, tolong jaga jaga norma, etika dan kesopanan dalam komunikasi ya kak :)',MessageType.text, { quoted: nay} )				
					break    						
		//ends here										
                    case 'bc':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `[ *${namebot} BROADCAST* \n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *${namebot} BROADCAST* ]\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
					case 'clearall':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`Hanya dapat digunakan oleh pemilik Bot`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break									 	 
                    case 'linkgc':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (!isGroup) return reply(`Hanya dapat digunakan di grub`) 
				    if (!isBotGroupAdmins) return reply(`Maaf kak saya bukan admin`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
				    case 'tagall':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				    case 'delete':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    case 'del':  
				    case 'd':
					case 'hapus':  	
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
				    case 'kick':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`Cuma bisa di grup kak`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup...`)
					if (!isBotGroupAdmins) return reply(`Maaf kak saya bukan admin`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Selamat tinggal...\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`Selamat tinggal... @${mentioned[0].split('@')[0]}`, mentioned, true)
					nayla.groupRemove(from, mentioned)
					}					
					break 
					case 'hidetag':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					var value = body.slice(9)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					break
			    	case 'add':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (!isBotGroupAdmins) return reply(`Maaf kak saya bukan admin`)
					if (args.length < 1) return reply('Siapa yang mau di add kak? \nNih saya kasih contoh kak \n#add 628123xxxx ,jgn pakai tanda "+" dan "-" \nJika tetap tidak bisa mungkin karena di privat/yg mau di add baru saja keluar grup')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara ya kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nayla.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private kak')
					}  
					break 
				                        
					case 'bug':  
                    if (args.length < 1) return reply(`contoh ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*Sunaookami Shiroko`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
                    reply('sukses melapor bug, terimakasih')                     
					break   
					case 'request':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`mau request apa kak??\n${prefix}request *nama fitur*`)
                    const cet1 = body.slice(9)
                    if (cet1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ REQUEST FITUR ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    } 
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })
                    nayla.sendMessage(`6281329585825@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })                                    
                    reply(`TERIMAKASIH REQ ANDA AKAN KAMI PROSES`)
                    break                                                                                      
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                     	 
                   	case 'welcome':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (args.length < 1) return reply('Pilih 1 untuk mengaktifkan, dan 0 untuk menonaktifkan')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*Sudah aktif kak!')
					welkom.push(from)
					fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
					reply('[❗] Sukses mengaktifkan fitur welcome kak!')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
				    reply('[❗] Sukses menonaktifkan fitur welcome kak!')
					} else {
					reply(`Sukses aktif kak!`)
					}
					break  
                    case 'antilink':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antilink.push(from)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break					 
					case 'setplugin-leveling':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
		            if (!isOwner) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTI KAKF* !!!')
					botx.push(from)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] ACTIVATED LEVELING*')
					} else if (Number(args[0]) === 0) {
					botx.splice(from, 1)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] DEACTIVATED LEVELING*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					break
					case 'antikasar':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN?? NGOTAK DONK, hehe maapin Kei-Chan ya kak habisnya lu tolol si`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					nayXi.push(from)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] ACTIVATED ANTI KASAR*')
					} else if (Number(args[0]) === 0) {
					nayXi.splice(from, 1)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] DEACTIVATED ANTI KASAR*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antitag':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN?? NGOTAK DONK, hehe maapin Kei-Chan ya kak habisnya lu tolol si`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					nayXix.push(from)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] ACTIVATED ANTI TAG*')
					} else if (Number(args[0]) === 0) {
					nayXix.splice(from, 1)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] DEACTIVATED ANTI TAG*')
					} else {
					reply(`PILIH 1/0`)
					}
					break		 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                     	 										            
                    case 'test':                   
                    reply(`Siapp kak`)
                    break
                    case 'addprem':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`Maaf nih kak, fitur ini khusus untuk Owner Saya, hubungi owner utk info lebih lanjut :)`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Yeayyy... Berhasil menambahkan ke anggota premium kak!`)
					break				
					case 'dellprem':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return reply(`Maaf nih kak, fitur ini khusus untuk Owner Saya, hubungi owner utk info lebih lanjut :)`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium, yahhh jangan sedih ya kak >,,<`)
					break
					case 'group':
					case 'gc':
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`Gomennasai, Kei chan bukan admin :(`)
					if (!isBotGroupAdmins) return reply(`Maaf nih kak, apakah kakak admin?`)
					if (args[0] === 'buka') {
					    reply(`*Berhasil membuka grup!*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*Berhasil menutup grup!*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
					case 'hidetag10':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
					case 'ingfo':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text, {quoted: nay1})					 
					break

					 case 'demote':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					}					 
					break
				    case 'promote':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	                                                        
					case 'pesan':
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak ada yang bisa Kei chan bantu?`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					reply('PESAN SUDAH TERKIRIM')
					break	            	
                    case 'limit':                     
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				    checkLimit(sender)
					break 
			     	case 'leveling':
                    if (!isGroup) return reply('GRUP ONLY')
                    if (!isGroupAdmins) return reply('Maaf nih kak, hanya dapat diaktifkan oleh admin grup')
                    if (args.length < 1) return reply('Pilih: enable/disable')
                    if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
           	        reply('Fitur Leveling berhasil diaktifkan kak!')
                    } else if (args[0] === 'disable') {
                	_leveling.splice(from, 1)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
                    reply('Fitur Leveling berhasil dinonaktifkan kak!')
                    } else {
           	        reply('PILIH enable/disable')
                  	}
				    break 
				    case 'level':
                    if (!isLevelingOn) return reply('Maaf kak, fitur leveling tidak aktif, ketik #leveling dan #setplugin-leveling untuk mengaktifkan!')
                    if (!isGroup) return reply('Grup only kak :)')
				piclevel = await getBuffer(`${pictlevel}`)
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    if (userLevel === undefined && userXp === undefined) return reply(nyz.lvlnul())
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
resul =`Nih Data dirimu:
Nama: ${pushname}
Level: ${userLevel}
ID WA : wa.me/${sender.split("@")[0]}
Exp : ${userXp}/${requiredXp}
`            
                    nayla.sendMessage(from, piclevel, image, { quoted: nay, caption: resul })
			    	break				                                                                                                                                                                                                                                           
/*===================================================[ BOT WHATSAPP ]==============================================================*/                       	                    
                    default:                              	
	//Reactions starting from here
		//mungkin kekny ad yg ga work
		// ${reactBot}	${reactToxic} ${reactToxic2} ${reactNgeri}
		// ${reactPagi} ${reactSiang} ${reactMalam} ${reactSepi}						    
		if (budy.includes("Cara pake bot gimana?")){
			jds = []
			AA0 = `Silahkan ketik ${prefix}bothelp kak :)`
			mentions(AA0, jds, true)
		}
		if (budy.includes("Sepi")){
			jds = []
			AA25 =`${reactSepi}`
			mentions(AA25, jds, true)
		} 	  					
/* ========================================[ ERR, NOT FOUND/INVALID COMMAND ]=========================================================*/                    	 				                    
if (body.startsWith(`${prefix}${command}`)) {
jds = []                    
anu1 = `
Halo kak ${pushname}

Mohon maaf sepertinya perintah ${command} tidak ada di ${prefix}help/bantuan
Silahkan cek kembali apakah perintah sudah tepat atau belum, atau bisa lihat semua perintah di ${prefix}semua

Terimakasih kak,..
Semoga sehat selalu.
`      
                    (mentions(anu1, jds, true))
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   reply('ERROR ATAU APIKEY UNVALID')
		}
	})
}
starts() 