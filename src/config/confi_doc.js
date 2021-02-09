/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
require('dotenv').config()

const env = process.env

module.exports = {
    Token: {
        Senha: env.MY_SENHA
    },
    Certificate: {
        Senha: env.MY_CERTIFIC,
        URL: env.CERTIFIC_URL
    },
    Empresa: {
        URL: env.EMPRESAS_URL
    },
    Nota: {
        URL: env.NOTA_URL
    },
    Download: {
        P_URL: env.PDF_URL,
        X_URL: env.XML_URL
    }
};
