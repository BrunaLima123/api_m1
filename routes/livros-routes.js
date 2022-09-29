
const express = require('express')
const {
  addLivro,
  getAllLivro,
  getLivro,
  updateLivro,
  deleteLivro
} = require('../controllers/livroController')


const router = express.Router()

router.get('/livro', getAllLivro)

router.get('/livro/:id', getLivro)

router.post('/livro', addLivro)

router.put('/livro/:id', updateLivro)

router.delete('/livro/:id', deleteLivro)

module.exports = {
  routes: router
}