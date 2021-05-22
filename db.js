// import postgres module 
const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    password: "0160943939", // Enter your postgres super password 
    database: "postgreswithng", // Enter created database name
    host: "localhost",
    port: 5432
});

module.exports = client;


// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "0160943939",
//     database: "postgreswithng",
//     host: "localhost",
//     port: 5432
// });

// module.exports = pool;