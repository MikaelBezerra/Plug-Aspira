/* eslint-disable no-undef */
const Axios = require("axios")
const env = require("./config/confi_doc")

async function downloadXML(ID) {
    try {
        const url = env.URLSearch.URL_API
        const response = await Axios({
            url: `${url}/nfse/xml/${ID}`,
            methad: "GET",
            headers: {
                "x-api-key": (env.Token.Senha)
            },
            responseType: "stream"
        })

        return response.data;
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = downloadXML
