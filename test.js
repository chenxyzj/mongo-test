const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

client.connect()
    .then(() => {
        console.log('Connected to mongodb successfully.');
        const db = client.db(dbName);
        console.log('create db successfully.');
        const collection = db.collection('documents');
        console.log('create collection successfully.');
        collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
        .then((result) => console.log('Result is:',result))
        .catch((err) =>  console.log(err))
        .then(() => client.close());
    })
    .then((result) => console.log('Result is:',result))
    .catch((err) =>  console.log(err));