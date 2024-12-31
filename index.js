const {MongoClient}=require('mongodb');
//or const MongoClient=require('mongodb').MongoClient;

const url='mongodb://localhost:27017';
const client=new MongoClient(url);

async function dbConnect()
{
    let result=await client.connect();
    let db=result.db('Database1'); //name of database
    return db.collection('Collection1');
}
module.exports=dbConnect;