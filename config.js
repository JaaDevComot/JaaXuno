const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '406aa12f08bc',
}

// Other
global.owner = ['6283838077485']
global.premium = ['6283838077485']
global.nama = 'Jaa Ganteng'
global.packname = 'Jaa'
global.author = 'Ganteng'
global.sessionName = 'jaa'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sessionName = 'jaa' //Gausah Juga
global.welcome = false
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur khusus admin group!',
    botAdmin: 'Bot harus menjadi admin terlebih dahulu!',
    owner: 'Fitur khusus owner!',
    group: 'Fitur khusus group!',
    private: 'Fitur khusus private chat!',
    bot: 'Fitur khusus pengguna nomor bot',
    wait: 'Loading...', 
    erorr: `Fitur erorr`,
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
