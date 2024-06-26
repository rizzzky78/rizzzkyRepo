/*
================================ README ====================
Original Source from:
============[Sunaookami Shiroko ]============
Real case from : naylachan
Open source project
Revision ver 1.0
Last edited: 12 Nov 2021
*Requires WhatsApp API's / Baileys
================================
Marketing Bot | Auto Reply WhatsApp Bot
Last Edited 10 March 2022
Feel free to continue/mod this project
Owner Script wa.me/6281329585825 AN: Rizky
myRepository : https://github.com/rizzzky78/rizzzkyRepo
*for push-pull requests
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
	bayarLimit, //this is already deprecated/unused
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

grub1 		= setting.grub1
grub2 		= setting.grub2
grub3 		= setting.grub3
apikey 		= nayz.apikey
elitrespon 	= nayz.elitrespon
connet 		= nayz.connet
auth0r 		= nayz.auth0r
replytroli 	= nayz.replytroli
prefix 		= setting.prefix
limitawal 	= 40
blocked 	= []
apixteam 	= setting.apixteam
cr 			= setting.cr
ownerrf 	= setting.ownerrf
ownerrz 	= setting.ownerrz
lort 		= setting.lort
tz 			= setting.tz 
cr1 		= setting.cr1
cr2 		= setting.cr2
numberbot 	= setting.numberbot
apivhtear 	= setting.apivhtear
fake1 		= setting.fake1
fake2 		= setting.fake2
author 		= setting.author
naylachan 	= setting.naylachan
namebot 	= setting.namebot
ownername 	= setting.ownername
donasi 		= setting.donasi
l0lhuman 	= setting.l0lhuman
pulsa 		= setting.pulsa
gopay 		= setting.gopay
ovo 		= setting.ovo
dana 		= setting.dana
//ends here


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
		    start('2', 'Connecting...')	// it's takes approx 10sec to initiate	   
        	})
	        nayla.on('open', () => {
	    	success('2', 'My Bot/XBot - AutoReply-with hosting WhatsApp Bot') // 1000 ms = 1 dtk
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
			console.log(color(`All stable, XBot versions: 1.0`, 'pink'))
	    	}, 7000)    	     	
         	})         	
         	nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, `Bot sukses Connect Pak! dan siap dipakai!`, MessageType.text)
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})   
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
			teks = `Selamat tinggal!,bye bye~ 🥳 @${num.split('@')[0]}\nSemoga tenang disana yaaa 😘`
			let buff = await getBuffer(ppimg)
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	            
/* ===================================================[ On ChatUpdate ]==============================================================*/                     	                 
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
			const isEventon = isGroup ? event.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
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
		    var split = `XBot Ver 1.0`
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










/* = = = = = = = = = = = = = = = = = => Main WhastApp Bot Database <= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
		//starts here
/* = = = = = = = = = = = = = = = = = => Main WhastApp Bot Database <= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */


// Secondary Database
const NameBot = 'XBot'
const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const bulan = nayBulan[moment().format('MM') - 1]
const isElite = checkEliteUser(sender) // is it business acc ?

// Primary Information
const mrktplc = 'Dzakiy Herbal HNI' // Nama toko
const wmProduct = 'Sedia Produk Official HNI untuk konsumsi dan kebutuhan sehari-hari Anda'
	const iniPromosiGan = '-' //untuk promosi, diskon , dll
	const ConPers = 'wa.me/6281393903674' // Main Seller Number/Managing Number
		//Secondary contact persons
		const NameSecPersFB = 'Sri Mulyati'
		const fblinkProfile = 'https://mobile.facebook.com/srim.winarso'
		const instagramLink = 'belum ada'
// Platform Marketplace
const linkTokped = 'menyusul..' // don't replace with []
const linkShopee = 'menyusul..'

//->Pictures-Cloud/Hosting Sections, starts here
	// Main-blob , refers to <help> commands <message with media(img)>
	const thisMainPicRaw = ['sample 1','sample 2','sample 2']
		const thisMainPic = thisMainPicRaw[Math.floor(Math.random() * (thisMainPicRaw.length))] // Randomize
	// AllOver Products
		const thisAllProduct = ['sample'] //can do it via GitHub or heroku
	// Social Media's
		const thisSocMed = ['sample'] // link here
	// Market Places
		const thisMrkPlc = ['sample'] // link here
	// Expeditions
		const thisExpdtn = ['sample'] // link here
	// Contact Persons
		const thisPersns = ['sample'] // link here
	// Developer Contact
		const thisDevCon = ['sample'] // link here
		//sub -menu product
		const menuHRB = ['sample']
		const menuHFB = ['sample']
		const menuCHC = ['sample']
		const menuALL = ['sample']
	// Main-Product, (replace <sample> with name's product)
		// Herbs, total = 11
			const hrb_andrographis 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_andrographis.png']
			const hrb_bilberry 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_bilberry.png']
			const hrb_biosir 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_biosir.png']
			const hrb_carnocap 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_carnocap.png']
			const hrb_deep_squalene 		= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_deep_squalene.png']
			const hrb_magafit 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_magafit.png']
			const hrb_ngreen 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_ngreen.png']
			const hrb_pegagan 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_pegagan.png']
			const hrb_siena 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_siena.png']
			const hrb_spirulina 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_herbs/herbs_spirulina.png']
			const hrb_samplex 				= ['sample_x']
		// Health Food & Beverages
			const hfb_centella 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_centella.png']
			const hfb_datessyrup 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_datessyrup.png']
			const hfb_deepolive 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_deepolive.png']
			const hfb_ettagoatmilk 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_ettagoatmilk.png']
			const hfb_hnihealth 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_hnihealth.png']
			const hfb_jannatea 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_jannatea.png']
			const hfb_jannateahot 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_jannateahot.png']
			const hfb_kopi7elemen 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_kopi7elemen.png']
			const hfb_madumultiflora 		= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_madumultiflora.png']
			const hfb_madupahit 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_health_food_beverages/hfb_madupahit.png']
			const hfb_sampley 				= ['sample_y']
		// Cosmetics and Home Care, total = 26
			//beauty code 1, = 2
			const chc_adaycream 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_adaycream.png']
			const chc_anightcream 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_anightcream.png']
			//sanitary napkins, code 2, 3
			const chc_diapers 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_diapers.png']
			const chc_hibispads 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_hibispads.png']
			const chc_hibispanty 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_hibispanty.png']
			//beauty health, code 3, = 9
			const chc_deoformen 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_deoformen.png']
			const chc_deoforwoman 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_deoforwoman.png']
			const chc_facialwash 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_facialwash.png']
			const chc_hayyashampoo 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_hayyashampoo.png']
			const chc_hnibodywash 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_hnibodywash.png']
			const chc_hnishampoo 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_hnishampoo.png']
			const chc_sabunkolagen 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_sabunkolagen.png']
			const chc_sabunmadu 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_sabunmadu.png']
			const chc_sabunpropolis 		= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_sabunpropolis.png']
			//pasta gigi, code 4, = 7
			const chc_pghAanggur 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_pghAanggur.png']
			const chc_pghAstrawberry 		= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_pghAstrawberry.png']
			const chc_pghAtuttyfruity 		= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_pghAtuttyfruity.png']
			const chc_pghcengkeh 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_pghcengkeh.png']
			const chc_pghpropolis 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_pghpropolis.png']
			const chc_pghsensitif 			= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_pghsensitif.png']
			const chc_pghsiwak 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_pghsiwak.png']
			//etc, code 5, = 5
			const chc_greenwashdetergen 	= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_greenwashdetergen.png']
			const chc_promol12 				= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_promol12.png']
			const chc_sterilyndesinfectant 	= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_sterilyndesinfectant.png']
			const chc_sterilynsanitizer 	= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_sterilynsanitizer.png']
			const chc_sterilynantiseptic 	= ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/thisProject/my_resource_xbot/products_pictures_nowm/products_cosmetics%26homecare/chc_sterilynantiseptic.png']
			const samplez 					= ['sample_z']
//ends here

