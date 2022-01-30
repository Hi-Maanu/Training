const {Mongoclient, MongoClient, ConnectionCheckOutStartedEvent} = require('mongodb');
const mod = require('./Common_JS_mod');
const url = 'mongodb://localhost:27017';
const dbName = 'toothsi_training';

const client = new MongoClient(url);


//  async function getData(){
//     let result = await client.connect();
//     db = result.db(dbName);
//     collection = db.collection('users');

//     let data =  await collection.find({}).toArray();
//     console.log(data);
//  }

// getData();

async function dbConnect(){
     let result = await client.connect();
     db = result.db(dbName);
    return  db.collection('users');

}

module.exports = dbConnect;