
'use strict'


const firebase = require('../db')
const firestore = firebase.firestore()
const autor = require('../models/autor')

class autorRepository{
    constructor() {}
    async create(data){
        let res =  await firestore.collection('autores').doc().set(data)
        return res
    }
async update(id, data){
let autor = await firestore.collection('autores').doc(id)   
let res = await autor.update(data) 
return res
}
async getAll(){
    let autores = await firestore.collection('autores').doc(id)   
    let res = await autores.get()
    return res
}
async getById(id) {
    let autor = await firestore.collection('autores').doc(id)
    let res = await autor.get()
    return res
}
async delete(id){
    return await firestore.collection('autores').doc(id).delete()

}
}

module.exports = autorRepository