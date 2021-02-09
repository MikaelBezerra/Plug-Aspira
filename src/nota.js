/* eslint-disable no-console */
/* eslint-disable consistent-return */
const axios = require("axios");
const dados = require("./config/dados_nota.json");
const env = require("./config/confi_doc")

async function nota() {
    try {
        const response = await axios({
            method: "POST",
            url: (env.Nota.URL),
            headers: {
                "x-api-key": (env.Token.Senha),
            },
            data: dados,
        })

        console.log(JSON.stringify(response.data))

        return response.data
    } catch (error) {
        console.error(error)
    }
}

nota();
