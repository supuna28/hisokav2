/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	dappa: 'https://api.dapuhy.ga',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.dapuhy.ga': 'DappaAnjing',
}

// Other
global.owner = ['94753943957','94753943957','94753943957']
global.packname = 'BOTKINGDOM'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: 'ඇඩ්මින් සදහා පමනි!',
    botAdmin: 'බොට් ඇඩ්මින් නොවේ!',
    owner: 'Owner Bot පමනි',
    group: 'සමූහ සදහා පමනි!',
    private: 'Private Chat!',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'හෙලෝ @user Group @subject  Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
