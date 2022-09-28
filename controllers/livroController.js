
'use strict'

const firebase = require('../db')
const Livro = require('../models/livros')
const firestore = firebase.firestore()


const addLivro = async (req, res, next) => {
  try {
    
    const data = req.body
  
    await firestore.collection('Livro').doc().set(data)
    res.status(201).send('Livro salvo com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}


const getAllLivro = async (req, res, next) => {
  try {

    const Livro = await firestore.collection('Livro')

    const data = await Livro.get()
   
    const LivroArray = []

    if (data.empty) {
      res.status(404).send('Não há Livros cadastrados!')
    } else {
      data.forEach(doc => {
     
    
        const Livro = new Livro(
          doc.id,
          doc.data().name,
          doc.data().pages,
          doc.data().genre,
          doc.data().description
        )
        LivroArray.push(Livro)
      })
      res.status(200).send(LivroArray)
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}


const getLivro = async (req, res, next) => {
  try {

    const id = req.params.id
  
    const Livro = await firestore.collection('Livro').doc(id)
  
    const data = await Livro.get()
   
    if (!data.exists) {
      res.status(404).send('Não foi encontrado um Livro com o ID informado!')
    } else {
      res.status(200).send(data.data())
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const updateLivro = async (req, res, next) => {
  try {

    const id = req.params.id

    const data = req.body

    const Livro = await firestore.collection('Livro').doc(id)
   
    await Livro.update(data)
    res.status(201).send('Livro atualizado com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const deleteLivro = async (req, res, next) => {
  try {

    const id = req.params.id

    await firestore.collection('Livro').doc(id).delete()
    res.status(200).send('Livro excluído com sucesso!')
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  addLivro,
  getAllLivro,
  getLivro,
  updateLivro,
  deleteLivro
}