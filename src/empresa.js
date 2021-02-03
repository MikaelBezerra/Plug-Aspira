const axios = require("axios");
const empresa = require("./entity/dados_empresa.json");

async function empresas() {
  try {
    const response = await axios({
      method: "POST",
      url: "https://api.sandbox.plugnotas.com.br/empresa",
      headers: {
        "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
      },
      data: empresa,
    })

    console.log(JSON.stringify(response.data))

    return response.data
  } catch (error) {
    console.error(error)
  }
}

empresa();