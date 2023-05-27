const express = require('express')
var axios = require("axios")
var path  = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(path.join(__dirname,'public'))
  return res.sendFile('public/index.html', {root : __dirname})
})

app.get('/searchword', (req, res) => {
  //res.send('Hello World sum11ithello!')
  console.log(req.params);

  var options = {
    method: 'GET',
    url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
    params: {word: 'clever'},
    headers: {
      'X-RapidAPI-Key': '091c0c60c0mshb556639ac1111e9p151ecbjsna0c146689fb1',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };
  // console.log(word)
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  res.json(response.data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})