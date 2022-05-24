/*================================

shoujoBot Rev 2.7
Last Edited on :  20 May 2022

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
limitawal 	= "45"
memberLimit = "2"	
blocked 	= []
ban = []
banUser = []
apixteam 	= setting.apixteam
cr 			= setting.cr
ownerrf 	= setting.ownerrf
ownerrz 	= setting.ownerrz
lort 		= setting.lort
tz 			= `⌬` //setting.tz 
cr1 		= setting.cr1
cr2 		= setting.cr2
numberbot 	= setting.numberbot
apivhtear 	= setting.apivhtear
fake1 		= setting.fake1
fake2 		= setting.fake2
author 		= setting.author
naylachan 	= setting.naylachan
namebotZ 	= setting.namebot
ownername 	= setting.ownername
donasi 		= setting.donasi
l0lhuman 	= setting.l0lhuman
pulsa 		= setting.pulsa
gopay 		= setting.gopay
ovo 		= setting.ovo
dana 		= setting.dana

const budi_tag = "628988469196"

const NameBot = `Shoujo Bot`
 
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

//
const _nsfw = JSON.parse		(fs.readFileSync('./nayla/nsfw.json'))
const userBanned = JSON.parse 	(fs.readFileSync('./nayla/afk.json'))
const FormData = require('form-data')
const { default: axios } = require('axios')

// Database
const tebakgambar = JSON.parse(fs.readFileSync('./nayla/tebakgambar.json'))
const sambungkata = JSON.parse(fs.readFileSync('./nayla/sambungkata.json'))
const afk = JSON.parse(fs.readFileSync('./nayla/truth.json'))
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*======================================================[ TIME BOTZ ]==============================================================*/                  	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)} Hour ${pad(minutes)} Minutes ${pad(seconds)} Seconds`
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
	    	success('2', 'Shoujo Bot v2.8')
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
         	nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, `Shoujo Bot ver2.18\nSuccess to connect, and ready to use!`, MessageType.text)
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
			teks = `▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱\n`
			teks += `*Halo kak @${num.split('@')[0]}*\n` //member
			teks += `*Selamat Datang di Grub*\n`
			teks += `*${mdata.subject}*\n`			
			teks += `▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱\n`
			teks += `Selamat Datang Member Baru!\n`
			teks += `╭───────[ *Intro* ]──────────\n`
			teks += `│➻ *Nama* :\n`
			teks += `│➻ *Umur* :\n`
			teks += `│➻ *Gender* :\n`
			teks += `│➻ *AsKot* :\n`
			teks += `│➻ *Alasan Bergabung* :\n`
			teks += `│➻ *Supremacy: Loli/Teen/Milf* :\n`
			teks += `│➻ *Flag : Yuri/Yaoi/normal*   :\n`
			teks += `│   *pilih salah satu~ \n`
			teks += `╰──────────\n`			
			teks += `_Gunakan fitur ${prefix}intro_ \n`
			teks += `_utk menyalin pesan ini!_ \n`
			teks += `                              \n`
			teks += `                              \n`
			teks += `_Semoga Betah disini Yaaa_ 😊 \n`
			teks += `_jangan sungkan kalo mau ngobrol"_ 🤗 \n`
			teks += `\n`
			teks += `By:⎾ ${NameBot} ⏌\n`
			teks += `▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰▱`			
			let buff = await getBuffer(ppimg)
		    nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0] //out dari grub
			try {
			ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`) //ini kalo pp nya kosonk
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `Selamat tinggal ${urname}!,bye bye~ 🥳 @${num.split('@')[0]} jasamu akan Saya kubur dalam² \nSemoga tenang disana yaaa 😘`
			let buff = await getBuffer(ppimg)
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	        
             
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                   	                 
	        
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
	      	const fake3 = `*${NameBot}* v2.8\nUpTime ⏱: ${kyun(runtime)}` 	
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
			const isBanned = ban.includes(sender)
			const isBannedUser = userBanned.includes(sender)
			const isNsfw = isGroup ? _nsfw.includes(from) : false
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

		//Bot Property
		const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
		const bulan = nayBulan[moment().format('MM') - 1]
		const isElite = checkEliteUser(sender)
		const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
		const nayla1 = ['1','2','3','4','5','6','7','8','9']
		const nayla2 = ['1','2','3','4','5','6','7','8','9']
		const limitX = ['1','2','3','4','5','6']
		const limitY = ['1','2','3','4','5','6']
		const limitplus = ['15']
		const limitplusPrem = ['9999']
		const limitplusFree = limitX[Math.floor(Math.random() * (limitY.length))]
		const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
		const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))]     
		const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
		const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod"]
		const apa = ['Ya','Mungkin','Tidak','Coba Ulangi','Bisa jadi','Kayaknya iya deh','Mustahil yhahahaha','coba tanya lort','tentu saja']
		const TXT_ArchiveBlue = ["slebew","axiom"]

// statistics - interface
	// ban
	const Stat_Ban = `${userBanned.length}`
		jmlBan = Stat_Ban
	// registered
	const Stat_Reg = `${_Elite.length}`
		jmlReg = Stat_Reg
	// premium
	const Stat_Prem = `${prem.length}`
		jmlPrem = Stat_Prem
	bulanNow = bulan
	tchat = `${totalchat.length}`  

// symbol

s_clock = `⏱`
s_newtz = `⌬`




// Internal Data Base Bot	
verBot = "v2.8"
const UserStatus = '_undefined_'
// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'shoujo-chan'

const urname = `Kak` // surename => /user
const queryWait = `Sebentar ${urname} ${pushname}, sedang diproses...` // msg due to buffer
const errNotRespon = `Yahh Maaf ${urname} ${pushname}, Sepertinya terjadi error\nCoba ulangi beberapa saat lagi, tq..`
const nsfwStrict = `Mode NSFW tidak aktif di Grup ini, untuk mengaktifkan silahkan cek di ${prefix}togglemenu`
const memberPrem = `Maaf ${urname} ${pushname}, fitur ini hanya khusus untuk member Premium!\nSilahkan cek di ${prefix}howpremium`
const memberBanned = `Maaf ${pushname}, Kamu telah dibanned, Silahkan hubungi Owner Bot agar di unban, tq`
const onlyOwner = 'Hanya dapat digunakan oleh Owner Bot!'
const announce = `*_REQUEST YANG BAGUS KAWAN, SEKARANG DONASILAH MWHEHEHEHE_*

_Bantuan lengkap cara pakai Bot ada di !help_`

const iniMess  = {
	joingrub: 'Menunggu ACC dari owner, syarat join minimal anggota grub 20+,\njika kurang maka tidak akan di ACC\n\nOwner berhak mengeluarkan Bot dari grup jika dirasa perlu/pengguna melanggar ketentuan dan peraturan yang ada, trims.',
	lahbisa: 'test'
}

WordsLewdQuery = [
'Tuh kack, jgn lupa bilang makasih :)',
'Lewdd teross...',
'Nih kak, jgn jadiin bacol ya',
'Nih kak, dasar wibu sangean...',
'Nohhh...',
'Lewd aja teros sampe penuh tuh galeri... lewd doank isinya',
'Terimakasih kembali kack',
'Waifumu gepeng mazehh',
'Ihhh sange koq sama kartun',
'Ini cuma kartun bg, gabisa diraba..',
'Iya iya... makan tuh lewd',
'Aduhhh mama sayange.... maen lewd aja kau teros ya',
'Tuh ah, gini amat jadi bot... cuma muasin para wibu sangean',
'Percuma coy, kagak bisa diraba',
'Mending cari cewek 3d kak, daripada ginian :)',
'Yahhahah, jomblo, wibu sangean :v',
'Udah wibu, bau bawang, gapernah mandi, kerjaanya nolep, request lewd pula :v'
]
const ReplyWordsLewdQuery = WordsLewdQuery[Math.floor(Math.random()*(WordsLewdQuery.length))]

const iniquotes = [
'"Teman adalah kekuatan." (Patrick Star)',
'"Kau tidak perlu tahu segalanya tentang teman baikmu, itulah yang membuat persahabatan itu menarik." (Sendy Cheeks)',
'"Kalau uang bisa membuatku melupakan sahabat terbaikku, maka aku lebih memilih untuk tidak punya uang sama sekali." (SpongeBob Squarepants)',
'"Lebih baik merasa dicintai dan kehilangan dari pada tidak pernah dicintai sama sekali." (Plankton)',
'"Hidup akan selalu berakhir dengan indah kawan. Bila belum indah maka belum berakhir." -Patrick Star',
'"Terkadang apa yang tidak kau bicarakan lebih bernilai daripada yang kau bicarakan." (Mr. Krab)',
'"Seharusnya kamu belajar berjalan dulu, nak! Barulah kamu bisa berlari." (Mrs. Puff)',
'"Kau tidak perlu menang atau kalah dalam permainan, yang penting adalah kau merasa senang." (Mr. Krab)',
'"Aku rasa kau harus berhenti menilai orang dari penampilannya saja." (SpongeBob Squarepants)',
'"Ingat waktu adalah uang, jika kau menyiakan waktumu maka kau menyiakan uangmu." (Mr. Krab)',
'"Untuk membuat kesuksesan, otot lebih dibutuhkan daripada senyum." (Squidward Tentacle)',
'"Aku jelek dan aku bangga." (Patrick Star)',
'"Semua mahluk hebat dalam satu hal, tapi tidak dalam segala hal." (SpongeBob Squarepants)',
'"Hidup ini memang tidak adil, jadi biasakanlah dirimu." (Patrick Star)',
'"Bersih tidak akan bersih tanpa kotor, dan kita tidak akan tahu kotor tanpa adanya bersih." (SpongeBob squarepants)',
'"Jangan membiarkan hatimu pergi darimu, kecuali pikiranmu mempunyai kaki dan menjauhimu." (Patrick Star)',
'"Kita harus melewati batasan-batasan normal, dan kita harus menjadi aneh." -Patrick Star',
'"Orang bodoh bisa bahagia dengan kebodohanya." (Patrick Star)',
'"Seni tidak bisa ditentukan oleh waktu, seni akan datang di saat semuanya sudah siap." (Squidward Tentacle)',
'"Diam tak akan menyelesaikan masalah, tapi diam juga tak akan menimbulkan masalah." -Patrick Star'
]
const quotesToday = iniquotes[Math.floor(Math.random()*(iniquotes.length))]
// Command input is not valid
const notFoundCommand = `Hai ${urname} ${pushname}, Sepertinya perintah yang Kamu masukan tidak ada di Bot ini
Coba cek kembali perintah yang ada di ${prefix}menu dan sub-menu lainnya, terimakasi..`
// Reg == Unreg User
const notRegistered = `${urname} ${pushname} Kamu belum terdaftar sebagai User, daftar terlebih dahulu sebelum menggunakan Bot
Silahkan cek di ${prefix}help sebelum mendaftar`
const successRegistered = `Sukses Terdaftar!

Nama : ${pushname}
Nomor :  wa.me/${sender.split("@")[0]}

Limit awal Kamu = ${limitawal}

Silahkan ketik ${prefix}help untuk lihat bantuan cara pakai Bot

_Thankyou for Registering!_
_Regards from Me_
_${NameBot}_`

whoDonate = `┏━━━━━━━⟬ *Donations Board* ⟭━━━━━━━

┃ ♔ Budi ➛ 10 💎
┃ ♔ Faiz ➛ 5 💎
┃ ♔ Allen ➛ 2 💎
┃ ♔ Dio ➛ 2 💎
┃ ♔ Dimas R. ➛ 2 💎
┃ ♔ Lloyd ➛ 3 💎
┃ ♔ Sinz ➛ 2 💎
┃ ♔ Shadow ➛ 1 💎
┃ ♔ Ark ➛ 2 💎
┃ ♔ ...(you)?

┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃        💎 equals as well as 5k IDR
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

┗━━━━━━━⟬ _Donations Board_ ⟭━━━━━━━`

//Readmore Func
const iniReadmore = `‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎`

const limit_empty = `Haloo ${urname} ${pushname},..
Limit Kamu telah habis...

Mau tau cara dapat limit?, cek di ${prefix}mulung`
const howlimit = `Limit bisa didapatkan dengan cara :
- Aktifkan fitur ${prefix}setplugin-leveling di ${prefix}togglemenu
- Claim self-limit, dengan cara ${prefix}claim
- Level Up!, setiap LevelUp! Kamu dapat limit!
- How to LevelUp?, aktif di grub yg sama dengan Bot. XP otomatis regen setiap kamu aktif di Grup
- Become Premium Member, Unlimited Limit! + Unlocks All Feature!, get more info at ${prefix}howpremium`

const jadipremium = `Hai ${urname} ${pushname}
Belum ready ya syg... masih dalam pengembangan..
tunggu aja, nanti dikabarin :)
tq..`

const thisHeader = `
╭─── 「 *_Shoujo Bot_* 」
│ _⚀  NameBot  ⧎ Shoujo-chan_    
│ _⚁  Versions    ⧎ ${verBot}_    
│ _⚂  Prefix         ⧎  [ *${prefix}* ]_    
╰──⪢

╭─── 「 *_Bot Statistics_* 」
│ _⦶  Uptime ⧎ ${kyun(runtime)}_       
│ _⦹  Month Now ⧎ ${bulanNow}_       
│ _⦾  Total Chat Bot: ⧎  ${tchat}_
│⸻⸻⸻⸻⸻⸻
│ *_⛛  Database User Bot_*
│ _⦷  User Registered ⧎ ${jmlReg}_       
│ _⦸  User Banned ⧎ ${jmlBan}_      
│ _⦼  User Premium ⧎ ${jmlPrem}_      
╰──⪢`
botStatInfo = `\n
_Info Tambahan:_
${iniReadmore}
Nomor Kamu di Ban?, silahkan chat Owner "!Owner"

Bot keluar dari Grup?, emm... bebas pake tapi bukan buat diri lu sndiri aja ya
apalagi dimasukin ke grub yang anggotanya cuman elu doank hehe..

sankyuu`
const thisHeader2 = `
*_Todays Quotes_*
_${quotesToday}_

╭──❲ *_Anouncement Here_*

${announce}

╰──