/* = = = = = = = = = = = = = = = = = = = = = = = = Products Description = = = = = = = = = = = = = = = = = = = = = = = = =*/
// Herbs
const desc0_andrographis = `
ANDROGRAPHIS CENTELLA

KEGUNAAN
Secara tradisional digunakan untuk melindungi hati, meningkatkan sistem kekebalan tubuh, menurunkan panas, menghilangkan rasa nyeri dan antibiotik alami.

KOMPOSISI
Sambiloto (Andrographis paniculata)
Alang-alang (Imperata cylindrica)
Pegagan (Centella Asiatic)
 
KONTRA INDIKASI
Ibu hamil disarankan konsultasi dengan dokter bila mengkonsumsi herbal ini.
 
ATURAN PAKAI
3 x 2 kapsul sebelum makan

HARGA
Rp 85.000
75 kapsul @250mg
`
const desc0_bilberry = `
BILBERRY

KEGUNAAN
Membantu memelihara kesehatan mata dan kesehatan tubuh.

KOMPOSISI
Bilberry (Vaccinum myrtillus fructus extractum)

ATURAN PAKAI
Dewasa 2 kali sehari 2 kapsul

ANJURAN
Diminum setelah makan dan perbanyak minum air hangat.

HARGA
Rp 150.000
50 kapsul @500mg
`
const desc0_biosir = `
BIOSIR

KEGUNAAN:
Membantu meringankan gejala wasir

KOMPOSISI:
Daun Wungu (Graptophylli folium ekstrak)
Temulawak (Curcumae rhizome ekstrak)
Pegagan (Centellae herba ekstrak)
Sambiloto (Andrographidis herba ekstrak)
 
ATURAN PAKAI :
Dewasa : 3 x 1 kapsul sehari

ANJURAN :
Jika tidak memiliki masalah lambung, diminum 1 jam sebelum makan.

HARGA
Rp 90.000
50 kapsul @500mg
`
const desc0_carnocap = `
CARNOCAP

KEGUNAAN:
Membantu memelihara kondisi kesehatan pada penderita kanker.

KOMPOSISI:
- Keladi Tikus (Thyponii rhizoma ekstrak)
- Rumput Mutiara (Hedyotis corymbosa herba ekstrak)
- Jombang (Taraxacumae herba ekstrak)
- Sambiloto (Andrographidis herba ekstrak)
- Kunir Putih (Curcumae mangga rhizome ekstrak)
- Temu Putih (Curcumae zedoariae rhizome)
- Daun Dewa(Gynura divaricata folium ekstrak)
- Bidara Upas (Merremiae tubera ekstrak)
 

ATURAN PAKAI :
Dewasa: 3 x 1 kapsul sehari

ANJURAN :
Diminum 1 jam sebelum makan, jika memiliki masalah lambung, diminum 1 jam setelah makan.

HARGA
Rp 120.000
50 kapsul @500mg
`
const desc0_deep_squalene = `
DEEP SQUALENE

KEGUNAAN:
Suplemen untuk membantu menjaga kesehatan.

KOMPOSISI:
Minyak Squalene 100%

BAHAN TAMBAHAN :
Vitamin E, Gelatin (Bovine), Glycerine (RBD Stearine), Sorbitol, Nipagin, Nipasol, Ethyl Vanillin

ATURAN PAKAI :
Sehari 1-2 kapsul

PERINGATAN :
Hati-hati bagi penderita yang hipersensitif terhadap salah satu komponen produk ini.
Mengandung pemanis buatan sorbitol.

HARGA
Rp 250.000 (200/65)
50 softgels

Rp 460.000 (375/130)
100 softgels
`
const desc0_magafit = `
MAGAFIT

KEGUNAAN
Membantu memelihara kesehatan fungsi saluran pencernaan.

KANDUNGAN
Temu Lawak (Curcumae rhizoma ekstrak), Kunyit (Curcumae domestica rhizoma ekstrak), Daun Dewa (Gynura procumbensis folium ekstrak), Daun Sembung (Blumeae folium ekstrak), Kunyit Putih (Curcumae mangga rhizoma ekstrak)

ATURAN PAKAI
Dewasa 3 x 1 kapsul sehari

ANJURAN
Diminum 1 jam sebelum makan

HARGA
Rp 90.000
50 kapsul @500mg
`
const desc0_ngreen = `
N-GREEN

KEGUNAAN PRODUK:
Membantu memelihara daya tahan tubuh.

KOMPOSISI:
- Artrosphira plantensis ekstrak
- Mentha arvensis herba ekstrak
- Cyclea barbata Myers Folium ekstrak
- Centella asiatica herba ekstrak
- Annona muricate folium ekstrak
- Sauropus androgynus folium ekstrak
- Aloevera folium ekstrak
- Andrographis paniculata herba ekstrak
 
ATURAN PAKAI :
Dewasa 3 x 1 kapsul sehari

ANJURAN :
Diminum 1 (satu) jam sebelum makan, jika memiliki masalah lambung, diminum 1 jam setelah makan.

HARGA
Rp 130.000
50 kapsul @500mg
`
const desc0_pegagan = `
PEGAGAN HS

KEGUNAAN PRODUK:
Membantu sirkulasi darah

KOMPOSISI:
Centellae Herbal Ektrak

ATURAN PAKAI :
Dewasa 2 x 1 kapsul sehari

ANJURAN :
Diminum 1 (satu) jam sebelum makan.

HARGA
Rp 90.000
50 kapsul @500mg
`
const desc0_siena = `
SIENA

KEGUNAAN PRODUK:
Membantu melancarkan buang air besar.

KOMPOSISI:
Cassia angustifolia folium extractum
Aloe barbadensis folium extractum
 
ATURAN PAKAI :
2 x 2 kapsul per hari

KONTRADIKSI :
Dikontraindikasikan pada penderita dengan gangguan ginjal, jantung, sumbatan (obstruksi) usus, radang usus, usus buntu, nyeri perut yang tidak diketahui penyebabnya, kondisi dehidrasi dan gangguan eletrolit.

HARGA
Rp 75.000
50 kapsul @500 mg
`
const desc0_spirulina = `
SPIRULINA

KEGUNAAN PRODUK:
Digunakan untuk membantu memelihara daya tahan tubuh dan mengatasi anemia.

KOMPOSISI:
Spirulina sp

ATURAN PAKAI :
1 x 2 kapsul sehari

ANJURAN :
Diminum sebelum makan dan perbanyak minum air putih hangat.

PERINGATAN/PERHATIAN :
Simpan ditempat kering dan sejuk serta terhindar dari sinar matahari langsung.

HARGA
Rp 90.000
60 caps @300 mg
`


//Health Food & Beverages
const desc1_centella = `
CENTELLA TEH SINERGI

KANDUNGAN:
Pegagan, Teh Hijau, Jati Belanda, Jahe Merah.

PENYIMPANAN:
Simpan di tempat kering dan sejuk, terhindar dari sinar matahari secara langsung.

PENYAJIAN:
Masukkan 1 kantong teh celup kedalam 1 gelas air panas.

HARGA
Rp 70.000 (55/15)
24 uncang @2 gr
`
const desc1_datessyrup = `
DATES SYRUP

DESKRIPSI:
Dates Syrup Premium HNI memiliki rasa manis yang unik dan khas, sehingga memberikan sensasi berbeda bagi Anda. Dibuat dari 100% Kurma Alami pilihan terbaik untuk menjaga kesehatan tubuh Anda.

MANFAAT KURMA :
Sari kurma memiliki senyawa antibakteri yang efektif, Sangat baik bagi wanita hamil, Membantu memperkuat sistem kekebalan tubuh, Membantu pembentukan sel-sel baru dalam tubuh, Memiliki kandungan zat besi yang tinggi, Mempertahankan tingkat yang dari hemoglobin, Sangat baik bagi pencernaan, Memperkuat tulang dan membantu mencegah osteoporosis.

HARGA
Wilayah 1 & 2
Rp 45.000 (35/8)

Wilayah 3
Rp 50.000 (40/8)

Wilayah 4
Rp 73.000 (65/8)
350 ml
`
const desc1_deepolive = `
DEEP OLIVE

DESKRIPSI:
Berasal dari Buah Zaitun yang dikonsumsi sebagai sumber minyak nabati, yang mengandung beberapa protein, vitamin, dan mineral yang berguna bagi tubuh.

KANDUNGAN :
Extra Virgin Olive Oil 100%

HARGA
Wilayah 1 & 2
Rp 150.000 (120/30)

Wilayah 3
Rp 160.000 (127/30)

Wilayah 4
Rp 165.000 (135/30)
250 ml
`
const desc1_ettagoatmilk = `
ETTA GOAT MILK

DESKRIPSI:
Susu kambing lebih mudah dicerna, kandungan gizi lebih lengkap, merupakan sumber kalsium, protein, asam amino, fosfor, kalium, riboflavin (vitamin B2).

KEGUNAAN:
Tinggi protein dan tinggi kalsium, baik dikonsumsi semua usia, anak dan dewasa.

KOMPOSISI:
Susu kambing Etawa bubuk & gula

HARGA
Wilayah 1 & 2
Rp 75.000 (60/20)

Wilayah 3
Rp 90.000 (70/20)

Wilayah 4
Rp 110.000 (90/20)
10 sachets x 25 gr
`
const desc1_hnihealth = `
HNI HEALTH

KEGUNAAN:
Untuk memelihara kesehatan tubuh.

KOMPOSISI:
Sari kurma, madu alami, royal jelly, bee polen, bayam merah, wortel, beras hitam, rosella ungu, habbatussauda, zaitun, blue berry, black berry, daun ashitaba, curcuma, kulit manggis, daun sirsak, plum hitam, anggur hitam, spirulina, daun stevia, meniran, strawberry.

ATURAN PAKAI:
Dewasa : 2-3 x 3 sdm / hari
Anak-anak : 2-3 x 3 sdt / hari

HARGA
Wilayah 1 & 2
Rp 80.000 (60/20)

Wilayah 3
Rp 85.000 (65/20)

Wilayah 4
Rp 90.000 (70/20)
250 ml
`
const desc1_jannatea = `
JANNATEA COLD

KEGUNAAN:
JannaTea Cold adalah teh dengan sensasi Timur Tengah, terbuat dari bahan-bahan herbal pilihan yang sudah tidak diragukan lagi khasiatnya. Kombinasi dari semua bahan-bahan herbalnya mampu memberikan sensasi  menyegarkan.

KOMPOSISI:
- Daun tin
- Daun zaitun
- Peppermint
- Biji habbatusauda
- Daun bidara
- Kayu manis
- Kapulaga

HARGA
Rp 115.000 (95/30)
20 sachets x 50 gr
`
const desc1_jannateahot = `
JANNATEA HOT

KEGUNAAN:
JannaTea Hot untuk para pekerja keras diramu dari herba pilihan. Terbuat dari bahan-bahan herbal pilihan yang sudah tidak diragukan lagi khasiatnya. Kombinasi dari semua bahan-bahan herbalnya mampu memberikan sensasi menghangatkan.

KOMPOSISI:
- Kedaung
- Lada hitam
- Cabe jawa
- Cengkeh
- Kayu angin
- Adas

HARGA
Rp 115.000 (95/30)
20 sachets x 50 gr
`
const desc1_kopi7elemen = `
KOPI 7 ELEMEN

KEGUNAAN:
Kopi 7 Elemen adalah minuman yang terbuat dari kopi dengan 7 elemen tanaman:  biji, akar, batang, kulit, daun, bunga, dan buah.

KOMPOSISI:
- Kopi instan
- Krimer nabati
- Gula
- Gula aren
- Herba pilihan
 
PENYAJIAN :
Tuangkan satu sachet ke dalam satu cangkir, masukkan air panas, aduk hingga merata.

HARGA
Wilayah 1 & 2
Rp 110.000 (90/25)

Wilayah 3
Rp 120.000 (100/25)

Wilayah 4
Rp 150.000 (130/25)
POUCH 20 sachets x 23 gr

Wilayah 1 & 2
Rp 60.000 (50/13)

Wilayah 3
Rp 70.000 (60/13)

Wilayah 4
Rp 100.000 (90/13)
POUCH 10 sachets x 23 gr
`
const desc1_madumultiflora = `
MADU MULTIFLORA

KEGUNAAN:
Madu Asli HPAI Multiflora merupakan madu alami tanpa tambahan bahan lain yang terjamin mutu dan keasliannya serta lebih terjaga keutuhan kandungan gizinya. Dihasilkan dari lebah madu unggul “Apis Mellifera”, kaya akan vitamin, mineral, enzim, protein, hormon-hormon, serta zat antimikroba dan zat antibiotik. Madu Asli HPAI Multiflora telah lulus kendali mutu yang ketat dan mempunyai kadar air yang rendah sehingga tidak terjadi proses fermentasi.

KOMPOSISI:
Madu 100%

HARGA
Wilayah 1 & 2
Rp 100.000 (80/25)

Wilayah 3
Rp 105.000 (85/25)

Wilayah 4
Rp 120.000 (100/25)
250 gr
`
const desc1_madupahit = `
MADU PAHIT

KEGUNAAN:
Madu Pahit memiliki rasa yang khas karena diproduksi oleh lebah jenis Apis dorsata yang mengonsumsi nektar dari kuncup pohon yang pahit seperti tanaman kirinyuh, pohon jati, pohon mahoni, tanaman benalu dan tanaman Clidemia hirta atau tanaman keduduk bulu. Madu Pahit mempunyai kandungan alkaloid yang cukup tinggi. Zat ini berfungsi sebagai anti bakteri alami yang dapat membunuh berbagai bakteri yang dapat merugikan tubuh.

KOMPOSISI
Madu 100%

HARGA
Wilayah 1 & 2
Rp 120.000 (100/30)

Wilayah 3
Rp 125.000 (105/30)
250 gr
`

