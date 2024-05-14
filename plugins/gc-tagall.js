let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `🐶💚➢ 𝐁𝐨𝐭 𝐦𝐨𝐬𝐢𝐭𝐨 🐶💚:  ${pesan}`
let teks = `Creador Wa.me/51988802645 SI QUIERES BOT COMUNICAME 
🐶💚 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬 💚💋\n\n ${oi}\n\n 🐶💚➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🐶💚➢ @${mem.id.split('@')[0]}\n`}
teks += `𝐌𝐨𝐬𝐢𝐭𝐨 𝐛𝐨𝐭 🐶💚 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
