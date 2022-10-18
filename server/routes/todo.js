// Here is management for HTTP calls for route 

const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2/promise');
// const config = require('./config');
// const db = require('./services/db')
const todo = require('../services/todo');
const router = express.Router();

// app.get("/",async function (req,res){
router.get('/',async function (req,res, next){
    try {
        // const connection = await mysql.createConnection(config.db)     
        // const [result,] = await connection.execute('select * from task')
        // const result = await db.query('select * from task')
        // const result =  await todo.getAllTasks()
        // if(!result) result=[] 
        // res.status(200).json(result)
        res.status(200).json(await todo.getAllTasks())
    } catch(err) {
        // res.status(500).json({error: err.message})
        next(err)
    }
})

// app.post("/new", async function(req, res){
    // app.post("/new", async function(req, res){
router.post('/new', async function(req, res, next){

    try{
        // const connection = await mysql.createConnection(config.db)
        // const [result,] = await connection.execute('insert into task (description) values (?) ', [req.body.description])
        // const result = await db.query('insert into task (description) values (?) ', [req.body.description])
        // const result =  await todo.addTask(req.body)        
        res.status(200).json(await todo.addTask(req.body))
    } catch(err){
        // res.status(500).json({error: err.message})
        next(err)
    }
})

router.delete('/delete/:id', async function(req, res, next){
    try{
        // const connection = await mysql.createConnection(config.db)
        // await connection.execute('delete from task where id = ? ', [req.params.id])
        // const result = await db.query('delete from task where id = ? ', [req.params.id])
        // await todo.removeTask(req.params.id) 
        res.status(200).json(await todo.removeTask(req.params.id))
    } catch(err){
        // res.status(500).json({error: err.message})
    next(err)
    }
})

router.put('/edit', async function(req, res, next){
    try{
        res.status(200).json(await todo.updateTask(req.body))
    } catch(err){   
    next(err)
    }
})


module.exports = router