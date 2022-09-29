
'use strict'


const express = require('express')
const cors = require('cors')
const config = require('./config')
const livrosRoutes = require('./routes/livros-routes')
const editoraRoutes = require('./routes/editora-routes')
const autorRoutes = require('./routes/autor-routes')
const tradutorRoutes = require('./routes/tradutor-routes')


const app = express()


app.use(express.json())

app.use(cors())


app.use('/api', livrosRoutes.routes)
app.use('/api/editora', editoraRoutes)
app.use('/api/autor', autorRoutes)
app.use('/api/tradutor', tradutorRoutes)



app.listen(config.port, () =>
  console.log('API está rodando em http://localhost:' + config.port)
)
