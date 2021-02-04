/* eslint-disable no-console */
/* eslint-disable consistent-return */
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const FormData = require('form-data')
require('dotenv').config()

async function certificado() {
    try {
        const url = (process.env.CERTIFIC_URL)
        const data = new FormData();
        const path = Path.resolve(__dirname, 'doc', 'certificado.pfx')

        data.append('arquivo', Fs.createReadStream(path));
        data.append('senha', '123mudar');

        const response = await Axios({
            url,
            method: 'POST',
            data,
            headers: {
                'X-API-KEY': (process.env.MY_SENHA),
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