_Buka Menu Disini!_
${iniReadmore}`
const thisFooter = `
╭──❲ _Supported By:_
│─────── _GitHub_
│  _Mhank Barbar_
│  _LolHuman_
│  _Piyo_
│─────── _API's:_
│  _XteamApi_
│  _ApiZeks_
│  _LoL Human Rests Api_
╰──❲ _${NameBot}_`



const donationPict = 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/qr_saweria.png'

const pict_1 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/blue_archive.png'
const pict_2 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/durandal.png'
const pict_3 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/dusk.png'
const pict_4 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/hayase_yuuka.png'
const pict_5 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/kiana_kaslana.png'
const pict_6 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/raiden_mei.png'
const pict_7 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/rozaliya.png'
const pict_8 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/shirasu_azusa.png'
const pict_9 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/shirasu_azusa2.png'
const pict_10 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/skadi.png'
const pict_11 	= 'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/sunaookami_shiroko.png'
const pict_12 	= 'anu'
const pict_13 	= 'anu'

const newPict_propShoujobot =[
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
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/sunaookami_shiroko.png',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_81796802_20211028_015806.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_82048036_20211028_015803.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_82131052_20211028_015756.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_82264483_20211028_015752.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_82423484_20211028_015749.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_82580733_20211028_015745.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_82722641_20211028_015743.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_82878433_20211028_015740.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_83031752_20211028_015736.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_83183207_20211028_015733.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_83501301_20211028_015727.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_83670295_20211028_015725.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_83830221_20211028_015722.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_84149137_20211028_015715.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_84295647_20211028_015710.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_84445628_20211028_015707.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_84598189_20211028_015704.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_85054704_20211028_015652.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_85184259_20211028_015649.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_85326880_20211028_015640.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_85492753_20211028_015636.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_85645609_20211028_015632.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_85783362_20211028_015629.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_85939632_20211028_015626.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_86082040_20211028_015619.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_86226813_20211028_015617.jpg',
'https://raw.githubusercontent.com/rizzzky78/rizzzkyRepo/main/shoujoBot1.0/picture/prop_shoujobot/illust_86369525_20211028_015614.jpg'
]
const mainBlobX = newPict_propShoujobot[Math.floor(Math.random()*(newPict_propShoujobot.length))]

const mainBlobRAW = [`${pict_1}`,`${pict_2}`,`${pict_3}`,`${pict_4}`,`${pict_5}`,`${pict_6}`,`${pict_7}`,`${pict_8}`,`${pict_9}`,`${pict_10}`,`${pict_11}`]
const mainBlobY = mainBlobRAW[Math.floor(Math.random()*(mainBlobRAW.length))]

const mainBlob = newPict_propShoujobot[Math.floor(Math.random()*(newPict_propShoujobot.length))]

	// get new ses for BA Character Voices
	const BlueArchiveVoicesRaw = ['https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Relationship_Up_3.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Relationship_Up_4.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Relationship_Up_1.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Relationship_Up_2.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Lobby_1.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Lobby_2.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Lobby_3.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Lobby_4.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Lobby_5.ogg?raw=true','https://github.com/rizzzky78/rizzzkyRepo/blob/main/shoujoBot1.0/BlueArchiveVoice/JP_Airi/Airi_Lobby_6.ogg?raw=true']
		const BlueArchiveVoices = BlueArchiveVoicesRaw[Math.floor(Math.random() * (BlueArchiveVoicesRaw.length))]

//Salam
		const saySalamX = ['Walaikumsalam warohmatullohiwabarakatuh','Walaikumussalam...','Walaikumsalam kak','Walaikumsallam kak,... subahanallah']
		const saySalam = saySalamX[Math.floor(Math.random() * (saySalamX.length))]

// User msg = say thanks = to Bot interact Reply
replyThxZ = [
'Ya sama-sama kak :)',
'Terimakasih kembali kak',
'Sama-sama kak',
'Yoi mapren',
'Slebeww'
]
const replyThx = replyThxZ[Math.floor(Math.random() * (replyThxZ.length))]

// User msg = toxic = to Bot interact Reply
	toxicR_1 = 'Aduhhh kok toxic si bang?'
	toxicR_2 = 'Weee jan toxic laa...'
	toxicR_3 = 'Hmmm... masih saya pantau Kamu ya'
	toxicR_4 = 'Hey Kamu... iya Kamu, kenapa toxic?\nSini cerita donk..'
	toxicR_5 = 'Inget kata emak, jangan toxic jangan nakal'
	toxicR_6 = 'Hehh dijaga ucapan mu itulohh'
	toxicR_7 = 'Hmmm... temennya Budi Kamu ya... pasti diajarin toxic sama dia'
	toxicR_8 = 'Hei hei... stop it, get some help!'
	toxicR_9 = 'Kenapa warga indo itu banyak yang toxic siii...'
	toxicR_10 = 'Kamu ini toxic, ajarannya siapa si?.. Sini biar aku babat-_'
	toxicR_11 = 'Hei.. stop berkata kasar, mari kita gunakan bahasa yang baik dan benar :)'
	toxicR_12 = 'Hehh Kak, jangan kasar laa'
	toxicR_13 = 'Kalo Kamu ngmong kasar lagi aku cepuin ke emak Kamu ya!'
	toxicR_14 = 'Mantapp lah, lanjutkan bakat toxic mu nak'
	toxicR_15 = 'Mamamu pasti bangga, punya anak kayak Kamu... eh koq satire :v'

const iniToxicRAW = [`${toxicR_1}`,`${toxicR_2}`,`${toxicR_3}`,`${toxicR_4}`,`${toxicR_5}`,`${toxicR_6}`,`${toxicR_7}`,`${toxicR_8}`,`${toxicR_9}`,`${toxicR_10}`,`${toxicR_11}`,`${toxicR_12}`,`${toxicR_13}`,`${toxicR_14}`,`${toxicR_15}`,]
	const iniToxic = iniToxicRAW[Math.floor(Math.random() * (iniToxicRAW.length))]

// User msg = selamat pagi = to Bot interact Reply
	pagi_1 = 'Iyaaa... selamat pagi juga, btw udah makan belom?'
	pagi_2 = 'Pagi juga... jgn lupa mandi, jgn lupa juga bantuin emak ya 😁'
	pagi_3 = 'Ohayoo too.... gimana semalem? tidurnya nyenyak?... tapi kalo aku sih ga tidur soalnya aku bot tehe :<'
	pagi_4 = 'Moring too, dont forget to get breakfast... n jgn lupa bersyukur yaaa 😄'
	pagi_5 = 'Pagi juga Kak, Selamat beraktivitas... jangan lupa jaga kesehatan yaa'
const selamatPagiRAW = [`${pagi_1}`,`${pagi_2}`,`${pagi_3}`,`${pagi_4}`,`${pagi_5}`,]
	const selamatPagi = selamatPagiRAW[Math.floor(Math.random() * (selamatPagiRAW.length))]

// User msg = selamat siang = to Bot interact Reply
	siang_1 = 'Iyaa selamat siang juga'
	siang_2 = 'Siang jugaaa, btw lagi istirahat yaa?'
	siang_3 = 'Siang kak... cuacanya panas bener nih'
const selamatSiangRAW = [`${siang_1}`,`${siang_2}`,`${siang_3}`,]
	const selamatSiang = selamatSiangRAW[Math.floor(Math.random() * (selamatSiangRAW.length))]

// User msg = selamat malam = to Bot interact Reply
	malam_1 = 'Selamat malam jugaa.... jgn begadang yaa, ga baik loh buat kesehatan 😌'
	malam_2 = 'iyaa... malam juga,,,, btw Kamu lg ngerjain tugas?'
	malam_3 = 'Iyaa malam juga kak...'
	malam_4 = 'Malam Kak, btw tidurnya mau kutemenin nih?'
const selamatMalamRAW = [`${malam_1}`,`${malam_2}`,`${malam_3}`,`${malam_4}`]
	const selamatMalam = selamatMalamRAW[Math.floor(Math.random() * (selamatMalamRAW.length))]

				//ends here	
				
 // Tebak Gambar
 if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && budy.match(/[1-9]{1}/)) {
	kuis = true
	jawaban = tebakgambar[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban) {
		reply("Jawaban Anda Benar!")
		delete tebakgambar[sender.split('@')[0]]
		fs.writeFileSync("./nayla/tebakgambar.json", JSON.stringify(tebakgambar))
	} else {
		reply("Jawaban Anda Salah!")
	}
}

// Sambung Kata
if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban = sambungkata[sender.split('@')[0]]
	userAnswer = budy.toLowerCase()
	if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
		get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${l0lhuman}&text=${userAnswer}`)
		await nayla.sendMessage(from, get_result.result, text, { quoted: nay }).then(() => {
			sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
			fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
		})
	} else {
		reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
	}
}


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
            _limit[position].limit += 2
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return nayla.sendMessage(from,`${limit_empty}`, text,{ quoted: nay})
            nayla.sendMessage(from, `Nama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nSisa Limit Kamu: : ${limitCounts}`, text, { quoted : nay1})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            nayla.sendMessage(from, `Nama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nSisa Limit Kamu: : ${limitCounts}`, text, { quoted : nay1})
            }
         	}  

            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            nayla.sendMessage(from, `${limit_empty}`, text, {quoted: nay1})
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

		
if (isGroup) {
			try {
		const getmemex = groupMembers.length
		if (getmemex <= memberLimit) {
		setTimeout( () => {
		nayla.groupLeave(from) 
		}, 2000)
		setTimeout ( () => {
		nayla.sendMessage(from, `Maaf Yaa Bye All👋`, text)
		}, 1000)
		setTimeout( () => {
		nayla.sendMessage(from, `Maaf ${pushname} Tidak Bisa Masuk Group Karna Member Group:\n*${groupMetadata.subject}*\nKarena Tidak Memenuhi Syarat Limit Member\n\nMinimal Member berjumlah ${memberLimit}+\n\nMakasih, jgn sedih ya um :(`, text)
		}, 0)
	}
			
		} catch (err) { console.error(err)  }
	}


            switch (command) {
// this is the begining of the command lines ==> source of case
case 'afk': {
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
		// AFK	property => set to dependent
		const mentionByTag = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ?  nay.message.extendedTextMessage.contextInfo.mentionedJid : []
		const mentionByReply = type == "extendedTextMessage" && nay.message.extendedTextMessage.contextInfo != null ? nay.message.extendedTextMessage.contextInfo.participant || "" : ""
		const mentionX = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
		mentionX != undefined ? mentionX.push(mentionByReply) : []
		const mentionUser = mentionX != undefined ? mentionX.filter(n => n) : []	
	
		for (let x of mentionUser) {
			jds = []
			isYouAgain = pushname
			if (afk.hasOwnProperty(x.split('@')[0])) {
				ini_txt = isYouAgain + " Orang yang Kamu balas atau tag sedang AFK.\n"
				if (afk[x.split('@')[0]] != "") {
					ini_txt += "Dengan alasan: " + afk[x.split('@')[0]]
				}
				mentions(ini_txt, jds, true)
			}
		}
		if (afk.hasOwnProperty(sender.split('@')[0])) {
			jds = []
			adalahKamu = pushname
				diaAfk = adalahKamu + " Kamu telah berhenti AFK"
				mentions(diaAfk, jds, true)
			 delete afk[sender.split('@')[0]]
			fs.writeFileSync("./nayla/truth.json", JSON.stringify(afk))
		}
	jds = []
	isYou = pushname
	alasan = args.join(" ")
				if (args.length < 1) {
					jds = []
					adaalasan = [
						'Mengewe Femboy Berotot',
						'Mengewe Femboy berotot berkanjut badag berbentuk kenalpot racing',
						'Tidur bareng Dina chan',
						'Tidur bareng Budi',
						'Otewe open BO',
						'Ngegey sama OttoAJG',
						'Tanpa alasan'
					]
						const alasan = adaalasan[Math.floor(Math.random() * (adaalasan.length))]
							afk[sender.split('@')[0]] = alasan.toLowerCase()
								fs.writeFileSync("./nayla/truth.json", JSON.stringify(afk))
								ini_txt = isYou + " Kamu telah afk "
							if (alasan != "") { ini_txt += "Dengan alasan: \n\n" + alasan || `${alasan}` }
						mentions(ini_txt, jds, true)
						setTimeout(() => { reply('Seenggaknya pake alasan lah, masa lu idup gada alasan-_')},3000)
				}

	afk[sender.split('@')[0]] = alasan.toLowerCase()
	fs.writeFileSync("./nayla/truth.json", JSON.stringify(afk))
	ini_txt = isYou + " Kamu telah afk "
	if (alasan != "") {
		ini_txt += "Dengan alasan:\n\n" + alasan || `${alasan}`
	}
	mentions(ini_txt, jds, true)
}
	break
	case 'setmemlimit':
		if (args.length < 1) return
		if (!isOwner) return reply(`${onlyOwner}`)
		memberLimit = args[0]
		//setting.memberlimit = memberlimit
		//fs.writeFileSync('./database/json/settings.json', JSON.stringify(setting, null, '\t'))
		reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
	break 
	
	case 'setppbot':
		if (!isOwner) return reply(`${onlyOwner}`)
			nayla.updatePresence(from, Presence.composing) 
		if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
				enmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await nayla.downloadAndSaveMediaMessage(enmedia)
			await frhan.updateProfilePicture(botNumber, media)
		reply('Makasih profil barunya🙂')
	break

case 'setlimit':  
if (!isOwner) return reply(`${onlyOwner}`)
if (args.length < 1) return
if (!isOwner) return reply(`lu owner?`)
limitawal = args[0]
reply(`Change LimitAwal To : ${limitawal} Success!`)					 
break 	

case 'setdonate':  
if (!isOwner) return reply(`${onlyOwner}`)
if (args.length < 1) return
if (!isOwner) return reply(`lu owner?`)
whoDonate = args[0]
reply(`Change Donation List To :\n\n${whoDonate}\n\nSuccess!`)					 
break 	

case 'listdonasi':
	jds = []
iniListDonasi = `${whoDonate}`
mentions(iniListDonasi, jds, true)
break

	case 'banlist':
	case 'listban':
	ben = '```List Banned``` :\n'
		for (let banned of ban) {
			ben += `~> @${banned.split('@')[0]}\n`
		}
		ben += `Total : ${ban.length}`
		nayla.sendMessage(from, ben.trim(), extendedText, {quoted: nay, contextInfo: {"mentionedJid": ban}})
		break
	case 'ban':
		nayla.updatePresence(from, Presence.composing) 
		if (args.length < 1) return
		if (!isOwner) return reply(`${onlyOwner}`) // nanti ganti
		mentionedBan = nay.message.extendedTextMessage.contextInfo.mentionedJid
		ban = mentionedBan
		reply(`Berhasil banned : ${ban}`)
		break	
	case 'unban':
		if (!isOwner)return reply(`${onlyOwner}`)
		bnnd = body.slice(8)
		ban.splice(`${bnnd}@s.whatsapp.net`, 1)
		reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break

		case 'banuser':  
		if (!isOwner) return reply(`${onlyOwner}`)
		globalBan = `${args[0].replace('@','')}@s.whatsapp.net`
		userBanned.push(globalBan)
		fs.writeFileSync('./nayla/afk.json', JSON.stringify(userBanned))
		reply(`Berhasil Banned User!`)
		break				
		case 'unbanuser':  
		if (!isOwner) return reply(`${onlyOwner}`)
		globalUnban = body.slice(10)
		userBanned.splice(`${globalUnban}@s.whatsapp.net`, 1)
		fs.writeFileSync('./nayla/afk.json', JSON.stringify(userBanned))
		reply(`Berhasil Unban wa.me/${globalUnban}`)
		break

		case 'ban_user':
			if (!isOwner) return reply(`${onlyOwner}`)
			const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`}
			userBanned.push(pnom) 
			fs.writeFileSync('./nayla/afk.json',JSON.stringify(userBanned))
			reply(`Berhasil Banned User : ${pnom}`)
		break
		case 'unban_user':
			if (!isOwner) return reply(`${onlyOwner}`)
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			var arr = userBanned
			for( var dp = 0; dp < arr.length; dp++){ 
			if ( arr[dp] === hnom) { 
			arr.splice(dp, 1); 
			dp--; 
			fs.writeFileSync('./nayla/afk.json',JSON.stringify(arr))
			}
			}
			reply(`Berhasil Unban User : ${hnom}`)
			break 			
	case 'banlistuser':
		banGlobal = '```List Banned User``` :\n'
		for (let banUserGlobal of userBanned) {
			banGlobal += `~> @${banUserGlobal.split('@')[0]}\n`
		}
		banGlobal += `\nTotal : ${userBanned.length}`
		nayla.sendMessage(from, banGlobal.trim(), extendedText, {quoted: nay1})
		break

	case 'totaluser':
		totUsr = '```All total User Shujo Bot``` :\n'		
		totUsr += `Total : ${_Elite.length}`
		nayla.sendMessage(from, totUsr, text, {quoted: nay1})
		break

	case 'listprem':
	listedPrem = 'List Member Premium:\n'
	for (let iniListPrem of prem) {
		listedPrem += `~> @${iniListPrem.split('@')[0]}\n`
	}
	listedPrem += `\nTotal : ${prem.length}`
	nayla.sendMessage(from, listedPrem.trim(), extendedText, {quoted: nay1})
	break

	case 'listuser_try0':{
		
		stringDatauser = _Elite

		var obj_id_User = stringDatauser.parseJSON('[{"id":""}]');
			data_id = (obj_id_User.id === "");
				data_id_User[0]["id"]

		var obj_name_User = stringDatauser.parseJSON('[{"name":""}]');
			data_name = (obj_name_User.name === "");
				data_name_User[1]["name"]

		var obj_serial_User = stringDatauser.parseJSON('[{"serial":""}]');
			data_serial = (obj_serial_User.serial === "");
				data_serial_User[2]["serial"]
		
		returnData = `Data List All User\n\n`
		returnData = `No: ${data_id_User}\n`
		returnData = `Nama: ${data_name_User}\n`
		returnData = `Serial: ${data_serial_User}\n`
		returnData = `\nTotal: ${_Elite.length}`

	nayla.sendMessage(from, returnData.trim(), extendedText, {quoted: nay1})
	}
	break

	case 'listuser_try1':{

		jds = []

			await reply(pushname + 'Sebentar kak...', jds, true)
				data_user_JSON = _Elite
				var data_AllUser = JSON.parse(data_user_JSON);

		const ini_Data = {
			Data_id : (data_AllUser.id[0]),
			Data_name : (data_AllUser.name[1]),
			Data_time : (data_AllUser.time[2]),
			Data_serial : (data_AllUser.serial[3])
		}

		for (let OutputData of ini_Data) {
			displayDataX += `Nomor: ${OutputData[0]}\n`
			displayDataX += `Nama: ${OutputData[1]}\n`
			displayDataX += `Waktu: ${OutputData[2]}\n`
			displayDataX += `Serial: ${OutputData[3]}\n`
		}
			displayDataX += `Total User: ${_Elite.length}\n`
	nayla.sendMessage(from, displayDataX.trim(), extendedText, {quoted: nay1})
	}
	break

	case 'listuser_try2':{

		jds = []
		await reply(pushname + 'Sebentar kak...', jds, true)

		data_user_JSON = _Elite
		var data_AllUser = JSON.parse(data_user_JSON);

		Data_id = (data_AllUser.id[0]),
			Data_name = (data_AllUser.name[1]),
				Data_time = (data_AllUser.time[2]),
					Data_serial = (data_AllUser.serial[3])
		
		displayData = `Nomor: ${Data_id}\n`
			displayData += `Nama: ${Data_name}\n`
				displayData += `Waktu: ${Data_time}\n`
					displayData += `Serial: ${Data_serial}\n`
		displayData += `Total User: ${_Elite.length}\n`

		nayla.sendMessage(from, displayData.trim(), extendedText, {quoted: nay1})
	}
	break

case 'getdatauser':{
	jds = []
	if (!isOwner) return reply(`${onlyOwner}`)
	await reply(pushname+'Wait Kak....', text, true)

	thisDataFile = _Elite = JSON.parse	(fs.readFileSync('./nayla/Elite.json')) 

	const getDataUser_JSON = fs.readFileSync('./nayla/Elite.json')

		//nayla.sendMessage(from, F3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
	nayla.sendMessage(from, getDataUser_JSON, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `DataRegisteredUser.json` })
}
break


case 'join':  
                    if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return nayla.sendMessage(from, 'Maaf Kak Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `${NameBot}`} } }})
                    var nomor = nay.participant
                    const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `PREINVITE`} } } })                    
                    reply(iniMess.joingrub)                     
					break  
case 'claimz':{
if (!isGroup) return reply(`GRUP ONLY`)
if (!isBotx) return reply(`Mode Leveling/Farm XP tidak aktif di Grup ini, silahkan cek di ${prefix}togglemenu`)

	var usersInTimeout = []

	nayla.on('message', msg => {
		if(msg.content === "claim"){
			var timeoutDelay = 20000 * 60 * 60;//the cool down you want in ms
	
			if(usersInTimeout.some(user => user.userID == message.author.id)){//check if the user is in timeout
			  var userInTimeout = usersInTimeout.find(user => user.userID == message.author.id);
			  var remainingTime = millisec(timeoutDelay - (new Date().getTime() - userInTimeout.timeoutStart)).format('hh:mm:ss');
			  return reply(`Time left to use the command: *${remainingTime}*`);
			}
	
			//run the command:
			//msg.channel.send('hㅤ');
	
			usersInTimeout.push({userID: message.author.id, timeoutStart: new Date().getTime()});//add the user to timeout
	
			setTimeout(() => {//add a timer to remove him from the timeout
			  usersInTimeout.splice(usersInTimeout.indexOf(message.author.id), 1);
			}, timeoutDelay);
		}
	 })
Limit =`
Nama : ${pushname}
ID's : wa.me/${sender.split("@")[0]}
		
Get Limit : *${limitplus}*

Waktu yang tersisa agar bisa Claim Limit lagi:
${remainingTime}
`
addLevelingLevel(sender, 1)
	bayarLimit(sender, limitplus)
	 	mentions(Limit, jds, true)
	}		 
break
case 'claim':{
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	jds = []
	if (!isGroup) return reply(`GRUP ONLY`)
	if (!isBotx) return reply(`Mode Leveling/Farm XP tidak aktif di Grup ini, silahkan cek di ${prefix}togglemenu`)
LimitFree =`Nama : ${pushname}
ID's : wa.me/${sender.split("@")[0]}
			
Get Limit : *+${limitplusFree}*`
	addLevelingLevel(sender, 1)
		bayarLimit(sender, limitplusFree)
			 mentions(LimitFree, jds, true, { quoted: nay1 })
		}		 
break
case 'claimprem':{
jds = []
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (!isGroup) return reply(`GRUP ONLY`)
if (!isBotx) return reply(`Mode Leveling/Farm XP tidak aktif di Grup ini, silahkan cek di ${prefix}togglemenu`)
if (!isPrem) return reply(`${memberPrem}`)
Limitprem =`Nama : ${pushname}
ID's : wa.me/${sender.split("@")[0]}
			
Get Limit : *+${limitplusPrem}*
	
Saat ini Kamu adalah Member Premium
Premium has *UNLIMITED Limit!*`
	addLevelingLevel(sender, 1)
		bayarLimit(sender, limitplusPrem)
			 mentions(Limitprem, jds, true, { quoted: nay1 })
		}		 
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
					case 'register' :
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
					const serialUser = createSerial(20)
					veri = sender
					if (isGroup) {
					addEliteUser(sender, pushname, time, serialUser)
					try {					 
					} catch {						 
					}
				   	reply(`${successRegistered}`)
					console.log(color(`Nama : ${pushname} Sukses terdaftar!`, 'pink'))
					} else {
					addEliteUser(sender, pushname, time, serialUser)
					try {						 
					} catch {						  
			    	}
			     	reply(`${successRegistered}`)
		         	console.log(color(`Nama : ${pushname} Sukses terdaftar!`, 'pink'))
				    }
				    break
case 'testdoank':
iniVoice = await getBuffer(`${BlueArchiveVoices}`)
nayla.sendMessage(from, iniVoice, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
break

case 'patch':
jds = []
iniPatch = `Rekap Update Patch Bot

Scheduled : DD-MM-YY

Name : ${NameBot}
FrameWork Version : 2.4
Latest Update : 3 April 2022

Index JavaScript Version
Index RevisionVer : 2.1.8
Latest Update : 21 April 2022

Baca Selengkapnya Disini:
${iniReadmore}

Log Updates :
*~ Major Updates 2.0*
- framework <move all in one index.js>
- toggle
- ban/unban @mentioned
- limit depreciation <from 50 => 25>
- higher xp farm rate <+25%>
- APIkey revision <lolhuman, xteam, vhtear>
- bot no longer to be toxic
- bot no longer send voice note, instead voice reaction from message
- integrated constraint modular
- interface upgrade
- etc

*~ Updates 2.1*
- fix bug n error
- feature ${prefix}ytmp4 moved into premium feature
- profile check
- catch error due to request
- etc

*~ Updates 2.2*
- ban/unban User [jid] => global ban
- claim limit set range 1-9 => 1-5
- default limit set to 25 => 30
- spam is now premium feature
- adds more feature to premium feature (due to demand)
- group change settings; check at ${prefix}grupmenu
- set group profile picture
- set group desc
- set group name/subject
- adminlist command

*~ Updates 2.3*
- bug fixes
- donations board
- setlimit <default> <owner only>
- etc

*~ Updates 2.4*
- Interface changes
- adds plenty of features in makermenu!, check on ${prefix}makermenu
  *such as: text prome me, photo oxy, ephoto360
- added few features on ${prefix}randommenu
- added premium menu on ${prefix}premiummenu
- changes kodebahasa in ${prefix}kodebahasa as for features ${prefix}translate
- etc

~ Updates 2.5
- added AFK feature
- added tebakgambar & sambungkata feature, check on ${prefix}randommenu
- wait query
- interface menu
- etc

~ Updates 2.6
- added some features
- ytmp4 donwloader removed from premium feature
- limit deffault <new user> set to 25 => 40
- simplified interface
- donations board removed, moved onto !donationlist
- afk feature revamped
- etc

~ Updates 2.7
- fixed afk feature
- fixed kick feature
- fixed nsfw query feature
- added more query wait & error report
- set limitawal to => 45
- added listed member premium
- etc

~ Updates 2.8
- revamped interface
- added sticker[wm, round, nobg, take] (experimental)
- etc

~ null

${iniReadmore}

footnote:
Bot ini masih banyak banget kekurangannya,
dan terus dilakukan pengembangan agar lebih baik lagi
jadi mohon maaf kalo tidak sesuai ekspektasi Kalian :)
from: owner
`
nayla.sendMessage(from, iniPatch, text, { quoted: nay1 })   
break

case 'botstat':
case 'statbot':
	jds = []
	reply (thisHeader+botStatInfo, jds, true)
break

case 'help':
case 'bothelp':  
jds = []             
inihelp =`
*_Halo ${urname} ${pushname}_*

