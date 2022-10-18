// Here is database connection and query execution

const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params){
    //open database connection:
    const connection = await mysql.createConnection(config.db)
    // execute sql statement
    const [result,] = await connection.execute(sql, params)
    
    return result
} 

module.exports = { query }