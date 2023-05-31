const express = require('express')
const ObjectId = require('mongodb').ObjectId

const createRouter = function(collection) {

    const router = express.Router();

    //show all
    router.get('/',(req,res) => {
        collection.find().toArray()
        .then((docs)=> res.json(docs))
        .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({status:500,error:err})
        })});
    //show 1
        router.get('/:id',(req,res) => {
            const id = req.params.id
            collection.findOne({_id: ObjectId(id)})
            .then((doc) => res.json(doc))
            .catch((err) => {
                console.error(err)
                res.status(404)
                res.json({status:404,error:err})
            })})
    //add 1
        router.post('/',(req,res) => {
            const item = req.body
            collection.insertOne(item)
            .then((dataBaseRes) => dataBaseRes["insertedId"].toString())
            .then((objIdStr)=> res.json(objIdStr))
            .catch((err) => {
                console.error(err)
                res.status(404)
                res.json({status:404,error:err})
            })})
    //remove 1
        router.delete('/:id',(req,res) => {
            const id = req.params.id
            collection.deleteOne({_id: ObjectId(id)})
            // .then(() => collection.find().toArray())
            // .then(result => res.json(result))
            .catch((err) => {
                console.error(err)
                res.status(404)
                res.json({status:404,error:err})
        })})
    return router

}

module.exports = createRouter
