
'use strict'


require('../models/autor')
const repository = require('../repositories/autor-repository')

function autorController() {}

autorController.prototype.post = async (req, res) => {

  let resultado = await new repository().create(req.body)

  res.status(201).send(resultado)
}

autorController.prototype.put = async (req, res) => {

  let resultado = await new repository().update(req.params.id, req.body)

  res.status(202).send(resultado)
}

autorController.prototype.get = async (req, res) => {

  let lista = await new repository().getAll()

  res.status(200).send(lista)
}

autorController.prototype.getById = async (req, res) => {

  let autor = await new repository().getById(req.params.id)

  res.status(200).send(autor)
}

autorController.prototype.delete = async (req, res) => {

  let resultado = await new repository().delete(req.params.id)

  res.status(204).send(resultado)
}

module.exports = autorController
