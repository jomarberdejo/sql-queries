const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const connection = require('./dbConn')
const PORT = 4000

app.listen(PORT, ()=> {
    console.log(`App is running and listening to port ${PORT}`);
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, (err,result)=> {
       
        console.log(result)
        res.status(200).json(result)
    })  
})

app.get('/dashboard', (req, res)=> {
    const sql = "SELECT COUNT(email) FROM users WHERE email = 'joma@gmail.com' "
    connection.query(sql, (err, result) => {
        console.log(result)
        res.send(result)
    })
})