_Jika ingin menggunakan Bot harap membaca rules nya dulu ya sebelum mendaftar_
_Silahkan ketik salah satu Perintah dibawah ini:_

*Information*
${prefix}rules | untuk melihat Rules/aturan pakai Bot
${prefix}info |  informasi tentang Bot
${prefix}patch | untuk melihat log update Bot

*Register*
${prefix}daftar | Kamu harus daftar agar bisa menggunakan fitur-fitur Bot

*Interface*
${prefix}menu | Untuk menampilkan sub-menu fitur Bot
${prefix}allmenu | Untuk menampilkan List Semua Fitur Bot yang ada



Baca Selengkapnya:
${iniReadmore}

*User Guide*
Silahkan dibaca dengan teliti yaa, kalo masih bingung ya baca ulang :)

*_Youtube Downloader -Feature Request_*
!ytplay <link/query> | output audio/suara
contoh: !ytplay https://www.youtube.com/watch?v=AKm0GhHkhR4
atau juga bisa: !ytplay koyo jogja istimewa

!ytmp3 <link only> | output audio/suara (alternatif)
contoh: !ytmp3 https://www.youtube.com/watch?v=AKm0GhHkhR4
hampir sama sperti !ytplay, ini hanya utk alternatif

!ytmp4 <link only> | output video
contoh: !ytnp4 https://www.youtube.com/watch?v=AKm0GhHkhR4
tidak selalu work, jika video di privat maka tidak bisa


*_NSFW Menu?_*
Buat yang suka maen aman, fitur ini bisa di on/off khusus utk Grup
di !togglemenu, cara pakai sudah ada disitu


*_Wikipedia / Kbbi_*
!wikipedia <query> (query=args)| !kbbi <query> (query=words)
contoh: !wikipedia Napoleon | !kbbi Rancu


*_Makermenu -Feature Request_*
!<command> <query <text> / <text1> <text2>>
contoh: !shadow Pengen punya pacar | ini jika 1 text
contoh: !pornhub Budi Ganteng | ini jika 2 text


*_Alquran/Alquran audio -Feature Request_*
!alquran <nomor surah>/<nomor ayat/<...-...>
contoh: !alquran 1/4
bisa juga: !alquran 1/1-4

!alquranaudio <nomor surah>/<nomor ayat/<...-...>
contoh: sama seperti penggunaan fitur !alquran diatas



*_Fitur-Fitur yang lain kurang lebih penggunaannya sama seperti yang sudah dicontohkan diatas_*


Extra Guide & FAQ
Selengkapnya:
${iniReadmore}
*_About XP / Leveling_*
*XP hanya bisa didapatkan ketika Kamu dalam Grup Saja / Bisa self-claim (tentunya Bot nya juga di grup yg sama dgn Kamu ya)
*XP digunakan untuk LevelUp!, dan setiap LevelUp! Kamu mendapatkan Limit!
*Fitur ini bisa on/off Sesuai yg dimau, cek di ${prefix}togglemenu

*_About Limit_*
*Limit digunakan setiap Kamu menggunakan GET Features Bot
*Kamu tidak bisa menggunakan GET Features jika Limit Kamu habis!
*Limit exchange ==> features are equals as well as 1:1

*_About GET Features!_*
*GET Features => Fitur Bot yg menggunakan APIkey Premium/berbayar untuk memproses request!
*Note: web APIkey terkadang error saat memproses request, NOT 100% guaranteed WORK

*_FAQ:_*
Q:Apa Bot ini FREE?
A:Yes, kalo mau donasi silahkan :)

Q:Hasil proses fitur darimana?
A:APIkey provider (berbayar)

Q:Cara jadi premium gimana?
A:Entahlah, Owner blm berani krn msh bnyk yg perlu difix juga

Q:Kok error banh?
A:Saya juga kurang phm deck, krn kebanyakan itu trobel dari APIkey provider
 :kalo mau cari alternatif lain juga udh terbiasa pake algoritma(APIkey provider sekarang)
 :jd harus belajar lg :)

Q:Kok ada limit si banh?
A:Iyala, ntar lu maen spam fitur Bot teross.. yg repot siapa? aku pula :)

Q:Kok Bot nya gabisa bikin stiker si banh?
A:Min andro 7+ biar Bot bisa bikin stiker, sekarang masih pke andro 5.1
 :Belom sempet custom rom OS hp, ntar ye kapan" :)

${xxx}${NameBot}
Alrights Reserved 2022${xxx}` 
nayla.sendMessage(from, inihelp, text, { quoted: nay1 })                                                 
break

case 'mulung':
iniMulung = `${howlimit}`
nayla.sendMessage(from, iniMulung, text, { quoted: nay1 })                                                 
break

case 'howpremium':
iniPremium = `${jadipremium}`
nayla.sendMessage(from, iniPremium, text, { quoted: nay1 })                                                 
break

case 'donasi':  
case 'donate':         
//
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
setTimeout(() => { reply('Makasih.., sebentar ya Kak')},1000)
	setTimeout(() => { reply('Emmmm.... Jangan php ya kak :)')},2000)
donate = await getBuffer(`${donationPict}`)           
donation =`
Dashboard;

Go-Pay
0813-2958-5825
an: rizky

Q:"hasil donasi buat apa?"
A:"untuk beli apikey premium, sekaligus utk support creator bot"
else:"biar bot gak mati, dan terawat"

Makasih ya..
${NameBot}`    
nayla.sendMessage(from, donate, image, { quoted: nay1, caption: donation })                                                 
break
case 'info':
case 'infobot':
reply(`${pushname} ~\nGathering data, please wait....`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
iniInfoPict = await getBuffer(`${mainBlob}`)
jmlBan = Stat_Ban
jmlReg = Stat_Reg
jmlPrem = Stat_Prem
iniInfo = `
${thisHeader}

╭─── 「 *_APIkey Active_* 」
│ lolhuman Rests API
│ https://api.lolhuman.xyz/
│ Active until date;
│ Expired 15-06-2022
╰──⪢

_Baca Selengkapnya:_
${iniReadmore}

╭─── 「 *Software Information* 」── 
│ Platform: Termux
│ Languange: JavaScript
│ NodeJs: v13.00
│ 
│ *Lihat Patch Update Bot di:*
│ ${prefix}patch
│ 
│ Also My Repository:
│ https://github.com/rizzzky78/rizzzkyRepo
╰──⪢

╭─── 「 *Device* 」── 
│ Models: A2010-a 
│ NETWORK	Technology: GSM / HSPA / LTE
│ PLATFORM OS: Android 5.1 (Lollipop)
│ Chipset: Mediatek MT6735M (28 nm)
│ CPU: Quad-core 1.0 GHz Cortex-A53
│ GPU: Mali-T720MP2
│ Internal: 8GB/1GB RAM
│ OMMS WLAN: Wi-Fi 802.11 b/g/n, hotspot
│ BATTERY	Type: Li-Po 2000 mAh, removable
╰──⪢

╭─── 「 *Network* 」── 
│ Provider: Biznet
│ Upload/Download both
│ Speed up-to 6 MB/s
│ 
│ Details Properties
│ SSID : WiFi Attack
│ Protocol : Wi-Fi 4 (802.11n) 
│ Security type : WPA2-Personal 
│ Network band : 2.4 GHz
│ Network channel : 13
│ Link speed (Receive/Transmit) : 72/72 (Mbps) 
│ Link-local IPv6 address : fe80:11f8:49bc:1e03:ce27%11 
│ IPv6 DNS servers : fe80::1%11
│ IPv4 address : 192.168.100.11
│ IPv4 DNS servers : 192.168.100.1
│ Manufacturer : Realtek Semiconductor Corp. 
│ Description : TP-Link Wireless Adapter
│ Driver version : 1030.38.712.2019 
│ Physical address (MAC) : 60-A4-B7-22-73-1F
╰──⪢

${NameBot}
Alrights Reserved 2022
`			
nayla.sendMessage(from, iniInfoPict, image, { quoted: nay1, caption: iniInfo  })
break

case 'rules':  
jds = []                     
inirules =`
Rules:	

*- Jangan sekalipun telp/vc Bot*
*- No flooding request, jeda minimal 5-10 dtk / request, agar pengguna lain tidak delay*
  *Melanggar konsekuensi BAN*

- Bot ini menyimpan nomor telp kamu ketika mendaftar
- Tidak semua request kamu sesuai apa yang diminta, harap lebih detail lagi dalam me-request
- Tidak semua fitur 100% WORK, terkadang trobel dari web penyedia APIkey atau memang konten yang dicari itu tidak ada
- Terdapat Fitur-Fitur Eksplisit pada Bot ini (18+), dan tidak ada aturan batasan umur bagi pengguna
  *Bot/Owner Bot tidak bertanggungjawab jika Bot disalahgunakan/membuat masalah yang diakibatkan oleh pengguna*
  *Mendaftar = setuju*

${xxx}${NameBot}
Alrights Reserved 2022${xxx}`  
mentions(inirules, jds, true)                                                  
break

case 'kodebahasa':
	iniKodeLang = `
List Bahasa Untuk Command
${prefix}tts (soon!)
${prefix}translate
	
List Bahasa :
${iniReadmore}
  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
	`
mentions(iniKodeLang, jds, true)
break
			
case 'nick':  
jds = [] 
setTimeout(() => { mentions('Sebentar coeg...'), jds, true},1000)       
	setTimeout(() => { reply('Dimana ada Budi..., disitu ada Saya... mwehehehehheh')},3000)                
FormNickArmadaX =`H᭄ꦿ• YourNick` 
FormNickArmadaY =`ID Armada : 1051147`
setTimeout(() => { reply(FormNickArmadaX)},5000)    
	setTimeout(() => { reply(FormNickArmadaY)},6000)      
		setTimeout(() => { mentions('Tuh, dipake ya.. Ga pake ntar di kick... xixixi'), jds, true},8000)                                            
break
				//0						       	 			            			           
case 'menu':
case 'm':
	jds = []
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
await mentions(`${queryWait}`, jds, true)
picmenu = await getBuffer(`${mainBlob}`)

jmlBan = Stat_Ban
jmlReg = Stat_Reg
jmlPrem = Stat_Prem

inimenu = `
${thisHeader}

${thisHeader2}

╭──❲ *_Exclusive Menu_*
│ ${tz} ${prefix}mediamenu | Music, video, etc downloader_
│ ${tz} ${prefix}funtextmenu | Fun!_
│ ${tz} ${prefix}makermenu | For creator_
│ ${tz} ${prefix}nsfwmenu |  Fitur 18+_
│ ${tz} ${prefix}toolsmenu | Untuk kebutuhanmu_
│ ${tz} ${prefix}randommenu | List random features_
╰──

╭──❲ *_More Menu_*
│ ${tz} ${prefix}grupmenu | Grup only_
│ ${tz} ${prefix}tagmenu | Tag member random_
│ ${tz} ${prefix}cekmenu | How is yours?_
│ ${tz} ${prefix}togglemenu | on/off fitur bot_
│ ${tz} ${prefix}mygrub | list grub bot_
╰──

╭──❲ *_Sub Menu_*
│ _${tz} ${prefix}premiummenu | only for premium users!_
│ _${tz} ${prefix}internalmenu | hosting files_
│ _${tz} ${prefix}ownermenu | owner only_
│ _${tz} ${prefix}donasi | traktir owner kopi :v_
│ _${tz} ${prefix}listdonasi | daftar user donatur_
│ _${tz} ${prefix}info | info tentang Bot_
│ _${tz} ${prefix}rules | rules Bot_
│ _${tz} ${prefix}help | bantuan/cara pakai Bot_
│ _${tz} ${prefix}patch | log patch update Bot_
╰──
${thisFooter}`			
	nayla.sendMessage(from, picmenu, image, { quoted: nay1, caption: inimenu })
	break
				//1
case 'premiummenu':
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (!isPrem) return reply(`${memberPrem}`)
await reply(`${queryWait}`)
PicPrem = await getBuffer(`${mainBlob}`)
premmenu = `
${thisHeader}

${thisHeader2}

☬ 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝙈𝙚𝙣𝙪 ☬

*Todays Quotes*
_${quotesToday}_

_Hai ${urname} ${pushname}_
_Thankyou for become Premium Member_
_Here's the Menu, just only for you!_

╭─────────────────────────────⟢
│ ${tz} ${prefix}claimprem | Claim your limit!
├───────────────────────────────────⟢
│ ${tz} ${prefix}ytmp3 | Youtube mp3 downloader
├───────────────────────────────────⟢
│ ${tz} ${prefix}pixiv | Pixiv art
├───────────────────────────────────⟢
│ ${tz} ${prefix}shortlink <link> | Shortened your link
├───────────────────────────────────⟢
│ ${tz} ${prefix}nhentaipdf | Doujin downloader
├───────────────────────────────────⟢
│ ${tz} ${prefix}spamprem <tag @mem | isi pesanmu> | Spam pesan via WA
├───────────────────────────────────⟢
│ ${tz} ${prefix}spamsms <nomor telp> | Spam pesan via sms
├───────────────────────────────────⟢
│ ${tz} ${prefix}spotify <link> | Play hd music
╰─────────────────────────────⟢


𝘧𝘳𝘰𝘮 𝘴𝘩𝘰𝘶𝘫𝘰 𝘉𝘰𝘵
`			
	nayla.sendMessage(from, PicPrem, image, { quoted: nay1, caption: premmenu })
	break
					case 'nsfwmenu':           
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
await reply(`${queryWait}`)
					NsfWx = await getBuffer(`${mainBlob}`)
NsFw =`
${thisHeader}

${thisHeader2}

╔══
║  NSFW Menu
║  NotSafeForWork Menu
╚══

*Dosa Tanggung Sendiri!*

╔══
║  Hentai & Doujinshi
╠══
║ ${tz} ${prefix}nekopoi <link per eps>
║ ${tz} ${prefix}nekopoicari <title/judul>
║ ${tz} ${prefix}nekopoisearch <title/judul>
║ ${tz} ${prefix}nhentaicari <title/judul>	
║ ${tz} ${prefix}nhentaisearch <title/judul>			
║ ${tz} ${prefix}nhentaiinfo <kode nuklir/title>
║ ${tz} ${prefix}nhentaipdf <kode nuklir>
╚══

╔══
║  X X X
╠══
║ ${tz} ${prefix}xhamstersearch
║ ${tz} ${prefix}xhamster
║ ${tz} ${prefix}xnxxsearch
║ ${tz} ${prefix}xnxx
╚══