//Cosmetics & Home Care
//beauty
const desc2_adaycream = `
BEAUTY DAY CREAM

KEGUNAAN
Beauty Day Cream, krim perawatan pada pagi hari, membantu melindungi kulit dari efek buruk sinar matahari serta merawat kulit tetap sehat.

KANDUNGAN
Aqua, ethylhexyl methoxycinnamate, butyl methoxydibenzoylmethane, benzophenone-3, butylene glycol, phospholipids, phenoxyethanol, propanediol, acrylamides copolymer, C13-14 isoparaffin, laureth-7, glyceryl stearate, cetyl alcohol, PEG-75 stearate, ceteth-20, steareth-20, olea europaea oil, ethanol, urea, foeniculum vulgare extract, humulus lupulus extract, melissa officinalis leaf extract, viscum album leaf extract, chamomilla recutita leaf extract, achillea millefolium extract, allantoin, propylene glycol, aloe barbadensis leaf extract, glycerin, glycine soja seed extract, hamamelis virginiana distillate, ethylhexylglycerin, titanium dioxide, sodium hyaluronate, allantoin, disodium edta.

PEMAKAIAN
Beauty Day Cream, krim perawatan pada pagi atau siang hari, aplikasikan pada wajah yang bersih. Gunakan secara rutin untuk hasil yang baik.

HARGA
Rp 75.000 (60/20)
15 gr
`
const desc2_anightcream = `
BEAUTY NIGHT CREAM

KEGUNAAN :
Beauty Night Cream perawatan kulit pada malam hari, melembabkan kulit, Vitamin C membantu mencerahkan kulit juga kandungan aktif lainnya menjadikan kulit tetap sehat.

KANDUNGAN:
Aqua, propanediol, acrylamides copolymer, C13-14 Isoparaffin, laureth-7, glyceryl stearate, cetyl alcohol, PEG-75 stearate, ceteth-20, steareth-20, niacinamide, olea europaea oil, ethylhexyl methoxycinnamate, butyl methoxydibenzoylmethane, benzophenone-3, butylene glycol, phospholipids, phenoxyethanol, butylene glycol, glycyrrhiza glabra root extract, centella asiatica extract, ethyl ascorbic acid,glycerin, glycine soja seed extract, acetyl hexapeptide-8, cetyl alcohol, chamomilla recutita flower extract, resveratrol, ethylhexylglycerin, sea cucumber extract, allantoin, tocopherol, disodium edta, sodium hyaluronate

PEMAKAIAN :
Perawatan pada malam hari, aplikasikan pada wajah yang bersih. Gunakan secara rutin untuk hasil yang baik.

HARGA
Rp 85.000 (70/25)
15 gr
`
//sanitary napkins
const desc2_diapers = `
HNI DIAPERS

Fit di badan bayi, tidak terlalu ketat sehingga tidak akan menimbulkan iritasi pada pinggang/perut bayi.
Bahan lembut seperti kain, memberi kenyamanan pada kulit bayi.
Terdapat channelling system untuk mempercepat penyerapan urin.

BAHAN-BAHAN
Magic Tape, Cloth-like Breathable Film, Pearl Wool, Leak Guard Protector, Imported Pulp, SAP, Blue ADL, Elastic Waistband.

SIZE S
Rp 26.000 (24/4)
10 pads

SIZE M
Rp 33.000 (30/5)
10 pads

SIZE L
Rp 35.000 (33/6)
10 pads
`
const desc2_hibispads = `
HIBIS PEMBALUT

HIBIS adalah solusi kesehatan kewanitaan dengan sinergi terbaik herba pilihan dengan proses menggunakan teknologi modern sehingga para wanita tampil penuh percaya diri dan menjadikan lebih aktif serta produktif.

KELEBIHAN
Hibis menjaga kualitas, fungsi, serta mudah dibawa kemana saja.
Lapisan penyerap dengan daya serap yang tinggi.
Membebaskan permasalahan nyeri haid dan menghilangkan rasa tidak nyaman.
Dapat menghilangkan bau tidak sedap dan menjaga kesegaran.
Membantu mencegah iritasi kulit, rasa gatal, dan antibakteri.
 
REGULAR USE
225.000 (180/45)
10 pouches x 4 pads

HEAVY USE
Rp 235.000 (190/45)
10 pouches x 4 pads

HIBIS MIX
Rp 230.000 (185/45)
10 pouches x 4 pads
`
const desc2_hibispanty = `
HIBIS PANTYLINERS

HIBIS adalah solusi kesehatan kewanitaan dengan sinergi terbaik herba pilihan dengan proses menggunakan teknologi modern sehingga para wanita tampil penuh percaya diri dan menjadikan lebih aktif serta produktif.

KELEBIHAN
Hibis menjaga kualitas, fungsi, serta mudah dibawa kemana saja.
Lapisan penyerap dengan daya serap yang tinggi.
Membebaskan permasalahan nyeri haid dan menghilangkan rasa tidak nyaman.
Dapat menghilangkan bau tidak sedap dan menjaga kesegaran.
Membantu mencegah iritasi kulit, rasa gatal, dan antibakteri.
 
HARGA
Rp 225.000 (180/45)
10 pouches x 10 pads
`
//beauty health
const desc2_deoformen = `
DEODORANT FOR MEN

Deodorant untuk pria, berbentuk roll-on yang cepat meresap dan tidak lengket, bebas alkohol dan alumunium, dilengkapi dengan bahan aktif sesuai kebutuhan Anda.

Deodorant ini mengandung:
- Natural Magnesium Mineral,
- Encapsulated Cooling Agent,
- Encapsulation Fragrance Technology,
- Brightening Agent.

HARGA
Rp 27.000 (24/5)
40 ml
`
const desc2_deoforwoman = `
DEODORANT FOR WOMEN

Deodorant untuk wanita, berbentuk roll-on yang cepat meresap dan tidak lengket, bebas alkohol dan alumunium, dilengkapi dengan bahan aktif sesuai kebutuhan Anda.

- Deodorant ini mengandung:
- Natural Magnesium Mineral,
- Hair Regrowth Moderator,
- Anti Odour Agent,
- Brightening Agent.

HARGA
Rp 27.000 (24/5)
40 ml
`
const desc2_facialwash = `
FACIAL WASH

Pembersih wajah yang membantu membersihkan kotoran pada kulit wajah, diperkaya dengan kandungan ekstrak bunga kamboja yang dapat membantu mengontrol produksi minyak pada wajah.

KOMPOSISI:
Aqua, Plumeria Rubra Flower Extract, Cocamidopropyl Betaine, Decyl Glucoside, Cocamide DEA, Propanediol, Diglycerin, Xanthan Gum, Fragrance, DMDM Hydantoin, Disodium EDTA.

PEMAKAIAN:
Basahi wajah, tuangkan facial wash secukupnya pada telapak tangan. Usapkan ke seluruh permukaan wajah hingga berbusa, bilas dengan air hingga bersih.

VARIAN:
Perfumed
Non-Perfumed

HARGA
Rp 30.000 (25/7)
60 ml
`
const desc2_hayyashampoo = `
HAYYA MILD SHAMPOO

Shampoo dengan kandungan natural ingredients yang membantu membersihkan rambut dan kulit kepala dari debu dan kotoran dengan aroma pear & fresia yang menyegarkan dan aroma jasmine yang lembut.

HARGA
Rp 38.000 (35/8)
150 ml
`
const desc2_hnibodywash = `
HNI BODY WASH

Sabun mandi dengan kandungan ekstrak propolis yang kaya akan antioksidan dan bekerja sebagai antibakteri alami. Penggunaan secara teratur memberikan perlindungan kesehatan kulit dari bakteri dan jamur. Bahan alaminya aman, bahkan untuk kulit sensitif. Kulit terasa lembut dan lembab.

KOMPOSISI
Air, Sodium Laureth Sulfate, Natrium Chlo-ride, Cocamidopropyl Betaine, Laurami-dopropyl Hydroxysulthaine, Trehalose, Gliserin, Phenoxyetanol, Cocamide Mea, Peg-40 Hydrogenated Castor Oil, Wewangi-an, Niacinamide, Glycol Distearate, Propolis Cair.

PERHATIAN!
Hanya untuk pemakaian luar. Hindari dari paparan sinar matahari langsung.

HARGA
Wilayah 1 & 2
Rp 40.000 (35/10)

Wilayah 3
Rp 45.000 (40/10)
200 ml
`
const desc2_hnishampoo = `
HNI SHAMPOO

Kandungan ekstrak propolis pada shampoo, kaya akan antioksidan, antibakteri dan bio-flavanoid alami yang dipercaya memiliki daya perlindungan dari ketombe dan kerusakan pada kulit kepala. Propolis memelihara kelembaban dan melembutkan dari akar hingga ujung rambut. Gunakan secara teratur agar rambut tetap terawat dan terjaga kesehatannya.

KOMPOSISI
Air, Sodium Laureth Sulfate, Natrium Chloride, Sodium Lauroamphoacetate, Lauramidopropyl Hydroxysulthaine, Guar Hydroxypropyltrimoniumchloride, Cocamide Mea, Gliserin, Phenoxyetanol, Peg-40 Hydrogenated Castor Oil, Wewangian, Menthol Crystal, Propolis Cair, Trehalose, Polyquaterni-um-73.

NEW FORMULA!
Dengan formula anti rontok.

HARGA
Wilayah 1 & 2
Rp 35.000 (30/8)

Wilayah 3
Rp 38.000 (34/8)
200 ml
`
const desc2_sabunkolagen = `
SABUN KOLAGEN

KEGUNAAN :
Sabun Kolagen digunakan untuk perawatan kesehatan dan sebagai bahan kosmetik. Sabun Transparant Kolagen membersihkan kulit tubuh sekaligus melembabkan, sehingga kulit menjadi bersih, terasa lembut dan tampak lebih bercahaya setiap hari.

KANDUNGAN:
Succrose, Water, Cocos Nucifera Oil,Propylene glycol, Stearic acid, Ethanol Denat, Triethanolamine, Glycerin, Sodium hydroxide, Cocamidopropyl betaine, Parfum, Marine Collagen, Glycolic acid, BHT

PEMAKAIAN :
Gunakan Sabun Kolagen setiap mandi, untuk hasil yang lebih sempurna.

HARGA
Wilayah 1 & 2
Rp 25.000 (20/6)

Wilayah 3
Rp 28.000 (23/6)

Wilayah 4
Rp 30.000 (27/6)
100 gr
`
const desc2_sabunmadu = `
SABUN MADU

KEGUNAAN :
Sabun Madu digunakan untuk perawatan kesehatan dan sebagai bahan kosmetik. Sabun Madu HNI dengan kandungan madu, membersihkan kulit tubuh sekaligus melembabkan, sehingga kulit menjadi bersih, terasa lembut dan tampak lebih bercahaya setiap hari.

KOMPOSISI :
Aqua, Cocos nucifera oil, Olea europaea fruit oil, Stearic acid, Glycerin, Propylene glycol, Sucrose, Sodium hidroxide, Honey, Parfum, Citric acid, BHT.

PEMAKAIAN :
Gunakan Sabun Madu setiap mandi, untuk hasil yang lebih sempurna.

HARGA
Wilayah 1 & 2
Rp 20.000 (17/5)

Wilayah 3
Rp 25.000 (20/5)

Wilayah 4
Rp 27.000 (22/5)
100 gr
`
const desc2_sabunpropolis = `
SABUN PROPOLIS

KEGUNAAN:
Sabun Propolis digunakan untuk perawatan kesehatan dan sebagai bahan kosmetik. Sabun Propolis HNI dengan kandungan propolis, membersihkan kulit tubuh sekaligus melembabkan, sehingga kulit menjadi bersih, terasa lembut dan tampak lebih bercahaya setiap hari.

KOMPOSISI:
Aqua, Cocos nucifera oil, Olea europaea fruit oil, Stearic acid, Glycerin, Propylene glycol, Sucrose, Sodium hidroxide, Propolis, Parfum, Citric acid, BHT.

PEMAKAIAN:
Gunakan Sabun Propolis setiap mandi, untuk hasil yang lebih sempurna.

HARGA
Wilayah 1 & 2
Rp 20.000 (17/5)

Wilayah 3
Rp 25.000 (20/5)

Wilayah 4
Rp 27.000 (22/5)
100 gr
`
//pasta gigi
const desc2_pghAanggur = `
PGH ANAK RASA ANGGUR

Pasta gigi yang diformulasikan khusus untuk anak-anak  dengan rasa  anggur yang disukai anak-anak.

KOMPOSISI
Sorbitol, Calcium Carbonate, Aqua, Hydrated Silica, Flavour Grape,Glycerin, Xanthan Gum, Sodium Lauroyl Sarcosinate, Propylene Glycol, Salvadora Persica, Piper Betle Extract, Sodium Saccharin, Xylitol, Sodium Benzoate.

CARA PENGGUNAAN
Aplikasikan pasta gigi secukup nya pada sikat gigi. Gosok gigi hingga bersih, kemudian kumur–kumur dengan air bersih.

HARGA
Wilayah 1, 2, 3
Rp 13.000 (10/2)
50gr
`
const desc2_pghAstrawberry = `
PGH ANAK RASA STROBERI

Pasta gigi yang diformulasikan khusus untuk anak-anak dengan rasa stroberi yang disukai anak-anak.

KOMPOSISI:
Sorbitol, Calcium Carbonate, Aqua, Hydrated Silica, Flavour Strawberry Pure, Glycerin, Xanthan Gum, Sodium Lauroyl Sarcosinate, Propylene Glycol, Salvadora Persica, Piper Betle Extract, Sodium Saccharin, Xylitol, Sodium Benzoate.

CARA PENGGUNAAN:
Aplikasikan pasta gigi secukup nya pada sikat gigi. Gosok gigi hingga bersih, kemudian kumur–kumur dengan air bersih.

HARGA
Wilayah 1, 2, 3
Rp 13.000 (10/2)
50gr
`
const desc2_pghAtuttyfruity = `
PGH ANAK RASA TUTTY FRUITY

Pasta gigi yang diformulasikan khusus untuk anak-anak dengan rasa tutty fruity yang disukai anak-anak.

KOMPOSISI
Sorbitol, Calcium Carbonate, Aqua, Hydrated Silica, Flavour, Glycerin, Xanthan Gum, Sodium Lauroyl  Sarcosinate, Propylene Glycol, Salvadora Persica, Piper Betle Extract, Sodium Saccharin, Xylitol, Sodium Benzoate.

CARA PENGGUNAAN
Aplikasikan pasta gigi secukup nya pada sikat gigi. Gosok gigi hingga bersih, kemudian kumur–kumur dengan air bersih.

HARGA
Wilayah 1, 2, 3
Rp 13.000 (10/2)
50gr
`
const desc2_pghcengkeh = `
PGH CENGKEH

Pasta Gigi dengan siwak, sirih, dan mint, membantu membersihkan gigi, serta menjaga gigi dan rongga mulut tetap sehat.

KOMPOSISI
Sorbitol, Calcium Carbonate, Aqua, Hydrated Silica, Glycerin, Sodium Lauroyl Sarcosinate, Propylene Glycol, Xanthan Gum, Flavour Lemon, Flavour Mint, Peppermint Oil, Piper Betle Extract, Eugenia Caryophyllus Bud Oil, Sodium Saccharin, Menthol, Sodium Benzoate.

CARA PENGGUNAAN
Aplikasikan pasta gigi secukupnya pada sikat gigi. Gosok gigi hingga bersih, kemudian kumur–kumur dengan air bersih.
`
const desc2_pghpropolis = `
PGH PROPOLIS

Pasta Gigi yang membantu membersihkan gigi, serta menjaga gigi dan rongga mulut tetap sehat.

KOMPOSISI
Sorbitol, Hydrated Silica, Aqua, Propanediol, Propylene Glycol, Sodium
Lauroyl Sarcosinate, PEG-40 Hydrogenated Castor Oil, Salvadora Persica, Callulose Gum, Propolis Extract, Sodium Cloride, Flavour Mint, Peppermint Oil, Sodium Citrate, Piper Betle Extract, Menthol, Sodium Saccharin, Sodium Benzoate, Disodium EDTA.

CARA PENGGUNAAN
Aplikasikan pasta gigi secukupnya pada sikat gigi. Gosok gigi hingga bersih, kemudian kumur-kumur dengan air bersih.
`
const desc2_pghsensitif = `
PGH SENSITIF
PASTA GIGI HERBAL HNI UNTUK GIGI SENSITIF

Membantu membersihkan gigi serta menjaga gigi dan rongga mulut tetap sehat.

KOMPOSISI
Sorbitol, Calcium Carbonate, Aqua, Hydrated Silica, Glycerin, Potassium Oxalate, Propylene Glycol, Salvadora Persica, Xanthan Gum, Flavour Mint, Peppermint Oil, Piper Betle Extract, Sodium Saccharin, Menthol, Sodium Benzoate.

CARA PENGGUNAAN
Aplikasikan pasta gigi secukupnya pada sikat gigi. Gosok gigi hingga bersih, kemudian kumur-kumur dengan air bersih.

HARGA
Wilayah 1, 2, 3
Rp 23.000 (20/5)

Wilayah 4
Rp 40.000 (35/5)
120 gr
`
const desc2_pghsiwak = `
PASTA GIGI HERBAL

Pasta Gigi Herbal HPAI terbuat dari bahan siwak pilihan dan disinergikan dengan ramuan warisan nenek moyang nusantara yang telah terbukti berabad silam yang lalu, sehingga menjadikan Pasta Gigi HPAI yang bukan hanya bermanfaat membersihkan, namun juga menyehatkan dan memelihara gigi, gusi dan kesehatan mulut.
Dengan kombinasi bahan aktif sedemikian rupa dan berkualitas tinggi maka, Pasta Gigi Herbal HPAI sangat baik untuk menghilangkan plak, menguatkan gigi, mencegah karies gigi, meningkatkan kesehatan gigi dan mulut, serta menyegarkan bau mulut juga membuat gigi tampak lebih putih.
Pasta Gigi Herbal HPAI mempunyai daya bersih yang tinggi dan daya abrasive-nya sangat rendah sehingga tidak ngilu di gigi dan sangat cocok untuk gigi sensitive.
`
//etc
const desc2_greenwashdetergen = `
GREENWASH DETERGEN

KEUNGGULAN :
1. Super High Concentrate : Dengan takaran pemakaian yang sedikit mampu menghasilkan hasil cucian yang bersih maksimal.
2. Enzymes Technology : Lebih efektif dalam membersihkan noda.
3. Active Oxygen: Oksigen yang akan mengangkat kotoran hingga ke serat kain.
4. Brightener: Mencerahkan warna pakaian.
5. Low Suds: Rendah Busa, cucian bersih hanya dengan sedikit air bilasan. Hemat air dan tenaga, cocok untuk mesin cuci tipe apapun.
6. Anti karat: Mencegah dan melindungi komponen bahan logam dalam mesin cuci dari karatan.
7. Antiredeposisi: Mencegah kotoran yang sudah lepas menempel kembali
8. Biodegradable: Bahan baku yang eco-friendly sehingga limbah deterjen dapat terurai dengan baik di tanah.

HARGA
Wilayah 1
Rp 42.000 (36/10)

Wilayah 2
Rp 46.000 (40/10)

Wilayah 3
Rp 50.000 (44/10)

Wilayah 4
Rp 80.000 (70/10)
20 sachet x 25 gr

`
const desc2_promol12 = `
PROMOL12

Adalah kumpulan Mikro Organisme Lokal (MOL) yang dapat beradaptasi dengan sempurna untuk lingkungan di Indonesia yang beriklim tropis. Digunakan sebagai suplemen pakan ternak dan pakan ikan yang bermanfaat pada serapan makanan, pupuk organik pertanian sebagai starter dan mempercepat serta memperbanyak pertumbuhan tanaman dan buah, juga digunakan untuk perbaikan lingkungan kolam, pengelolaan limbah rumah tangga dan komunal.

KOMPOSISI
Azotobacter paspalii, Bacillus firmus, Bacillus pumilus, Bacillus lentus, Bacillus stearothermophillus, Bacillus cereus, Bacillus licheniformis, Bacillus subtilis, Corynebacterium pseudodipteriticum, Sarcina Lutea, Micrococcus varians, Staphylococcus epidermidis, Saccharomyces cerevisiae.

PROMOL BOX 1 kg
Wilayah 1&2
Rp 250.000 (210/50)

Wilayah 3
Rp 270.000 (230/50)

PROMOL BOX 3 kg
Wilayah 1&2
Rp 690.000 (590/150)

Wilayah 3
Rp 790.000 (640/150)

PROMOL ECO (Pouch)
Wilayah 1, 2, 3
Rp 60.000 (50/15)
150 gr
`
const desc2_sterilyndesinfectant = `
STERILYN DISINFECTANT

Sterilyn yang alami, non toksik, dan tidak berbahaya dapat digunakan untuk mendesinfeksi pathogen di berbagai lingkungan. Sterilyn adalah cara yang aman, cepat dan efektif untuk mencapai seluruh tingkatan desinfeksi. Protokol penggunaan yang sederhana yaitu cukup satu langkah untuk memastikan bakteri, virus dan jamur berkurang 99,99%.

CARA PENGGUNAAN
- Semprotkan Sterilyn pada objek yang akan didesinfeksi (sesuai tingkat desinfeksi), kemudian biarkan hingga kering.
- Desinfeksi dapat juga dilakukan dengan metode perendaman selama 5-10 menit.
- Desinfeksi tingkat rendah: Campurkan 50 ml Sterilyn dengan 150 ml air bersih.
- Desinfeksi tingkat menengah: Campurkan 50 ml Sterilyn dengan 50 ml air bersih.
- Desinfeksi tingkat tinggi: Tanpa pencampuran.

HARGA
Rp 120.000 (90/25)
Netto: 500ml
`
const desc2_sterilynsanitizer = `
STERILYN SANITIZER

Memberikan solusi mencuci tangan yang bersih, hygienic dan praktis. Dapat menghentikan proses replikasi pathogen di permukaan. Sterilyn efektif dalam mengurangi 99,99% kuman penyebab penyakit.
 
CARA PENGGUNAAN
Semprotkan 2-3 kali Sterilyn pada telapak tangan, ratakan sambil sedikit digosok pada telapak tangan hingga punggung tangan dan biarkan kering. Ulangi jika perlu.
 
PERINGATAN!
- Simpan di tempat sejuk dan kering.
- Hindari paparan sinar matahari langsung.
- Bilas dengan air bersih jika terkena mata, apabila berlanjut hubungi dokter.
- Tidak untuk dicampur dengan alkohol dan bahan kimia lainnya
- Tidak untuk diminum tapi aman jika tertelan.

HARGA
Rp 80.000 (60/15)
Netto: 100ml

Rp 120.000 (90/25)
Netto: 500ml
`
const desc2_sterilynantiseptic = `
STERILYN ANTISEPTIC

Mengadopsi sistem kekebalan tubuh manusia, Sterilyn dapat digunakan untuk pertolongan pertama dan perawatan pada luka terbuka. Sterilyn terbukti mampu mengurangi 99,99% kuman, bakteri, dan virus penyebab infeksi pada luka dan gatal-gatal. Sterilyn juga mampu menyembuhkan herpes dan sariawan berdasarkan penelitian dan hasil uji laboratorium yang telah dilakukan.

PERINGATAN!
- Simpan di tempat sejuk dan kering.
- Hindari paparan sinar matahari langsung.
- Bilas dengan air bersih jika terkena mata, apabila berlanjut hubungi dokter.
- Tidak untuk dicampur dengan alkohol dan bahan kimia lainnya.
- Tidak untuk diminum tapi aman jika tertelan.
 
HARGA
Rp 80.000 (60/15)
Netto: 100ml
`
			
