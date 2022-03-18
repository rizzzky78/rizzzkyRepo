/*================================

shoujoBot Rev 1.0
Last Edited on : 18 March 2022

================================*/
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

const { color, bgcolor } 		= require('./lib/color')
const { fetchJson, fetchText } 	= require('./lib/fetcher')
const request 					= require('request')
const { recognize } 			= require('./lib/ocr')
const fs 						= require('fs')
const crypto 					= require('crypto')  
const moment 					= require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg 					= require('fluent-ffmpeg') 
const { nyz } 					= require('./private')
const imgbb 					= require('imgbb-uploader')  
const setting 					= JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz 						= JSON.parse(fs.readFileSync('./lib/tes.json'))
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')


/* ===================================================[  CHANGELOG BOT  ]==============================================================

		Modification case [LoLHman] --> js 1671 ~ 2506 (last updated on patch 5.2)

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
 
// NOTE MAU UBAH??? SILAHKAN UBAH DI SRC + SETTINGS.JSON
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ROOM TO FILE ]==============================================================*/                  	                         	 

const _Elite = JSON.parse	(fs.readFileSync('./nayla/Elite.json')) 
const setiker = JSON.parse	(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse	(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse	(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse	(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse	(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse	(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse	(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse	(fs.readFileSync('./nayla/antijawa.json'))
const prem = JSON.parse		(fs.readFileSync('./nayla/prem.json'))
const welkom = JSON.parse	(fs.readFileSync('./nayla/welkom.json'))
const antigay = JSON.parse	(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))
const _limit = JSON.parse	(fs.readFileSync('./nayla/limit.json'))
const botx = JSON.parse		(fs.readFileSync('./nayla/botx.json')) 
const nayXi = JSON.parse	(fs.readFileSync('./nayla/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./nayla/leveling.json'))
const _level = JSON.parse	(fs.readFileSync('./nayla/level.json'))
const nayXix = JSON.parse	(fs.readFileSync('./nayla/nayXix.json')) 
// Database
const tebakgambar = JSON.parse(fs.readFileSync('./nayla/tebakgambar.json'))
const sambungkata = JSON.parse(fs.readFileSync('./nayla/sambungkata.json'))
const afk = JSON.parse(fs.readFileSync('./nayla/afk.json'))
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
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
     		console.log(color('[','white'), color('!','red'), color(']','white'), color('shoujo-chan'))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Connecting...')		   
        	})
	        nayla.on('open', () => {
	    	success('2', 'Sunaookami Shoujo Bot v1.0')
	    	setTimeout( () => {
	    	console.log(color(`Starting to initiate Bot`, 'pink'))
	    	}, 1000)
	    	setTimeout( () => {
	    	console.log(color(`Prepare for node js`, 'pink'))
	    	}, 2000)
	    	setTimeout( () => {
	    	console.log(color(`Node  index.js are starting...`, 'pink'))
	    	}, 3000)
	    	setTimeout( () => {
	    	console.log(color(`Succesfull to execute, preparing to connect...`, 'pink'))
	    	}, 4000)
	    	setTimeout( () => {
	    	console.log(color(`Connecting.... checking network`, 'pink'))
	    	}, 5000)
	    	setTimeout( () => {
	    	console.log(color(`Success to connect Bot, please enjoy :)`, 'pink'))
	    	}, 6000)	    	     	
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
			teks = `▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱\n`
			teks += `*Halo kak @${num.split('@')[0]}*\n` //member
			teks += `*Selamat Datang di Grub*\n`
			teks += `*${mdata.subject}*\n`			
			teks += `▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱\n`
			teks += `Selamat Datang Member Baru!\n`
			teks += `╭───────[ *Intro* ]──────────\n`
			teks += `│➻ *Nama* :\n`
			teks += `│➻ *Umur* :\n`
			teks += `│➻ *Gender* :\n`
			teks += `│➻ *AsKot* :\n`
			teks += `│➻ *Alasan Bergabung* :\n`
			teks += `│➻ *Supremacy: Loli/Teen/Milf* :\n` //dimas gay
			teks += `│➻ *Flag : Yuri/Yaoi/normal*   :\n`
			teks += `│   *pilih salah satu~ \n`
			teks += `╰────────────────────────\n`			
			teks += `_Gunakan fitur ${prefix}intro_ \n`
			teks += `_utk menyalin pesan ini!_ \n`
			teks += `                              \n`
			teks += `                              \n`
			teks += `_Semoga Betah disini Yaaa_ 😊 \n`
			teks += `_jangan sungkan kalo mau ngobrol"_ 🤗 \n`
			teks += `\n`
			teks += `By:⎾ shoujo-chan ⏌\n`
			teks += `▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱`			
			let buff = await getBuffer(ppimg)
		    nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0] //out dari grub
			try {
			ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`) //ini kalo pp nya kosonk
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `Selamat tinggal ${urname}!,bye bye~ 🥳 @${num.split('@')[0]} jasamu akan Shiro-chan kubur dalam² \nSemoga tenang disana yaaa 😘`
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
	//COBA COBA MODIF MENTIONS!	
		//CASE ASLI:
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
			const NameBot = 'shoujo-chan'
	//Link picture menus Bot
	const pictMenusX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu2.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu3.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu4.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu5.jpg'] //for Menus and All Menus <1>
	const pictNSFWX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu2.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu3.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu4.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu5.jpg']
	//['1','2','3','4','5','6','7','8','9'] //NSFW Menus <2>
		const pictRMenuX = ['https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu1.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu2.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu3.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu4.jpg','https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/ShirokoBot/menu5.jpg']
		//['1','2','3','4','5','6','7','8','9'] //for randomize menus pict <3>

	const TXT_ArchiveBlue = ['text','text']

	// get new ses for BA Character Voices
	const BlueArchiveVoicesRaw = ['link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link','link']
		const BlueArchiveVoices = BlueArchiveVoicesRaw[Math.floor(Math.random() * (BlueArchiveVoicesRaw.length))]

const pictMenus = pictMenusX[Math.floor(Math.random() * (pictMenusX.length))] // <1>
	const pictNSFW = pictNSFWX[Math.floor(Math.random() * (pictNSFWX.length))] // <2>
		const pictRMenu = pictRMenuX[Math.floor(Math.random() * (pictRMenuX.length))] // <3>

            const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = nayBulan[moment().format('MM') - 1]
			const isElite = checkEliteUser(sender)
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))]     
			const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
            const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod"]
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi','Bisa jadi','Kayaknya iya deh','Mustahil yhahahaha','coba tanya lort','tentu saja']
			const urname = `Kak`
			// ====>> Reactions ==>>
	//toxicity ===>>
	const toxicX = ["ANJING","Anjing","anjing","Ajg","Anjg","ajg","anjg","Babi","babi","KONTOL","Kontol","kontol","Ngentot","Ngentod","ngentod","ngentot","Bajingan","bajingan","Jingan","jingan","Jembot","Jembut","jembut","Jancok","jancok"]
	//Salam
	const salamX = ['Assalamualaikum','Assalamuallaikum','Asalamualaikum','assalamualaikum','asalamualaikum']	
		const saySalamX = ['Walaikumsalam warohmatullohiwabarakatuh','Walaikumussalam...','Walaikumsalam kak','Walaikumsallam kak,... subahanallah']
		const saySalam = saySalamX[Math.floor(Math.random() * (saySalamX.length))]
		//mem say thx
	const mksh = ['Terimakasih','Makasih','makasih','Mksh','mksh']
		//balesan
		const replyThxZ = ['Ya sama-sama kak :)','Terimakasih kembali kak','Yaaa','Sama-sama kak']
		const replyThx = replyThxZ[Math.floor(Math.random() * (replyThxZ.length))]			
			//reply reactions gacha!
				const reactBotZ = ['Ya emangnya kenapa kalo gw Bot, masalah?','Kenapa kalo gw bot? gaterima lu?','Biarin lah gw bot...suka-suka gw lah','Kontol lu ye','Maapkeun atuh kalo saya bot...nuhunn nya aa','Berisik bat bot bat bot... mau gw penggal lu?','Pake mah tinggal pake, gosah nyebut Bat Bot segala su','Iya cayankk... ada yang bisa saya bantu?','Apaan si, hayang aing teke maneh?']
					const reactToxicZ = ['Wah wah, sepertinya antum ini keturunan lord garox ya... toxic bener','Gosah toxic bisa gak si 🙄','Min admin, ada yang toxic nihhhh.... kaborrr','Temennya dimas lu ya, pantes toxic bgt','Kenapa si toxicnya gak nama hewan lain kayak kuda, monyet, jerapah, dinosaurus kek ... kenapa itu" aja lohhh 🙃','Mulut antum kotor ya','Toxic bener lu asu 😠','Woylah... stop toxic, mari kita gunakan bahasa yang baik dan benar 😌','Hmmm... Enakny diapain nih org toxic kek gini gess 🙄','Parah ni mah toxicnya','Woi asu, gosak toxic kan bisa','Anjg, sekali lg toxic gw penggal lu','Astagfirullah... kok kasar bang?','Mantapp nih, passti didikannya lord garox','Tat tot tat tot.... raimu kaya ngent...','Udah dibilangnin gaboleh toxic kamu yahh...','Ihhh... toxic parah lu','Dua tiga tutup botol... Muke lu kayak kon...']
					//const reactToxic2Z = ['Parah ni mah toxicnya','Woi asu, gosak toxic kan bisa','Anjg, sekali lg toxic gw penggal lu','Astagfirullah... kok kasar bang?','Mantapp nih, passti didikannya lord garox','Tat tot tat tot.... raimu kaya ngent...','Udah dibilangnin gaboleh toxic kamu yahh...','Ihhh... toxic parah lu','Dua tiga tutup botol... Muke lu kayak kon...']				
						const reactPagiZ = ['Iyaaa... selamat pagi juga, btw udah makan belom?','Pagi juga... jgn lupa mandi, jgn lupa juga bantuin emak ya 😁','Ohayoo too.... gimana semalem? tidurnya nyenyak?... tapi kalo aku sih ga tidur soalnya aku bot tehe :<','Selamat pagi, semangat pagi!... eh kok malah ceramah hehe 😀','Moring too, dont forget to get breakfast... n jgn lupa bersyukur yaaa 😄']
						const reactSiangZ = ['Iyaa selamat siang juga','Siang jugaaa, btw lagi istirahat yaa?','Siang kak... cuacanya panas bener nih']
						const reactMalamZ = ['Selamat malam jugaa.... jgn begadang yaa, ga baik loh buat kesehatan 😌','iyaa... malam juga,,,, btw lu lg ngerjain tugas?','Iyaa malam juga kak...','Malam ${urname}, tidurnya mau kutemenin?']
							const reactNgeriZ = ['Apaan si tod, mau jad badut ya?','Ngera ngeri matamu.... bisa gak sih jgn pke kata" itu-_','Woi minna-san... ada badut nih, bilang ngeri"....','Bacod luh','ihhh... aaansi','Gapaham deh gw sama orang yang bilang kayak gini','Anda mau jadi badut kah?','Kont...','Hayang aing teke ku maneh sia?!']
								const reactSepiZ = ['Hmmm... sepi yak, maenan bot aja ${urname}','Kasihan....','Mau rame kak? coba summon pake fitur #tagall *tapi cuma bisa dipakai sama admin kak tehe','Sepi, mungkin lg pada coli ak... eh ngaji maksudnya','T_T']
			//linked to below statement
				//math floor random starts here! --> stringfy to default section
			const reactBot = reactBotZ[Math.floor(Math.random() * (reactBotZ.length))] //--> string to above statement
				const reactToxic = reactToxicZ[Math.floor(Math.random() * (reactToxicZ.length))]
				//const reactToxic2 = reactToxic2Z[Math.floor(Math.random() * (reactToxic2Z.length))]
					const reactPagi = reactPagiZ[Math.floor(Math.random() * (reactPagiZ.length))]
					const reactSiang = reactSiangZ[Math.floor(Math.random() * (reactSiangZ.length))]
					const reactMalam = reactMalamZ[Math.floor(Math.random() * (reactMalamZ.length))]
						const reactNgeri = reactNgeriZ[Math.floor(Math.random() * (reactNgeriZ.length))]
							const reactSepi = reactSepiZ[Math.floor(Math.random() * (reactSepiZ.length))]
				//ends here			                                        
			var chat1 = `0@s.whatsapp.net`
		    var split = `shoujo-chan`
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
            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`Yahh maaf ya ${urname}, tapi limit ${urname} sudah habis :(`, text,{ quoted: nay})
            nayla.sendMessage(from, `Sisa Limit ${urname} : *${limitCounts}* \n\n_shoujo Bot_`, text, { quoted : nay})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            nayla.sendMessage(from, `Sisa Limit ${urname} : *${limitCounts}* \n\n_shoujo Bot_`, text)
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            nayla.sendMessage(from, `Maaf ya ${urname} :( *${pushname}* Limit ${urname} sudah habis. \nLimit bisa didapatkan kembali dengan cara level up atau mulung dengan cara ketik *#claim* \n\n_shoujo Bot_`, text, {quoted: nay})
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
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
			        case 'join':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return nayla.sendMessage(from, 'Maaf ${urname} Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*Shirogane Kei BOT v2*`} } }})
                    var nomor = nay.participant
                    const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `PREINVITE`} } } })                    
                    reply('BOT AKAN SEGERA MASUK. DITUNGGU YA ${urname}')                     
					break  
					case 'claim':
						jds = []
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isBotx) return reply(`MODE LEVELING TIDAK AKTIF\nSILAHKAN KETIK ${prefix}leveling`)
					Limit =`_Yeayyy selamat ${pushname} ${urname} berhasil mendapatkan Limit sebesar: *${nayla3}*`
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
				//0						       	 			            			           
				case 'menu':
				case 'm':
			    	if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
					reply(`${pushname} ~\nGathering data, please wait....`)
                    picmenu = await getBuffer(`${pictMenus}`)
inimenu = `
-
╭─── 「 Shoujo Bot 」── 
├ • *Nama :* Shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Exclusive Menu
│ ${tz} grupmenu
│ ${tz} tagmenu
│ ${tz} cekmenu
│ ${tz} mediamenu
│ ${tz} funtextmenu
│ ${tz} makermenu
│ ${tz} gunamenu
│ ${tz} nsfwmenu
│ ${tz} halalmenu
│ ${tz} harammenu
╰───────────────────────────────

╭──❲ Sub Menu
│ ${tz} internalmenu
│ ${tz} ownermenu
│ ${tz} mygrub
│ ${tz} infobot
│ ${tz} aboutbot
╰───────────────────────────────

╭──❲ Supported By:
│────────GitHub──────────────
│ ${tz} Mhank Barbar//github
│ ${tz} LolHuman//github
│ ${tz} Piyo//github
│─────── API's───────────────
│ ${tz} XteamApi
│ ${tz} ApiZeks
│ ${tz} LoL Human Rests Api
╰──❲ Revision ver: theta`			
	nayla.sendMessage(from, picmenu, image, { quoted: nay, caption: inimenu  })
	break
				//1
					case 'nsfwmenu':           
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
					reply(`${pushname} ~\nGathering data, please wait....`)
					NsfWx = await getBuffer(`${pictNSFW}`)
NsFw =`
-
╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

*Fitur ini belum maksimal!*

╔══
║  NSFW Menu
║  NotSafeForWork Menu
╚══

╔══
║  Hentai & Doujinshi
╠══
║ ${tz} nekopoi
║ ${tz} nekopoicari
║ ${tz} nhentaicari					
║ ${tz} nhentaiinfo
║ ${tz} nhentaipdf <prem>
╚══

╔══
║ Lewd Pictures
╠══
╠════⟢ Lewd I
║${tz} randomhentai
║${tz} chiisaihentai
║${tz} trap
║${tz} blowjob
║${tz} yaoi
║${tz} ecchi
║${tz} hentai
║${tz} ahegao
║${tz} hololewd            
║${tz} sideoppai
║${tz} animefeets
║${tz} animebooty
║${tz} animethighss
║${tz} hentaiparadise
║${tz} animearmpits
║${tz} hentaifemdom
║${tz} lewdanimegirls
║${tz} biganimetiddies
║${tz} animebellybutton
║${tz} hentai4everyone
╠══
╠════⟢ Lewd II
║${tz} bj
║${tz} ero
║${tz} cum
║${tz} feet
║${tz} yuri
║${tz} trap
║${tz} lewd
║${tz} eron
║${tz} solo
║${tz} gasm
║${tz} poke
║${tz} anal
║${tz} holo
║${tz} tits
║${tz} kuni
║${tz} kiss
║${tz} erok
║${tz} smug
║${tz} baka
║${tz} solog
║${tz} feetg
║${tz} lewdk
║${tz} waifu
║${tz} pussy
║${tz} femdom
║${tz} cuddle
║${tz} hentai
║${tz} eroyuri
║${tz} cum_jpg
║${tz} erofeet
║${tz} holoero
║${tz} classic
║${tz} erokemo
║${tz} fox_girl
║${tz} futanari
║${tz} lewdkemo
║${tz} wallpaper
║${tz} pussy_jpg
║${tz} kemonomimi
║${tz} nsfw_avatar
╠══
║ Get Features
║ API's By: LoLHuman
║ shoujo-chan
╚══`					           
nayla.sendMessage(from, NsfWx, image, { quoted: nay, caption: NsFw })                                                                       
                    break
				//2	
					case 'halalmenu':  
					jds = []         
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))           
HM =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Halal Menu
│ ${tz} listsurah
│ ${tz} alquran
│ ${tz} alquranaudio
│ ${tz} asmaulhusna
│ ${tz} kisahnabi
│ ${tz} jadwalsholat
╰──❲ ${NameBot}`
mentions(HM, jds, true)                                                     
                    break
				//3	
					case 'harammenu':  
					jds = []           
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))           
HHM =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Haram Menu
│ ${tz} xhamstersearch
│ ${tz} xhamster
│ ${tz} xnxxsearch
│ ${tz} xnxx
╰──❲ ${NameBot}`  
mentions(HHM, jds, true)                                                  
                    break
                //4    
					case 'toolsmenu':                      
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
					reply(`${pushname} ~\nGathering data, please wait....`)
					TMenu = await getBuffer(`${pictRMenu}`)
ToolMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Tools Menu
│${tz} wikipedia
│${tz} translate
│${tz} brainly
│${tz} kbbi
│${tz} hoax
│${tz} jarak
│${tz} translate
│${tz} urbandictionary
│${tz} jadwaltv
│${tz} jadwaltvnow
│${tz} newsinfo
│${tz} cnnindonesia
│${tz} cnnnasional
│${tz} cnninternasional
│${tz} infogempa
│${tz} google
│${tz} shortlink
╰──❲ ${NameBot}`         
nayla.sendMessage(from, TMenu, image, { quoted: nay, caption: ToolMenu })                                         
                    break
				//5	
					case 'mediamenu':           
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
					reply(`${pushname} ~\nGathering data, please wait....`)
					MMMenu = await getBuffer(`${pictRMenu}`)           
MMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Media Menu
│${tz} lk21
│${tz} drakorongoing			
│${tz} ytplay <prem>
│${tz} ytsearch
│${tz} ytmp3 <prem>
│${tz} ytmp4 <prem>
│${tz} telesticker <prem>
│${tz} tiktoknowm <prem>
│${tz} tiktokmusic <prem>
│${tz} spotify <prem>
│${tz} spotifysearch
│${tz} jooxplay <prem>
│${tz} igdl <prem>
│${tz} igdl2 <prem>
│${tz} twtdl <prem>
│${tz} fbdl <prem>
│${tz} zippyshare
│${tz} pinterest
│${tz} pinterest2
│${tz} pinterestdl
╰──❲ ${NameBot}`    
nayla.sendMessage(from, MMMenu, image, { quoted: nay, caption: MMenu })                                                 
                    break 					
				//6	
					case 'makermenu':           
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))  
					reply(`${pushname} ~\nGathering data, please wait....`) 
					MMenu = await getBuffer(`${pictRMenu}`)        
makerMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Maker Menu─
│${tz} ttp
│${tz} ttp2
│${tz} ttp3
│${tz} ttp4
│${tz} attp
│${tz} attpz
│${tz} triggered
│${tz} pornhub
│${tz} glitch
│${tz} avenger
│${tz} space
│${tz} ninjalogo
│${tz} marvelstudio
│${tz} lionlogo
│${tz} wolflogo
│${tz} steel3d
│${tz} wallgravity
╰──❲ ${NameBot}`  
nayla.sendMessage(from, MMenu, image, { quoted: nay, caption: makerMenu })                                                   
                    break 
				//7	
					case 'funtextmenu':           
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))   
					reply(`${pushname} ~\nGathering data, please wait....`)
					FMenu = await getBuffer(`${pictRMenu}`)          
FtextMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ FunText Menu
│${tz} cerpen
│${tz} ceritahoror
│${tz} wancak
│${tz} quotes
│${tz} quotesanime
│${tz} quotesdilan
│${tz} quotesimage
│${tz} faktaunik
│${tz} katabijak
│${tz} bucin
│${tz} pantun
│${tz} randomnama
╰──❲ ${NameBot}`  
nayla.sendMessage(from, FMenu, image, { quoted: nay, caption: FtextMenu })                                                  
                    break
				//8	
					case 'randommenu':           
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))  
					reply(`${pushname} ~\nGathering data, please wait....`)
					RandomM = await getBuffer(`${pictRMenu}`)        
randomMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」──  

╭──❲ Random Features
│${tz} otakudesu
│${tz} otakudesu-cari
│${tz} cari-anime
│${tz} pixiv
│${tz} pixivdl
│${tz} wait
│${tz} wikipedia
│${tz} translate
│${tz} brainly
│${tz} waifuu
│${tz} art
│${tz} genshin
│${tz} elf
│${tz} loli
│${tz} neko
│${tz} shota
│${tz} husbu
│${tz} sagiri
│${tz} shinobu
│${tz} megumin
│${tz} wallnime
│${tz} covidindo
│${tz} covidglobal
╰──❲ ${NameBot}` 
nayla.sendMessage(from, RandomM, image, { quoted: nay, caption: randomMenu })                                                   
                    break
			//has already own property		    
                    case 'tagmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix)) 
					reply(`${pushname} ~\nGathering data, please wait....`)
					TMenu = await getBuffer(`${pictRMenu}`)                           
TagMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Tag Menu
│${tz} comly
│${tz} ngegay
│${tz} nyilit
│${tz} ganteng
│${tz} cantik
│${tz} jelek
│${tz} goblok
│${tz} bego
│${tz} pinter
│${tz} jago
│${tz} babi
│${tz} beban
│${tz} baik
│${tz} jahat
│${tz} anjing
│${tz} monyet
│${tz} haram
│${tz} kontol
│${tz} pakboy
│${tz} pakgirl
│${tz} sadboy
│${tz} sadgirl
│${tz} wibu
│${tz} nolep
│${tz} hebat
╰──❲ ${NameBot}`   
nayla.sendMessage(from, TMenu, image, { quoted: nay, caption: TagMenu })                 
                    break
                    case 'cekmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))  
					reply(`${pushname} ~\nGathering data, please wait....`)   
					CMenu = await getBuffer(`${pictRMenu}`)                              
CekMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Cek Menu
│${tz} badutcek
│${tz} ampascek
│${tz} hokicek
│${tz} pedocek
│${tz} silitcek
│${tz} gaycek
│${tz} hodecek
│${tz} gantengcek
│${tz} cantikcek
│${tz} jelekcek
│${tz} goblokcek
│${tz} begocek
│${tz} pintercek
│${tz} jagocek
│${tz} nolepcek
│${tz} babicek
│${tz} bebancek
│${tz} baikcek
│${tz} jahatcek
│${tz} anjingcek
│${tz} haramcek
│${tz} kontolcek
│${tz} pakboycek
│${tz} pakgirlcek
│${tz} sangecek
│${tz} bapercek
╰──❲ ${NameBot}`  
nayla.sendMessage(from, CMenu, image, { quoted: nay, caption: CekMenu }) 
                    break
                    case 'internalmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))   
					reply(`${pushname} ~\nGathering data, please wait....`)					
					internalMenu = await getBuffer(`${pictRMenu}`)                                 
intMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Internal Menu
│${tz} readmore
│${tz} chatlist
│${tz} addsticker
│${tz} addvn
│${tz} getvn
│${tz} getsticker
│${tz} liststicker
│${tz} listvn
│${tz} addimage
│${tz} getimage
│${tz} imagelist
│${tz} addvideo
│${tz} getvideo
│${tz} listvideo
╰──❲ ${NameBot}`  
nayla.sendMessage(from, internalMenu, image, { quoted: nay, caption: intMenu })      
                    break 
                    case 'grupmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix)) 
					reply(`${pushname} ~\nGathering data, please wait....`)                             
                    GMenu = await getBuffer(`${pictRMenu}`)  
grupMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Grup Menu 
│${tz} kapankah
│${tz} apakah
│${tz} jadian
│${tz} add
│${tz} kick
│${tz} promote
│${tz} demote
│${tz} welcome
│${tz} hidetag10
│${tz} group
│${tz} level
│${tz} limit
│${tz} leveling
│${tz} linkgc
│${tz} tagall
│${tz} delete
╰──❲ ${NameBot}`					 
nayla.sendMessage(from, GMenu, image, { quoted: nay, caption: grupMenu }) 
                    break  
                    case 'ownermenu':       
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))  
					reply(`${pushname} ~\nGathering data, please wait....`)
					OMenu = await getBuffer(`${pictRMenu}`)               
OwnMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Owner Menu
│*FYI: hanya khusus utk Owner Bot!	
│${tz} dellprem 
│${tz} addprem
│${tz} clearall
│${tz} bc
│${tz} owner
│${tz} author
│${tz} bugtroli
│${tz} setout
│${tz} setwelcome
│${tz} settz
│${tz} setthum
│${tz} setpp
│${tz} setprefix
│${tz} setreply
│${tz} setplugin-leveling
╰──❲ ${NameBot}` 
nayla.sendMessage(from, OMenu, image, { quoted: nay, caption: OwnMenu })                                                     
                    break
					case 'allmenu':
					case 'allfeature':	
					case 'all':         
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))   
					reply(`${pushname} ~\nGathering data, please wait....`)
					reply(`Rertrieving database\nRecolection, please wait....`)    
					AllMenuX = await getBuffer(`${pictRMenu}`)   
semuaMenu =`╭─── 「 Shoujo Bot 」── 
├ • *Nama :* shoujo-chan
├ • *Versi :* 1.0 
├ • *Prefix :* ${prefix}
├ • Bulan: ${bulan}
├ • Total Chat : ${tchat}
╰───「 WhatsApp Bot 」── 

╭──❲ Exclusive Menu
│ ${tz} grupmenu
│ ${tz} tagmenu
│ ${tz} cekmenu
│ ${tz} mediamenu
│ ${tz} funtextmenu
│ ${tz} makermenu
│ ${tz} gunamenu
│ ${tz} nsfwmenu
│ ${tz} halalmenu
│ ${tz} harammenu
╰───────────────────────────────

╭──❲ Sub Menu
│ ${tz} internalmenu
│ ${tz} nsfwmenu
│ ${tz} ownermenu
│ ${tz} mygrub
│ ${tz} infobot
│ ${tz} aboutbot
╰───────────────────────────────

╭──❲ Internal Menu
│${tz} readmore
│${tz} chatlist
│${tz} addsticker
│${tz} addvn
│${tz} getvn
│${tz} getsticker
│${tz} liststicker
│${tz} listvn
│${tz} addimage
│${tz} getimage
│${tz} imagelist
│${tz} addvideo
│${tz} getvideo
│${tz} listvideo
╰───────────────────────────────

╭──❲ Grup Menu 
│${tz} kapankah
│${tz} apakah
│${tz} jadian
│${tz} otakudesu
│${tz} add
│${tz} kick
│${tz} promote
│${tz} demote
│${tz} antilink
│${tz} welcome
│${tz} hidetag10
│${tz} group
│${tz} antigay
│${tz} antibocil
│${tz} antiwibu
│${tz} antikasar
│${tz} antitag
│${tz} level
│${tz} limit
│${tz} leveling
│${tz} antijawa 
│${tz} linkgc
│${tz} tagall
│${tz} delete
╰───────────────────────────────

╭──❲ Tag Menu
│${tz} comly
│${tz} ngegay
│${tz} nyilit
│${tz} ganteng
│${tz} cantik
│${tz} jelek
│${tz} goblok
│${tz} bego
│${tz} pinter
│${tz} jago
│${tz} babi
│${tz} beban
│${tz} baik
│${tz} jahat
│${tz} anjing
│${tz} monyet
│${tz} haram
│${tz} kontol
│${tz} pakboy
│${tz} pakgirl
│${tz} sadboy
│${tz} sadgirl
│${tz} wibu
│${tz} nolep
│${tz} hebat
╰───────────────────────────────

╭──❲ Cek Menu
│${tz} badutcek
│${tz} ampascek
│${tz} hokicek
│${tz} pedocek
│${tz} silitcek
│${tz} gaycek
│${tz} hodecek
│${tz} gantengcek
│${tz} cantikcek
│${tz} jelekcek
│${tz} goblokcek
│${tz} begocek
│${tz} pintercek
│${tz} jagocek
│${tz} nolepcek
│${tz} babicek
│${tz} bebancek
│${tz} baikcek
│${tz} jahatcek
│${tz} anjingcek
│${tz} haramcek
│${tz} kontolcek
│${tz} pakboycek
│${tz} pakgirlcek
│${tz} sangecek
│${tz} bapercek
╰───────────────────────────────

╭──❲ Halal Menu
│ ${tz} listsurah
│ ${tz} alquran
│ ${tz} alquranaudio
│ ${tz} asmaulhusna
│ ${tz} kisahnabi
│ ${tz} jadwalsholat
╰───────────────────────────────

╭──❲ Haram Menu
│ ${tz} xhamstersearch
│ ${tz} xhamster
│ ${tz} xnxxsearch
│ ${tz} xnxx
╰───────────────────────────────

╭──❲ Tools Menu
│${tz} wikipedia
│${tz} translate
│${tz} brainly
│${tz} kbbi
│${tz} hoax
│${tz} jarak
│${tz} translate
│${tz} urbandictionary
│${tz} jadwaltv
│${tz} jadwaltvnow
│${tz} newsinfo
│${tz} cnnindonesia
│${tz} cnnnasional
│${tz} cnninternasional
│${tz} infogempa
│${tz} google
│${tz} shortlink
╰───────────────────────────────

╭──❲ Media Menu
│${tz} lk21
│${tz} drakorongoing			
│${tz} ytplay <prem>
│${tz} ytsearch
│${tz} ytmp3 <prem>
│${tz} ytmp4 <prem>
│${tz} telesticker <prem>
│${tz} tiktoknowm <prem>
│${tz} tiktokmusic <prem>
│${tz} spotify <prem>
│${tz} spotifysearch
│${tz} jooxplay <prem>
│${tz} igdl <prem>
│${tz} igdl2 <prem>
│${tz} twtdl <prem>
│${tz} fbdl <prem>
│${tz} zippyshare
│${tz} pinterest
│${tz} pinterest2
│${tz} pinterestdl
╰───────────────────────────────

╭──❲ Maker Menu─
│${tz} ttp
│${tz} ttp2
│${tz} ttp3
│${tz} ttp4
│${tz} attp
│${tz} attpz
│${tz} triggered
│${tz} pornhub
│${tz} glitch
│${tz} avenger
│${tz} space
│${tz} ninjalogo
│${tz} marvelstudio
│${tz} lionlogo
│${tz} wolflogo
│${tz} steel3d
│${tz} wallgravity
╰───────────────────────────────

╭──❲ FunText Menu
│${tz} cerpen
│${tz} ceritahoror
│${tz} wancak
│${tz} quotes
│${tz} quotesanime
│${tz} quotesdilan
│${tz} quotesimage
│${tz} faktaunik
│${tz} katabijak
│${tz} bucin
│${tz} pantun
│${tz} randomnama
╰───────────────────────────────

╭──❲ Random Features
│${tz} otakudesu
│${tz} otakudesu-cari
│${tz} cari-anime
│${tz} pixiv
│${tz} pixivdl
│${tz} wait
│${tz} wikipedia
│${tz} translate
│${tz} brainly
│${tz} waifuu
│${tz} art
│${tz} genshin
│${tz} elf
│${tz} loli
│${tz} neko
│${tz} shota
│${tz} husbu
│${tz} sagiri
│${tz} shinobu
│${tz} megumin
│${tz} wallnime
│${tz} covidindo
│${tz} covidglobal
╰───────────────────────────────

╭──❲ Supported By:
│────────GitHub──────────────
│ ${tz} Mhank Barbar//github
│ ${tz} LolHuman//github
│ ${tz} Piyo//github
│─────── API's───────────────
│ ${tz} XteamApi
│ ${tz} ApiZeks
│ ${tz} LoL Human Rests Api
│───────Forums───────────────
│ ${tz} Hentai.Impact 3
│ ${tz} Nhentai.net
│ ${tz} Nekopoi.care
│ ${tz} Hitomi.la
│ ${tz} Doujindesu.id
╰──❲ ${NameBot}`
nayla.sendMessage(from, AllMenuX, image, { quoted: nay, caption: semuaMenu })   
                    break


			//deprecated
                /*    case 'spesialmenu':        
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))              
                    reply(nyz.spesialmenu(prefix, ownername, tz)) 
                    break                    
                    case 'sertifikat':            
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))          
                    reply(nyz.sertifikat(prefix, ownername, tz))  
                    break   
                    case 'stickmenu':         
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))             
                    reply(nyz.stickmenu(prefix, ownername, tz)) 
                    break
                    case 'allmenu':                      
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
                    reply(nyz.allmenu(ownername, auth0r, bulan, tchat, tz, prefix))                                                   
                    break                    
                    case 'makerfoto':   
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))                   
                    reply(nyz.makerfoto(prefix, ownername, tz)) 
                    break                 					                                           
                    case 'randomtext':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
                    reply(nyz.randomtext(prefix, ownername, tz))   
                    break                                  
                    case 'gamemenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix)) 
                    reply(nyz.gamemenu(prefix, ownername, tz))   
                    break 
                    case 'newsmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))                                   
                    reply(nyz.newsmenu(prefix, ownername, tz))  
                    break
                    case 'pornmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))                                  
                    reply(nyz.pornmenu(prefix, ownername, tz))   
                    break
                    case 'soundmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))                                  
                    reply(nyz.soundmenu(prefix, ownername, tz))   
                    break
                    case 'downloadmenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))                                  
                    reply(nyz.downloadmenu(prefix, ownername, tz)) 
                    break
                    case 'promenu':                      
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))                                                      	
                    reply(nyz.promenu(prefix, ownername, tz))   
                    break
				*/	    
			//ends here

                    case 'donasi':  
					jds = []
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))                     	
DO = `Hemmm.... mau donasi om?
Jangan php ya :)
Go-Pay : 081329585825
Tsel: 081329585825
Makasih...`
mentions(DO, jds, true)
                    break
		//make new session
					case 'badutcek':                      	  
                    	if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        	if (isLimit(sender)) return
							jds = []
			        		await limitAdd(sender)
                    			N = `${pushname} Ke badut'an kamu\n`
                    			N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    		mentions(N, jds, true)
					break
					case 'sepuhcek':                      	  
                    	if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        	if (isLimit(sender)) return
						jds = []
			        	await limitAdd(sender)
                    			N = `${pushname} Ke sepuh'an kamu\n`
                    			N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    		mentions(N, jds, true)
					break
                    case 'hokicek':                      	  
                    	if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        	if (isLimit(sender)) return
						jds = []
			        		await limitAdd(sender)
                    			N = `${pushname} Ke hoki'an kamu\n`
                    			N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    		mentions(N, jds, true)
					break					
					case 'ampascek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} Ke ampas'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
					break
					case 'pedocek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} Ke pedo'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
					break
					case 'silitcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} Ke silit'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
					break
					case 'gantengcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} Ke ganteng'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
					case 'gaycek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} Jiwa gay kamu yaitu...\n`
                    N += `Sebesar : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
                    break 
					case 'hodecek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} KE *HODE'AN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
					mentions(N, jds, true)
                    break 
                    case 'cantikcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} KE *CANTIKAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}% 😁*`
                    mentions(N, jds, true)
                    break
                    case 'jelekcek':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)                      	
                    N = `${pushname} KE *J3L3K4N* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤢`
                    mentions(N, jds, true)
                    break 
                    case 'goblokcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} KE *GOBLOKAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤣`
                    mentions(N, jds, true)
                    break 
                    case 'begocek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} KE *BEGO* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😂`
                    mentions(N, jds, true)
                    break 
                    case 'pintercek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *PINTARAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😗`
                    mentions(N, jds, true)
                    break 
                    case 'jagocek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *JAGOAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 💪`
                    mentions(N, jds, true)
                    break 
                    case 'nolepcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *NOLEPAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🧐`
                    mentions(N, jds, true)
                    break 
                    case 'babicek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *BABIAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤪`
                    mentions(N, jds, true)
                    break 
                    case 'bebancek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} KE *BEBANAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤬`
                    mentions(N, jds, true)
                    break 
                    case 'baikcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *BAIKAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😇`
                    mentions(N, jds, true)
                    break 
                    case 'jahatcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *JAHATAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😈`
                    mentions(N, jds, true)
                    break 
                    case 'anjingcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    mentions(N, jds, true)
                    break                      
                    case 'haramcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} KE *HARAMAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🥴`
                    mentions(N, jds, true)
                    break  
                    case 'kontolcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *KOMTOLAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🙂`
                    mentions(N, jds, true)
                    break 
                    case 'pakboycek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender) 
                    N = `${pushname} KE *PAKBOYZ* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😏`
                    mentions(N, jds, true)
                    break 
                    case 'pakgirlcek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)	
                    N = `${pushname} KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    mentions(N, jds, true)
                    break             
                    case 'sangecek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} Jiwa sange ${urname} yaitu...\n`
                    N += `Sebesar : *${nayla3}${nayla4}%* 🤤`
                    mentions(N, jds, true)
                    break
                    case 'bapercek':                      	  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
					jds = []
			        await limitAdd(sender)
                    N = `${pushname} JIWA *BEPERAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😘`
                    mentions(N, jds, true)
                    break                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                     

                   case 'darkjokes':  
                   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break

