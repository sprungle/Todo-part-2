// week 7 todo parts 5 and 6 continue on a cloned repo from week 6

// reformatting the strucutre, refactoring the app

const express = require('express');
const cors = require('cors');
const todoRouter = require('./routes/todo')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', todoRouter)

const port = 3001

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({error: err.message})
    return
})

app.listen(port)