const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';
// const db;
// const collection;

client.connect(() => {
    console.log('Connected to mongodb successfully.');
    const db = client.db(dbName);
    console.log('create db successfully.');
    const collection = db.collection('documents');
    console.log('create collection successfully.');
    collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }],(err,result) => {
        console.log('Inserted results is:',result);
        const db = client.db(dbName);
        console.log('open db successfully.');
        const collection = db.collection('documents');
        console.log('open collection successfully.');        
        collection.find({}).toArray((err,findResult) => {
            console.log('Found documents =>', findResult);
            const db = client.db(dbName);
            console.log('open db successfully.');
            const collection = db.collection('documents');
            console.log('open collection successfully.');        
            collection.deleteMany({}, (err,result) => {
                console.log("Deleted documents:", result);
                const db = client.db(dbName);
                console.log('open db successfully.');
                const collection = db.collection('documents');
                console.log('open collection successfully.');        
                collection.find({}).toArray((err,findResult) => {
                    console.log('Found docments is:',findResult);
                    client.close();
                });
            });
        });
    });
});
