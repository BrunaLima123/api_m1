
'use strict'


require('../models/editora')
const repository = require('../repositories/editora-repository')

function editoraController() {}

editoraController.prototype.post = async (req, res) => {

  let resultado = await new repository().create(req.body)

  res.status(201).send(resultado)
}

editoraController.prototype.put = async (req, res) => {

  let resultado = await new repository().update(req.params.id, req.body)

  res.status(202).send(resultado)
}

editoraController.prototype.get = async (req, res) => {

  let lista = await new repository().getAll()

  res.status(200).send(lista)
}

editoraController.prototype.getById = async (req, res) => {

  let editora = await new repository().getById(req.params.id)

  res.status(200).send(editora)
}

editoraController.prototype.delete = async (req, res) => {

  let resultado = await new repository().delete(req.params.id)

  res.status(204).send(resultado)
}

module.exports = editoraController
