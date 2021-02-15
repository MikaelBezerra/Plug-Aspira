/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
const axios = require("axios");
const dados = require("./config/dados_nota.json");
const env = require("./config/confi_doc")

async function nota() {
    try {
        const url = env.URLSearch.URL_API
        const response = await axios({
            method: "POST",
            url: `${url}/nfse`,
            headers: {
                "x-api-key": (env.Token.Senha),
            },
            data: dados,
        })

        console.log(JSON.stringify(response.data))

        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = nota
