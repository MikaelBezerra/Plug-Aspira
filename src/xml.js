const Fs = require("fs")
const Path = require("path")
const Axios = require("axios")

async function downloadPdf() {
    const url = "https://api.sandbox.plugnotas.com.br/nfse/xml/60131b6ed976d9284a6f2427"
    const path = Path.resolve(__dirname, "dodo", "code.xml")
    const whiter = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        methad: "GET",
        headers: {
            "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d"
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
