/* eslint-disable no-console */
/* eslint-disable consistent-return */
const axios = require("axios");
const dados = require("./config/dados_nota.json");
require('dotenv').config()

async function nota() {
    try {
        const response = await axios({
            method: "POST",
            url: (process.env.NOTA_URL),
            headers: {
                "x-api-key": (process.env.MY_SENHA),
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
