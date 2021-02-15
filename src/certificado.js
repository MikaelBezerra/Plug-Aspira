/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
const Axios = require('axios')
const FormData = require('form-data')
const env = require('./config/confi_doc')

async function certificate({ Arquivo, Senha }) {
    try {
        const url = env.URLSearch.URL_API
        const data = new FormData();

        data.append('arquivo', Arquivo);
        data.append('senha', Senha);

        const response = await Axios({
            url: `${url}/certificado`,
            method: 'POST',
            data,
            headers: {
                'X-API-KEY': (env.Token.Senha),
                ...data.getHeaders()
            },
        })

        return response.data
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = certificate
