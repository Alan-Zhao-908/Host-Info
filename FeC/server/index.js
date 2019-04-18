const express = require('express')
const db = require('../db/index.js').db
const parser = require('body-parser')
const path = require('path')
const cors = require('cors');


// set up header to prevent CORS errors and use in middleware
const headers = {
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
	'Access-Control-Allow-Headers': 'Content-Type'
}

const app = express()

app.get('*.js', function (req, res, next) {
  console.log('js requested');
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(parser.json())
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));
app.use(cors(headers));


// app.get('/:id', (req, res)=>{
// 	res.sendFile(path.join(__dirname, '../client/dist/index.html'))
// })

// gets all the data from the database on corresponding user id from request params 
app.get(`/host/:id`, (req, res) => {
	let id = JSON.stringify(req.params.id)

	db.all(`select * from hosts_neighborhood where id = ${id}`, (err, data) => {
		if (err) {
			console.error(err, `<-- Error occured on retreiving all the hosts from db, check 'get /host/:id' in server/index.js line 30`);
			res.status(500)
		} else {
	 	  res.json(data).status(200)
		}
	})
})


// repsonsible for sending the message to the host 
app.post('/contact/:host/message', (req, res) => {

	let host = JSON.stringify(req.params.host.split('+').join(' '))

	db.get(`insert into messages
    (toHost, messageBody) values (?, ?)`, [host, req.body.messageBody], (err) => {

		if (err) {
			console.error(err, ' <-- Error occured on sending a message to host, check post /contact/:host/message in server/index.js line 45');
			res.sendStatus(500)
		} 
		
		else res.sendStatus(201)
	})
})


// retrieves the message history with the given host 
app.get('/contact/:host/message', (req, res) => {

	let host = '%' + req.params.host.split(' ').join('%') + '%'

	db.all(` select * from messages where toHost Like "${host}"`, (err, data) => {
		if (err) {
			console.error(err, ' <-- Error occured on getting message history, check get /contact/:host/message in server/index.js line 63');
			res.sendStatus(500)
		} 
		else res.json(data).status(200)
	})
})




let port = 3005
app.listen(port, () => {
	console.log(`app is listening on port ${port}`)
})