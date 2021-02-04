const Fs = require("fs")
const Path = require("path")
const Axios = require("axios")
require('dotenv').config()

async function downloadPdf() {
    const url = (process.env.XML_URL)
    const path = Path.resolve(__dirname, "dodo", "code.xml")
    const whiter = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        methad: "GET",
        headers: {
            "x-api-key": (process.env.MY_SENHA)
        },
        responseType: "stream"
    })

    response.data.pipe(whiter)

    return new Promise((resolve, reject) => {
        whiter.on("finish", resolve);
        whiter.on("error", reject);
    });
}

downloadPdf();
