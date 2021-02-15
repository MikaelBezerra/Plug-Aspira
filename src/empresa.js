/* eslint-disable no-console */
/* eslint-disable consistent-return */
const axios = require("axios");
const empresa = require("./config/dados_empresa.json");
const env = require("./config/confi_doc")

async function empresas() {
    try {
        const url = env.URLSearch.URL_API
        const response = await axios({
            method: "POST",
            url: `${url}/empresas`,
            headers: {
                "x-api-key": (env.Token.senha),
            },
            data: empresa,
        })

        console.log(JSON.stringify(response.data))

        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = empresas
