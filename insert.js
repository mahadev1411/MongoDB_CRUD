const dbConnect=require('./index');

const insert=async()=>{
    let db=await dbConnect();
    result=await db.insertOne(
        {
            "name":"bcd",
            "age":10
        }

    )
    if(result.acknowledged)
    console.log(result);
    else
    console.log("error occurred");
}
insert();