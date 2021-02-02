var axios = require("axios");

var config = {
  method: "get",
  url: "https://api.sandbox.plugnotas.com.br/empresa/90433695000198",
  headers: {
    "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
