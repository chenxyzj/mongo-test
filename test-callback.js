const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

client.connect((err) => {
    if(err) return console.log('Error:',err);
    console.log('Connected to mongodb successfully.');
    const db = client.db(dbName);
    console.log('create db successfully.');
    const collection = db.collection('documents');
    console.log('create collection successfully.');
    collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }],(err,result) => {
        if(err) return console.log(err);

        console.log('Inserted results is:',result);
     
        collection.find({}).toArray((err,findResult) => {
            if(err) return console.log(err);

            console.log('Found documents =>', findResult);
       
            collection.deleteMany({}, (err,result) => {
                if(err) return console.log(err);

                console.log("Deleted documents:", result);
       
                collection.find({}).toArray((err,findResult) => {
                    if(err) return console.log(err);

                    console.log('Found docments is:',findResult);
                    client.close();
                });
            });
        });
    });
});
