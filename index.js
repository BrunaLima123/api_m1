
'use strict'


const express = require('express')
const cors = require('cors')
const config = require('./config')
const livrosRoutes = require('./routes/livros-routes')


const app = express()


app.use(express.json())

app.use(cors())


app.use('/api', livrosRoutes.routes)



app.listen(config.port, () =>
  console.log('API está rodando em http://localhost:' + config.port)
)