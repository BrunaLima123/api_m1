
'use strict'


const firebase = require('../db')
const firestore = firebase.firestore()
const tradutor = require('../models/tradutor')

class tradutorRepository{
    constructor() {}
    async create(data){
        let res =  await firestore.collection('tradutores').doc().set(data)
        return res
    }
async update(id, data){
let tradutor = await firestore.collection('tradutores').doc(id)   
let res = await tradutor.update(data) 
return res
}
async getAll(){
    let tradutores = await firestore.collection('tradutores').doc(id)   
    let res = await tradutores.get()
    return res
}
async getById(id) {
    let tradutor = await firestore.collection('tradutores').doc(id)
    let res = await tradutor.get()
    return res
}
async delete(id){
    return await firestore.collection('tradutores').doc(id).delete()

}
}

module.exports = tradutorRepository