╔══
║ Lewd Pictures
╠══
╠════⟢ Lewd I
║ ${tz} ${prefix}randomhentai
║ ${tz} ${prefix}chiisaihentai
║ ${tz} ${prefix}trap
║ ${tz} ${prefix}blowjob
║ ${tz} ${prefix}yaoi
║ ${tz} ${prefix}ecchi
║ ${tz} ${prefix}hentai
║ ${tz} ${prefix}ahegao
║ ${tz} ${prefix}hololewd            
║ ${tz} ${prefix}sideoppai
║ ${tz} ${prefix}animefeets
║ ${tz} ${prefix}animebooty
║ ${tz} ${prefix}animethighss
║ ${tz} ${prefix}hentaiparadise
║ ${tz} ${prefix}animearmpits
║ ${tz} ${prefix}hentaifemdom
║ ${tz} ${prefix}lewdanimegirls
║ ${tz} ${prefix}biganimetiddies
║ ${tz} ${prefix}animebellybutton
║ ${tz} ${prefix}hentai4everyone
╠══
╠════⟢ Lewd II
║ ${tz} ${prefix}bj
║ ${tz} ${prefix}ero
║ ${tz} ${prefix}cum
║ ${tz} ${prefix}feet
║ ${tz} ${prefix}yuri
║ ${tz} ${prefix}trap
║ ${tz} ${prefix}lewd
║ ${tz} ${prefix}eron
║ ${tz} ${prefix}solo
║ ${tz} ${prefix}gasm
║ ${tz} ${prefix}poke
║ ${tz} ${prefix}anal
║ ${tz} ${prefix}holo
║ ${tz} ${prefix}tits
║ ${tz} ${prefix}kuni
║ ${tz} ${prefix}kiss
║ ${tz} ${prefix}erok
║ ${tz} ${prefix}smug
║ ${tz} ${prefix}baka
║ ${tz} ${prefix}solog
║ ${tz} ${prefix}feetg
║ ${tz} ${prefix}lewdk
║ ${tz} ${prefix}waifu
║ ${tz} ${prefix}pussy
║ ${tz} ${prefix}femdom
║ ${tz} ${prefix}cuddle
║ ${tz} ${prefix}hentai
║ ${tz} ${prefix}eroyuri
║ ${tz} ${prefix}cum_jpg
║ ${tz} ${prefix}erofeet
║ ${tz} ${prefix}holoero
║ ${tz} ${prefix}classic
║ ${tz} ${prefix}erokemo
║ ${tz} ${prefix}fox_girl
║ ${tz} ${prefix}futanari
║ ${tz} ${prefix}lewdkemo
║ ${tz} ${prefix}wallpaper
║ ${tz} ${prefix}pussy_jpg
║ ${tz} ${prefix}kemonomimi
║ ${tz} ${prefix}nsfw_avatar
╚══

╔══
║ Get Features
║ API's By: LoLHuman
║ shoujo-chan
╚══

${thisFooter}
`					           
nayla.sendMessage(from, NsfWx, image, { quoted: nay, caption: NsFw })                                                                       
break
				//2	
case 'islami':  
jds = []         
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)           
HM =`
${thisHeader}

${thisHeader2}

╭──❲ Islami Menu
│ ${tz} ${prefix}listsurah
│ ${tz} ${prefix}alquran
│ ${tz} ${prefix}alquranaudio
│ ${tz} ${prefix}asmaulhusna
│ ${tz} ${prefix}kisahnabi
│ ${tz} ${prefix}jadwalsholat
╰──
${thisFooter}`
mentions(HM, jds, true)                                                     
                    break
				//3	
		
                //4    
case 'toolsmenu':                      
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
await reply(`${queryWait}`)
TMenu = await getBuffer(`${mainBlob}`)
ToolMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Tools Menu
│ ${tz} ${prefix}wikipedia <query>
│ ${tz} ${prefix}translate | Cek list bahasa di ${prefix}kodebahasa
│ ${tz} ${prefix}jarak | Jarak satu tempat ke tempat lain
│ ${tz} ${prefix}brainly <query>
│ ${tz} ${prefix}kbbi <query>
│ ${tz} ${prefix}hoax
│ ${tz} ${prefix}urbandictionary
│ ${tz} ${prefix}jadwaltv
│ ${tz} ${prefix}jadwaltvnow
│ ${tz} ${prefix}newsinfo
│ ${tz} ${prefix}cnnindonesia
│ ${tz} ${prefix}cnnnasional
│ ${tz} ${prefix}cnninternasional
│ ${tz} ${prefix}infogempa
│ ${tz} ${prefix}google <query>
│ ${tz} ${prefix}shortlink <link>
│ ${tz} ${prefix}zippyshare <link> | Bypass tanpa iklan
╰──
${thisFooter}`         
nayla.sendMessage(from, TMenu, image, { quoted: nay, caption: ToolMenu })                                         
                    break
				//5	
case 'mediamenu':           
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
await reply(`${queryWait}`)
MMMenu = await getBuffer(`${mainBlob}`)           
MMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Media Menu
│ ${tz} ${prefix}lk21
│ ${tz} ${prefix}drakorongoing			
│ ${tz} ${prefix}ytplay <link/title> 
│ ${tz} ${prefix}ytsearch <yg ingin dicari>
│ ${tz} ${prefix}ytmp3 <link> 
│ ${tz} ${prefix}ytmp4 <link> (premium)
│ ${tz} ${prefix}telesticker 
│ ${tz} ${prefix}tiktoknowm 
│ ${tz} ${prefix}tiktokmusic 
│ ${tz} ${prefix}spotify <judul lagu>
│ ${tz} ${prefix}spotifysearch <judul lagu>
│ ${tz} ${prefix}jooxplay <judul lagu>
│ ${tz} ${prefix}igdl <link>
│ ${tz} ${prefix}igdl2 <link>
│ ${tz} ${prefix}twtdl <link> 
│ ${tz} ${prefix}fbdl <link>
│ ${tz} ${prefix}pinterest
│ ${tz} ${prefix}pinterest2
│ ${tz} ${prefix}pinterestdl
╰──
${thisFooter}`    
nayla.sendMessage(from, MMMenu, image, { quoted: nay, caption: MMenu })                                                 
                    break 					
				//6	
case 'makermenu':           
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
MMenu = await getBuffer(`${mainBlob}`)        
makerMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Maker Menu Sub ─
│ ${tz} ${prefix}textprome <sub menu>
│ ${tz} ${prefix}photooxy <sub menu>
│ ${tz} ${prefix}ephoto360 <sub menu>
╰──

Buka Semua Sub Menu Disini:
${iniReadmore}

╭──❲ Maker Menu ─
│ ${tz} ${prefix}ttp
│ ${tz} ${prefix}ttp2
│ ${tz} ${prefix}ttp3
│ ${tz} ${prefix}ttp4
│ ${tz} ${prefix}attp
│ ${tz} ${prefix}attpz
│ ${tz} ${prefix}triggered
│ ${tz} ${prefix}pornhub
│ ${tz} ${prefix}glitch
│ ${tz} ${prefix}avenger
│ ${tz} ${prefix}space
│ ${tz} ${prefix}ninjalogo
│ ${tz} ${prefix}marvelstudio
│ ${tz} ${prefix}lionlogo
│ ${tz} ${prefix}wolflogo
│ ${tz} ${prefix}steel3d
│ ${tz} ${prefix}wallgravity
╰──

╭──❲ Text Pro:Me Menu ─
│ ${tz} ${prefix}blackpink text
│ ${tz} ${prefix}neon text
│ ${tz} ${prefix}greenneon text
│ ${tz} ${prefix}advanceglow text
│ ${tz} ${prefix}futureneon text
│ ${tz} ${prefix}sandwriting text
│ ${tz} ${prefix}sandsummer text
│ ${tz} ${prefix}sandengraved text
│ ${tz} ${prefix}metaldark text
│ ${tz} ${prefix}neonlight text
│ ${tz} ${prefix}holographic text
│ ${tz} ${prefix}text1917 text
│ ${tz} ${prefix}minion text
│ ${tz} ${prefix}deluxesilver text
│ ${tz} ${prefix}newyearcard text
│ ${tz} ${prefix}bloodfrosted text
│ ${tz} ${prefix}halloween text
│ ${tz} ${prefix}jokerlogo text
│ ${tz} ${prefix}fireworksparkle text
│ ${tz} ${prefix}natureleaves text
│ ${tz} ${prefix}bokeh text
│ ${tz} ${prefix}toxic text
│ ${tz} ${prefix}strawberry text
│ ${tz} ${prefix}box3d text
│ ${tz} ${prefix}roadwarning text
│ ${tz} ${prefix}breakwall text
│ ${tz} ${prefix}icecold text
│ ${tz} ${prefix}luxury text
│ ${tz} ${prefix}cloud text
│ ${tz} ${prefix}summersand text
│ ${tz} ${prefix}horrorblood text
│ ${tz} ${prefix}thunder text
│ ${tz} ${prefix}pornhub text1 text2
│ ${tz} ${prefix}glitch text1 text2
│ ${tz} ${prefix}avenger text1 text2
│ ${tz} ${prefix}space text1 text2
│ ${tz} ${prefix}ninjalogo text1 text2
│ ${tz} ${prefix}marvelstudio text1 text2
│ ${tz} ${prefix}lionlogo text1 text2
│ ${tz} ${prefix}wolflogo text1 text2
│ ${tz} ${prefix}steel3d text1 text2
│ ${tz} ${prefix}wallgravity text1 text2
╰──

╭──❲ Photo Oxy Menu ─
│ ${tz} ${prefix}shadow <text>
│ ${tz} ${prefix}cup <text>
│ ${tz} ${prefix}cup1 <text>
│ ${tz} ${prefix}romance <text>
│ ${tz} ${prefix}smoke <text>
│ ${tz} ${prefix}burnpaper <text>
│ ${tz} ${prefix}lovemessage <text>
│ ${tz} ${prefix}undergrass <text>
│ ${tz} ${prefix}love <text>
│ ${tz} ${prefix}coffe <text>
│ ${tz} ${prefix}woodheart <text>
│ ${tz} ${prefix}woodenboard <text>
│ ${tz} ${prefix}summer3d <text>
│ ${tz} ${prefix}wolfmetal <text>
│ ${tz} ${prefix}nature3d <text>
│ ${tz} ${prefix}underwater <text>
│ ${tz} ${prefix}golderrose <text>
│ ${tz} ${prefix}summernature <text>
│ ${tz} ${prefix}letterleaves <text>
│ ${tz} ${prefix}glowingneon <text>
│ ${tz} ${prefix}fallleaves <text>
│ ${tz} ${prefix}flamming <text>
│ ${tz} ${prefix}harrypotter <text>
│ ${tz} ${prefix}carvedwood <text>
│ ${tz} ${prefix}tiktok <text1 text2>
│ ${tz} ${prefix}arcade8bit <text1 text2>
│ ${tz} ${prefix}battlefield4 <text1 text2>
│ ${tz} ${prefix}pubg <text1 text2>
╰──

╭──❲ Photo Oxy Menu ─
│ ${tz} ${prefix}wetglass <text>
│ ${tz} ${prefix}multicolor3d <text>
│ ${tz} ${prefix}watercolor <text>
│ ${tz} ${prefix}luxurygold <text>
│ ${tz} ${prefix}galaxywallpaper <text>
│ ${tz} ${prefix}lighttext <text>
│ ${tz} ${prefix}beautifulflower <text>
│ ${tz} ${prefix}puppycute <text>
│ ${tz} ${prefix}royaltext <text>
│ ${tz} ${prefix}heartshaped <text>
│ ${tz} ${prefix}birthdaycake <text>
│ ${tz} ${prefix}galaxystyle <text>
│ ${tz} ${prefix}hologram3d <text>
│ ${tz} ${prefix}greenneon <text>
│ ${tz} ${prefix}glossychrome <text>
│ ${tz} ${prefix}greenbush <text>
│ ${tz} ${prefix}metallogo <text>
│ ${tz} ${prefix}noeltext <text>
│ ${tz} ${prefix}glittergold <text>
│ ${tz} ${prefix}textcake <text>
│ ${tz} ${prefix}starsnight <text>
│ ${tz} ${prefix}wooden3d <text>
│ ${tz} ${prefix}textbyname <text>
│ ${tz} ${prefix}writegalacy <text>
│ ${tz} ${prefix}galaxybat <text>
│ ${tz} ${prefix}snow3d <text>
│ ${tz} ${prefix}birthdayday <text>
│ ${tz} ${prefix}goldplaybutton <text>
│ ${tz} ${prefix}silverplaybutton <text>
│ ${tz} ${prefix}freefire <text>
╰──
${thisFooter}`  
nayla.sendMessage(from, MMenu, image, { quoted: nay, caption: makerMenu })                                                   
break 
case 'textprome':           
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
MMenu = await getBuffer(`${mainBlob}`)        
TxtProm =`
${thisHeader}

${thisHeader2}

╭──❲ Maker Menu Sub ─
│ Textprome <sub menu>
╰──
${iniReadmore}
╭──❲ Text Pro:Me Menu ─
│ ${tz} ${prefix}blackpink text
│ ${tz} ${prefix}neon text
│ ${tz} ${prefix}greenneon text
│ ${tz} ${prefix}advanceglow text
│ ${tz} ${prefix}futureneon text
│ ${tz} ${prefix}sandwriting text
│ ${tz} ${prefix}sandsummer text
│ ${tz} ${prefix}sandengraved text
│ ${tz} ${prefix}metaldark text
│ ${tz} ${prefix}neonlight text
│ ${tz} ${prefix}holographic text
│ ${tz} ${prefix}text1917 text
│ ${tz} ${prefix}minion text
│ ${tz} ${prefix}deluxesilver text
│ ${tz} ${prefix}newyearcard text
│ ${tz} ${prefix}bloodfrosted text
│ ${tz} ${prefix}halloween text
│ ${tz} ${prefix}jokerlogo text
│ ${tz} ${prefix}fireworksparkle text
│ ${tz} ${prefix}natureleaves text
│ ${tz} ${prefix}bokeh text
│ ${tz} ${prefix}toxic text
│ ${tz} ${prefix}strawberry text
│ ${tz} ${prefix}box3d text
│ ${tz} ${prefix}roadwarning text
│ ${tz} ${prefix}breakwall text
│ ${tz} ${prefix}icecold text
│ ${tz} ${prefix}luxury text
│ ${tz} ${prefix}cloud text
│ ${tz} ${prefix}summersand text
│ ${tz} ${prefix}horrorblood text
│ ${tz} ${prefix}thunder text
│ ${tz} ${prefix}pornhub text1 text2
│ ${tz} ${prefix}glitch text1 text2
│ ${tz} ${prefix}avenger text1 text2
│ ${tz} ${prefix}space text1 text2
│ ${tz} ${prefix}ninjalogo text1 text2
│ ${tz} ${prefix}marvelstudio text1 text2
│ ${tz} ${prefix}lionlogo text1 text2
│ ${tz} ${prefix}wolflogo text1 text2
│ ${tz} ${prefix}steel3d text1 text2
│ ${tz} ${prefix}wallgravity text1 text2
╰──
${thisFooter}`  
nayla.sendMessage(from, MMenu, image, { quoted: nay, caption: TxtProm })                                                   
break 
case 'photooxy':           
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
MMenu = await getBuffer(`${mainBlob}`)        
TxtOxy =`
${thisHeader}

${thisHeader2}

╭──❲ Maker Menu Sub ─
│ PhotoOxy <sub menu>
╰──
${iniReadmore}
╭──❲ Photo Oxy Menu ─
│ ${tz} ${prefix}shadow <text>
│ ${tz} ${prefix}cup <text>
│ ${tz} ${prefix}cup1 <text>
│ ${tz} ${prefix}romance <text>
│ ${tz} ${prefix}smoke <text>
│ ${tz} ${prefix}burnpaper <text>
│ ${tz} ${prefix}lovemessage <text>
│ ${tz} ${prefix}undergrass <text>
│ ${tz} ${prefix}love <text>
│ ${tz} ${prefix}coffe <text>
│ ${tz} ${prefix}woodheart <text>
│ ${tz} ${prefix}woodenboard <text>
│ ${tz} ${prefix}summer3d <text>
│ ${tz} ${prefix}wolfmetal <text>
│ ${tz} ${prefix}nature3d <text>
│ ${tz} ${prefix}underwater <text>
│ ${tz} ${prefix}golderrose <text>
│ ${tz} ${prefix}summernature <text>
│ ${tz} ${prefix}letterleaves <text>
│ ${tz} ${prefix}glowingneon <text>
│ ${tz} ${prefix}fallleaves <text>
│ ${tz} ${prefix}flamming <text>
│ ${tz} ${prefix}harrypotter <text>
│ ${tz} ${prefix}carvedwood <text>
│ ${tz} ${prefix}tiktok <text1 text2>
│ ${tz} ${prefix}arcade8bit <text1 text2>
│ ${tz} ${prefix}battlefield4 <text1 text2>
│ ${tz} ${prefix}pubg <text1 text2>
╰──
${thisFooter}`  
nayla.sendMessage(from, MMenu, image, { quoted: nay, caption: TxtOxy })                                                   
break 
case 'ephoto360':           
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
MMenu = await getBuffer(`${mainBlob}`)        
TxtEphoto =`
${thisHeader}

${thisHeader2}

╭──❲ Maker Menu Sub ─
│ Ephoto360 <sub menu>
╰──
${iniReadmore}
╭──❲ Photo Oxy Menu ─
│ ${tz} ${prefix}wetglass <text>
│ ${tz} ${prefix}multicolor3d <text>
│ ${tz} ${prefix}watercolor <text>
│ ${tz} ${prefix}luxurygold <text>
│ ${tz} ${prefix}galaxywallpaper <text>
│ ${tz} ${prefix}lighttext <text>
│ ${tz} ${prefix}beautifulflower <text>
│ ${tz} ${prefix}puppycute <text>
│ ${tz} ${prefix}royaltext <text>
│ ${tz} ${prefix}heartshaped <text>
│ ${tz} ${prefix}birthdaycake <text>
│ ${tz} ${prefix}galaxystyle <text>
│ ${tz} ${prefix}hologram3d <text>
│ ${tz} ${prefix}greenneon <text>
│ ${tz} ${prefix}glossychrome <text>
│ ${tz} ${prefix}greenbush <text>
│ ${tz} ${prefix}metallogo <text>
│ ${tz} ${prefix}noeltext <text>
│ ${tz} ${prefix}glittergold <text>
│ ${tz} ${prefix}textcake <text>
│ ${tz} ${prefix}starsnight <text>
│ ${tz} ${prefix}wooden3d <text>
│ ${tz} ${prefix}textbyname <text>
│ ${tz} ${prefix}writegalacy <text>
│ ${tz} ${prefix}galaxybat <text>
│ ${tz} ${prefix}snow3d <text>
│ ${tz} ${prefix}birthdayday <text>
│ ${tz} ${prefix}goldplaybutton <text>
│ ${tz} ${prefix}silverplaybutton <text>
│ ${tz} ${prefix}freefire <text>
╰──
${thisFooter}`  
nayla.sendMessage(from, MMenu, image, { quoted: nay, caption: TxtEphoto })                                                   
break 
				//7	
case 'funtextmenu':           
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)   
await reply(`${queryWait}`)
FMenu = await getBuffer(`${mainBlob}`)          
FtextMenu =`
${thisHeader}

${thisHeader2}

╭──❲ FunText Menu
│ ${tz} ${prefix}cerpen
│ ${tz} ${prefix}ceritahoror
│ ${tz} ${prefix}wancak
│ ${tz} ${prefix}quotes
│ ${tz} ${prefix}quotesanime
│ ${tz} ${prefix}quotesdilan
│ ${tz} ${prefix}quotesimage
│ ${tz} ${prefix}faktaunik
│ ${tz} ${prefix}katabijak
│ ${tz} ${prefix}bucin
│ ${tz} ${prefix}pantun
│ ${tz} ${prefix}randomnama
╰──
${thisFooter}`  
nayla.sendMessage(from, FMenu, image, { quoted: nay, caption: FtextMenu })                                                  
break
				//8	
