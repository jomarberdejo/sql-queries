const mysql = require('mysql');

const connectionInfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jomar_db'
}

const connection = mysql.createConnection({
    ...connectionInfo
})

module.exports = connection;