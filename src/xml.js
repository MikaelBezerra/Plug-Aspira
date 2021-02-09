const Fs = require("fs")
const Path = require("path")
const Axios = require("axios")
const env = require("./config/confi_doc")

async function downloadXMl() {
    const url = (env.Download.X_URL)
    const path = Path.resolve(__dirname, "dodo", "code.xml")
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

downloadXMl();
