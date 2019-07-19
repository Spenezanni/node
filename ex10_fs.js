const fs = require('fs')

const files = fs.readdirSync(__dirname) // umas das constantes que o node tem como padrao

files.forEach(f => console.log(f))