// Info about Company/Company Credit ==> this refers to info
const company_info = `
PT HPAI - Halal Network International (HNI)

Head Office
Jl. Kelapa Sawit Raya Blok H-11 Pondok Kelapa, Duren Sawit, Jakarta Timur DKI Jakarta, Indonesia 13450

Leaders Office
Komplek Sentra Kota Jatibening Blok F1-F5 RT001/RW003, Jatibening Baru, Pondok Gede, Kota Bekasi, Jawa Barat 17412

Telp : 021-8690-9600
Fax   : 021-8690-6645

CRM 24 Jam
Tlp: Senin - Jum'at 08.00 - 17.00

021-8690-9600
+62 878-8641-6000
+62 857-7401-7000
+62 822-9930-5000

Email & Telegram: 24 jam
crm@hpaindonesia.net
Telegram : hnihpaibot
Fanpage : pthpai
Official Website: https://hni.net/
`

//<-Pictures-Cloud/Hosting Sections, ends here		
/*Link picture menus Bot.....INI CONTOH! ALREADY DEPRECATED
	const pictMenusX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg'] //for Menus and All Menus <1>
	const pictNSFWX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu2.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu3.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu4.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu5.jpg']
	//['1','2','3','4','5','6','7','8','9'] //NSFW Menus <2>
	const pictRMenuX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu2.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu3.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu4.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu5.jpg']
	//['1','2','3','4','5','6','7','8','9'] //for randomize menus pict <3>

	const pictMenus = pictMenusX[Math.floor(Math.random() * (pictMenusX.length))] // <1>
	const pictNSFW = pictNSFWX[Math.floor(Math.random() * (pictNSFWX.length))] // <2>
	const pictRMenu = pictRMenuX[Math.floor(Math.random() * (pictRMenuX.length))] // <3>
*/
//Auto reply - auto reply sections
/* Sapaan
must include = Halo | Permisi | Punten | Misi | ==> lower case = | halo | permisi | punten | misi |
					| Assalamualaikum | Assalamuallaikum | Asalamualaikum | Misi | ==> lower case = | assalamualaikum | asalamualaikum |*/
