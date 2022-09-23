/** 
Base: Hisoka
recode: Shizuka Botz BY KenZ

Note: Ubah yang penting saja
INI ASLI YA DEK, GAK USAH BACOD, FREE KALAU MAU MAKE TINGGAL EDIT AJA, GAK USAH EDIT CASE NYA, NANTI ERROR NYALAHIN SCRIPT JELEK
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// FREE API
global.APIKeys = {
	'https://zenzapis.xyz': '087b253e44',
}

// Other
global.botname = 'UPIN BOTZ-Md'                 //ubah jadi nama bot loe
global.instagram = 'https://instagram.com/Kenzquerza'   //ubah jadi link instagram kamu(kalau gak punya, gausah di ubah, anggep aia sedekah)
global.groupowner = 'https://chat.whatsapp.com/LEFxHFRviLB9D8mDPbQN66' //Ubah jadi link gc kamu, kalau sepi gausah di ubah
global.nomorowner = '6289603861178' //nomor lu
global.ownername = 'KenZ xd️' //your name
global.owner = ['6289603861178'] //isi sama nomor lu, kalau cuma punya 1, salah satu nya di ganti jadi 0 aja
global.premium = ['6289603861178'] //premium
global.packname = 'KenZ'
global.author = 'Jangan Lupa Gay di bogor😅☝️'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Nih cuy',
    admin: 'Khusus admin !!',
    botAdmin: '𝙱𝚘𝚝 harus jadi admin',
    owner: 'fitur khusus owner',
    group: 'fitur khusus group',
    private: '𝙷𝚊𝚗𝚢𝚊 𝚋𝚒𝚜𝚊 𝚍𝚒𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝚍𝚒 𝙲𝚑𝚊𝚝 𝚙𝚛𝚒𝚋𝚊𝚍𝚒',
    bot: '𝙺𝚑𝚞𝚜𝚞𝚜 𝚙𝚎𝚗𝚐𝚐𝚞𝚗𝚊 𝚗𝚘𝚖𝚘𝚛 𝚋𝚘𝚝',
    wait: 'Tunggu sebentar, cuy',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.limitawal = {
    premium: "Infinity",
    free: 120
}
global.watermark = 'bogor bogor bogor'
global.shizuka = fs.readFileSync('./ambatokam/shizuka2.jpg')
global.thumb = fs.readFileSync('./ambatokam/shizuka.jpg')
global.visoka = fs.readFileSync('./video/splash.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
