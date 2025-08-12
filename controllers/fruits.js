const Fruit = require('../models/Fruit')

const index = async (req, res) =>{
    try{
        const fruits = Fruit.showAll()
        res.status(200).send(fruits) //added status code and still sending back data from the fruits.json

    }catch (err){
        res.status(500).send({error: "Server Error"})
    }
}

const show = async (req, res) =>{
    const name = req.params.name.toLowerCase()
    try{
        const fruit =  Fruit.show(name)
        res.status(200).send(fruit)

    } catch (err){
        res.status(404).send({error: err})
    }
}

const create = async (req, res) =>{
    try{
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    } catch (err){
        res.status(409).send({error: err.message})
    }
}

const update = async (req,res) =>{
    const name = req.params.name.toLowerCase()
    try{
        const fruit = await Fruit.show(name)
        console.log('update controller',fruit)
        const result = await fruit.update(req.body)
        res.status(200).send(result)
    }catch (err){
        res.status(404).send({error: err.message})
    }
}

const destroy = async (req, res) =>{
    const name = req.params.name.toLowerCase()
    try{
        const fruit = await Fruit.show(name)
        const result = await fruit.destroy()
        res.sendStatus(204) //no content status code
    }catch (err){
        res.status(404).send({error: err.message})
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}