case 'randommenu':           
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
RandomM = await getBuffer(`${mainBlob}`)        
randomMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Random Features
│ ${tz} ${prefix}tebakgambar
│ ${tz} ${prefix}sambungkata
│ ${tz} ${prefix}truth
│ ${tz} ${prefix}dare
│ ${tz} ${prefix}stickerwa
│ ${tz} ${prefix}spamsms
│ ${tz} ${prefix}asupan
│ ${tz} ${prefix}weton
│ ${tz} ${prefix}otakudesu
│ ${tz} ${prefix}otakudesu-cari
│ ${tz} ${prefix}cari-anime
│ ${tz} ${prefix}pixiv
│ ${tz} ${prefix}pixivdl
│ ${tz} ${prefix}wait
│ ${tz} ${prefix}wikipedia
│ ${tz} ${prefix}translate
│ ${tz} ${prefix}brainly
│ ${tz} ${prefix}waifuu
│ ${tz} ${prefix}art
│ ${tz} ${prefix}genshin
│ ${tz} ${prefix}elf
│ ${tz} ${prefix}loli
│ ${tz} ${prefix}neko
│ ${tz} ${prefix}shota
│ ${tz} ${prefix}husbu
│ ${tz} ${prefix}sagiri
│ ${tz} ${prefix}shinobu
│ ${tz} ${prefix}megumin
│ ${tz} ${prefix}wallnime
│ ${tz} ${prefix}covidindo
│ ${tz} ${prefix}covidglobal
╰──
${thisFooter}` 
nayla.sendMessage(from, RandomM, image, { quoted: nay, caption: randomMenu })                                                   
break
			//has already own property		    
case 'tagmenu':                      
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`) 
await reply(`${queryWait}`)
TMenu = await getBuffer(`${mainBlob}`)                           
TagMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Tag Menu
│ ${tz} ${prefix}comly
│ ${tz} ${prefix}ngegay
│ ${tz} ${prefix}nyilit
│ ${tz} ${prefix}ganteng
│ ${tz} ${prefix}cantik
│ ${tz} ${prefix}jelek
│ ${tz} ${prefix}goblok
│ ${tz} ${prefix}bego
│ ${tz} ${prefix}pinter
│ ${tz} ${prefix}jago
│ ${tz} ${prefix}babi
│ ${tz} ${prefix}beban
│ ${tz} ${prefix}baik
│ ${tz} ${prefix}jahat
│ ${tz} ${prefix}anjing
│ ${tz} ${prefix}monyet
│ ${tz} ${prefix}haram
│ ${tz} ${prefix}kontol
│ ${tz} ${prefix}pakboy
│ ${tz} ${prefix}pakgirl
│ ${tz} ${prefix}sadboy
│ ${tz} ${prefix}sadgirl
│ ${tz} ${prefix}wibu
│ ${tz} ${prefix}nolep
│ ${tz} ${prefix}hebat
╰──❲ ${NameBot}`   
nayla.sendMessage(from, TMenu, image, { quoted: nay, caption: TagMenu })                 
break
case 'cekmenu':                      
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`) 
CMenu = await getBuffer(`${mainBlob}`)                              
CekMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Cek Menu
│ ${tz} ${prefix}badutcek
│ ${tz} ${prefix}ampascek
│ ${tz} ${prefix}hokicek
│ ${tz} ${prefix}pedocek
│ ${tz} ${prefix}silitcek
│ ${tz} ${prefix}gaycek
│ ${tz} ${prefix}hodecek
│ ${tz} ${prefix}gantengcek
│ ${tz} ${prefix}cantikcek
│ ${tz} ${prefix}jelekcek
│ ${tz} ${prefix}goblokcek
│ ${tz} ${prefix}begocek
│ ${tz} ${prefix}pintercek
│ ${tz} ${prefix}jagocek
│ ${tz} ${prefix}nolepcek
│ ${tz} ${prefix}babicek
│ ${tz} ${prefix}bebancek
│ ${tz} ${prefix}baikcek
│ ${tz} ${prefix}jahatcek
│ ${tz} ${prefix}anjingcek
│ ${tz} ${prefix}haramcek
│ ${tz} ${prefix}kontolcek
│ ${tz} ${prefix}pakboycek
│ ${tz} ${prefix}pakgirlcek
│ ${tz} ${prefix}sangecek
│ ${tz} ${prefix}bapercek
╰──❲ ${NameBot}`  
nayla.sendMessage(from, CMenu, image, { quoted: nay, caption: CekMenu }) 
break
case 'internalmenu':                      
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)   
await reply(`${queryWait}`)				
internalMenu = await getBuffer(`${mainBlob}`)                                 
intMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Internal Menu
│ ${tz} ${prefix}readmore
│ ${tz} ${prefix}chatlist
│ ${tz} ${prefix}addsticker
│ ${tz} ${prefix}addvn
│ ${tz} ${prefix}getvn
│ ${tz} ${prefix}getsticker
│ ${tz} ${prefix}liststicker
│ ${tz} ${prefix}listvn
│ ${tz} ${prefix}addimage
│ ${tz} ${prefix}getimage
│ ${tz} ${prefix}imagelist
│ ${tz} ${prefix}addvideo
│ ${tz} ${prefix}getvideo
│ ${tz} ${prefix}listvideo
╰──❲ ${NameBot}`  
nayla.sendMessage(from, internalMenu, image, { quoted: nay, caption: intMenu })      
break 
case 'grupmenu':                      
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`) 
await reply(`${queryWait}`)                             
GMenu = await getBuffer(`${mainBlob}`)  
grupMenu =`
${thisHeader}

${thisHeader2}

╭──❲ Grup Menu 
│ ${tz} ${prefix}claim | Ambil limitmu
│ ${tz} ${prefix}limitcek | Cek limitmu
│ ${tz} ${prefix}rate | Argumen <...>
│ ${tz} ${prefix}truth | Ceritakan kebenaranmu
│ ${tz} ${prefix}dare | Tantangan Kamu
│ ${tz} ${prefix}persengay | How gay is you?
│ ${tz} ${prefix}pbucin | How bucin is you?
│ ${tz} ${prefix}kapankah | Kerang Ajaib "when"
│ ${tz} ${prefix}apakah | Kerang Ajaib "what"
│ ${tz} ${prefix}jadian | Member x Member
│ ${tz} ${prefix}add | Menambahkan Anggota Grup
│ ${tz} ${prefix}kick | Mengeluarkan Anggota Grup
│ ${tz} ${prefix}promote <tag @mem> | Jadikan Member Admin
│ ${tz} ${prefix}demote <tag @mem> | Jadikan Member bukan Admin
│ ${tz} ${prefix}welcome <1/0> | Announce Member
│ ${tz} ${prefix}hidetag | Pesan tag tersembunyi
│ ${tz} ${prefix}group <open/close> | Grup
│ ${tz} ${prefix}profile | Cek Profil Kamu
│ ${tz} ${prefix}linkgc | Share Link Grup
│ ${tz} ${prefix}tagall | Tag semua Member
│ ${tz} ${prefix}delete | Hapus pesan yang dipilih
│ ${tz} ${prefix}leave | Leave Grup <owner>
│ ${tz} ${prefix}setname | Ganti nama Grup
│ ${tz} ${prefix}setdesc | Ganti deskripsi Grup
│ ${tz} ${prefix}adminlist | Daftar admin Grup
╰──❲ ${NameBot}`					 
nayla.sendMessage(from, GMenu, image, { quoted: nay, caption: grupMenu }) 
break  
case 'ownermenu':       
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
OMenu = await getBuffer(`${mainBlob}`)               
OwnMenu =`
${thisHeader}

╭──❲ Owner Menu
│*FYI: hanya khusus utk Owner Bot!	
│ ${tz} ${prefix}setlimit <nom> (set for /user)
│ ${tz} ${prefix}ban (group)
│ ${tz} ${prefix}unban (group)
│ ${tz} ${prefix}banlist (group)
│ ${tz} ${prefix}ban_user (global)
│ ${tz} ${prefix}unban_user (global)
│ ${tz} ${prefix}banlistuser (global)
│ ${tz} ${prefix}setmemlimit (group join)
│ ${tz} ${prefix}setppbot (set profile picture bot)
│ ${tz} ${prefix}dellprem 
│ ${tz} ${prefix}addprem
│ ${tz} ${prefix}clearall
│ ${tz} ${prefix}bc
│ ${tz} ${prefix}owner
│ ${tz} ${prefix}author
│ ${tz} ${prefix}bugtroli
│ ${tz} ${prefix}setout
│ ${tz} ${prefix}setwelcome
│ ${tz} ${prefix}setdonate
│ ${tz} ${prefix}settz
│ ${tz} ${prefix}setthum
│ ${tz} ${prefix}setpp
│ ${tz} ${prefix}setprefix
│ ${tz} ${prefix}setreply
│ ${tz} ${prefix}setplugin-leveling
╰──❲ ${NameBot}` 
nayla.sendMessage(from, OMenu, image, { quoted: nay, caption: OwnMenu })                                                     
break
case 'togglemenu':       
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
Togg = await getBuffer(`${mainBlob}`)               
ToggMenu =`
${thisHeader}

╭──❲ Toggle Menu
│ *Toggle On/Off Fitur Bot khusus untuk di Grup!*
│ *Perintah ==> 1 = Fitur On, 0 = Fitur Off*
│
│ *jika ingin mengaktifkan fitur ${prefix}claim ,..
│  aktifkan kedua perintah ${prefix}leveling dan ${prefix}setplugin-leveling
│
│ *contoh ${prefix}setwelcome 1 | <1 mengaktifkan, 0 untuk mematikan>*
│ *note: tanda < > hanya untuk pemisah, jangan dimasukan ke perintah*
╰─

╭──❲ Command
│ ${tz} ${prefix}leveling <enable/disable> | Event leveling
│ ${tz} ${prefix}setplugin-leveling <1/0> | User XP Member Grup
│ ${tz} ${prefix}setwelcome <1/0> | Pengumuman Ketika Member Masuk
│ ${tz} ${prefix}setout <1/0> | Pengumuman Ketika Member Keluar
│ ${tz} ${prefix}setnsfw <on/off> | Hidupkan/Nyalakan Fitur NSFW(18+) di Grup
╰──❲ ${NameBot}` 
nayla.sendMessage(from, Togg, image, { quoted: nay, caption: ToggMenu })                                                     
break
case 'imagemenu':       
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)  
await reply(`${queryWait}`)
Togg = await getBuffer(`${mainBlob}`)               
RanImage =`
${thisHeader}

${thisHeader2}

*Sub-Menu dari NSFW Menu*
*18+ Menu*

Selengkapnya:
${iniReadmore}

╭──❲ Random Image
│ ${tz} ${prefix}art
│ ${tz} ${prefix}bts
│ ${tz} ${prefix}exo
│ ${tz} ${prefix}elf
│ ${tz} ${prefix}loli
│ ${tz} ${prefix}neko
│ ${tz} ${prefix}waifu
│ ${tz} ${prefix}shota
│ ${tz} ${prefix}husbu
│ ${tz} ${prefix}sagiri
│ ${tz} ${prefix}shinobu
│ ${tz} ${prefix}megumin
│ ${tz} ${prefix}wallnime
│ ${tz} ${prefix}chiisaihentai
│ ${tz} ${prefix}trap
│ ${tz} ${prefix}blowjob
│ ${tz} ${prefix}yaoi
│ ${tz} ${prefix}ecchi
│ ${tz} ${prefix}hentai
│ ${tz} ${prefix}ahegao
│ ${tz} ${prefix}hololewd
│ ${tz} ${prefix}sideoppai
│ ${tz} ${prefix}animefeets
│ ${tz} ${prefix}animebooty
│ ${tz} ${prefix}animethighss
│ ${tz} ${prefix}hentaiparadise
│ ${tz} ${prefix}animearmpits
│ ${tz} ${prefix}hentaifemdom
│ ${tz} ${prefix}lewdanimegirls
│ ${tz} ${prefix}biganimetiddies
│ ${tz} ${prefix}animebellybutton
│ ${tz} ${prefix}hentai4everyone
│ ${tz} ${prefix}bj
│ ${tz} ${prefix}ero
│ ${tz} ${prefix}cum
│ ${tz} ${prefix}feet
│ ${tz} ${prefix}yuri
│ ${tz} ${prefix}trap
│ ${tz} ${prefix}lewd
│ ${tz} ${prefix}feed
│ ${tz} ${prefix}eron
│ ${tz} ${prefix}solo
│ ${tz} ${prefix}gasm
│ ${tz} ${prefix}poke
│ ${tz} ${prefix}anal
│ ${tz} ${prefix}holo
│ ${tz} ${prefix}tits
│ ${tz} ${prefix}kuni
│ ${tz} ${prefix}kiss
│ ${tz} ${prefix}erok
│ ${tz} ${prefix}smug
│ ${tz} ${prefix}baka
│ ${tz} ${prefix}solog
│ ${tz} ${prefix}feetg
│ ${tz} ${prefix}lewdk
│ ${tz} ${prefix}waifu
│ ${tz} ${prefix}pussy
│ ${tz} ${prefix}femdom
│ ${tz} ${prefix}cuddle
│ ${tz} ${prefix}hentai
│ ${tz} ${prefix}eroyuri
│ ${tz} ${prefix}cum_jpg
│ ${tz} ${prefix}blowjob
│ ${tz} ${prefix}erofeet
│ ${tz} ${prefix}holoero
│ ${tz} ${prefix}classic
│ ${tz} ${prefix}erokemo
│ ${tz} ${prefix}fox_girl
│ ${tz} ${prefix}futanari
│ ${tz} ${prefix}lewdkemo
│ ${tz} ${prefix}wallpaper
│ ${tz} ${prefix}pussy_jpg
│ ${tz} ${prefix}kemonomimi
│ ${tz} ${prefix}nsfw_avatar
│ ${tz} ${prefix}ngif
│ ${tz} ${prefix}nsfw_neko_gif
│ ${tz} ${prefix}random_hentai_gif
╰──
${thisFooter}`
nayla.sendMessage(from, Togg, image, { quoted: nay, caption: RanImage })                                                     
break
case 'allmenu':
case 'allfeature':
case 'all':
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)   
await reply(`${queryWait}`)
reply(`Rertrieving database\nRecolection, please wait....`)    
AllMenuX = await getBuffer(`${mainBlob}`)   
semuaMenu =`
${thisHeader}

${whoDonate}

${thisHeader2}

_╭──❲ Exclusive Menu
│ ${tz} ${prefix}mediamenu <music, video, etc>
│ ${tz} ${prefix}funtextmenu <text
│ ${tz} ${prefix}makermenu <creator>
│ ${tz} ${prefix}nsfwmenu <setelah buka puasa>
│ ${tz} ${prefix}islami <ramadhan specials>
│ ${tz} ${prefix}toolsmenu <untuk kebutuhanmu>
╰──

╭──❲ More Menu
│ ${tz} ${prefix}grupmenu <grup only>
│ ${tz} ${prefix}tagmenu <tag member random>
│ ${tz} ${prefix}cekmenu <how is yours?>
│ ${tz} ${prefix}togglemenu <on/off fitur>
│ ${tz} ${prefix}mygrub <list grub bot>
╰──

╭──❲ Sub Menu
│ ${tz} ${prefix}internalmenu <hosting files>
│ ${tz} ${prefix}ownermenu <owner only>
│ ${tz} ${prefix}donasi <traktir owner kopi :v>
│ ${tz} ${prefix}info <info tentang Bot>
│ ${tz} ${prefix}rules <rules Bot>
│ ${tz} ${prefix}help <bantuan/cara pakai Bot>
╰──

Buka Semua Menu Disini:_
${iniReadmore}

╭──❲ Internal Menu
│ ${tz} ${prefix}readmore
│ ${tz} ${prefix}chatlist
│ ${tz} ${prefix}addsticker
│ ${tz} ${prefix}addvn
│ ${tz} ${prefix}getvn
│ ${tz} ${prefix}getsticker
│ ${tz} ${prefix}liststicker
│ ${tz} ${prefix}listvn
│ ${tz} ${prefix}addimage
│ ${tz} ${prefix}getimage
│ ${tz} ${prefix}imagelist
│ ${tz} ${prefix}addvideo
│ ${tz} ${prefix}getvideo
│ ${tz} ${prefix}listvideo
╰──

╭──❲ Grup Menu 
│ ${tz} ${prefix}kapankah
│ ${tz} ${prefix}apakah
│ ${tz} ${prefix}jadian
│ ${tz} ${prefix}otakudesu
│ ${tz} ${prefix}add
│ ${tz} ${prefix}kick
│ ${tz} ${prefix}promote
│ ${tz} ${prefix}demote
│ ${tz} ${prefix}antilink
│ ${tz} ${prefix}welcome
│ ${tz} ${prefix}hidetag10
│ ${tz} ${prefix}level
│ ${tz} ${prefix}limit
│ ${tz} ${prefix}leveling
│ ${tz} ${prefix}linkgc
│ ${tz} ${prefix}tagall
│ ${tz} ${prefix}delete
╰──

╭──❲ Tag Menu
│ ${tz} ${prefix}comly
│ ${tz} ${prefix}ngegay
│ ${tz} ${prefix}nyilit
│ ${tz} ${prefix}ganteng
│ ${tz} ${prefix}cantik
│ ${tz} ${prefix}jelek
│ ${tz} ${prefix}goblok
│ ${tz} ${prefix}bego
│ ${tz} ${prefix}pinter
│ ${tz} ${prefix}jago
│ ${tz} ${prefix}babi
│ ${tz} ${prefix}beban
│ ${tz} ${prefix}baik
│ ${tz} ${prefix}jahat
│ ${tz} ${prefix}anjing
│ ${tz} ${prefix}monyet
│ ${tz} ${prefix}haram
│ ${tz} ${prefix}kontol
│ ${tz} ${prefix}pakboy
│ ${tz} ${prefix}pakgirl
│ ${tz} ${prefix}sadboy
│ ${tz} ${prefix}sadgirl
│ ${tz} ${prefix}wibu
│ ${tz} ${prefix}nolep
│ ${tz} ${prefix}hebat
╰──