const saySapaanBack = ['Halo kak terimakasih telah menghubungi']
	const saySapaanBack1 = [', Silahkan ketik ${prefix}bantuan untuk melihat apa saja yang dapat kami bantu']
//balesan terimakasih
const replyThx = ['Ya sama-sama kak','Terimakasih kembali kak','Oke kak, makasih juga','Sama-sama kak']
	const sayThxBack = replyThx[Math.floor(Math.random() * (replyThx.length))]
	//ends here			                      
// ends here
   
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse(fs.readFileSync('./myBot/Elite.json')) 
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const event = JSON.parse(fs.readFileSync('./myBot/event.json'))
const prem = JSON.parse(fs.readFileSync('./myBot/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./myBot/welkom.json'))
const _limit = JSON.parse(fs.readFileSync('./myBot/limit.json'))
const botx = JSON.parse(fs.readFileSync('./myBot/botx.json')) 
const nayXi = JSON.parse(fs.readFileSync('./myBot/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./myBot/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./myBot/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./myBot/nayXix.json'))     

/* = = = = = = = = = = = = = = = = = => Main WhastApp Bot Data <= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
		//ends here
/* = = = = = = = = = = = = = = = = = => Main WhastApp Bot Data <= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */













            switch (command) {
/*Initial starts:*/
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
	iniPictureBantuan =	await getBuffer(`${thisMainPic}`)	
iniTextBantuan = `
Halo ${pushname}, Terima kasih telah menghubungi
${mrktplc}

${iniPromosiGan}

Berikut adalah daftar informasi yang dapat kami berikan kepada Anda:

| ${prefix}produk
| Untuk melihat kategori produk yang tersedia di marketplace kami

| ${prefix}semuaproduk
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

Terimakasih, semoga sehat selalu.`	       	 			   
nayla.sendMessage(from, iniPictureBantuan, image, { quoted: nay, caption: iniTextBantuan })         
break

//1
case 'Produk':
case 'produk':
reply(`Mohon tunggu sebentar ya kak...`)
iniPictureAllProduct = await getBuffer(`${thisAllProduct}`)
iniTextMenuProduk = `
Halo kak ${pushname}, Terimakasih telah menghubungi ${mrktplc}

${iniPromosiGan}

Berikut adalah daftar produk HNI herbal yang tersedia di marketplace kami:

| ${prefix}herbal
| Produk Herbal, obat herbal yang terbukti khasiatnya dan tidak memiliki efek samping tertentu serta bebas untuk dikonsumsi dalam waktu jangka panjang

| ${prefix}suplemen
| Health Food & Beverages, makanan/minuman pendukung untuk menjaga tubuh agar tetap sehat

| ${prefix}perawatan
| Cosmetics and Home Care, tidak hanya obat, makanan/minuman saja tetapi kami juga menyediakan produk untuk perawatan tubuh dan lain-lain

Silahkan kakak gunakan perintah diatas untuk melihat detailnya, contoh: Ketik ${prefix}herbal

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureAllProduct, image, { quoted: nay, caption: iniTextMenuProduk })
break

//1-1
case 'Herbal':
case 'herbal':
reply(`Mohon tunggu sebentar ya kak...`)
iniPictureHRB = await getBuffer(`${menuHRB}`)
iniTextMenuHRB = `
List Produk Herbal/Suplemen Kesehatan
Yang Tersedia Di ${mrktplc}

${prefix}hrb01 | Andrographis Centella
${prefix}hrb02 | Bilberry
${prefix}hrb03 | Biosir
${prefix}hrb04 | Barnocap
${prefix}hrb05 | Deep Squalene
${prefix}hrb06 | Magafit
${prefix}hrb07 | N-Green
${prefix}hrb08 | Pegagan HS
${prefix}hrb09 | Siena
${prefix}hrb010 | Spirulina

Silahkan masukan kode produk diatas untuk melihat detail produk, contoh: Ketik ${prefix}hrb01

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureHRB, image, { quoted: nay, caption: iniTextMenuHRB })
break

