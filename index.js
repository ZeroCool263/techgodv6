//base by ❦★𝘿𝘼𝙍𝙆★❦†𝙕𝙀𝙍𝙊𝘾𝙊𝙊𝙇†𓃵
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Jayden01
//Instagram: ZeroCool263
//Telegram: t.me/codewhisporer
//GitHub: @darkzerocool
//WhatsApp: +263712473551
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@jayden01

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
