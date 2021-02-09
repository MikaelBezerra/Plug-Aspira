/* eslint-disable no-console */
/* eslint-disable consistent-return */
const axios = require("axios");
const empresa = require("./config/dados_empresa.json");
const env = require("./config/confi_doc")

async function empresas() {
    try {
        const response = await axios({
            method: "POST",
            url: (env.Empresa.URL),
            headers: {
                "x-api-key": (env.Token.senha),
            },
            data: empresa,
        })

        console.log(JSON.stringify(response.data))

        return response.data
    } catch (error) {
        console.error(error)
    }
}

empresas();