//1-2
case 'Suplemen':
case 'suplemen':
reply(`Mohon tunggu sebentar ya kak...`)
iniPictureHFB = await getBuffer(`${menuHFB}`)
iniTextMenuHFB = `
List Produk Herbal/Suplemen Kesehatan
Yang Tersedia Di ${mrktplc}

${prefix}hfb01 | Centella Teh Sinergi
${prefix}hfb02 | Dates Syrup
${prefix}hfb03 | Deep Olive
${prefix}hfb04 | Etta Goat Milk
${prefix}hfb05 | HNI Health
${prefix}hfb06 | Jannatea Cold
${prefix}hfb07 | Jannatea Hot
${prefix}hfb08 | Kopi 7 Elemen
${prefix}hfb09 | Madu Multiflora
${prefix}hfb010 | Madu Pahit

Silahkan masukan kode produk diatas untuk melihat detail produk, contoh: Ketik ${prefix}hfb01

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureHFB, image, { quoted: nay, caption: iniTextMenuHFB })
break

//1-3
case 'Perawatan':
case 'perawatan':
reply(`Mohon tunggu sebentar ya kak...`)
iniPictureCHC = await getBuffer(`${menuCHC}`)
iniTextMenuCHC = `
List Produk HNI Perawatan/Lain-Lain
Yang Tersedia Di ${mrktplc}

Perawatan Wajah
${prefix}chc01 | Beauty Day Cream
${prefix}chc02 | Beauty Night Cream

Sanitary Napkins
${prefix}chc11 | HNI Diapers Anak
${prefix}chc12 | Hibis Pembalut
${prefix}chc13 | Hibis Pantyliners

Herbal Body Health
${prefix}chc21 | Deodorant For Men
${prefix}chc22 | Deodorant For Women
${prefix}chc23 | Facial Wash
${prefix}chc24 | Hayya Mild Shampoo
${prefix}chc25 | HNI Body Wash
${prefix}chc26 | HNI Shampoo
${prefix}chc27 | Sabun Kolagen
${prefix}chc28 | Sabun Madu
${prefix}chc29 | Sabun Propolis

Pasta Gigi Herbal
${prefix}chc31 | PGH Anak Rasa Anggur
${prefix}chc32 | PGH Anak Rasa Stroberi
${prefix}chc33 | PGH Anak Rasa Tutty Fruity
${prefix}chc34 | PGH Cengkeh
${prefix}chc35 | PGH Propolis
${prefix}chc36 | PGH Sensitif
${prefix}chc37 | PGH Siwak

Lain-Lain
${prefix}chc41 | Greenwash Detergen
${prefix}chc42 | Promol 12
${prefix}chc43 | Sterilyn Desinfectant
${prefix}chc44 | Sterilyn Sanitizer
${prefix}chc45 | Sterilyn Antiseptic

Silahkan masukan kode produk diatas untuk melihat detail produk, contoh: Ketik ${prefix}chc01

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureCHC, image, { quoted: nay, caption: iniTextMenuCHC })
break

//1-ALL
case 'Semuaproduk':
case 'semuaproduk':
reply(`Mohon tunggu sebentar ya kak...`)
iniPictureALL = await getBuffer(`${menuALL}`)
iniTextMenuALL = `
List Semua Produk HNI
Yang Tersedia Di ${mrktplc}


_Suplemen Kesehatan Herbal_

${prefix}hrb01 | Andrographis Centella
${prefix}hrb02 | Bilberry
${prefix}hrb03 | Biosir
${prefix}hrb04 | Barnocap
${prefix}hrb05 | Deep Squalene
${prefix}hrb06 | Magafit
${prefix}hrb07 | N-Green
${prefix}hrb08 | Pegagan HS
${prefix}hrb09 | Siena
${prefix}hrb010 | Spirulina

_Herbal Food & Beverages_

${prefix}hfb01 | Centella Teh Sinergi
${prefix}hfb02 | Dates Syrup
${prefix}hfb03 | Deep Olive
${prefix}hfb04 | Etta Goat Milk
${prefix}hfb05 | HNI Health
${prefix}hfb06 | Jannatea Cold
${prefix}hfb07 | Jannatea Hot
${prefix}hfb08 | Kopi 7 Elemen
${prefix}hfb09 | Madu Multiflora
${prefix}hfb010 | Madu Pahit

_Perawatan & Lain-Lain_

Perawatan Wajah
${prefix}chc01 | Beauty Day Cream
${prefix}chc02 | Beauty Night Cream

Sanitary Napkins
${prefix}chc11 | HNI Diapers Anak
${prefix}chc12 | Hibis Pembalut
${prefix}chc13 | Hibis Pantyliners

Herbal Body Health
${prefix}chc21 | Deodorant For Men
${prefix}chc22 | Deodorant For Women
${prefix}chc23 | Facial Wash
${prefix}chc24 | Hayya Mild Shampoo
${prefix}chc25 | HNI Body Wash
${prefix}chc26 | HNI Shampoo
${prefix}chc27 | Sabun Kolagen
${prefix}chc28 | Sabun Madu
${prefix}chc29 | Sabun Propolis

Pasta Gigi Herbal
${prefix}chc31 | PGH Anak Rasa Anggur
${prefix}chc32 | PGH Anak Rasa Stroberi
${prefix}chc33 | PGH Anak Rasa Tutty Fruity
${prefix}chc34 | PGH Cengkeh
${prefix}chc35 | PGH Propolis
${prefix}chc36 | PGH Sensitif
${prefix}chc37 | PGH Siwak

Lain-Lain
${prefix}chc41 | Greenwash Detergen
${prefix}chc42 | Promol 12
${prefix}chc43 | Sterilyn Desinfectant
${prefix}chc44 | Sterilyn Sanitizer
${prefix}chc45 | Sterilyn Antiseptic

Silahkan masukan kode produk diatas untuk melihat detail produk, contoh: Ketik ${prefix}hrb01

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureALL, image, { quoted: nay, caption: iniTextMenuALL })
break

//2
case 'Social':
case 'social':
	iniPictureSocialMedia = await getBuffer(`${thisSocMed}`)
iniTextSocialMedia = `
Nih ya kak...
FaceBook  : ${fblinkProfile}
Instagram : ${instagramLink}

