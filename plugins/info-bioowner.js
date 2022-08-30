let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 ɴᴀᴍᴀ* : ᴠᴇɴ-ʙᴏᴛ
*✉️ ɴᴀᴍᴀ ᴀsʟɪ* : ʟᴇᴠɪ xʜɪᴀᴏ 💀 ! 
*♂️ ɢᴇɴᴅᴇʀ* : ʟᴀᴋɪ ʟᴀᴋɪ
*🕋 ᴀɢᴀᴍᴀ* : ɪsʟᴀᴍ
*⏰ ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ* : 𝟷𝟶 ᴅᴇsᴇᴍʙᴇʀ 𝟸𝟶𝟶𝟽
*🎨 ᴜᴍᴜʀ* : 𝟷𝟺
*🧮 ᴋᴇʟᴀs* : 𝟽
*🧩 ʜᴏʙʏ* : ɴᴏɴᴛᴏɴ ʜᴀɴɪᴍᴇ ʜᴇɴᴛᴀɪ, ᴄʜᴀᴛᴛɪɴɢ, ʀᴇᴄᴏᴅᴇ sᴄʀɪᴘᴛ ᴏʀᴀɴɢ ɢᴀᴊᴇʟᴀs
*💬 sɪғᴀᴛ* : ɪᴅɪᴏᴛ, ᴛɪᴅᴀᴋ ʀᴀᴍᴀʜ, ᴛᴏxɪᴄ, ᴘᴇɴᴅɪᴀᴍ, ᴘᴇᴅᴏғɪʟ
*🗺️ ᴛɪɴɢɢᴀʟ* : ɪɴᴅᴏɴᴇsɪᴀ, ᴋᴀʟɪᴍᴀɴᴛᴀɴ ᴛɪᴍᴜʀ, ʙᴇʀᴀᴜ, sᴜᴀʀᴀɴ
*❤️ sᴜᴋᴀ* : ᴡᴀʀɴᴀ & ʙɪʀᴜ, ʜᴀɴɪᴍᴇ ʜᴇɴᴛᴀɪ, ᴡᴀɪғᴜ, ʟᴏʟɪ, ᴛʀᴀᴘ, sᴀɴɢᴇ, ᴋᴜᴄɪɴɢ
*💔 ʙᴇɴᴄɪ* : ᴀᴜᴛɪs, ᴀɴᴀᴋ ᴀʟᴀʏ, sᴇʟᴇʙ

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : https://instagram.com/imleviofc
*🇫  Facebook* : https://www.facebook.com/erdiansyah.teddy.3
*🏮 Chanel Youtube* : https://youtube.com/channel/UC2GOH5mCArh3E4J3sGFMC5g
*🐈 Github:* https://github.com/ImleviOfc

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
