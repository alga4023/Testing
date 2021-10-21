let handler = async m => m.reply(`
╭─「 Donasi • BOT 」
│ • gopay [088292201767]
│ • DANA [088292201767]
│ • OVO  [088292201767]
│ • Saweria [a_alga]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
