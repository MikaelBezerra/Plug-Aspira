'use strict'

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')
const FormData = require('form-data')

async function uploadCertificate (){
  try {
    const url = 'https://api.sandbox.plugnotas.com.br/certificado'
    const data = new FormData();
    const path = Path.resolve(__dirname, 'doc', 'certificado.pfx')

    data.append('arquivo', Fs.createReadStream(path));
    data.append('senha', '123mudar');

    const response = await Axios({
      url,
      method: 'POST',
      data,
      headers: { 
        'X-API-KEY': '2da392a6-79d2-4304-a8b7-959572c7e44d', 
        ...data.getHeaders()
      },
    })

    console.log(JSON.stringify(response.status))
    console.log(JSON.stringify(response.data))

    return response.data
  } catch(error){
    console.error(error)
  }

}

uploadCertificate()