const axios = require("axios");

const config = {
  method: "POST", // caso deseje fazer um get dessa nota, e so trocar o post por get.
  url: "https://api.sandbox.plugnotas.com.br/nfse", // e a crescentar a id: 601309f12ba16d0df5a6a11a na frente do nfse/
  headers: {
    "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
  },
  data: [
    {
      idIntegracao: "MXXYY145",
      prestador: { cpfCnpj: "32671561000109" },
      tomador: {
        cpfCnpj: "99999999999998",
        razaoSocial: "Aspiras Plugnota",
        inscricaoMunicipal: "8214100099",
        email: "aspira@plugnotas.com.br",
        endereco: {
          descricaoCidade: "Sarandizao",
          cep: "87020150",
          tipoLogradouro: "Rua",
          logradouro: "Barao do rio branco",
          tipoBairro: "Centro",
          codigoCidade: "4115200",
          complemento: "sala 01",
          estado: "PR",
          numero: "1001",
          bairro: "Centro",
        },
      },
      servico: [
        {
          codigo: "14.10",
          codigoTributacao: "14.10",
          discriminacao:
            "Descrição dos serviços prestados, utilize | para quebra de linha na impressão.",
          cnae: "7490104",
          iss: { tipoTributacao: 7, exigibilidade: 1, aliquota: 3 },
          valor: { servico: 1, descontoCondicionado: 0, descontoIncondicionado: 0 },
        },
      ],
    },
  ],
};

axios
  .request(config)
  .then(function (resposta) {
    console.log(resposta.data);
  })
  .catch(function (error) {
    console.error(error);
  });