/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok': case 'gay' : case 'badut': case 'pedo': case 'ampazz':
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': case 'sepuh':  
               	   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break 
				   case 'ngegay': 
               	   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A2 = groupMembers
  		 		   const B2 = groupMembers
 				   const C2 = A2[Math.floor(Math.random() * A2.length)]
				   D2 = `Yang *Sedang ${command}* disini adalah @${C2.jid.split('@')[0]} yhahaha sangad berbahaya sloerrr kudu hati"🤣`                  
				   jds.push(C2.jid)
				   mentions(D2, jds, true)
				   break
				   case 'comly': 
               	   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A3 = groupMembers
  		 		   const B3 = groupMembers
 				   const C3 = A3[Math.floor(Math.random() * A3.length)]
				   D3 = `Yang *Sedang ${command}* disini adalah @${C3.jid.split('@')[0]} yhahaha kocok teross tuh batang 🤣`                  
				   jds.push(C3.jid)
				   mentions(D3, jds, true)
				   break
				   case 'nyilit': 
               	   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A4 = groupMembers
  		 		   const B4 = groupMembers
 				   const C4 = A1[Math.floor(Math.random() * A4.length)]
				   D4 = `Yang *Sedang ${command}* disini adalah @${C4.jid.split('@')[0]} astaga, ga pengen lobang yang lain bre? (>,,<)`                  
				   jds.push(C4.jid)
				   mentions(D4, jds, true)
				   break 
				   case 'jadian':
				   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n Kyaaaa! selamat ya ${urname} 🤭, Shiroko selalu mendukungmu!!🥰`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break				
				   case 'kapankah':  
                   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
				   if (args.length < 1) return reply(`${urname} dongo ya?, textnya mana tol konn... eh maap nich toxic tehe`)
			       await limitAdd(sender)				   
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
		           case 'apakah':  
                   if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			       if (isLimit(sender)) return
				   if (args.length < 1) return reply(`${urname} dongo ya?, textnya mana tol konn... eh maap nich toxic tehe`)
			       await limitAdd(sender)
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break                                                                                                                                                                                                                                                                                                                            				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/                      	                                                                   
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
			    	var split = `shoujo-chan`
		     		var selepbot =         {
					contextInfo:   {
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
					case 'sticker':
					case 's':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return reply('Sedang di proses!, mohon tunggu sebentar ya ${urname}... jika terlalu lama mungkin terjadi error :(')
						await limitAdd(sender)	
						if ((isMedia && nay.message.videoMessage || isQuotedImage) && args.length == 0) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
							filePath = await nayla.downloadAndSaveMediaMessage(encmedia)
							file_name = getRandom('.webp')
							request({
								url: `https://api.lolhuman.xyz/api/convert/towebp?apikey=${l0lhuman}`,
								method: 'POST',
								formData: {
									"img": fs.createReadStream(filePath)
								},
								encoding: "binary"
							}, function(error, response, body) {
								fs.unlinkSync(filePath)
								fs.writeFileSync(file_name, body, "binary")
								ini_buff = fs.readFileSync(file_name)
								nayla.sendMessage(from, ini_buff, sticker).then(() => {
									fs.unlinkSync(file_name)
								})
							});
						} else {
							reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
						}
						break
						case '#sticker2':
							case '#stiker2':
								if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
								if (isLimit(sender)) return reply('Sedang di proses!, mohon tunggu sebentar ya ${urname}... jika terlalu lama mungkin terjadi error :(')
								await limitAdd(sender)
							  if (message.isMedia) {
								const mediaData = await decryptMedia(message)
								const imageBase64 = `data:${
								  message.mimetype
								  };base64,${mediaData.toString('base64')}`
								await nayla.sendImageAsSticker(message.from, imageBase64)
							  } else if (message.quotedMsg && message.quotedMsg.type == 'image') {
								const mediaData = await decryptMedia(message)
								const imageBase64 = `data:${
								  message.mimetype
								  };base64,${mediaData.toString('base64')}`
								await nayla.sendImageAsSticker(message.from, imageBase64)
							  } 
							  else {
								nayla.sendText(
								  message.from,
								  'Tidak ada gambar! Untuk membuat sticker kirim gambar dengan caption #sticker2'
								)
							  }
							  
							  break
						  
									
						case 'stiker3':
						case 'sticker3':
							if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
							if (isLimit(sender)) return reply('Sedang di proses!, mohon tunggu sebentar ya ${urname}... jika terlalu lama mungkin terjadi error :(')
							await limitAdd(sender)								 
							if (isMedia && isImage || isQuotedImage) {
									 try {
								 await nayla.reply(naylachan)
									 const encryptMedia = isQuotedImage ? quotedMsg : message
									 const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
							 const author = 'Shirogane Kei'
							 const pack = 'Kei Chwanss'
									 const mediaData = await decryptMedia(encryptMedia, uaOverride)
									 const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
									 await nayla.sendImageAsSticker(from, imageBase64, { author: `${author}`, pack: `${pack}` })
									 console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
								 } catch (err) {
									 console.error(err)
									 await nayla.reply(from, 'Error!', id)
								 }
							 } else if (args[0] === 'nobg') {
								 if (isMedia || isQuotedImage) {
												 const encryptMedia = isQuotedImage ? quotedMsg : message
										 const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
										 const mediaData = await decryptMedia(encryptMedia, uaOverride)
										 const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
												 await nayla.sendImageAsSticker(from, imageBase64, {keepScale: true, removebg: true})
											 } else {
												 await nayla.reply(from, 'Format pesan salah Onii-chan...', id)
											 }} else if (args.length === 1) {
								 if (!isUrl(url)) { await nayla.reply(from, 'Maaf Onii-chan, link yang kamu kirim tidak valid.', id) }
								 nayla.sendStickerfromUrl(from, url).then((r) => (!r && r !== undefined)
									 ? nayla.sendText(from, 'Maaf, link yang kamu kirim tidak memuat gambar.')
									 : nayla.reply(from, 'Here\'s your sticker')).then(() => console.log(`Sticker Processed for ${processTime(t, moment())} Second`))
							 } else {
								 await nayla.reply(from, `Tidak ada gambar! Untuk menggunakan ${prefix}sticker\n\n\nKirim gambar dengan caption\n${prefix}sticker <biasa>\n${prefix}sticker nobg <tanpa background>\n\natau Kirim pesan dengan\n${prefix}sticker <link_gambar>`)								 
							 } if (isMedia && type === 'video' || mimetype === 'image/gif') {
								 await nayla.reply(naylachan)
								 try {
									 const mediaData = await decryptMedia(message, uaOverride)
									 await nayla.sendMp4AsSticker(from, mediaData, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:10.0`, loop: 0 })
										 .then(async () => {
											 console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
											 await nayla.sendText(naylachan)
										 })
								 } catch (err) {
									 console.error(err)
									 await nayla.reply(naylachan)
								 }
							 } else if (isQuotedGif || isQuotedVideo) {
								 await nayla.reply(naylachan)
								 try {
									 const mediaData = await decryptMedia(quotedMsg, uaOverride)
									 await nayla.sendMp4AsSticker(from, mediaData, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:10.0`, loop: 0 })
										 .then(async () => {
											 console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
											 await nayla.sendText(naylachan)
										 })
								 } catch (err) {
									 console.error(err)
									 await nayla.reply(naylachan)
								 }
							 } 
							 break

			//starts from here is modificated case	Js 1671
							 //experimental
							 //replace if error to /* */										
	case 'nhentaipdf':  
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return						
				await limitAdd(sender)
				if (!isPrem) return reply(nyz.prem1(command)) 
				if (args.length == 0) return reply(`Contoh: ${prefix + command}<spasi>12345 Tunggu sebentar \nMaksimal 5-10menit/req, diluar itu berarti error atau size file doujinnya besar`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				henid = args[0]
				get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
				get_result = get_result.result
				ini_buffer = await getBuffer(get_result)
				nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `Nhentai - ${henid}.pdf` })							
				break
	case 'nhentaiinfo':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)
				if (args.length == 0) return reply(`Contoh: ${prefix + command} 344253`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				jds = []
				henid = args[0]
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${l0lhuman}`)
				get_result = get_result.result
				ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
				ini_txt += `Title Native : ${get_result.title_native}\n`
				ini_txt += `Read Online : ${get_result.read}\n`
				get_info = get_result.info
				ini_txt += `Parodies : ${get_info.parodies}\n`
				ini_txt += `Character : ${get_info.characters.join(", ")}\n`
				ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
				ini_txt += `Artist : ${get_info.artists}\n`
				ini_txt += `Group : ${get_info.groups}\n`
				ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
				ini_txt += `Categories : ${get_info.categories}\n`
				ini_txt += `Pages : ${get_info.pages}\n`
				ini_txt += `Uploaded : ${get_info.uploaded}\n`
				mentions(ini_txt, jds, true)			
				break	
	case 'nhentaicari':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)				
				jds = []				
				if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				query = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${l0lhuman}&query=${query}`)
				get_result = get_result.result
				ini_txt = "Nih hasilnya ${urname}! : \n"
				for (var x of get_result) {
					ini_txt += `Id : ${x.id}\n`
					ini_txt += `Title English : ${x.title_english}\n`
					ini_txt += `Title Japanese : ${x.title_japanese}\n`
					ini_txt += `Native : ${x.title_native}\n`
					ini_txt += `Upload : ${x.date_upload}\n`
					ini_txt += `Page : ${x.page}\n`
					ini_txt += `Favourite : ${x.favourite}\n\n`
					ini_txt += `- - - \n`
				}
				mentions(ini_txt, jds, true)
				break		
	case 'nekopoi':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)	 
				if (args.length == 0) return reply(`Contoh: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				ini_url = args[0]
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${l0lhuman}&url=${ini_url}`)
				get_result = get_result.result
				ini_txt = `Title : ${get_result.anime}\n`
				ini_txt += `Porducers : ${get_result.producers}\n`
				ini_txt += `Duration : ${get_result.duration}\n`
				ini_txt += `Size : ${get_result.size}\n`
				ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
				ini_txt += `- - - \n`				
				link = get_result.link
				for (var x in link) {
					ini_txt += `\n${link[x].name}\n`
					link_dl = link[x].link
					for (var y in link_dl) {
						ini_txt += `${y} - ${link_dl[y]}\n`
					}		
				}
				ini_buffer = await getBuffer(get_result.thumb)
				await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: ini_txt })
				break	
	case 'nekopoicari':
					jds = []
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)					
				if (args.length == 0) return reply(`Contoh: ${prefix + command} Isekai Harem`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				query = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${l0lhuman}&query=${query}`)
				get_result = get_result.result
				ini_txt = ""
				for (var x of get_result) {
					ini_txt += `Title : ${x.title}\n`
					ini_txt += `Link : ${x.link}\n`
					ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
					ini_txt += `- - - \n`
				}
				mentions(ini_txt, jds, true)				
				break
	case 'carianime':
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)
					if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
					//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
					query = args.join(" ")
					get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${l0lhuman}&query=${query}`)
					get_result = get_result.result
					ini_txt = `Id : ${get_result.id}\n`
					ini_txt += `Id MAL : ${get_result.idMal}\n`
					ini_txt += `Title : ${get_result.title.romaji}\n`
					ini_txt += `English : ${get_result.title.english}\n`
					ini_txt += `Native : ${get_result.title.native}\n`
					ini_txt += `Format : ${get_result.format}\n`
					ini_txt += `Episodes : ${get_result.episodes}\n`
					ini_txt += `Duration : ${get_result.duration} mins.\n`
					ini_txt += `Status : ${get_result.status}\n`
					ini_txt += `Season : ${get_result.season}\n`
					ini_txt += `Season Year : ${get_result.seasonYear}\n`
					ini_txt += `Source : ${get_result.source}\n`
					ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
					ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
					ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
					ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
					ini_txt += `Score : ${get_result.averageScore}%\n`
					ini_txt += `Characters : \n`
					ini_txt += `- - - \n`
					ini_character = get_result.characters.nodes
					for (var x of ini_character) {
						ini_txt += `- ${x.name.full} (${x.name.native})\n`
					}
					ini_txt += `\nDescription : ${get_result.description}`
					thumbnail = await getBuffer(get_result.coverImage.large)
					await nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
				break
				case 'pixiv':
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)
				if (!isPrem) return reply(nyz.prem1(command))
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)				
					if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii \nUntuk hasilnya bisa saja tidak akurat ya ${urname}, mohon dimengerti`)
					query = args.join(" ")
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${l0lhuman}&query=${query}`)
					capt = `Nih , jangan lupa bilang makasih...`
					await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: capt })
					//experimental
					break
				case 'pixivdl':
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)
					if (args.length == 0) return reply(`Contoh: ${prefix + command} 63456028`)
					//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
					query = args[0]
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${l0lhuman}`)
					capt = `Nih ${urname}, jangan lupa bilang makasih...`
					await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: capt })
				break
				// Information //	
			case 'randomhentai':
			case 'chiisaihentai':
			case 'trap':
			case 'blowjob':
			case 'yaoi':
			case 'ecchi':
			case 'hentai':
			case 'ahegao':
			case 'hololewd':
			case 'sideoppai':
			case 'animefeets':
			case 'animebooty':
			case 'animethighss':
			case 'hentaiparadise':
			case 'animearmpits':
			case 'hentaifemdom':
			case 'lewdanimegirls':
			case 'biganimetiddies':
			case 'animebellybutton':
			case 'hentai4everyone':				
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				anu1 = `Nih ${urname}, jangan lupa bilang makasih...`		
				await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${l0lhuman}`).then((gambar) => {
					nayla.sendMessage(from, gambar, image, { quoted: nay, caption: anu1 })
				})
				break	
			case 'randomhentai2':
			case 'bj':
			case 'ero':
			case 'cum':
			case 'feet':
			case 'yuri':
			case 'trap':
			case 'lewd':
			case 'feed':
			case 'eron':
			case 'solo':
			case 'gasm':
			case 'poke':
			case 'anal':
			case 'holo':
			case 'tits':
			case 'kuni':
			case 'kiss':
			case 'erok':
			case 'smug':
			case 'baka':
			case 'solog':
			case 'feetg':
			case 'lewdk':
			case 'waifu':
			case 'pussy':
			case 'femdom':
			case 'cuddle':
			case 'hentai':
			case 'eroyuri':
			case 'cum_jpg':
			case 'blowjob':
			case 'erofeet':
			case 'holoero':
			case 'classic':
			case 'erokemo':
			case 'fox_girl':
			case 'futanari':
			case 'lewdkemo':
			case 'wallpaper':
			case 'pussy_jpg':
			case 'kemonomimi':
			case 'nsfw_avatar':				
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				anu1 = `Nih ${urname}, jangan lupa bilang makasih...`		
				getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${l0lhuman}`).then((gambar) => {
					nayla.sendMessage(from, gambar, image, { quoted: nay, caption: anu1 })
				})
				break
			case 'waifuu':
			case 'art':
			case 'bts':
			case 'exo':
			case 'elf':
			case 'loli':
			case 'neko':
			case 'shota':
			case 'husbu':
			case 'sagiri':
			case 'shinobu':
			case 'megumin':
			case 'wallnime':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				anu1 = `Nih ${urname}, jangan lupa bilang makasih...`					
				getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`).then((gambar) => {
					nayla.sendMessage(from, gambar, image, { quoted: nay, caption: anu1 })
				})
				break							 
	//halal menu
		case 'listsurah':				    
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = 'List Surah:\n'
			for (var x in get_result) {
				ini_txt += `${x}. ${get_result[x]}\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'alquran':			    
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length < 1) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${l0lhuman}`
			quran = await fetchJson(urls)
			result = quran.result
			ayat = result.ayat
			ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
			for (var x of ayat) {
				arab = x.arab
				nomor = x.ayat
				latin = x.latin
				indo = x.indonesia
				ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
			}
			ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
			ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
			ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
			mentions(ini_txt, jds, true)
			break
		case 'alquranaudio':			    
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} 18 or ${prefix + command} 18/10`)
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
			surah = args[0]
			ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${l0lhuman}`)
			await nayla.sendMessage(from, ini_buffer, audio, { quoted: nay, mimetype: Mimetype.mp4Audio })
			break
		case 'asmaulhusna':			
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)    
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = `No : ${get_result.index}\n`
			ini_txt += `Latin: ${get_result.latin}\n`
			ini_txt += `Arab : ${get_result.ar}\n`
			ini_txt += `Indonesia : ${get_result.id}\n`
			ini_txt += `English : ${get_result.en}`
			mentions(ini_txt, jds, true)
			break
		case 'kisahnabi':
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			//experimental
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)			    
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} Muhammad`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = `Name : ${get_result.name}\n`
			ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
			ini_txt += `Umur : ${get_result.age}\n`
			ini_txt += `Tempat : ${get_result.place}\n`
			ini_txt += `Story : \n${get_result.story}`
			mentions(ini_txt, jds, true)
			break
		case 'jadwalsholat':
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)    
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} Yogyakarta`)
			//experimental
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
			daerah = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = `Wilayah : ${get_result.wilayah}\n`
			ini_txt += `Tanggal : ${get_result.tanggal}\n`
			ini_txt += `Sahur : ${get_result.sahur}\n`
			ini_txt += `Imsak : ${get_result.imsak}\n`
			ini_txt += `Subuh : ${get_result.subuh}\n`
			ini_txt += `Terbit : ${get_result.terbit}\n`
			ini_txt += `Dhuha : ${get_result.dhuha}\n`
			ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
			ini_txt += `Ashar : ${get_result.ashar}\n`
			ini_txt += `Maghrib : ${get_result.imsak}\n`
			ini_txt += `Isya : ${get_result.isya}`
			mentions(ini_txt, jds, true)
			break		
	//halal menu ends here

		//haram menu
		case 'xhamstersearch':
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} Japanese`)
			//experimental
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${l0lhuman}&query=${query}`)
			get_result = get_result.result
			ini_txt = ""
			for (var x of get_result) {
				ini_txt += `Title : ${x.title}\n`
				ini_txt += `Views : ${x.views}\n`
				ini_txt += `Duration : ${x.duration}\n`
				ini_txt += `Link : ${x.link}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'xhamster':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
			//experimental
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${l0lhuman}&url=${query}`)
			get_result = get_result.result
			ini_txt = `Title : ${get_result.title}\n`
			ini_txt += `Duration : ${get_result.duration}\n`
			ini_txt += `Uploader : ${get_result.author}\n`
			ini_txt += `Upload : ${get_result.upload}\n`
			ini_txt += `View : ${get_result.views}\n`
			ini_txt += `Rating : ${get_result.rating}\n`
			ini_txt += `Like : ${get_result.likes}\n`
			ini_txt += `Dislike : ${get_result.dislikes}\n`
			ini_txt += `Comment : ${get_result.comments}\n`
			ini_txt += "Link : \n"
			link = get_result.link
			for (var x of link) {
				ini_txt += `${x.type} - ${x.link}\n\n`
			}
			thumbnail = await getBuffer(get_result.thumbnail)
			await nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
			break
		case 'xnxxsearch':
			jds = []
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} Japanese`)
			//experimental
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${l0lhuman}&query=${query}`)
			get_result = get_result.result
			ini_txt = ""
			for (var x of get_result) {
				ini_txt += `Title : ${x.title}\n`
				ini_txt += `Views : ${x.views}\n`
				ini_txt += `Duration : ${x.duration}\n`
				ini_txt += `Uploader : ${x.uploader}\n`
				ini_txt += `Link : ${x.link}\n`
				ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'xnxx':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
			//experimental
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${l0lhuman}&url=${query}`)
			get_result = get_result.result
			ini_txt = `Title : ${get_result.title}\n`
			ini_txt += `Duration : ${get_result.duration}\n`
			ini_txt += `View : ${get_result.view}\n`
			ini_txt += `Rating : ${get_result.rating}\n`
			ini_txt += `Like : ${get_result.like}\n`
			ini_txt += `Dislike : ${get_result.dislike}\n`
			ini_txt += `Comment : ${get_result.comment}\n`
			ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
			ini_txt += `Description : ${get_result.description}\n`
			ini_txt += "Link : \n"
			ini_link = get_result.link
			for (var x of ini_link) {
				ini_txt += `${x.type} - ${x.link}\n\n`
			}
			thumbnail = await getBuffer(get_result.thumbnail)
			await nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
			break
	//haram menu ends here

	//What anime is this (experimental)
	case 'wait':
		//experimental
		await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
		if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
			const filePath = await nayla.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
			const form = new FormData();
			const stats = fs.statSync(filePath);
			const fileSizeInBytes = stats.size;
			const fileStream = fs.createReadStream(filePath);
			form.append('img', fileStream, { knownLength: fileSizeInBytes });
			const options = {
				method: 'POST',
				credentials: 'include',
				body: form
			}
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${l0lhuman}`, {...options })
			fs.unlinkSync(filePath)
			get_result = get_result.result
			ini_video = await getBuffer(get_result.video)
			ini_txt = `Anilist id : ${get_result.anilist_id}\n`
			ini_txt += `MAL id : ${get_result.mal_id}\n`
			ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
			ini_txt += `Title Native : ${get_result.title_native}\n`
			ini_txt += `Title English : ${get_result.title_english}\n`
			ini_txt += `at : ${get_result.at}\n`
			ini_txt += `Episode : ${get_result.episode}\n`
			ini_txt += `Similarity : ${get_result.similarity}`
			await nayla.sendMessage(from, ini_video, video, { quoted: nay, caption: ini_txt })
		} else {
			reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
		}
		break

		case 'genshin':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} jean`)
			//experimental
			await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
			hero = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = `Name : ${get_result.title}\n`
			ini_txt += `Intro : ${get_result.intro}\n`
			ini_txt += `Icon : ${get_result.icon}\n`
			ini_icon = await getBuffer(get_result.cover1)
			await nayla.sendMessage(from, ini_icon, image, { quoted: nay, caption: ini_txt })
			ini_voice = await getBuffer(get_result.cv[0].audio[0])
			await nayla.sendMessage(from, ini_voice, audio, { quoted: nay, mimetype: Mimetype.mp4Audio })
			break
			case 'otakudesu-cari':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
				if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				query = args.join(" ")
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${l0lhuman}&query=${query}`)
				get_result = get_result.result
				ini_txt = `Title : ${get_result.title}\n`
				ini_txt += `Japanese : ${get_result.japanese}\n`
				ini_txt += `Judul : ${get_result.judul}\n`
				ini_txt += `Type : ${get_result.type}\n`
				ini_txt += `Episode : ${get_result.episodes}\n`
				ini_txt += `Aired : ${get_result.aired}\n`
				ini_txt += `Producers : ${get_result.producers}\n`
				ini_txt += `Genre : ${get_result.genres}\n`
				ini_txt += `Duration : ${get_result.duration}\n`
				ini_txt += `Studios : ${get_result.status}\n`
				ini_txt += `Rating : ${get_result.rating}\n`
				ini_txt += `Credit : ${get_result.credit}\n`
				get_link = get_result.link_dl
				for (var x in get_link) {
					ini_txt += `\n\n*${get_link[x].title}*\n`
					for (var y in get_link[x].link_dl) {
						ini_info = get_link[x].link_dl[y]
						ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
						ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
						ini_txt += `\`\`\`Link : \`\`\`\n`
						down_link = ini_info.link_dl
						for (var z in down_link) {
							ini_txt += `${z} - ${down_link[z]}\n`
						}
					}
				}
				mentions(ini_txt, jds, true)
				break
                case 'otakudesu':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
					//experimental
					await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${l0lhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    mentions(ini_txt, jds, true)
                    break				
				case 'character':  
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return
				await limitAdd(sender) 
				if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				query = args.join(" ")
				anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
				anu = anu1.result
				anu2 = `Id : ${anu.id}\n`
				anu2 += `Name : ${anu.name.full}\n`
				anu2 += `Native : ${anu.name.native}\n`
				anu2 += `Favorites : ${anu.favourites}\n`
				anu2 += `Media : \n`
				ini_media = anu.media.nodes
				for (var x of ini_media) {
					anu2 += `- ${x.title.romaji} (${x.title.native})\n`
				}
				anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
				thumbnail = await getBuffer(anu.image.large)
				nayla.sendMessage(from, thumbnail, image, { caption: anu2 })
				break
				case 'carimanga':  
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return
				await limitAdd(sender) 
				if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
				//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
				query = args.join(" ")
				anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
				anu = anu1.result
				anu2 = `➻ Id : ${anu.id}\n`
				anu2 += `➻ Id MAL : ${anu.idMal}\n`
				anu2 += `➻ Title : ${anu.title.romaji}\n`
				anu2 += `➻ English : ${anu.title.english}\n`
				anu2 += `➻ Native : ${anu.title.native}\n`
				anu2 += `➻ Format : ${anu.format}\n`
				anu2 += `➻ Chapters : ${anu.chapters}\n`
				anu2 += `➻ Volume : ${anu.volumes}\n`
				anu2 += `➻ Status : ${anu.status}\n`
				anu2 += `➻ Source : ${anu.source}\n`
				anu2 += `➻ Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
				anu2 += `➻ end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
				anu2 += `➻ Genre : ${anu.genres.join(", ")}\n`
				anu2 += `➻ Synonyms : ${anu.synonyms.join(", ")}\n`
				anu2 += `➻ Score : ${anu.averageScore}%\n`
				anu2 += `➻ Characters : \n`
				ini_character = anu.characters.nodes
				for (var x of ini_character) {
					anu2 += `- ${x.name.full} (${x.name.native})\n`
				}
				anu2 += `\nDescription : ${anu.description}`
				thumbnail = await getBuffer(anu.coverImage.large)
				nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
				break         				
		//guna menu											
				case 'cuaca':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)		
				if (args.length == 0) return reply(`Contoh: ${prefix + command} Yogyakarta`)
				daerah = args[0]
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${l0lhuman}`)
				get_result = get_result.result
				ini_txt = `Tempat : ${get_result.tempat}\n`
				ini_txt += `Cuaca : ${get_result.cuaca}\n`
				ini_txt += `Angin : ${get_result.angin}\n`
				ini_txt += `Description : ${get_result.description}\n`
				ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
				ini_txt += `Suhu : ${get_result.suhu}\n`
				ini_txt += `Udara : ${get_result.udara}\n`
				ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
				await nayla.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: nay })
				reply(ini_txt)
				break
				case 'covidindo':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)		
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${l0lhuman}`)
				get_result = get_result.result
				ini_txt = `Positif : ${get_result.positif}\n`
				ini_txt += `Sembuh : ${get_result.sembuh}\n`
				ini_txt += `Dirawat : ${get_result.dirawat}\n`
				ini_txt += `Meninggal : ${get_result.meninggal}`
				reply(ini_txt)
				break
				case 'covidglobal':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
				if (isLimit(sender)) return							
				await limitAdd(sender)		
				get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${l0lhuman}`)
				get_result = get_result.result
				ini_txt = `Positif : ${get_result.positif}\n`
				ini_txt += `Sembuh : ${get_result.sembuh}\n`
				ini_txt += `Dirawat : ${get_result.dirawat}\n`
				ini_txt += `Meninggal : ${get_result.meninggal}`
				reply(ini_txt)
				break		
		case 'wikipedia':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${l0lhuman}&query=${query}`)
			get_result = get_result.result
			mentions(get_result, jds, true)
		break
		//catch err mod - ends here Js 2506
        case 'hoax':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    mentions(ini_txt, jds, true)
        break		
        case 'kbbi':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${l0lhuman}&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    mentions(ini_txt, jds, true)
        break
        case 'jarak':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []		
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${l0lhuman}&kota1=${teks1}&kota2=${teks2}`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   ╭───────────────❏\n`
                    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                    ini_txt += `❍┤ Motor : ${x.motor}\n`
                    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   ╰───────────────❏\n`
                    mentions(ini_txt, jds, true)
                    break
        case 'urbandictionary':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
                    urb = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=${l0lhuman}&query=${urb}`)
                    lilu = get_result.result
                    for (var x of lilu) {
                        ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                        ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                        ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                        ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                        ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                        ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                        ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                        ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                        ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                        ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
                    }
                    mentions(ini_txt, jds, true)
        break					
		case 'translate':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
			kode_negara = args[0]
			args.shift()
			ini_txt = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${l0lhuman}&text=${ini_txt}`)
			get_result = get_result.result
			init_txt = `From : ${get_result.from}\n`
			init_txt += `To : ${get_result.to}\n`
			init_txt += `Original : ${get_result.original}\n`
			init_txt += `Translated : ${get_result.translated}\n`
			init_txt += `Pronunciation : ${get_result.pronunciation}\n`
			mentions(init_txt, jds, true)
			break
		case 'brainly':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
			query = args.join(" ")
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${l0lhuman}&query=${query}`)
			get_result = get_result.result
			ini_txt = "Result : \n"
			for (var x of get_result) {
				ini_txt += `${x.title}\n`
				ini_txt += `${x.url}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'jadwaltv':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
			channel = args[0]
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
			for (var x in get_result) {
				ini_txt += `${x} - ${get_result[x]}\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'jadwaltvnow':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = `Jadwal TV Now :\n`
			for (var x in get_result) {
				ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'newsinfo':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = "Result :\n"
			for (var x of get_result) {
				ini_txt += `Title : ${x.title}\n`
				ini_txt += `Author : ${x.author}\n`
				ini_txt += `Source : ${x.source.name}\n`
				ini_txt += `Url : ${x.url}\n`
				ini_txt += `Published : ${x.publishedAt}\n`
				ini_txt += `Description : ${x.description}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'cnnindonesia':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = "Result :\n"
			for (var x of get_result) {
				ini_txt += `Judul : ${x.judul}\n`
				ini_txt += `Link : ${x.link}\n`
				ini_txt += `Tipe : ${x.tipe}\n`
				ini_txt += `Published : ${x.waktu}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'cnnnasional':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = "Result :\n"
			for (var x of get_result) {
				ini_txt += `Judul : ${x.judul}\n`
				ini_txt += `Link : ${x.link}\n`
				ini_txt += `Tipe : ${x.tipe}\n`
				ini_txt += `Published : ${x.waktu}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'cnninternasional':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = "Result :\n"
			for (var x of get_result) {
				ini_txt += `Judul : ${x.judul}\n`
				ini_txt += `Link : ${x.link}\n`
				ini_txt += `Tipe : ${x.tipe}\n`
				ini_txt += `Published : ${x.waktu}\n\n`
			}
			mentions(ini_txt, jds, true)
			break
		case 'infogempa':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${l0lhuman}`)
			get_result = get_result.result
			ini_txt = `Lokasi : ${get_result.lokasi}\n`
			ini_txt += `Waktu : ${get_result.waktu}\n`
			ini_txt += `Potensi : ${get_result.potensi}\n`
			ini_txt += `Magnitude : ${get_result.magnitude}\n`
			ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
			ini_txt += `Koordinat : ${get_result.koordinat}`
			get_buffer = await getBuffer(get_result.map)
			await nayla.sendMessage(from, get_buffer, image, { quoted: nay, caption: ini_txt })
			break	
	//guna menu ends here
	
	//gabut menu
    case 'wancak':
			if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${l0lhuman}`)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
    break	
	case 'cerpen':
		if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
		get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${l0lhuman}`)
		get_result = get_result.result
		ini_txt = `Title : ${get_result.title}\n`
		ini_txt += `Creator : ${get_result.creator}\n`
		ini_txt += `Story :\n${get_result.cerpen}`
		mentions(ini_txt, jds, true)
		break
	case 'ceritahoror':
		if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			if (isLimit(sender)) return
			await limitAdd(sender)
		get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${l0lhuman}`)
		get_result = get_result.result
		ini_txt = `Title : ${get_result.title}\n`
		ini_txt += `Desc : ${get_result.desc}\n`
		ini_txt += `Story :\n${get_result.story}\n`
		thumbnail = await getBuffer(get_result.thumbnail)
		await nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
		break
		//ends here

                    // Random Text //
					case 'quotes':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${l0lhuman}`)
						quotes = quotes.result
						author = quotes.by
						quotes = quotes.quote
						reply(`_${quotes}_\n\n*― ${author}*`)
						break
					case 'quotesanime':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${l0lhuman}`)
						quotes = quotes.result
						quote = quotes.quote
						char = quotes.character
						anime = quotes.anime
						episode = quotes.episode
						mentions((`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`), jds, true)
						break
					case 'quotesdilan':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${l0lhuman}`)
						mentions((quotedilan.result), jds, true)
						break
					case 'quotesimage':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`)
						await nayla.sendMessage(from, get_result, image, { quotes: nay })
						break
					case 'faktaunik':
					case 'katabijak':
					case 'pantun':
					case 'bucin':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`)
						mentions((get_result.result), jds, true)
						break
					case 'randomnama':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${l0lhuman}`)
						mentions((anu.result), jds, true)
						break
	
				//pencarian
					case 'google':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
						query = args.join(" ")
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${l0lhuman}&query=${query}`)
						get_result = get_result.result
						ini_txt = 'Google Search : \n'
						for (var x of get_result) {
							ini_txt += `Title : ${x.title}\n`
							ini_txt += `Link : ${x.link}\n`
							ini_txt += `Desc : ${x.desc}\n\n`
						}
						mentions(ini_txt, jds, true)
						break
				//tools menu
					case 'shortlink':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
						ini_link = args[0]
						ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${l0lhuman}&url=${ini_link}`)
						mentions((ini_buffer.result), jds, true)
						break
				//maker menu
					case 'pornhub':
					case 'glitch':
					case 'avenger':
					case 'space':
					case 'ninjalogo':
					case 'marvelstudio':
					case 'lionlogo':
					case 'wolflogo':
					case 'steel3d':
					case 'wallgravity':
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
						if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
						//experimental
				await reply(`Mohon tunggu sebentar ya ${urname}, sedang diproses....`)
						txt1 = args[0]
						txt2 = args[1]
						cpt1 = `Nih ${urname}, jgn lupa bilang makasih..,`
						getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${l0lhuman}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
							nayla.sendMessage(from, gambar, image, { quoted: nay, caption: cpt1 })
						})
						//experimental
				if (err) {					
				   reply(nyz.error404(pushname, prefix))
				}
						break			
                case 'ktpmaker':
				if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${l0lhuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break
			//Mediamenu
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Kei chan cantik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${l0lhuman}&text=${ini_txt}`)
                    await nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay })
                    break
                case 'triggered':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=${l0lhuman}&img=${ini_url}`
                    exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        nayla.sendMessage(from, buff, sticker, { quoted: nay }).then(() => {
                            fs.unlinkSync(rano)
                        })
                    })
                    break			
                case 'lk21':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${l0lhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
                    break
                case 'drakorongoing':
						jds = []
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    mentions(ini_txt, jds, true)
                    break			
                case 'ytplay':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)
                    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
                    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${l0lhuman}&query=${args.join(" ")}`)
                        .then(async(result) => {
                            await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${l0lhuman}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
                                .then(async(result) => {
                                    result = result.result
                                    caption = `❖ Title    : *${result.title}*\n`
                                    caption += `❖ Size     : *${result.size}*`
                                    ini_buffer = await getBuffer(result.thumbnail)
                                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: caption })
                                    get_audio = await getBuffer(result.link)
                                    await nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: nay })
                                })
                        })
                    break
                case 'ytsearch':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${l0lhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${l0lhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    caption = `❖ Title    : *${result.title}*\n`
                    caption += `❖ Size     : *${result.size}*`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: nay })
                    break
                case 'ytmp4':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${l0lhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await nayla.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: nay })
                    break
                case 'telesticker':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'tiktoknowm':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${l0lhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await nayla.sendMessage(from, ini_buffer, video, { quoted: nay })
                    break
                case 'tiktokmusic':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    await nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: nay })
                    break
                case 'spotify':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${l0lhuman}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: nay })
                    break
                case 'spotifysearch':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
					jds = []
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${l0lhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    mentions(ini_txt, jds, true)
                    break
                case 'jooxplay':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${l0lhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: nay })
                    break
                case 'igdl':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await nayla.sendMessage(from, ini_buffer, ini_type, { quoted: nay })
                    break
                case 'igdl2':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await nayla.sendMessage(from, ini_buffer, ini_type, { quoted: nay })
                    }
                    break
                case 'twtdl':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await nayla.sendMessage(from, ini_buffer, video, { quoted: nay })
                    break
                case 'fbdl':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await nayla.sendMessage(from, ini_buffer, video, { quoted: nay })
                    break
                case 'zippyshare':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
					jds = []
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    mentions(ini_txt, jds, true)
                    break
                case 'pinterest':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${l0lhuman}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break
                case 'pinterest2':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${l0lhuman}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await nayla.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pinterestdl':
						if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
                    break
			//mediamenu ends here

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
					if (!isOwner) return reply(`lu owner??`)
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
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`Maaf kak Kei chan bukan admin :(`)
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
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup hehe...`)
					if (!isBotGroupAdmins) return reply(`Maaf kak Kei chan bukan admin :(`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Byee Oni-chan muachhhh... 🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`Perintah diterima ${urname}!, bye bye @${mentioned[0].split('@')[0]} semoga kakak bisa merenungkan kenapa admin meng-kik kakak tehe`, mentioned, true)
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
					if (!isBotGroupAdmins) return reply(`Kei Chan belum jadi ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya? \nNih saya kasih contoh kak \n#add 628123xxxx ,jgn pakai tanda "+" dan "-" \nJika tetap tidak bisa mungkin karena di privat/yg mau di add baru saja keluar grup')
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
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*shoujo-chan`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
                    reply('Yeayyy, sukses melapor bug ${urname}!...sankyuuu')                     
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
                    case 'nulis1':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(naylachan)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nih kak`, quoted: nay})
                    break
                    case 'nulis2':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis3':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis4':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis6':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                                         	                                          
                     case 'attpz':  
                     if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply('Kasih teks lah kak masa kosongan')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nayla.sendMessage(from, atetepe, sticker, {quoted: nay})
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
					case 'antigay':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antibocil':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN?? NGOTAK DONK, hehe maapin Kei-Chan ya kak habisnya lu tolol si`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DEACTIVATED ANTIBOCIL*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antiwibu':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN?? NGOTAK DONK, hehe maapin Kei-Chan ya kak habisnya lu tolol si`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
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
					case 'antijawa':  
                    if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN?? NGOTAK DONK, hehe maapin Kei-Chan ya kak habisnya lu tolol si`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break			 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                     	 										            
                    case 'test':                   
                    reply(`Siapp ${urname} 😘`)
                    break
					case 'intro':  
                    intro1 =`Intro Member Baru! \n`
					intro1 += `\n`
					intro1 +=`➮ *Nama*            : \n`
					intro1 +=`➮ *Umur* (opsional) : \n`
					intro1 +=`➮ *Gender*          : \n`
					intro1 +=`➮ *Asal Kota*       : \n`
					intro1 +=`➮ *Alasan Bergabung* : \n`
					intro1 +=`➮ *Supremacy* [Loli/Teen/Milf] : \n`
					intro1 +=`➮ *Flag* [Yuri/Yaoi/Normal] : \n`
					intro1 +=`   *pilih salah satu~ \n`
					intro1 +=`\n`
					intro1 +=`Kata-kata yg ingin kamu ucapkan saat masuk ke grub ini(opsional):\n`
					intro1 +=`➮\n`
					intro1 +=`-\n`				
					reply(intro1)
                    break
					case 'bothelp':                    
                    reply(`Silahkan ketik #daftar agar bisa menggunakan bot, dan #aboutbot utk melihat changelog bot`)
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
					if (!isGroupAdmins) return reply(`Gomennasai ${urname}, Kei chan bukan admin :(`)
					if (!isBotGroupAdmins) return reply(`Maaf nih kak, apakah kakak admin?`)
					if (args[0] === 'buka') {
					    reply(`*Berhasil membuka grup ${urname}!*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*Berhasil menutup grup ${urname}!*`)
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
resul =`Nih ${urname} Data dirimu:
Nama: ${pushname}
Level: ${userLevel}
ID WA : wa.me/${sender.split("@")[0]}
Exp : ${userXp}/${requiredXp}
`            
                    nayla.sendMessage(from, piclevel, image, { quoted: nay, caption: resul })
			    	break     
					case 'spam':
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					var FG = body.slice(7)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})					
					reply('BERHASIL SPAM🔥')
					break
					case 'fitnah':
					if (!isElite) return reply(nyz.nayzelite(pushname, prefix))
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					if (args.length < 1) return reply(`Gini ${pushname} ${urname} : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				    var gh = body.slice(8)
			      	mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					nayla.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender) 
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
		if (budy.includes("Bot")){
			jds = []
			AA1 =`${reactBot}`
			mentions(AA1, jds, true)
		}						
		if (budy.includes("Badut")){
			jds = []
			AA2 =`Siapa yang badut kak?`
			mentions(AA2, jds, true)
		}
		if (budy.includes("badut")){
			jds = []
			AA22 =`Siapa yang badut kak?`
			mentions(AA22, jds, true)
		}												    
		if (budy.includes("https://")){
			jds = []
			AA3 =`Hayooo, link apa tuch kak, bokep yaaa 🤣`
			mentions(AA3, jds, true)
		}	
			if (budy.includes("pixiv")){
				jds = []
				AA33 = `Hayoolooo lewd terosss`
				mentions(AA33, jds, true)
		}	
		if (budy.includes("Gay")){
			jds = []
			AA4 = `Waduhh siapa yang gay kak?... parah si, pasti temennya saipul jamil]`
			mentions(AA4, jds, true)
		}	
		if (budy.includes("Hai")){
			jds = []
			AA5 = `Hai juga kak 👋🏻`
			mentions(AA5, jds, true)
		}
		if (budy.includes("Istri gw")){
			jds = []
			AA6 = `Uwahhh istri koq gepeng :v`
			mentions(AA5, jds, true)
		}	
		if (budy.includes("istri gw")){
			jds = []
			AA66 = `Uwahhh istri koq gepeng :v`
			mentions(AA66, jds, true)
		}
		if (budy.includes("Woi")){
			jds = []
			AA10 = `Apaan si ${urname} 😑`
			mentions(AA10, jds, true)
		}
		if (budy.includes("Oi")){
			jds = []
			AA11 =`Paan si... orang punya nama dipanggil oi oi, sopan dikit donk😑`
			mentions(AA11, jds, true)
		}
		if (budy.includes("ngambek")){
			jds = []
			AA12 =`Emang kenapa kalo aku ngambek kak? gasuka? humphhh 😤`
			mentions(AA12, jds, true)
		}
		if (budy.includes("Maaf")){
			jds = []
			AA13 =`Iya deh, Shiroko maafin... ttt..tapi jangan di ulangi lagi ya`
			mentions(AA13, jds, true)
		}
		if (budy.includes("maaf")){
			jds = []
			AA13B =`Iya deh, Shiroko maafin... ttt..tapi jangan di ulangi lagi ya😕`
			mentions(AA13B, jds, true)
		}
		if (budy.includes("Bagus gak")){
			jds = []
			AA14 =`Udah bagus itu kok kak hehe`
			mentions(AA14, jds, true)
		}	
			if (budy.includes("bagus gak")){
				jds = []
				AA14B =`Udah bagus itu kok kak hehe`
				mentions(AA14B, jds, true)
		}
		if (budy.includes("Oyasumi")){
			jds = []
			AA17 =`Oyasumi juga kak, semoga mimpi basah, eh... indah...🥰`
			mentions(AA17, jds, true)
		}
		if (budy.includes("Bobo yuk")){
			jds = []
			AA18 =`Gamau ah, badan ${urname} bauu 😆`
			mentions(AA18, jds, true)
		}
		if (budy.includes("Alhamdulilah")){
			jds = []
			AA19 =`Subhanallah, tetap bersyukur ya kak 🙏🏻`
			mentions(AA19, jds, true)
		}
		if (budy.includes("Ngobrol yuk")){
			jds = []
			AA20 =`Mau ngobrol apa kak? 🙃 `
			mentions(AA20, jds, true)
		}
		if (budy.includes("Halo")){
			jds = []
			AA24 =`Holaaa, gimana kak... ada yang bisa saya bantu? 😊`
			mentions(AA24, jds, true)
		}
		if (budy.includes("Sepi")){
			jds = []
			AA25 =`${reactSepi}`
			mentions(AA25, jds, true)
		}
		if (budy.includes("sepi")){
			jds = []
			AA25B =`${reactSepi}`
			mentions(AA25B, jds, true)
		}
		if (budy.includes("Cek cek")){
			jds = []
			AA26 =`Iyaaaa... :)`
			mentions(AA26, jds, true)
		}
		if (budy.includes("Joki")){
			jds = []
			AA27 =`Joka joki, gabisa maenin sendiri ya?.... kesian yhahaha 🤣🤣🤣`
			mentions(AA27, jds, true)
		}
		if (budy.includes("joki")){
			jds = []
			AA27B =`Joka joki, gabisa maenin sendiri ya?.... kesian yhahaha 🤣🤣🤣`
			mentions(AA27B, jds, true)
		}
//say salam-reply salam
		if (budy.includes("Assalamualaikum")){
			jds = []
			SS1 =`${saySalam}`
			mentions(SS1, jds, true)}
			if (budy.includes("Assalamuallaikum")){
				jds = []
				SS2 =`${saySalam}`
				mentions(SS2, jds, true)}
				if (budy.includes("Asalamualaikum")){
					jds = []
					SS3 =`${saySalam}`
					mentions(SS3, jds, true)}
					if (budy.includes("assalamualaikum")){
						jds = []
						SS4 =`${saySalam}`
						mentions(SS4, jds, true)}
						if (budy.includes("asalamualaikum")){
							jds = []
							SS5 =`${saySalam}`
							mentions(SS5, jds, true)}
		//reply ends here
		if (budy.includes("Ampas")){
			jds = []
			AA29 =`Ampazz ya ${urname} gacha nya?, hahahaha kasian deh lu 🤣`
			mentions(AA29, jds, true)
		}
			if (budy.includes("Ampaz")){
				jds = []
				AA29B =`Ampazz ya ${urname} gacha nya?, hahahaha kasian deh lu 🤣🤣`
				mentions(AA29B, jds, true)
		}
			if (budy.includes("ampas")){
				jds = []
				AA29C =`Ampazz ya ${urname} gacha nya?, hahahaha kasian deh lu 🤣🤣`
				mentions(AA29C, jds, true)
		}
			if (budy.includes("ampaz")){
				jds = []
				AA29D =`Ampazz ya ${urname} gacha nya?, hahahaha kasian deh lu 🤣🤣`
				mentions(AA2D, jds, true)
		}
		if (budy.includes("rate off")){
			jds = []
			AA29E =`Ampazz ya ${urname} gacha nya?, hahahaha kasian deh lu 🤣🤣`
			mentions(AA2E, jds, true)}
//reply-ngeri
		if (budy.includes("Ngeri")){
			jds = []
			AA30 =`${reactNgeri}`
			mentions(AA30, jds, true)}
		if (budy.includes("ngeri")){
			jds = []
			AA30B =`${reactNgeri}`
			mentions(AA30B, jds, true)}
		//ends here
//toxic-reply with session
		//ses AJG
		if (budy.includes("ANJING")){
			jds = []
			AJG =`${reactToxic}`
			mentions(AJG, jds, true)}
			if (budy.includes("Anjing")){
				jds = []
				AJG1 =`${reactToxic}`
				mentions(AJG1, jds, true)}
				if (budy.includes("anjing")){
					jds = []
					AJG2 =`${reactToxic}`
					mentions(AJG2, jds, true)}
					if (budy.includes("Ajg")){
						jds = []
						AJG3 =`${reactToxic}`
						mentions(AJG3, jds, true)}
						if (budy.includes("Anjg")){
							jds = []
							AJG4 =`${reactToxic}`
							mentions(AJG4, jds, true)}
							if (budy.includes("ajg")){
								jds = []
								AJG5 =`${reactToxic}`
								mentions(AJG5, jds, true)}
								if (budy.includes("anjg")){
									jds = []
									AJG6 =`${reactToxic}`
									mentions(AJG6, jds, true)}
		//ses BI
		if (budy.includes("Babi")){
			jds = []
			BI =`${reactToxic}`
			mentions(BI, jds, true)}	
			if (budy.includes("babi")){
				jds = []
				BI1 =`${reactToxic}`
				mentions(BI1, jds, true)}
		//ses KN
		if (budy.includes("KONTOL")){
			jds = []
			KN =`${reactToxic}`
			mentions(KN, jds, true)}
			if (budy.includes("Kontol")){
				jds = []
				KN1 =`${reactToxic}`
				mentions(KN1, jds, true)}	
				if (budy.includes("kontol")){
					jds = []
					KN2 =`${reactToxic}`
					mentions(KN2, jds, true)}	
		//ses NGT	
		if (budy.includes("Ngentot")){
			jds = []
			NGT =`${reactToxic}`
			mentions(NGT, jds, true)}		
			if (budy.includes("Ngentod")){
				jds = []
				NGT1 =`${reactToxic}`
				mentions(NGT1, jds, true)}
				if (budy.includes("ngentod")){
					jds = []
					NGT2 =`${reactToxic}`
					mentions(NGT2, jds, true)}
					if (budy.includes("ngentot")){
						jds = []
						NGT3 =`${reactToxic}`
						mentions(NGT3, jds, true)}
		//ses BJN	
		if (budy.includes("Bajingan")){
			jds = []
			BJN =`${reactToxic}`
			mentions(BJN, jds, true)}	
			if (budy.includes("bajingan")){
				jds = []
				BJN1 =`${reactToxic}`
				mentions(BJN1, jds, true)}	
				if (budy.includes("Jingan")){
					jds = []
					BJN2 =`${reactToxic}`
					mentions(BJN2, jds, true)}	
					if (budy.includes("jingan")){
						jds = []
						BJN3 =`${reactToxic}`
						mentions(BJN3, jds, true)}	
		//ses RAN
		if (budy.includes("Jembot")){
			jds = []
			RAN =`${reactToxic}`
			mentions(RAN, jds, true)}
			if (budy.includes("Jembut")){
				jds = []
				RAN2 =`${reactToxic}`
				mentions(RAN2, jds, true)}
				if (budy.includes("jembut")){
					jds = []
					RAN3 =`${reactToxic}`
					mentions(RAN3, jds, true)}
					if (budy.includes("Jancok")){
						jds = []
						RAN4 =`${reactToxic}`
						mentions(RAN4, jds, true)}
						if (budy.includes("jancok")){
							jds = []
							RAN5 =`${reactToxic}`
							mentions(RAN5, jds, true)}	
							if (budy.includes("Memek")){
								jds = []
								RAN6 =`${reactToxic}`
								mentions(RAN6, jds, true)}
								if (budy.includes("Mmk")){
									jds = []
									RAN7 =`${reactToxic}`
									mentions(RAN7, jds, true)}											
		//toxic-ends here
		if (budy.includes(`${mksh}`)){
			jds = []
			AA33 =`${replyThx}`
			mentions(AA32, jds, true)
		}
		if (budy.includes("Gajelas")){
			jds = []
			AA33 =`Hmmm, kalo mau ada perlu bilang yang bener donk ${urname}, jangan bikin orang ambigu`
			mentions(AA33, jds, true)
		}
	//starting from here is changing parameter into "AB<numerical>"
	//sim simi reactions will be added soon!
	//anjing kek ngehalu, padahal cuma bot	
		//sapaan
		if (budy.includes("Selamat malam")){
			jds = []
			AB1 =`${reactMalam}`
			mentions(AB1, jds, true)}	
			if (budy.includes("Konbanwa")){
			jds = []
			AB1B =`${reactMalam}`
			mentions(AB1B, jds, true)}			
		if (budy.includes("Selamat sore")){
			jds = []
			AB2 =`Sore juga kak`
			mentions(AB2, jds, true)}	
		if (budy.includes("Selamat siang")){
			jds = []
			AB2 =`${reactSiang}`
			mentions(AB2, jds, true)}	
		if (budy.includes("Selamat pagi")){
			jds = []
			AB2 =`${reactPagi}`
			mentions(AB2, jds, true)}
		if (budy.includes("Ohayo")){
			jds = []
			AB3 =`${reactPagi}`
			mentions(AB3, jds, true)}	
//VOICE		
	//voice react asalamualaikum [const 1] F2	
	if (budy.includes("Asalamualaikum")){					
		const F2 = fs.readFileSync('sound/baru/walaikumsalam.ogg')
		nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
	//voice react tag bot [const 2]	F3
		if (budy.includes(`${numberbot}`)){
			jds = []
			balesan =`Iyaaa ${pushname}, ada perlu apa sama saya?`
			mentions(balesan, jds, true)}
		if (budy.includes(`${numberbot}`)){
		const F3 = fs.readFileSync('sound/baru/iyadygbsdbntu.ogg')
		nayla.sendMessage(from, F3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}

/*link
zzz
*/
//new session for auto VN
if (budy.includes(`${TXT_ArchiveBlue}`)){
const BAV = await getBuffer(`${BlueArchiveVoices}`)
nayla.sendMessage(from, BAV, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}

if (budy.includes(`${ownerrf}`)){
	const F22 = fs.readFileSync('menu/tagowner.webp')
	nayla.sendMessage(from, F22, sticker)}
if (budy.includes("tescuk")){
	jds = []
	const F22B = fs.readFileSync('menu/tagowner.webp')
	nayla.reply(from, F22B, jds, sticker, true)}
	//sticker react tag lort dimaseee	
		if (budy.includes(`${lort}`)){
			const F33 = fs.readFileSync('menu/taglort.webp')
			nayla.sendMessage(from, F33, sticker)}
/* ALREADY DEPRECATED!
	//voice react Kei [const 3]	F4-F5
		if (budy.includes("sayang")){
			jds = []
			   const F4 = fs.readFileSync('sound/baru/apasyg.ogg')						  
			   nayla.sendMessage(from, F4, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		if (budy.includes("Helo")){
			jds = []
			const F5 = fs.readFileSync('sound/baru/iya.mp3')
			nayla.sendMessage(from, F5, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
	//voice react Kei-chan [const 4] F6	
		if (budy.includes("chan")){
			const F6 = fs.readFileSync('sound/baru/iyasyg.ogg')
			nayla.sendMessage(from, F6, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
	//voice react toxic [const 5] up to [const ...] F7-F10 males gw inputnya cokk
			//Higher case to lower case first!
		//Anjing
		if (budy.includes("Anjing")){
			const F7 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.reply(from, F7, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		if (budy.includes("anjing")){
			const F8 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.sendMessage(from, F8, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		if (budy.includes("Anjg")){
			const F9 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.sendMessage(from, F9, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		if (budy.includes("anjg")){
			const F10 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.sendMessage(from, F10, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		//Babi F11-F12
		if (budy.includes("Babi")){
			const F11 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.sendMessage(from, F11, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		if (budy.includes("babi")){
			const F12 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.sendMessage(from, F12, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		//Kontol F13-F14
		if (budy.includes("Kontol")){
			const F13 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.reply(from, F13, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
		if (budy.includes("kontol")){
			const F14 = fs.readFileSync('sound/baru/ihkasar.ogg')
			nayla.sendMessage(from, F14, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}	
 //STICKER REACT const F22 and F33     
	//sticker react tag owner	
		if (budy.includes(`${ownerrf}`)){
		const F22 = fs.readFileSync('menu/tagowner.webp')
		nayla.sendMessage(from, F22, sticker)}
		if (budy.includes(`aselole}`)){
			jds = []
			const F22B = fs.readFileSync('menu/tagowner.webp')
			F22B = `sticker`
			mentions(F22B, jds, true)}
	//sticker react tag lort dimaseee	
		if (budy.includes(`${lort}`)){
			const F33 = fs.readFileSync('menu/taglort.webp')
			nayla.sendMessage(from, F33, sticker)}
	//sticker react emotions		
		if (budy.includes(`Ngantuk`)){
			const F44 = fs.readFileSync('menu/ngantuk.webp')
			nayla.sendMessage(from, F44, sticker)}
			if (budy.includes(`ngantuk`)){
				const F44B = fs.readFileSync('menu/ngantuk.webp')
				nayla.sendMessage(from, F44B, sticker)}
		if (budy.includes(`Sange`)){
				const F55 = fs.readFileSync('menu/sange.webp')
				nayla.sendMessage(from, F55, sticker)} 
		if (budy.includes(`sange`)){
				const F55B = fs.readFileSync('menu/sange.webp')
				nayla.sendMessage(from, F55B, sticker)} 	  					
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                    	 				                    
if (body.startsWith(`${prefix}${command}`)){                    
reply(`Haloo ${pushname}\nFitur ${prefix}${command} tidak ada di ${prefix}menu\nSilahkan coba cek kembali fitur-fitur yang ada di ${prefix}menu\n\nRegards\n${NameBot}`)
}                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   reply('ERROR ATAU APIKEY UNVALID')
		}
	})
}
starts() 