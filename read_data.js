const dbConnect=require('./index');

const read=async()=>{
    let data=await dbConnect();
    data=await data.find({}).toArray();
    console.log(data);
}
read()