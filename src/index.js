import express from 'express'
import bodyParser from 'body-Parser'

const app = express()

app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.listen(3000)
