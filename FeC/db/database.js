
const {db_password} = require('../../config')
const {Client} = require('pg')
const pg = require('pg')

const pool = new pg.Pool({
  host: '3.86.3.222',
  port: 5432,
  user: 'postgres',
  password: db_password,
  database: 'airbnb_host_neighborhood',
  max:200
}, (err) => {
  if (err) {
    console.log(err, 'err occured on connection')
  } else {
    console.log('successful connection')
  }
})

pool.connect( (err) => {
  if (err) {
    return console.error('Error acquiring client ', err.stack)
  }
})


// const db = new Client({
//   host: '3.86.3.222',
//   port: 5432,
//   user: 'postgres',
//   password: db_password,
//   database: 'airbnb_host_neighborhood'
// }, (err) => {
//   if (err) {
//     console.log(err, 'err occured on connection')
//   } else {
//     console.log('successful connection')
//   }
// })
// db.connect()


module.exports.db = pool;