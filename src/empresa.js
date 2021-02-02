const axios = require("axios");

const config = {
  method: "POST",
  url: "https://api.sandbox.plugnotas.com.br/empresa",
  headers: {
    "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
  },
  data: {
    cpfCnpj: "90433695000198",
    inscricaoMunicipal: "8214100099",
    inscricaoEstadual: "1234567850",
    razaoSocial: "Aspiras-Plugnotas",
    nomeFantasia: "Aspirar",
    certificado: "5af59d271f6e8f409178fbf3",
    simplesNacional: true,
    regimeTributario: 1,
    incentivoFiscal: true,
    incentivadorCultural: true,
    regimeTributarioEspecial: 5,
    endereco: {
      tipoLogradouro: "Avenida",
      logradouro: "Duque de Caxias",
      numero: "882",
      complemento: "17 andar",
      tipoBairro: "Zona",
      bairro: "Zona 01",
      codigoPais: "1058",
      descricaoPais: "Brasil",
      codigoCidade: "4115200",
      descricaoCidade: "Narnia",
      estado: "PR",
      cep: "87020025",
    },
    telefone: { ddd: "44", numero: "30379500" },
    email: "empresa@plugnotas.com.br",
    nfse: {
      ativo: true,
      tipoContrato: 0,
      config: {
        producao: true,
        rps: { serie: "RPS", numero: 1, lote: 1 },
        prefeitura: { login: "teste", senha: "teste123" },
        email: { envio: true },
      },
    },
    nfe: {
      ativo: true,
      tipoContrato: 0,
      config: {
        producao: true,
        impressaoFcp: true,
        impressaoPartilha: true,
        serie: 1,
        numero: 1,
        dfe: { ativo: true },
        email: { envio: true },
      },
    },
    nfce: {
      ativo: true,
      tipoContrato: 0,
      config: {
        producao: true,
        serie: 1,
        numero: 1,
        email: { envio: true },
        sefaz: {
          idCodigoSegurancaContribuinte: "string",
          codigoSegurancaContribuinte: "string",
        },
      },
    },
  },
};

axios
  .request(config)
  .then(function (resposta) {
    console.log(resposta.data);
  })
  .catch(function (error) {
    console.error(error);
  });