╭──❲ Cek Menu
│ ${tz} ${prefix}badutcek
│ ${tz} ${prefix}ampascek
│ ${tz} ${prefix}hokicek
│ ${tz} ${prefix}pedocek
│ ${tz} ${prefix}silitcek
│ ${tz} ${prefix}gaycek
│ ${tz} ${prefix}hodecek
│ ${tz} ${prefix}gantengcek
│ ${tz} ${prefix}cantikcek
│ ${tz} ${prefix}jelekcek
│ ${tz} ${prefix}goblokcek
│ ${tz} ${prefix}begocek
│ ${tz} ${prefix}pintercek
│ ${tz} ${prefix}jagocek
│ ${tz} ${prefix}nolepcek
│ ${tz} ${prefix}babicek
│ ${tz} ${prefix}bebancek
│ ${tz} ${prefix}baikcek
│ ${tz} ${prefix}jahatcek
│ ${tz} ${prefix}anjingcek
│ ${tz} ${prefix}haramcek
│ ${tz} ${prefix}kontolcek
│ ${tz} ${prefix}pakboycek
│ ${tz} ${prefix}pakgirlcek
│ ${tz} ${prefix}sangecek
│ ${tz} ${prefix}bapercek
╰──

╭──❲ Islamic Menu
│ ${tz} ${prefix}listsurah
│ ${tz} ${prefix}alquran
│ ${tz} ${prefix}alquranaudio
│ ${tz} ${prefix}asmaulhusna
│ ${tz} ${prefix}kisahnabi
│ ${tz} ${prefix}jadwalsholat
╰──

╭──❲ Primbon Menu─
│ ${tz} ${prefix}artinama
│ ${tz} ${prefix}jodoh
│ ${tz} ${prefix}weton
│ ${tz} ${prefix}jadianx
│ ${tz} ${prefix}tebakumur
╰──

╭──❲ Tools Menu
│ ${tz} ${prefix}wikipedia
│ ${tz} ${prefix}translate
│ ${tz} ${prefix}brainly
│ ${tz} ${prefix}kbbi
│ ${tz} ${prefix}hoax
│ ${tz} ${prefix}jarak
│ ${tz} ${prefix}translate
│ ${tz} ${prefix}urbandictionary
│ ${tz} ${prefix}jadwaltv
│ ${tz} ${prefix}jadwaltvnow
│ ${tz} ${prefix}newsinfo
│ ${tz} ${prefix}cnnindonesia
│ ${tz} ${prefix}cnnnasional
│ ${tz} ${prefix}cnninternasional
│ ${tz} ${prefix}infogempa
│ ${tz} ${prefix}google
│ ${tz} ${prefix}shortlink
╰──

╭──❲ Media Menu
│ ${tz} ${prefix}lk21
│ ${tz} ${prefix}drakorongoing			
│ ${tz} ${prefix}ytplay <prem>
│ ${tz} ${prefix}ytsearch
│ ${tz} ${prefix}ytmp3 <prem>
│ ${tz} ${prefix}ytmp4 <prem>
│ ${tz} ${prefix}telesticker <prem>
│ ${tz} ${prefix}tiktoknowm <prem>
│ ${tz} ${prefix}tiktokmusic <prem>
│ ${tz} ${prefix}spotify <prem>
│ ${tz} ${prefix}spotifysearch
│ ${tz} ${prefix}jooxplay <prem>
│ ${tz} ${prefix}igdl <prem>
│ ${tz} ${prefix}igdl2 <prem>
│ ${tz} ${prefix}twtdl <prem>
│ ${tz} ${prefix}fbdl <prem>
│ ${tz} ${prefix}zippyshare
│ ${tz} ${prefix}pinterest
│ ${tz} ${prefix}pinterest2
│ ${tz} ${prefix}pinterestdl
╰──

╭──❲ Maker Menu ─
│ ${tz} ${prefix}textprome <sub menu>
│ ${tz} ${prefix}photooxy <sub menu>
│ ${tz} ${prefix}ephoto360 <sub menu>
╰──

Buka Semua Maker Menu
${iniReadmore}
╭──❲ All Maker Menu ─
│ ${tz} ${prefix}ttp
│ ${tz} ${prefix}ttp2
│ ${tz} ${prefix}ttp3
│ ${tz} ${prefix}ttp4
│ ${tz} ${prefix}attp
│ ${tz} ${prefix}attpz
│
├──「 Text Pro Me 」
│
│ ${tz} ${prefix}blackpink text
│ ${tz} ${prefix}neon text
│ ${tz} ${prefix}greenneon text
│ ${tz} ${prefix}advanceglow text
│ ${tz} ${prefix}futureneon text
│ ${tz} ${prefix}sandwriting text
│ ${tz} ${prefix}sandsummer text
│ ${tz} ${prefix}sandengraved text
│ ${tz} ${prefix}metaldark text
│ ${tz} ${prefix}neonlight text
│ ${tz} ${prefix}holographic text
│ ${tz} ${prefix}text1917 text
│ ${tz} ${prefix}minion text
│ ${tz} ${prefix}deluxesilver text
│ ${tz} ${prefix}newyearcard text
│ ${tz} ${prefix}bloodfrosted text
│ ${tz} ${prefix}halloween text
│ ${tz} ${prefix}jokerlogo text
│ ${tz} ${prefix}fireworksparkle text
│ ${tz} ${prefix}natureleaves text
│ ${tz} ${prefix}bokeh text
│ ${tz} ${prefix}toxic text
│ ${tz} ${prefix}strawberry text
│ ${tz} ${prefix}box3d text
│ ${tz} ${prefix}roadwarning text
│ ${tz} ${prefix}breakwall text
│ ${tz} ${prefix}icecold text
│ ${tz} ${prefix}luxury text
│ ${tz} ${prefix}cloud text
│ ${tz} ${prefix}summersand text
│ ${tz} ${prefix}horrorblood text
│ ${tz} ${prefix}thunder text
│ ${tz} ${prefix}pornhub text1 text2
│ ${tz} ${prefix}glitch text1 text2
│ ${tz} ${prefix}avenger text1 text2
│ ${tz} ${prefix}space text1 text2
│ ${tz} ${prefix}ninjalogo text1 text2
│ ${tz} ${prefix}marvelstudio text1 text2
│ ${tz} ${prefix}lionlogo text1 text2
│ ${tz} ${prefix}wolflogo text1 text2
│ ${tz} ${prefix}steel3d text1 text2
│ ${tz} ${prefix}wallgravity text1 text2
│
├──「 Photo Oxy 」
│
│ ${tz} ${prefix}shadow text
│ ${tz} ${prefix}cup text
│ ${tz} ${prefix}cup1 text
│ ${tz} ${prefix}romance text
│ ${tz} ${prefix}smoke text
│ ${tz} ${prefix}burnpaper text
│ ${tz} ${prefix}lovemessage text
│ ${tz} ${prefix}undergrass text
│ ${tz} ${prefix}love text
│ ${tz} ${prefix}coffe text
│ ${tz} ${prefix}woodheart text
│ ${tz} ${prefix}woodenboard text
│ ${tz} ${prefix}summer3d text
│ ${tz} ${prefix}wolfmetal text
│ ${tz} ${prefix}nature3d text
│ ${tz} ${prefix}underwater text
│ ${tz} ${prefix}golderrose text
│ ${tz} ${prefix}summernature text
│ ${tz} ${prefix}letterleaves text
│ ${tz} ${prefix}glowingneon text
│ ${tz} ${prefix}fallleaves text
│ ${tz} ${prefix}flamming text
│ ${tz} ${prefix}harrypotter text
│ ${tz} ${prefix}carvedwood text
│ ${tz} ${prefix}tiktok text1 text2
│ ${tz} ${prefix}arcade8bit text1 text2
│ ${tz} ${prefix}battlefield4 text1 text2
│ ${tz} ${prefix}pubg text1 text2
│
├──「 Ephoto 360 」
│
│ ${tz} ${prefix}wetglass text
│ ${tz} ${prefix}multicolor3d text
│ ${tz} ${prefix}watercolor text
│ ${tz} ${prefix}luxurygold text
│ ${tz} ${prefix}galaxywallpaper text
│ ${tz} ${prefix}lighttext text
│ ${tz} ${prefix}beautifulflower text
│ ${tz} ${prefix}puppycute text
│ ${tz} ${prefix}royaltext text
│ ${tz} ${prefix}heartshaped text
│ ${tz} ${prefix}birthdaycake text
│ ${tz} ${prefix}galaxystyle text
│ ${tz} ${prefix}hologram3d text
│ ${tz} ${prefix}greenneon text
│ ${tz} ${prefix}glossychrome text
│ ${tz} ${prefix}greenbush text
│ ${tz} ${prefix}metallogo text
│ ${tz} ${prefix}noeltext text
│ ${tz} ${prefix}glittergold text
│ ${tz} ${prefix}textcake text
│ ${tz} ${prefix}starsnight text
│ ${tz} ${prefix}wooden3d text
│ ${tz} ${prefix}textbyname text
│ ${tz} ${prefix}writegalacy text
│ ${tz} ${prefix}galaxybat text
│ ${tz} ${prefix}snow3d text
│ ${tz} ${prefix}birthdayday text
│ ${tz} ${prefix}goldplaybutton text
│ ${tz} ${prefix}silverplaybutton text
│ ${tz} ${prefix}freefire text
╰──

╭──❲ FunText Menu
│ ${tz} ${prefix}cerpen
│ ${tz} ${prefix}ceritahoror
│ ${tz} ${prefix}wancak
│ ${tz} ${prefix}quotes
│ ${tz} ${prefix}quotesanime
│ ${tz} ${prefix}quotesdilan
│ ${tz} ${prefix}quotesimage
│ ${tz} ${prefix}faktaunik
│ ${tz} ${prefix}katabijak
│ ${tz} ${prefix}bucin
│ ${tz} ${prefix}pantun
│ ${tz} ${prefix}randomnama
╰──

╭──❲ Random Features
│ ${tz} ${prefix}stickerwa
│ ${tz} ${prefix}spamsms
│ ${tz} ${prefix}asupan
│ ${tz} ${prefix}weton
│ ${tz} ${prefix}otakudesu
│ ${tz} ${prefix}otakudesu-cari
│ ${tz} ${prefix}cari-anime
│ ${tz} ${prefix}pixiv
│ ${tz} ${prefix}pixivdl
│ ${tz} ${prefix}wait
│ ${tz} ${prefix}wikipedia
│ ${tz} ${prefix}translate
│ ${tz} ${prefix}brainly
│ ${tz} ${prefix}waifuu
│ ${tz} ${prefix}art
│ ${tz} ${prefix}genshin
│ ${tz} ${prefix}elf
│ ${tz} ${prefix}loli
│ ${tz} ${prefix}neko
│ ${tz} ${prefix}shota
│ ${tz} ${prefix}husbu
│ ${tz} ${prefix}sagiri
│ ${tz} ${prefix}shinobu
│ ${tz} ${prefix}megumin
│ ${tz} ${prefix}wallnime
│ ${tz} ${prefix}covidindo
│ ${tz} ${prefix}covidglobal
╰──
${thisFooter}`
nayla.sendMessage(from, AllMenuX, image, { quoted: nay1, caption: semuaMenu })   
                    break
		//make new session
	case 'leave':
		if (!isGroup) return reply('GRUB ONLY')
		if (!isOwner) return reply(`Hanya dapat dilakukan Oleh Owner!`)
		anu = await nayla.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	break
	case 'setname':
		if (!isGroup) return reply('GRUB ONLY')
		if (!isGroupAdmins) return reply('KAMU ADMIN??')
		if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
		nayla.groupUpdateSubject(from, `${body.slice(9)}`)
		nayla.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, {quoted: nay})
	break
	case 'setdesc':
		if (!isGroup) return reply('GRUB ONLY')
		if (!isGroupAdmins) return reply('KAMU ADMIN??')
		if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
		nayla.groupUpdateDescription(from, `${body.slice(9)}`)
		nayla.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {quoted: nay})
	break

	case 'adminlist':
		if (!isGroup) return reply('GRUB ONLY')		
			teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
			no = 0
			for (let admon of groupAdmins) {
				no += 1
				teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
			}
			mentions(teks, groupAdmins, true)
			break	

case 'rate':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)	
	rate = body.slice(1)
	ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
	const te = ratee[Math.floor(Math.random() * ratee.length)]
	nayla.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'', text, { quoted: nay })
break
case 'truth':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return
	await limitAdd(sender)
	anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
	ttrth = `${anu.Dare}`
	truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	nayla.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: nay }) 
break 
	case 'dare':
		if (!isElite) return reply(`${notRegistered}`)
		if (isBanned) return reply(`${memberBanned}`)
		if (isBannedUser) return reply(`${memberBanned}`)
		if (isLimit(sender)) return
		await limitAdd(sender)
	anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
	der = `${anu.Dare}`
	tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	nayla.sendMessage(from, tod, image, { quoted: nay, caption: '*Dare*\n\n'+ der })
break 

case 'sambungkata':
	if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
	if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
	ini_txt = args.join(" ")
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${l0lhuman}&text=${ini_txt}`)
	get_result = get_result.result
	await nayla.sendMessage(from, get_result, text, { quoted: nay }).then(() => {
		sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
		fs.writeFileSync("./nayla/sambungkata.json", JSON.stringify(sambungkata))
	})
	break
case 'cancelsambungkata':
	if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
	delete sambungkata[sender.split('@')[0]]
	fs.writeFileSync("./nayla/sambungkata.json", JSON.stringify(sambungkata))
	reply("Success mengcancel sambung kata sebelumnya")
	break
