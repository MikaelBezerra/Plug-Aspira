/* eslint-disable no-console */
/* eslint-disable consistent-return */
const axios = require("axios");
const empresa = require("./config/dados_empresa.json");
require('dotenv').config()


async function empresas() {
    try {
        const response = await axios({
            method: "POST",
            url: (process.env.EMPRESAS_URL),
            headers: {
                "x-api-key": (process.env.MY_SENHA),
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

