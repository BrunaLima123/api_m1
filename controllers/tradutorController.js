
'use strict'


require('../models/tradutor')
const repository = require('../repositories/tradutor-repository')

function tradutorController() {}

tradutorController.prototype.post = async (req, res) => {

  let resultado = await new repository().create(req.body)

  res.status(201).send(resultado)
}

tradutorController.prototype.put = async (req, res) => {

  let resultado = await new repository().update(req.params.id, req.body)

  res.status(202).send(resultado)
}

tradutorController.prototype.get = async (req, res) => {

  let lista = await new repository().getAll()

  res.status(200).send(lista)
}

tradutorController.prototype.getById = async (req, res) => {

  let tradutor = await new repository().getById(req.params.id)

  res.status(200).send(tradutor)
}

tradutorController.prototype.delete = async (req, res) => {

  let resultado = await new repository().delete(req.params.id)

  res.status(204).send(resultado)
}

module.exports = tradutorController