Mungkin followers ny baru sedikit atau belum terlalu famous ya kak, tapi kita mempriotitaskan pelanggan agar dapat mencapai kepuasan maksimal
Kakak juga bisa share ke temen-temen kakak biar lebih rame lagi yaa...

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureSocialMedia, image, { quoted: nay, caption: iniTextSocialMedia })
break

//3
case 'Market':
case 'market':
	iniPictureMarketPlc = await getBuffer(`${thisMrkPlc}`)
iniTextMarketPlc = `
Hallo kak ${pushname}, Untuk marketplace yang tersedia di toko kami yaitu melalui platform:

Tokopedia
${linkTokped}

Shopee
${linkShopee}

FaceBook via messenger
${fblinkProfile}

WhasApp
${ConPers}

Kakak bebas mau pesan lewat apa aja, dijamin fast respon dan cepat sampai tujuan yaa..

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureMarketPlc, image, { quoted: nay, caption: iniTextMarketPlc })
break

//4
case 'Ekspedisi':
case 'ekspedisi':
	iniPictureEksp = await getBuffer(`${thisExpdtn}`)
iniTextEksp = `
Ini ya kak, daftar ekspedisi/pengiriman yang mencakup ke seluruh Indonesia (Nasional)
Saat order kakak juga bisa request Jasa Ekspedisi apa yang mau kakak pilih

| JNE
| JNT
| Pos Indonesia
| Sicepat
| Ninja Express

Pulau Jawa ${expDlmJawa}
Luar Pulau Jawa ${expLuarJawa}

Note:
Harga Ongkir diatas dapat bervariasi sesuai lokasi maupun jumlah berat atau dimensi(besar ukuran) paket
yang nantinya akan diakumulasikan dengan harga barang orderan + harga ongkir.

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureEksp, image, { quoted: nay, caption: iniTextEksp })
break

//5
case 'Cp':
case 'cp':
case 'Contactperson':
case 'contactperson':
	iniPictureConPers = await getBuffer(`${thisPersns}`)
iniTextConPers = `
Berikut nomor atau kontak yang dapat dihubungi:

${mrktplc}

${NameSecPersFB}
${ConPers}

${NameSecPersFB}
${fblinkProfile}

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

Terimakasih, semoga sehat selalu ya kak...`
nayla.sendMessage(from, iniPictureConPers, image, { quoted: nay, caption: iniTextConPers })
break

//6
case 'Info':
case 'info':
	reply(`Mohon tunggu sebentar ya kak...`)
	iniPictureInfo = await getBuffer(`${thisDevCon}`)
iniTextInfo = `
${mrktplc}

Dari:
${company_info}


WhatsApp Bot:

${xxx}╭─── 「 XBot 」── 
├ • Version : 1.0 
├ • Prefix  : ${prefix}
├ • Waktu   : ${time}
├ • Bulan   : ${bulan}
├ • Total Chat : ${tchat}
├ • Active   : ${processTime}
├ • Platform   : Termux via Android
├ • Lang       : JavaScript
├ 
├   Owner/Pembuat Bot
├   Rizky | wa.me/6281329585825
├  
╰───「 WhatsApp Bot 」──

Online WhatsApp Bot Assistant${xxx}


Bot ini merupakan sebuah alat asisten yang dirancang untuk memudahkan pesanan dan memaparkan informasi produk baik itu kepada pembeli/penjual.

Jika Anda minat untuk mengaplikasikan WhatsApp Bot Asisten ini untuk bisnis Anda silahkan hubungi nomor diatas, Terimakasih.${xxx}

Perintah lainnya:
${prefix}produk
${prefix}social
${prefix}ekspedisi
${prefix}cp
${prefix}info

_XBot 2022 Alrights Reserved_`
nayla.sendMessage(from, iniPictureInfo, image, { quoted: nay, caption: iniTextInfo })
break

//7
case 'Pesan':
case 'pesan':
case 'Order':
case 'order':
	setTimeout(() => { reply('Terimakasih kak telah melakukan order produk..')},1000)
	setTimeout(() => { reply('Silahkan salin dan isi form order di bawah ini')},2000)
	setTimeout(() => { reply('yang kemudian dikirim kembali ke Nomor wa.me/6281393903674 ya kak')},3000)
iniTxtOrder = `
Form Order Receipt

| Nama Pembeli :
| No Telp :

| Nama Produk dan Jumlah Yang Di Order
 1.
 2.
 3.
 4. dst

| Alamat Pengiriman
...

| Ekspedisi Yang Dipilih
...

_Kosongkan saja Alamat Pengiriman dan Ekspedisi jika transaksi dilakukan secara CoD_

Di Order Pada Tanggal:
${time}
${bulan}`
nayla.sendMessage(from, iniTxtOrder, text, { quoted: nay })
break // no needed int caption, its standalone

	/*if (!isGroup) return reply('GRUB ONLY')
	if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak ada yang bisa Saya bantu?`)
	reply('Silahkan salin dan isi form order di bawah ini kemudian dikirim kembali ya kak')
	reply('${prefix}order @${ConPers}|Form Order :\n Nama:\n No Telp: \nNama produk dan jumlah: \nAlamat pengiriman: \nEkspedisi yang dpilih:')
	var FG = body.slice(8)
	//var FG = `${ConPers}`
	var F1 = FG.split("|")[0];
	var F2 = FG.split("|")[1];
nayla.sendMessage(`${ConPers}@s.whatsapp.net`, `Orderan dari ${pushname}\nYang di order : ${F2}`, text, {quoted:nay1})
reply('Pesanan Anda sudah diteruskan ke Seller/Penjual, mohon tunggu konfirmasi balik ya kak')*/	         

//developer menu
case 'devmenu':        
case 'option':
case 'setting':   
jds = []            
DF =`
╭─── 「 XBot 」── 
├ • Version : 1.0 
├ • Prefix  : ${prefix}
├ • Bulan   : ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭── ${xxx}Grub Menu${xxx}
│${tz} ${xxx}${prefix}add${xxx}
│${tz} ${xxx}${prefix}kick${xxx}
│${tz} ${xxx}${prefix}promote${xxx}
│${tz} ${xxx}${prefix}demote${xxx}
│${tz} ${xxx}${prefix}welcome${xxx}
│${tz} ${xxx}${prefix}hidetag10${xxx}
│${tz} ${xxx}${prefix}group${xxx}
│${tz} ${xxx}${prefix}linkgc${xxx}
│${tz} ${xxx}${prefix}tagall
│${tz} ${xxx}${prefix}delete
╰── ${xxx}${NameBot}${xxx}

╭── ${xxx}Owner Menu${xxx}	
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
╰── ${xxx}${NameBot}${xxx}`	
mentions(DF, jds, true)
break





/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = = = = =  = = =  = = = =  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =


		< = = = THIS IS THE STARTS
									OF THE
												PRODUCTS COMMAND = = = >


 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = = = = =  = = =  = = = =  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =*/
		
// Herbs as = hrb
case 'hrb01':
case 'HRB01':
case 'andrographis':
case 'Andrographis':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_andrographis}`)
desc_HrbProd = `${desc0_andrographis}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb02':
case 'HRB02':
case 'bilberry':
case 'Billberry':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_bilberry}`)
desc_HrbProd = `${desc0_bilberry}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: descProd_02 })
break

case 'hrb03':
case 'HRB03':
case 'biosir':
case 'Biosir':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_biosir}`)
desc_HrbProd = `${desc0_biosir}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb04':
case 'HRB04':
case 'carnocap':
case 'Carnocap':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_carnocap}`)
desc_HrbProd = `${desc0_carnocap}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb05':
case 'HRB05':
case 'deepsqualene':
case 'Deepsqualene':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_deep_squalene}`)
desc_HrbProd = `${desc0_deep_squalene}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb06':
case 'HRB06':
case 'deepsqualene':
case 'Deepsqualene':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_magafit}`)
desc_HrbProd = `${desc0_magafit}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb07':
case 'HRB07':
case 'ngreen':
case 'Ngreen':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_ngreen}`)
desc_HrbProd = `${desc0_ngreen}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb08':
case 'HRB08':
case 'pegagan':
case 'Pegagan':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_pegagan}`)
desc_HrbProd = `${desc0_pegagan}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb09':
case 'HRB09':
case 'siena':
case 'Siena':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_siena}`)
desc_HrbProd = `${desc0_siena}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

case 'hrb010':
case 'HRB010':
case 'spirulina':
case 'Spirulina':
	reply(`Mohon tunggu sebentar ya kak...`)
	hrb_pict = await getBuffer(`${hrb_spirulina}`)
