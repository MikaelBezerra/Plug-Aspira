const Fs = require('fs');
const Path = require('path');

/* Chamadas */

// const empresa = require("./empresa")
// const certificado = require("./certificado")
// const nota = require("./nota")
const pdf = require('./pdf');
// const xml = require("./xml")

/* Teste */

async function main() {
    const PDF = await pdf('60131b6ed976d9284a6f2427');
    const path = Path.resolve(__dirname, 'doc', 'nota.pdf');
    const writer = Fs.createWriteStream(path);
    return PDF.pipe(writer);
}

main();
