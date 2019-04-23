
const {db_password} = require('../../config')
const {Client} = require('pg')
const db = new Client({
  host: '52.90.63.27',
  port: 5432,
  user: 'postgres',
  password: db_password,
  database: 'airbnb_host_neighborhood'
}, (err) => {
  if (err) {
    console.log(err, 'err occured on connection')
  } else {
    console.log('successful connection')
  }
})


db.connect()

// db.query('select * from hosts_neighborhood limit 1', (err, data) => {
//   console.log(data.rows)
// })

module.exports.db = db;