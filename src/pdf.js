/* eslint-disable no-undef */
const Fs = require("fs")
const Path = require("path")
const Axios = require("axios")
const env = require("./config/confi_doc")

async function downloadPdf() {
    const url = (env.Download.P_URL)
    const path = Path.resolve(__dirname, "doc", "code.pdf")
    const whiter = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        methad: "GET",
        headers: {
            "x-api-key": (env.Token.Senha)
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
