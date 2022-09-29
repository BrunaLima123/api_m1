
'use strict'


const firebase = require('../db')
const firestore = firebase.firestore()
const editora = require('../models/editora')

class editoraRepository{
    constructor() {}
    async create(data){
        let res =  await firestore.collection('editoras').doc().set(data)
        return res
    }
async update(id, data){
let editora = await firestore.collection('editoras').doc(id)   
let res = await editora.update(data) 
return res
}
async getAll(){
    let editoras = await firestore.collection('editoras').doc(id)   
    let res = await editoras.get()
    return res
}
async getById(id) {
    let editora = await firestore.collection('editoras').doc(id)
    let res = await editora.get()
    return res
}
async delete(id){
    return await firestore.collection('editoras').doc(id).delete()

}
}

module.exports = editoraRepository