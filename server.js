const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', onhome)
  .get('/about', onabout)


function onhome(req, res) {
  res.send('<h1>Hello World!<h1>')
}

function onabout(req,res) {
  res.send('<h1>about me</h1>')
}