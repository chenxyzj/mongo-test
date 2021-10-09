const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';
// const db;
// const collection;

client.connect()
    .then(() => {
        console.log('Connected to mongodb successfully.');
        const db = client.db(dbName);
        console.log('create db successfully.');
        const collection = db.collection('documents');
        console.log('create collection successfully.');
        return {collection:collection,result:collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])}
    })
    .then((result) => {
        console.log('Inserted results is:',result.result);
        return result.collection.find({}).toArray();
    })
    .then(findResult => {
        console.log('Found documents =>', findResult);
    })
    .then(() => { console.log('End 1.');})
    .then(() => { console.log('End 2.');})
    .catch((err) =>  console.log(err))
    .finally(() => client.close());