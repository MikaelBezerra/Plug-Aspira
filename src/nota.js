/* eslint-disable no-console */
/* eslint-disable consistent-return */
const axios = require("axios");
const dados = require("./entity/dadonota.json");

async function nota() {
    try {
        const response = await axios({
            method: "POST", // caso deseje fazer um get dessa nota, e so trocar o post por get.
            url: "https://api.sandbox.plugnotas.com.br/nfse", // e a crescentar a id: 601309f12ba16d0df5a6a11a na frente do nfse/
            headers: {
                "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
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
