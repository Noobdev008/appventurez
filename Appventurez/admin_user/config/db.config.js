const {createPool} = require('mysql2');


const pool = createPool({
    port:3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database:'admin_user',
});

module.exports =pool;  
