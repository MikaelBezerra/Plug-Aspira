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
    },
    URLSearch: {
        URL: env.URL_API
    }
};
