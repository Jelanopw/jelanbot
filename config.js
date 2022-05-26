/**
   * 𝔑 𝔒 𝔘 𝔖
   * 𝔑 𝔒 𝔘 𝔖
   * 𝔑 𝔒 𝔘 𝔖
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6281217674887','6281217674887','6281217674887']
global.premium = ['6281217674887']
global.packname = '𝔑 𝔒 𝔘 𝔖'
global.author = 'Whatsap Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Khusus Admin Group Asu!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu Bangsat!',
    owner: 'Khusus Owner Bot Cok',
    group: 'Digunakan Hanya Untuk Group Matamu!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat Picek!',
    bot: 'Khusus Pengguna Nomor Bot Raimu',
    wait: 'Loading Picek...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
