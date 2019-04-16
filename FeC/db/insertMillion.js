const {db_password} = require('../../config')

const {Client} = require('pg')
const client = new Client({
  user: 'postgres',
  password: db_password,
  database: 'airbnb_host_neighborhood'
})

client.connect()
.then(() => console.log('Connected successfully'))
.then(() => client.query(
  `CREATE TABLE if not exists items (id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)`
))
.catch(e => console.log(e))
.finally(() => client.end())