desc_HrbProd = `${desc0_spirulina}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hrb_pict, image, { quoted: nay, caption: desc_HrbProd })
break

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
// Health Food & Beverages

case 'hfb01':
case 'HFB01':
case 'centella':
case 'Centella':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_centella}`)
desc_HfbProd = `${desc1_centella}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb02':
case 'HFB02':
case 'datessyrup':
case 'Datessyrup':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_datessyrup}`)
desc_HfbProd = `${desc1_datessyrup}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb03':
case 'HFB03':
case 'deepolive':
case 'Deepolive':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_deepolive}`)
desc_HfbProd = `${desc1_deepolive}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb04':
case 'HFB04':
case 'ettagoat':
case 'Ettagoat':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_ettagoatmilk}`)
desc_HfbProd = `${desc1_ettagoatmilk}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb05':
case 'HFB05':
case 'hnihealth':
case 'Hnihealth':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_hnihealth}`)
desc_HfbProd = `${desc1_hnihealth}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb06':
case 'HFB06':
case 'jannatea':
case 'Jannatea':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_jannatea}`)
desc_HfbProd = `${desc1_jannatea}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb07':
case 'HFB07':
case 'jannateahot':
case 'Jannateahot':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_jannateahot}`)
desc_HfbProd = `${desc1_jannateahot}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break
case 'hfb08':
case 'HFB08':
case 'kopisevel':
case 'Kopisevel':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_kopi7elemen}`)
desc_HfbProd = `${desc1_kopi7elemen}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb09':
case 'HFB09':
case 'madumultiflora':
case 'Madumultiflora':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_madumultiflora}`)
desc_HfbProd = `${desc1_madumultiflora}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break

case 'hfb010':
case 'HFB010':
case 'madupahit':
case 'Madupahit':
	reply(`Mohon tunggu sebentar ya kak...`)
	hfb_pict = await getBuffer(`${hfb_madupahit}`)
desc_HfbProd = `${desc1_madupahit}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, hfb_pict, image, { quoted: nay, caption: desc_HfbProd })
break


/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
// Cosmetics & Home Care

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
	Perawatan Wajah  =/= PW, starts here	
 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

case 'chc01':
case 'CHC01':
case 'daycream':
case 'Daycream':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_adaycream}`)
desc_CHCProd = `${desc2_adaycream}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc02':
case 'CHC02':
case 'nightcream':
case 'Nightcream':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_anightcream}`)
desc_CHCProd = `${desc2_anightcream}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
	Perawatan Wajah  =/= PW, ends here => Napkins Health starts here	
 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

case 'chc11':
case 'CHC11':
case 'diapers':
case 'Diapers':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_diapers}`)
desc_CHCProd = `${desc2_diapers}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc12':
case 'CHC12':
case 'hibispads':
case 'Hibispads':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_hibispads}`)
desc_CHCProd = `${desc2_hibispads}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc13':
case 'CHC13':
case 'hibispanty':
case 'Hibispanty':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_hibispanty}`)
desc_CHCProd = `${desc2_hibispanty}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
	Napkins Health  =/= NH, ends here => Body Clean Health starts here	
 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

case 'chc21':
case 'CHC21':
case 'deoformen':
case 'Deoformen':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_deoformen}`)
desc_CHCProd = `${desc2_deoformen}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc22':
case 'CHC22':
case 'deoforwoman':
case 'Deoforwoman':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_deoforwoman}`)
desc_CHCProd = `${desc2_deoforwoman}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc23':
case 'CHC23':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_facialwash}`)
desc_CHCProd = `${desc2_facialwash}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc24':
case 'CHC24':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_hayyashampoo}`)
desc_CHCProd = `${desc2_hayyashampoo}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc25':
case 'CHC25':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_hnibodywash}`)
desc_CHCProd = `${desc2_hnibodywash}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc26':
case 'CHC26':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_hnishampoo}`)
desc_CHCProd = `${desc2_hnishampoo}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc27':
case 'CHC27':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_sabunkolagen}`)
desc_CHCProd = `${desc2_sabunkolagen}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc28':
case 'CHC28':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_sabunmadu}`)
desc_CHCProd = `${desc2_sabunmadu}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc29':
case 'CHC29':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_sabunpropolis}`)
desc_CHCProd = `${desc2_sabunpropolis}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break


/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
	=> Body Clean Health ends here, => Pasta Gigi Herbal =/= PGH, starts here	
 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

case 'chc31':
case 'CHC31':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_pghAanggur}`)
desc_CHCProd = `${desc2_pghAanggur}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc32':
case 'CHC32':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_pghAstrawberry}`)
desc_CHCProd = `${desc2_pghAstrawberry}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc33':
case 'CHC33':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_pghAtuttyfruity}`)
desc_CHCProd = `${desc2_pghAtuttyfruity}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc34':
case 'CHC34':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_pghcengkeh}`)
desc_CHCProd = `${desc2_pghcengkeh}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc35':
case 'CHC35':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_pghpropolis}`)
desc_CHCProd = `${desc2_pghpropolis}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc36':
case 'CHC36':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_pghsensitif}`)
desc_CHCProd = `${desc2_pghsensitif}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc37':
case 'CHC37':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_pghsiwak}`)
desc_CHCProd = `${desc2_pghsiwak}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
	Pasta Gigi Herbal =/= PGH, ends here	
 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
	Lain-Lain =/= ETC, starts here	
 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

case 'chc41':
case 'CHC41':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_greenwashdetergen}`)
desc_CHCProd = `${desc2_greenwashdetergen}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc42':
case 'CHC42':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_promol12}`)
desc_CHCProd = `${desc2_promol12}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc43':
case 'CHC43':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_sterilyndesinfectant}`)
desc_CHCProd = `${desc2_sterilyndesinfectant}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc44':
case 'CHC44':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_sterilynsanitizer}`)
desc_CHCProd = `${desc2_sterilynsanitizer}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

case 'chc45':
case 'CHC45':
	reply(`Mohon tunggu sebentar ya kak...`)
	chc_pict = await getBuffer(`${chc_sterilynantiseptic}`)
desc_CHCProd = `${desc2_sterilynantiseptic}

${mrktplc}
${wmProduct}`
nayla.sendMessage(from, chc_pict, image, { quoted: nay, caption: desc_CHCProd })
break

/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
	Lain-Lain =/= ETC, ends here	
 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */

	//this is the sample code
case 'code':
case 'nameproduct':
	reply(`Mohon tunggu sebentar ya kak...`)
	family_num = await getBuffer(`${stringTo}`)
descProd_num = `${stringTo}`
nayla.sendMessage(from, family_num, image, { quoted: nay, caption: descProd_num })
break
	//ends here






/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = = = = =  = = =  = = = =  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =


		< = = = THIS IS THE END
									OF THE
												PRODUCTS COMMAND = = = >


 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  = = = = = = = = = = = = = = = = = = =  = = =  = = = =  = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =*/







/* ==================================================[ Deprecated Feature ]==============================================================*/
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
					if (!isGroupAdmins) return reply(`Gomennasai, Saya bukan admin :(`)
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
					teks += `Selamat, Anda naik menjadi admin grub :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`Selamat, 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	                                                        
					case 'pesan':
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak ada yang bisa Saya bantu?`)
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
Exp : ${userXp}/${requiredXp}`            
nayla.sendMessage(from, piclevel, image, { quoted: nay, caption: resul })
break		

// Last Section-End
default:       
/*<- This section is made for auto reply due to randomized messages, fallback to ${prefix}help command ->*/         

/* Salam
must include = Assalamualaikum | Assalamuallaikum | Asalamualaikum | Misi/Permisi | ==> lower case = | assalamualaikum | asalamualaikum |*/
		if (budy.includes("Assalamualaikum"))
			{
				jds = []
				ASL1 = `${saySalam} ${sapaan}`
				mentions(ASL1, jds, true)
			}			
			if (budy.includes("Assalamuallaikum"))
			{
				jds = []
				ASL1 = `${saySalam} ${sapaan}`
				mentions(ASL1, jds, true)
			}
				if (budy.includes("Asalamualaikum"))
			{
				jds = []
				ASL1 = `${saySalam} ${sapaan}`
				mentions(ASL1, jds, true)
			}
				if (budy.includes("Asalamualaikum"))
			{
				jds = []
				ASL1 = `${saySalam} ${sapaan}`
				mentions(ASL1, jds, true)
			}
			if (budy.includes("assalamualaikum"))
			{
				jds = []
				ASL1 = `${saySalam}`
				mentions(ASL1, jds, true)
			}
			if (budy.includes("asalamualaikum"))
			{
				jds = []
				ASL1 = `${saySalam} ${sapaan}`
				mentions(ASL1, jds, true)
			}

/* Sapaan
must include = Halo | Permisi | Punten | Misi | ==> lower case = | halo | permisi | punten | misi |*/
		if (budy.includes("Permisi"))
			{
				jds = []
				SPN = `${sapaan}`
				mentions(SPN, jds, true)
			}
			if (budy.includes("permisi"))
			{
				jds = []
				SPN = `${sapaan}`
				mentions(SPN, jds, true)
			}
		if (budy.includes("Punten"))
			{
				jds = []
				SPN = `${sapaan}`
				mentions(SPN, jds, true)
			}
		if (budy.includes("Halo"))
			{
				jds = []
				SPN = `${sapaan}`
				mentions(SPN, jds, true)
			}


			  					
/* ========================================[ ERR, NOT FOUND/INVALID COMMAND ]=========================================================*/                    	 				                    
if (body.startsWith(`${prefix}${command}`)) {
jds = []                    
anu1 = `
Halo kak ${pushname}

Mohon maaf sepertinya perintah ${command} tidak ada di ${prefix}help/bantuan
Silahkan Anda cek kembali apakah perintah sudah tepat atau belum, atau bisa lihat perintah di ${prefix}bantuan

Terimakasih kak,..
Semoga sehat selalu.`      
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

// wes mumet endase coeg!
