const {MongoClient} = require('mongodb');
const { domainToUnicode } = require('url');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

async function doIT(){
    try {
        await client.connect();
        const db = client.db(dbName);
        console.log('create db successfully.');
        const collection = db.collection('documents');
        console.log('create collection successfully.');
        const result = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        
        console.log('Inserted results is:',result);       
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        
        const result1 = await collection.deleteMany({});
        console.log("Deleted documents:", result);
        
        const findResult1 = await collection.find({}).toArray;
        console.log('Found docments is:',findResult1)
    } catch(err){
        console.log(err);
    } finally{
        client.close();
    }
}

doIT();
