// realizando as importações
const express = require('express')
const {
  addLivro,
  getAllLivro,
  getLivro,
  updateLivro,
  deleteLivro
} = require('../controllers/livroController')

// inicializando as rotas do express
const router = express.Router()

// criando as rotas para o recurso 'livro'
// definindo a rota para a listagem de livro
router.get('/livro', getAllLivro)
// definindo a rota para listar livro específico
router.get('/livro/:id', getLivro)
// definindo a rota para cadastro de livro
router.post('/livro', addLivro)
// definindo a rota para alterar um livro
router.put('/livro/:id', updateLivro)
// definindo a rota para excluir um livro
router.delete('/livro/:id', deleteLivro)

module.exports = {
  routes: router
}