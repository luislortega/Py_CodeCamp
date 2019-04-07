var request = require('request');

request('https://www.inegi.org.mx/app/api/denue/v1/consulta/buscar/restaurantes/21.85717833,-102.28487238/200/9fe5d171-2e5f-4383-a05f-40e38dfdcea7', function (err, res, body) {
    console.log(body);
  });
/*
const axios = require('axios');

axios.get('https://www.inegi.org.mx/app/api/denue/v1/consulta/buscar/restaurantes/21.85717833,-102.28487238/200/9fe5d171-2e5f-4383-a05f-40e38dfdcea7')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });*/
/*
const request = require('request');

request('https://www.inegi.org.mx/app/api/denue/v1/consulta/buscar/restaurantes/21.85717833,-102.28487238/200/9fe5d171-2e5f-4383-a05f-40e38dfdcea7', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});*/
/*

const https = require('https');

https.get('https://www.inegi.org.mx/app/api/denue/v1/consulta/buscar/restaurantes/21.85717833,-102.28487238/200/9fe5d171-2e5f-4383-a05f-40e38dfdcea7', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
    console.log("Error: " + err.message);
  });*/

  /*

var url = "https://www.inegi.org.mx/app/api/denue/v1/consulta/buscar/restaurantes/21.85717833,-102.28487238/200/9fe5d171-2e5f-4383-a05f-40e38dfdcea7"

request({
    url: url,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }else{
        console.log("error")
    }
})
*/