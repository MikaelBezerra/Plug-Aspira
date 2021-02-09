/* eslint-disable no-console */
/* eslint-disable consistent-return */
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const FormData = require('form-data')
const env = require('./config/confi_doc')


async function certificado() {
    try {
        const url = (env.Certificate.URL)
        const data = new FormData();
        const path = Path.resolve(__dirname, 'doc', 'certificado.pfx')

        data.append('arquivo', Fs.createReadStream(path));
        data.append('senha', (env.Certificate.Senha));

        const response = await Axios({
            url,
            method: 'POST',
            data,
            headers: {
                'X-API-KEY': (env.Token.Senha),
                ...data.getHeaders()
            },
        })

        console.log(JSON.stringify(response.status))
        console.log(JSON.stringify(response.data))

        return response.data
    } catch (error) {
        console.error(error)
    }

}

certificado()