case 'tebakgambar': // case by piyo-chan
	if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${l0lhuman}`)
	get_result = get_result.result
	ini_image = get_result.image
	jawaban = get_result.answer
	ini_buffer = await getBuffer(ini_image)
	await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
		tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
		fs.writeFileSync("./nayla/tebakgambar.json", JSON.stringify(tebakgambar))
	})
	await sleep(30000)
	if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
		reply("Jawaban: " + jawaban)
		delete tebakgambar[sender.split('@')[0]]
		fs.writeFileSync("./nayla/tebakgambar.json", JSON.stringify(tebakgambar))
	}
	break
case 'canceltebakgambar':
	if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
	delete tebakgambar[sender.split('@')[0]]
	fs.writeFileSync("./nayla/tebakgambar.json", JSON.stringify(tebakgambar))
	reply("Success mengcancel tebak gambar sebelumnya")
	break

	case 'pasangan':
		try {
		if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (isLimit(sender)) return reply(limitend(pushname2))
			pa = `${body.slice(10)}`
			sa = pa.split("/")[0];
			ngan = pa.split("/")[1];
			anu = await fetchFxc7(`https://api.zeks.xyz/api/primbonjodoh?apikey=${ZeksApi}&nama1=${sa}&nama2=${ngan}`, {method: 'get'})
			hasil = `Nama Anda: ${anu.result.nama1}\nNama Pasangan: ${anu.result.nama2}\n\nHal Positif: ${anu.result.positif}\n\nHal Negatif: ${anu.result.negatif}`
			buff = await getBuffer(anu.result.thumb)
			frhan.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
		} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender) 
		break 

		case 'persengay':
		case 'gaypersen':
			if (args.length < 1) return reply('tag temanmu!')
			rate = body.slice(11)
			persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
			const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
			nayla.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: nay })
			await limitAdd(sender) 
			break  

		case 'pbucin':
			if (args.length < 1) return reply('Mana Nama?')
			rate = body.slice(8)
			persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
			const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
			nayla.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: nay })
			await limitAdd(sender) 
			break 
	
					case 'badutcek':                      	  
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)			        	
							jds = []
                    			N = `${pushname} Ke badut'an kamu\n`
                    			N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    		mentions(N, jds, true)
					break
					case 'sepuhcek':                      	  
                    	if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						jds = []
                    			N = `${pushname} Ke sepuh'an kamu\n`
                    			N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    		mentions(N, jds, true)
					break
                    case 'hokicek':                      	  
                    	if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						jds = []
                    			N = `${pushname} Ke hoki'an kamu\n`
                    			N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    		mentions(N, jds, true)
					break					
					case 'ampascek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} Ke ampas'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
					break
					case 'pedocek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} Ke pedo'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
					break
					case 'silitcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} Ke silit'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
					break
					case 'gantengcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} Ke ganteng'an kamu\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
					case 'gaycek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} Jiwa gay kamu yaitu...\n`
                    N += `Sebesar : *${nayla3}${nayla4}%* 😎`
                    mentions(N, jds, true)
                    break 
					case 'hodecek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *HODE'AN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😎`
					mentions(N, jds, true)
                    break 
                    case 'cantikcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *CANTIKAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}% 😁*`
                    mentions(N, jds, true)
                    break
                    case 'jelekcek':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []                    	
                    N = `${pushname} KE *J3L3K4N* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤢`
                    mentions(N, jds, true)
                    break 
                    case 'goblokcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *GOBLOKAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤣`
                    mentions(N, jds, true)
                    break 
                    case 'begocek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *BEGO* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😂`
                    mentions(N, jds, true)
                    break 
                    case 'pintercek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *PINTARAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😗`
                    mentions(N, jds, true)
                    break 
                    case 'jagocek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *JAGOAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 💪`
                    mentions(N, jds, true)
                    break 
                    case 'nolepcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = [] 
                    N = `${pushname} KE *NOLEPAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🧐`
                    mentions(N, jds, true)
                    break 
                    case 'babicek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *BABIAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤪`
                    mentions(N, jds, true)
                    break 
                    case 'bebancek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *BEBANAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🤬`
                    mentions(N, jds, true)
                    break 
                    case 'baikcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *BAIKAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😇`
                    mentions(N, jds, true)
                    break 
                    case 'jahatcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *JAHATAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😈`
                    mentions(N, jds, true)
                    break 
                    case 'anjingcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    mentions(N, jds, true)
                    break                      
                    case 'haramcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *HARAMAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🥴`
                    mentions(N, jds, true)
                    break  
                    case 'kontolcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *KOMTOLAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 🙂`
                    mentions(N, jds, true)
                    break 
                    case 'pakboycek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} KE *PAKBOYZ* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😏`
                    mentions(N, jds, true)
                    break 
                    case 'pakgirlcek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []	
                    N = `${pushname} KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    mentions(N, jds, true)
                    break             
                    case 'sangecek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} Jiwa sange ${urname} yaitu...\n`
                    N += `Sebesar : *${nayla3}${nayla4}%* 🤤`
                    mentions(N, jds, true)
                    break
                    case 'bapercek':                      	  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					jds = []
                    N = `${pushname} JIWA *BEPERAN* KAMU\n`
                    N += `Adalah : *${nayla3}${nayla4}%* 😘`
                    mentions(N, jds, true)
                    break                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                   case 'darkjokes':  
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (isLimit(sender)) return
await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: nay1})
                   break
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok': case 'gay' : case 'badut': case 'pedo': case 'ampazz':
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': case 'sepuh':  
               	   if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
               	   if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
               	   if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
               	   if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
				   if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n Kyaaaa! selamat ya ${urname} 🤭, Saya selalu mendukungmu!!🥰`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break				
				   case 'kapankah':  
                   if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				   if (args.length < 1) return reply(`${urname} ${pushname} dongo ya?, textnya mana?... Budi pasti ngakak liat ini`)				   
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
		           case 'apakah':  
                   if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				   if (args.length < 1) return reply(`${urname} ${pushname} dongo ya?, textnya mana?... Budi pasti ngakak liat ini`)
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break                                                                                                                                                                                                                                                                                                                            				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/                      	                                                                   
                    case 'toimg':  
                    if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					reply(naylachan)
					try {
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'nihh kak....jgn lupa bilang makasih peko'})
				    fs.unlinkSync(ran)
					})			
					} catch {
						jds = []
						mentions(from, 'Maaf error kak...', jds, true)
					}		
			    	break 
					case 'trysticker':  
                    if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					reply(naylachan)
					try {
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, sticker, {quoted: nay})
				    fs.unlinkSync(ran)
					})			
					} catch {
						jds = []
						mentions(from, 'Maaf error kak...', jds, true)
					}		
			    	break 
                    case 'readmore':  
			    	case 'more':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
			        case 'getsticker':  
		        	case 'gets':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		        	case 'imagelist':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
		           	case 'listvideo':  
	           		case 'videolist':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Owner bot only!`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
					case 'setreply':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`Owner bot only!`)
                    naylachan = body.slice(10)
                    reply(`Change reply To ${naylachan} SUCCESS!`)					 
					break 
					case 'setpp':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`Owner bot only!`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Sukses')
			        break 
			        case 'setthum':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`Owner bot only!`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef1.png', delb)
		            reply('Sukses')
			        break 
					case 'setwelcome':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
			        await limitAdd(sender)
				    if (args.length < 1) return
			        //if (!isOwner) return reply(`Owner bot only!`)
                    welcome1 = body.slice(12)
                    reply(`Change welcome To ${welcome1} SUCCESS!`)					 
					break
					case 'setout':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			       // if (!isOwner) return reply(`Owner bot only!`)
                    welcome2 = body.slice(8)
                    reply(`Change out To ${welcome2} SUCCESS!`)					 
					break  
					case 'settz':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    tz = args[0]
                    reply(`Change tz To ${tz} ${prefix}SUCCESS!`)					 
					break 					  
         	        case 'owner':  
         	        case 'creator':  
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Itu kak, biasakan salam/sapa terlebih dahulu dalam berkomunikasi\nterimakasih..',MessageType.text, { quoted: nay} )				
					break  
					case 'other':  
         	        case 'author':          	       
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vnayla}, MessageType.contact, { quoted: nay1})
                    nayla.sendMessage(from, 'Itu kak, tolong jaga jaga norma, etika dan kesopanan dalam komunikasi ya kak :)',MessageType.text, { quoted: nay} )				
					break    
        // Sticker Creator
		case 'stickerwm':
			if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
			if ((isQuotedImage)) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
				var image_buffer = await nayla.downloadMediaMessage(encmedia);
				var formdata = new FormData()
				formdata.append('package', 'Shoujo chan')
				formdata.append('author', 'Shoujo Bot')
				formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
				axios.post(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${l0lhuman}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
					nayla.sendMessage(from, res.data, sticker)
				})
			} else {
				reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
			}
			break
			case 'sticker':
			case 's':
				try {
				if ((isQuotedVideo || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					var filepath = await nayla.downloadAndSaveMediaMessage(encmedia, getRandom())
					var randomName = getRandom('.webp')
					ffmpeg(`./${filepath}`)
						.input(filepath)
						.on('error', () => {
							fs.unlinkSync(filepath)
							reply('Terjadi kesalahan saat mengconvert sticker.')
						})
						.on('end', () => {
							nayla.sendMessage(from, fs.readFileSync(randomName), sticker, { quoted: nay })
							fs.unlinkSync(filepath)
							fs.unlinkSync(randomName)
						})
						.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
						.toFormat('webp')
						.save(randomName)
				} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
				}
				} catch {
					jds =  []
					errCuy = "Yahh maaf coy, terjadi kesalahan\n Besok lagi lah kau coba wkwkwk"
					mentions(errCuy, jds, true)
				}
				break
			case 'roundsticker':
				if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					var image_buffer = await nayla.downloadMediaMessage(encmedia);
					var formdata = new FormData()
					formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
					axios.post(`https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${l0lhuman}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
						nayla.sendMessage(from, res.data, sticker)
					})
				} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
				}
				break
			case 'stickernobg':
				if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					filePath = await nayla.downloadAndSaveMediaMessage(encmedia)
					file_name = getRandom('.png')
					file_name2 = getRandom('.webp')
					request({
						url: `https://api.lolhuman.xyz/api/removebg?apikey=${l0lhuman}`,
						method: 'POST',
						formData: {
							"img": fs.createReadStream(filePath)
						},
						encoding: "binary"
					}, function(error, response, body) {
						fs.unlinkSync(filePath)
						fs.writeFileSync(file_name, body, "binary")
						ffmpeg(`./${file_name}`)
							.input(file_name)
							.on('error', function(err) {
								console.log(err)
								fs.unlinkSync(file_name)
							})
							.on('end', function() {
								nayla.sendMessage(from, fs.readFileSync(file_name2), sticker, { quoted: nay })
								fs.unlinkSync(file_name2)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(file_name2)
					});
				} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
				}
				break
			case 'takestick':
				if ((isMedia && !nay.message.videoMessage || isQuotedSticker)) {
					if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
					const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					var image_buffer = await nayla.downloadMediaMessage(encmedia);
					var ini_txt = args.join(" ").split("|")
					var formdata = new FormData()
					formdata.append('package', ini_txt[0])
					formdata.append('author', ini_txt[1])
					formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
					axios.post(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${l0lhuman}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
						nayla.sendMessage(from, res.data, sticker)
					})
				} else {
					reply(`Tag sticker yang sudah dikirim`)
				}
				break

case 'spamsms':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	if (!isPrem) return reply(`${memberPrem}`)
				if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
				try {
				nomor = args[0]
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${l0lhuman}&nomor=${nomor}`)
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${l0lhuman}&nomor=${nomor}`)
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${l0lhuman}&nomor=${nomor}`)
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${l0lhuman}&nomor=${nomor}`)
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${l0lhuman}&nomor=${nomor}`)
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${l0lhuman}&nomor=${nomor}`)
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${l0lhuman}&nomor=${nomor}`)
				await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${l0lhuman}&nomor=${nomor}`)
				reply("Success")
				} catch { mentions(`${errNotRespon}`)}
				break
				
case 'stickerwa':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
	query = args.join(" ")
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${l0lhuman}&query=${query}`)
	get_result = get_result.result[0].stickers
	for (var x of get_result) {
		ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${l0lhuman}&img=${x}`)
		await nayla.sendMessage(from, ini_buffer, sticker)
	}
	break

	// Primbon
case 'artinama':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
	try {
	ini_nama = args.join(" ")
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${l0lhuman}&nama=${ini_nama}`)
	reply(get_result.result)
	} catch { mentions(`${errNotRespon}`)}
	break
case 'jodoh':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
	try {
	ini_nama = args.join(" ").split("&")
	nama1 = ini_nama[0].trim()
	nama2 = ini_nama[1].trim()
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${l0lhuman}`)
	get_result = get_result.result
	ini_txt = `Positif : ${get_result.positif}\n`
	ini_txt += `Negative : ${get_result.negatif}\n`
	ini_txt += `Deskripsi : ${get_result.deskripsi}`
	reply(ini_txt)
	} catch { mentions(`${errNotRespon}`)}
	break
case 'weton':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
	try {
	tanggal = args[0]
	bulan = args[1]
	tahun = args[2]
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${l0lhuman}`)
	get_result = get_result.result
	ini_txt = `Weton : ${get_result.weton}\n`
	ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
	ini_txt += `Rejeki : ${get_result.rejeki}\n`
	ini_txt += `Jodoh : ${get_result.jodoh}`
	reply(ini_txt)
	} catch { mentions(`${errNotRespon}`)}
	break
case 'jadianx':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
	tanggal = args[0]
	bulan = args[1]
	tahun = args[2]
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${l0lhuman}`)
	get_result = get_result.result
	ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
	ini_txt += `Deskripsi : ${get_result.deskripsi}`
	reply(ini_txt)
	break
case 'tebakumur':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
	ini_name = args.join(" ")
	if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
	try {
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
	get_result = get_result.result
	ini_txt = `Nama : ${get_result.name}\n`
	ini_txt += `Umur : ${get_result.age}`
	reply(ini_txt)
	} catch { mentions(`${errNotRespon}`)}
	break

	// Entertainment
case 'asupan':
	if (!isElite) return reply(`${notRegistered}`)
	if (isBanned) return reply(`${memberBanned}`)
	if (isBannedUser) return reply(`${memberBanned}`)  
	await reply(`${queryWait}`)
	if (isLimit(sender)) return						
	await limitAdd(sender)
	textAsupan = [
	'Nih kak, imoet-imoet kan... hee',
	'Jangan jadiin bacol um',
	'Cantik sihh... tapi....',
	'Ini pacarku, jangan kamu rebut ya',
	'Ikan hiu makan botol... mukelu kayak ....',
	'Ini cewek pernah ditembak sama Budi, tapi ditolak',
	'Masyaallah, ingin ku pinang dia :)',
	'Ughhh segssss....'
	]
	const captAsupan = textAsupan[Math.floor(Math.random()*(textAsupan.length))]
	get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${l0lhuman}`)
	try {
	ini_buffer = await getBuffer(get_result.result)
	await nayla.sendMessage(from, ini_buffer, video, { quoted: nay, mimetype: Mimetype.mp4, filename: "asupan.mp4", caption: captAsupan })
	} catch { mentions(`${errNotRespon}`)}
	break


	case '1977':
		case 'aden':
		case 'brannan':
		case 'brooklyn':
		case 'clarendon':
		case 'gingham':
		case 'hudson':
		case 'inkwell':
		case 'earlybird':
		case 'kelvin':
		case 'lark':
		case 'lofi':
		case 'maven':
		case 'mayfair':
		case 'moon':
		case 'nashville':
		case 'perpetua':
		case 'reyes':
		case 'rise':
		case 'slumber':
		case 'stinson':
		case 'toaster':
		case 'valencia':
		case 'walden':
		case 'willow':
		case 'xpro2':
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (isLimit(sender)) return							
await limitAdd(sender)
			if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
				filePath = await nayla.downloadAndSaveMediaMessage(encmedia)
				file_name = getRandom('.jpg')
				request({
					url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=${l0lhuman}`,
					method: 'POST',
					formData: {
						"img": fs.createReadStream(filePath)
					},
					encoding: "binary"
				}, function(error, response, body) {
					fs.unlinkSync(filePath)
					fs.writeFileSync(file_name, body, "binary")
					ini_buff = fs.readFileSync(file_name)
					nayla.sendMessage(from, ini_buff, image, { quoted: nay }).then(() => {
						fs.unlinkSync(file_name)
					})
				});
			} else {
				reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
			}
			break
		case 'pencil':
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (isLimit(sender)) return							
await limitAdd(sender)
			if ((isMedia && !nayla.message.videoMessage || isQuotedImage) && args.length == 0) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
				filePath = await nayla.downloadAndSaveMediaMessage(encmedia)
				file_name = getRandom('.jpg')
				request({
					url: `https://api.lolhuman.xyz/api/editor/pencil?apikey=${apikey}`,
					method: 'POST',
					formData: {
						"img": fs.createReadStream(filePath)
					},
					encoding: "binary"
				}, async function(error, response, body) {
					fs.unlinkSync(filePath)
					fs.writeFileSync(file_name, body, "binary")
					ini_buff = fs.readFileSync(file_name)
					await nayla.sendMessage(from, ini_buff, image, { quoted: nay }).then(() => {
						fs.unlinkSync(file_name)
					})
				});
			} else {
				reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
			}
			break	

                    // Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (isLimit(sender)) return							
