const mongoose = require('mongoose');

<<<<<<< HEAD
const connectionString = 'mongodb://localhost/monday10';
=======
const connectionString = process.env.MONGODB_URI;
>>>>>>> e219d1655af7d220f58c9827199d3925ad59e9bb
const db = mongoose.connection;

mongoose.connect(connectionString, {useNewUrlParser: true, useCreateIndex: true});


db.on('connect', ()=>{
	console.log(`mongoose is connected to ${connectionString}`)
})

db.on('disconnect', ()=>{
	console.log(`mongoose is disconnected to ${connectionString}`)
})

db.on('error', (err)=>{
	console.log(`mongoose error: ${err}`)
})




