await limitAdd(sender)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
					try {
					await reply(`${queryWait}`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${l0lhuman}&text=${ini_txt}`).then((gambar) => {
                        nayla.sendMessage(from, gambar, image, { quoted: nay })
                    })
					} catch { mentions(`${errNotRespon}`)}
                    break

                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)	
				try {
                    if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
					await reply(`${queryWait}`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${l0lhuman}&text=${ini_txt}`).then((gambar) => {
                        nayla.sendMessage(from, gambar, image, { quoted: nay })
                    })
					} catch { mentions(`${errNotRespon}`)}
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)	
                    if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
					await reply(`${queryWait}`)
					try {
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${l0lhuman}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        nayla.sendMessage(from, gambar, image, { quoted: nay })
                    })
					} catch { mentions(`${errNotRespon}`)}
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)	
                    if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
					await reply(`${queryWait}`)
					try {
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${l0lhuman}&text=${ini_txt}`).then((gambar) => {
                        nayla.sendMessage(from, gambar, image, { quoted: nay })
                    })
					} catch { mentions(`${errNotRespon}`)}
                    break					

	case 'nhentaipdf':  
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return						
				await limitAdd(sender)
				if (!isPrem) return reply(`${memberPrem}`)
				if (args.length == 0) return reply(`Contoh: ${prefix + command}<spasi>12345 Tunggu sebentar \nJika request terlalu lama berarti error atau size file doujinnya terlalu besar`)
				//experimental
				await reply(`${queryWait}`)
				try {
				henid = args[0]
				get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
				get_result = get_result.result
				ini_buffer = await getBuffer(get_result)
				nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `Nhentai - ${henid}.pdf` })							
				}  catch { 
				jds = []
				errGan = (`${errNotRespon}`)
				mentions(errGan, jds, true)
				}
				break
	case 'nhentaiinfo':
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)
				if (args.length == 0) return reply(`Contoh: ${prefix + command} 344253`)
				//experimental
				await reply(`${queryWait}`)
				jds = []
				try {
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
				}  catch { 
				jds = []
				errGan = (`${errNotRespon}`)
				mentions(errGan, jds, true)
				}			
				break	
	case 'nhentaicari':
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)				
				jds = []				
				if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
				//experimental
				await reply(`${queryWait}`)
				try {
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
				}  catch { 
				jds = []
				errGan = (`${errNotRespon}`)
				mentions(errGan, jds, true)
				}
				break		
	case 'nekopoi':
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)	 
				if (args.length == 0) return reply(`Contoh: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
				//experimental
				await reply(`${queryWait}`)
				try {
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
				}  catch { 
				jds = []
				errGan = (`${errNotRespon}`)
				mentions(errGan, jds, true)
				}
				break	
	case 'nekopoicari':
	case 'nekopoisearch':
					jds = []
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)					
				if (args.length == 0) return reply(`Contoh: ${prefix + command} Isekai Harem`)
				//experimental
				await reply(`${queryWait}`)
				try {
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
				}  catch { 
				jds = []
				errGan = (`${errNotRespon}`)
				mentions(errGan, jds, true)
				}	
				break
	case 'carianime':
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (isLimit(sender)) return							
await limitAdd(sender)
					if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
					//experimental
				await reply(`${queryWait}`)
				try {
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
					}  catch { 
					jds = []
					errGan = (`${errNotRespon}`)
					mentions(errGan, jds, true)
					}	
				break
				case 'pixiv':
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)
				if (!isPrem) return reply(`${memberPrem}`)
				//experimental
				await reply(`${queryWait}`)				
					if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii \nUntuk hasilnya bisa saja tidak akurat ya ${urname}, mohon dimengerti`)
					query = args.join(" ")
					ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${l0lhuman}&query=${query}`)
					capt = `Nih , jangan lupa bilang makasih...`
					await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: capt })
					//experimental
					break
				case 'pixivdl':
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)
					if (args.length == 0) return reply(`Contoh: ${prefix + command} 63456028`)
					//experimental
				await reply(`${queryWait}`)
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
				if (!isElite) return reply(`${notRegistered}`)
				if (isBanned) return reply(`${memberBanned}`)
				if (isBannedUser) return reply(`${memberBanned}`)
				if (!isNsfw) return reply(`${nsfwStrict}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)
				await reply(`${queryWait}`)
				//experimental
				anu1 = `${ReplyWordsLewdQuery}`
				try {		
					await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${l0lhuman}`).then((gambar) => {
							nayla.sendMessage(from, gambar, image, { quoted: nay, caption: anu1 })
					})
				}  catch { 
					jds = []
					errGan = (`${errNotRespon}`)
					mentions(errGan, jds, true)
					}
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (!isNsfw) return reply(`${nsfwStrict}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)
				//experimental
				await reply(`${queryWait}`)
				anu1 = `${ReplyWordsLewdQuery}`
				try {		
					getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${l0lhuman}`).then((gambar) => {
					nayla.sendMessage(from, gambar, image, { quoted: nay, caption: anu1 })
					})
				}  catch { 
					jds = []
					errGan = (`${errNotRespon}`)
					mentions(errGan, jds, true)
					}
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return							
				await limitAdd(sender)
				//experimental
				await reply(`${queryWait}`)
				anu1 = `Nih ${urname}, jangan lupa bilang makasih...`					
				getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`).then((gambar) => {
					nayla.sendMessage(from, gambar, image, { quoted: nay, caption: anu1 })
				})
				break							 
	//islamic
		case 'listsurah':				    
			jds = []
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} 18 or ${prefix + command} 18/10`)
			await reply(`${queryWait}`)
			surah = args[0]
			ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${l0lhuman}`)
			await nayla.sendMessage(from, ini_buffer, audio, { quoted: nay, mimetype: Mimetype.mp4Audio })
			break
		case 'asmaulhusna':			
			jds = []
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)
			//experimental
			await reply(`${queryWait}`)			    
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)    
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} Yogyakarta`)
			//experimental
			await reply(`${queryWait}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} Japanese`)
			//experimental
			await reply(`${queryWait}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
			//experimental
			await reply(`${queryWait}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} Japanese`)
			//experimental
			await reply(`${queryWait}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
			//experimental
			await reply(`${queryWait}`)
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
		await reply(`${queryWait}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return 
			await limitAdd(sender)
			if (args.length == 0) return reply(`Nih ya ${urname} aku contohin: ${prefix + command} jean`)
			//experimental
			await reply(`${queryWait}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return
			await limitAdd(sender)
			jds = []
				if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
				//experimental
				await reply(`${queryWait}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
					//experimental
					await reply(`${queryWait}`)
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return
				await limitAdd(sender) 
				if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
				//experimental
				await reply(`${queryWait}`)
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
				if (isLimit(sender)) return
				await limitAdd(sender) 
				if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
				//experimental
				await reply(`${queryWait}`)
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    ini_txt += `   ╭─❏\n`
                    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                    ini_txt += `❍┤ Motor : ${x.motor}\n`
                    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   ╰─❏\n`
                    mentions(ini_txt, jds, true)
                    break
        case 'urbandictionary':
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
			if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			if (isLimit(sender)) return
			await limitAdd(sender)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${l0lhuman}`)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay })
    break	
	case 'cerpen':
		if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
		if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${l0lhuman}`)
						mentions((quotedilan.result), jds, true)
						break
					case 'quotesimage':
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`)
						await nayla.sendMessage(from, get_result, image, { quotes: nay })
						break
					case 'faktaunik':
					case 'katabijak':
					case 'pantun':
					case 'bucin':
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`)
						mentions((get_result.result), jds, true)
						break
					case 'randomnama':
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						jds = []
						anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${l0lhuman}`)
						mentions((anu.result), jds, true)
						break
	
				//pencarian
					case 'google':
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (!isPrem) return reply(`${memberPrem}`)
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
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						if (args.length == 0) return reply(`Example: ${prefix + command} Budi Hentai`)
						//experimental
				await reply(`${queryWait}`)
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
				if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Budi Hentai|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Saya cantik`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${l0lhuman}&text=${ini_txt}`)
                    await nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay })
                    break
                case 'triggered':
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
					jds = []
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
                    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
					await reply(`${queryWait}`)
					try {
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
                        }) } catch {  mentions(`${errNotRespon}`), from, jds, true }
                    break
                case 'ytsearch':
					jds = []
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
					await reply(`${queryWait}`)
					try {
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
					} catch { mentions(`${errNotRespon}`), from, jds, true }
                    break
                case 'ytmp3':
					jds = []
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						//if (!isPrem) return reply(`${memberPrem}`)
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
					await reply(`${queryWait}`)
					try {
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${l0lhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    caption = `❖ Title    : *${result.title}*\n`
                    caption += `❖ Size     : *${result.size}*`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await nayla.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: nay })
					} catch {  mentions(`${errNotRespon}`), from, jds, true }
                    break
                case 'ytmp4':
					jds = []
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						//if (!isPrem) return reply(`${memberPrem}`)
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
					await reply(`${queryWait}`)
					try {
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${l0lhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await nayla.sendMessage(from, ini_buffer, image, { quoted: nay, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await nayla.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: nay })
					} catch { mentions(`${errNotRespon}`), from, jds, true }
                    break
                case 'telesticker':
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    await nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: nay })
                    break
                case 'spotify':
					jds = []
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						if (!isPrem) return reply(`${memberPrem}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						await reply(`${queryWait}`)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
					try {
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
					} catch {  mentions(`${errNotRespon}`), from, jds, true }
                    break
                case 'spotifysearch':
					jds = []
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)				
					jds = []
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
					try {
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
					} catch {  mentions(`${errNotRespon}`), from, jds, true }
                    break
                case 'jooxplay':
					jds = []
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						await reply(`${queryWait}`)				
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
					try {
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
					} catch {  mentions(`${errNotRespon}`), from, jds, true }
					break
                case 'igdl':
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
						if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `[ *${NameBot} Broadcast* \n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *${NameBot} Broadcast* ]\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
					case 'clearall':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner??`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(50)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break									 	 
                    case 'linkgc':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`Maaf kak Saya bukan admin :(`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
				    case 'tagall':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
				    case 'del':  
				    case 'd':
					case 'hapus':  
					if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)	
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
				    case 'kick':  
                    if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`Cuma bisa di grup kak`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup hehe...`)
					if (!isBotGroupAdmins) return reply(`Maaf kak Saya bukan admin :(`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					iniMention = mentioned
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Selamat tinggal kak... 🏃\n`
					teks += `@_.split('@')[0]`
					}
					reply(teks, iniMention, true)
					setTimeout(() => { nayla.groupRemove(from, iniMention)},4000)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${iniMention[0].split('@')[0]}`, iniMention, jds, true)
							setTimeout(() => { reply(`@${iniMention[0].split('@')[0]} jangan dendam yaa, ga baik lohh 🌝🙏🏻`)},4000)
								setTimeout(() => { nayla.groupRemove(from, mentioned)},6000)
					}					
					break 					
				    case 'kicktime':  
					if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
					if (!isGroup) return reply(`Cuma bisa di grup kak`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup hehe...`)
					if (!isBotGroupAdmins) return reply(`Maaf kak Saya bukan admin :(`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
						nayla.sendMessage(from, 'Yhahahhah mampos luh 🤣', text)
						}, 8000)
						setTimeout( () => {
						reply('sukses min 🤣')
						}, 7000)
						setTimeout( () => {
							nayla.groupRemove(from, mentioned)
						}, 6000)
						setTimeout( () => {
							nayla.sendMessage(from, `Ada kata-kata terakhir bro? 😌 @${mentioned[0].split('@')[0]}`, true, text) // ur cods
						}, 5000)
						setTimeout( () => {
							nayla.sendMessage(from, 'Asikkk Dapet Makanan nihh 😋', text)
						}, 2500)
						setTimeout( () => {
						reply('Perintah Diterima min 😆')
						}, 0)
					break
					case 'hidetag':  
                    if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (!isBotGroupAdmins) return reply(`Saya belum jadi ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya? \nNih saya kasih contoh kak \n!add 628123xxxx ,jgn pakai tanda "+" dan "-" \nJika tetap tidak bisa mungkin karena di privat/yg mau di add baru saja keluar dari grup')
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
                    if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis3':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis4':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: nay1}) 
                    break 
                    case 'nulis6':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                     if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply('Kasih teks lah kak masa kosongan')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nayla.sendMessage(from, atetepe, sticker, {quoted: nay})
                     break                                                                                                   
/* ===================================================[ BOT WHATSAPP ]==============================================================*/                     	 
                   	case 'welcome':  
                    if (!isElite) return reply(`${notRegistered}`)
					if (isBanned) return reply(`${memberBanned}`)
					if (isBannedUser) return reply(`${memberBanned}`)
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
					case 'setnsfw':
						if (!isElite) return reply(`${notRegistered}`)
						if (isBanned) return reply(`${memberBanned}`)
						if (isBannedUser) return reply(`${memberBanned}`)
						if (isLimit(sender)) return
						await limitAdd(sender)
						if (!isGroup) return reply(`GROUP ONLY`)
						if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
							if (args.length < 1) return reply('Cek cara pakai di !togglemenu')
							if ((args[0]) === 'on') {
								if (isNsfw) return reply('Mode nsfw sudah aktif')
								_nsfw.push(from)
								fs.writeFileSync('./nayla/nsfw.json', JSON.stringify(_nsfw))
								reply(`\`\`\`✓Sukses mengaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
							} else if ((args[0]) === 'off') {
								if (!isNsfw) return reply('Mode Nsfw sudah Off Sebelumnya')
								_nsfw.splice(from, 1)
								fs.writeFileSync('./nayla/nsfw.json', JSON.stringify(_nsfw))
								reply(`\`\`\`✓Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
							} else {
								reply('On untuk mengaktifkan, Off untuk menonaktifkan')
							}
							break					  

					case 'setplugin-leveling':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
		            //if (!isOwner) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`Hanya dapat dilakukan oleh admin grup!`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF KAK* !!!')
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
                    case 'addprem':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`${onlyOwner}`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Yeayyy... Berhasil menambahkan ke anggota premium kak!`)
					break				
					case 'dellprem':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return reply(`${onlyOwner}`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium, yahhh jangan sedih ya kak >,,<`)
					break
					case 'group':
					case 'grup':
					case 'gc':
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`Gomennasai ${urname}, Saya bukan admin :(`)
					if (!isBotGroupAdmins) return reply(`Maaf nih kak, apakah kakak admin?`)
					if (args[0] === 'open') {
					    reply(`*Berhasil membuka grup ${urname}!*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`*Berhasil menutup grup ${urname}!*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
					case 'hidetag10':  
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (!isPrem) return reply(`${memberPrem}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('KAMU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Yahhh,... jabatan kamu di copot wkwkwkk 🏃 :\n`
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('KAMU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `Selamat buat Kamu yang telah naik menjadi Admin Grup!\n`
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
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command} @tagmember|Perkenalkan nama Saya Budi`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `Dari : ${pushname}\n\nIsi Pesan : ${F2}`, text, {quoted:nay1})
					reply(`${pushname} Pesan sudah terkirim..`)
					break	            	
                    case 'limitcek':                     
                    if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
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
case 'profile':
case 'profil':
reply(`${queryWait}`)
if (!isLevelingOn) return reply(`Maaf kak, fitur leveling tidak aktif, silahkan cek di ${prefix}togglemenu untuk mengaktifkan`)
if (!isGroup) return reply(`Grub Only!`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
try {	ppimg = await nayla.getProfilePicture(sender)
	} 	catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		} loading = await getBuffer(ppimg)

const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(nyz.lvlnul())
const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)

iniProfile =`╭─── 「 Profile 」── 

Nama : ${pushname}
ID's : wa.me/${sender.split("@")[0]}

User Level : ${userLevel}
User Exp : ${userXp}
EXP yg dibutuhkan utk LvlUp! : ${requiredXp}

╰───「 This is Your Profile 」── `  
//nayla.sendMessage(from, loading, MessageType.image, {caption: iniProfile, contextInfo: {"mentionedJid": [num]}})
nayla.sendMessage(from, loading, image, { quoted: nay1, caption: iniProfile })
break     
case 'spam':
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (!isPrem) return reply(`${memberPrem}`)
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
case 'spamprem':
if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
if (!isPrem) return reply(`${memberPrem}`)
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
					if (!isElite) return reply(`${notRegistered}`)
if (isBanned) return reply(`${memberBanned}`)
if (isBannedUser) return reply(`${memberBanned}`)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					if (args.length < 1) return reply(`Gini ${pushname}: ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga Budi`)
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
		// ${reactBot}	${iniToxic} ${iniToxic2} ${reactNgeri}
		// ${reactPagi} ${reactSiang} ${reactMalam} ${reactSepi}						    
		if (budy.includes("Cara pake bot gimana?")){
			jds = []
			AA0 = `Silahkan ketik ${prefix}bothelp kak :)`
			mentions(AA0, jds, true)
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
		if (budy.includes("Oyasumi")){
			jds = []
			AA17 =`Oyasumi juga kak, semoga mimpi basah, eh... indah...🥰`
			mentions(AA17, jds, true)
		}
		if (budy.includes("Bobo yuk")){
			jds = []
			AA18 =`Gamau ah, badan ${urname}ak bauu 😆`
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
		if (budy.includes("Cek cek")){
			jds = []
			AA26 =`Ready cok!`
			mentions(AA26, jds, true)
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
//toxic-reply with session
		//ses AJG
		if (budy.includes("ANJING")){
			jds = []
			AJG =`${iniToxic}`
			mentions(AJG, jds, true)}
			if (budy.includes("Anjing")){
				jds = []
				AJG1 =`${iniToxic}`
				mentions(AJG1, jds, true)}
				if (budy.includes("anjing")){
					jds = []
					AJG2 =`${iniToxic}`
					mentions(AJG2, jds, true)}
					if (budy.includes("Ajg")){
						jds = []
						AJG3 =`${iniToxic}`
						mentions(AJG3, jds, true)}
						if (budy.includes("Anjg")){
							jds = []
							AJG4 =`${iniToxic}`
							mentions(AJG4, jds, true)}
							if (budy.includes("ajg")){
								jds = []
								AJG5 =`${iniToxic}`
								mentions(AJG5, jds, true)}
								if (budy.includes("anjg")){
									jds = []
									AJG6 =`${iniToxic}`
									mentions(AJG6, jds, true)}
		//ses BI
		if (budy.includes("Babi")){
			jds = []
			BI =`${iniToxic}`
			mentions(BI, jds, true)}	
			if (budy.includes("babi")){
				jds = []
				BI1 =`${iniToxic}`
				mentions(BI1, jds, true)}
		//ses KN
		if (budy.includes("KONTOL")){
			jds = []
			KN =`${iniToxic}`
			mentions(KN, jds, true)}
			if (budy.includes("Kontol")){
				jds = []
				KN1 =`${iniToxic}`
				mentions(KN1, jds, true)}	
				if (budy.includes("kontol")){
					jds = []
					KN2 =`${iniToxic}`
					mentions(KN2, jds, true)}	
		//ses NGT	
		if (budy.includes("Ngentot")){
			jds = []
			NGT =`${iniToxic}`
			mentions(NGT, jds, true)}		
			if (budy.includes("Ngentod")){
				jds = []
				NGT1 =`${iniToxic}`
				mentions(NGT1, jds, true)}
				if (budy.includes("ngentod")){
					jds = []
					NGT2 =`${iniToxic}`
					mentions(NGT2, jds, true)}
					if (budy.includes("ngentot")){
						jds = []
						NGT3 =`${iniToxic}`
						mentions(NGT3, jds, true)}
		//ses BJN		
			if (budy.includes("bajingan")){
				jds = []
				BJN1 =`${iniToxic}`
				mentions(BJN1, jds, true)}	
				if (budy.includes("Jingan")){
					jds = []
					BJN2 =`${iniToxic}`
					mentions(BJN2, jds, true)}	
					if (budy.includes("jingan")){
						jds = []
						BJN3 =`${iniToxic}`
						mentions(BJN3, jds, true)}	
		//ses RAN
		if (budy.includes("Jembot")){
			jds = []
			RAN =`${iniToxic}`
			mentions(RAN, jds, true)}
			if (budy.includes("Jembut")){
				jds = []
				RAN2 =`${iniToxic}`
				mentions(RAN2, jds, true)}
				if (budy.includes("jembut")){
					jds = []
					RAN3 =`${iniToxic}`
					mentions(RAN3, jds, true)}
					if (budy.includes("Jancok")){
						jds = []
						RAN4 =`${iniToxic}`
						mentions(RAN4, jds, true)}
						if (budy.includes("jancok")){
							jds = []
							RAN5 =`${iniToxic}`
							mentions(RAN5, jds, true)}	
							if (budy.includes("Memek")){
								jds = []
								RAN6 =`${iniToxic}`
								mentions(RAN6, jds, true)}
								if (budy.includes("Mmk")){
									jds = []
									RAN7 =`${iniToxic}`
									mentions(RAN7, jds, true)}											
		//toxic-ends here
		if (budy.includes("Terimakasih")){
			jds = []
			AA33 =`${replyThx}`
			mentions(AA33, jds, true)
		}
		if (budy.includes("Makasih")){
			jds = []
			AA33 =`${replyThx}`
			mentions(AA33, jds, true)
		}
	//starting from here is changing parameter into "AB<numerical>"
	//sim simi reactions will be added soon!
	//anjing kek ngehalu, padahal cuma bot	
		//sapaan
		if (budy.includes("Selamat malam")){
			jds = []
			AB1 =`${selamatMalam}`
			mentions(AB1, jds, true)}	
			if (budy.includes("Konbanwa")){
			jds = []
			AB1B =`${selamatMalam}`
			mentions(AB1B, jds, true)}			
		if (budy.includes("Selamat sore")){
			jds = []
			AB2 =`Sore juga kak`
			mentions(AB2, jds, true)}	
		if (budy.includes("Selamat siang")){
			jds = []
			AB2 =`${selamatSiang}`
			mentions(AB2, jds, true)}	
		if (budy.includes("Selamat pagi")){
			jds = []
			AB2 =`${selamatPagi}`
			mentions(AB2, jds, true)}
		if (budy.includes("Ohayo")){
			jds = []
			AB3 =`${selamatPagi}`
			mentions(AB3, jds, true)}	
//VOICE		
	//voice react asalamualaikum [const 1] F2	
	if (budy.includes("Asalamualaikum")){					
		const F2 = fs.readFileSync('sound/baru/walaikumsalam.ogg')
		nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}
	//voice react tag bot [const 2]	F3
		if (budy.includes(`${numberbot}`)){
			jds = []
			balesan =`Iyaaa ${pushname}, Ada yang bisa saya bantu?`
			mentions(balesan, jds, true)}
		if (budy.includes(`${numberbot}`)){
		const F3 = fs.readFileSync('sound/baru/iyadygbsdbntu.ogg')
		nayla.sendMessage(from, F3, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}

//new session for auto VN
if (budy.includes(`${TXT_ArchiveBlue}`)){
	thisVoice = await getBuffer(`${BlueArchiveVoices}`)
	nayla.sendMessage(from, thisVoice, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}

if (budy.includes("Halo")){
	thisVoice = await getBuffer(`${BlueArchiveVoices}`)
	nayla.sendMessage(from, thisVoice, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})}


 //STICKER REACT const F22 and F33     
	//sticker react tag to => mentioned JID user var GROUP	
if (budy.includes(`${ownerrf}`)){
	jds = []
pesanOwner = [
"Hayoloo mo ngapain tag Owner gua?",
"Mau ngapain Kak?",
"Hmmm... masih Saya pantau :)",
"Arek keperluan nopo lek?, gak iso karo aku wae po?",
"Iya kak, ada perlu apa sama Owner Saya?, apakah bisa Saya wakilkan? atau perlu Saya panggilkan? 🙃",
"Hmmm... mau ngajak mabar yaa",
"Lagi sibuk nyari ayam kampus kak,.. eh mksdnya lagi sibuk nugas :v",
"Lagi bertapa kak, berharap kehidupan ini agar lebih baik lagi :)",
"Jangan di tag kak, sedang memikirkan masa depan..",
"Mo nagapain su",
"tak tung tang, bang dum desss",
"Tchh, nandayo koitse"
]
	const thisMess = pesanOwner[Math.floor(Math.random() * (pesanOwner.length))]
	isipesan = `${thisMess}`
mentions(isipesan, jds, true)}
//sticker react tag lort dimaseee	
if (budy.includes(`${lort}`)){
isipesanLort = `Ada perlu apa sama Lort Dina Kak? 😳`
mentions(isipesanLort, jds, true)} 
//sticker react tag Budi is geh
if (budy.includes(`${budi_tag}`)){
jds = []
pesanBudi = [
"Gimana?, ada perlu apa sama Budi Kak?\nhayooloo mo ngapain... pasti nganu ya 😱",
"Budi lagi makan kak, jangan diganggu!",
"Budi katanya lagi ada kencan sama Lort Dina Kak!",
"Si Budi lagi coli kak, jangan di tag",
"Si Budi habis putus cinta, jangan kasih dia harapan palsu lagi kak",
"Budi lagi gua suruh beli es teh ke warung sebelah kak",
"Jangan di tag Kak, dia nyesel kemarin habis coly",
"Orangnya lagi shopping buat kebutuhan cosplay besok Kak",
]
	const budiGanteng = pesanBudi[Math.floor(Math.random() * (pesanBudi.length))]
	isipesanBudi = `${budiGanteng}`
mentions(isipesanBudi, jds, true)}				

if (body.startsWith(`${prefix}${command}`)){     
	jds = []     
	noCmd = notFoundCommand          
mentions(noCmd, jds, true)
}                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   reply('ERROR ATAU APIKEY UNVALID')
		}
	})
}
starts() 