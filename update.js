const dbConnect=require('./index');

const update=async()=>{
    let db=await dbConnect();
    result=await db.updateOne(
        {
            "name":"bcd",
        },
        {
            $set:{"name":"efg","age":15}
        }

    )
    if(result.acknowledged)
    console.log(result);
    else
    console.log("error occurred");
}
update();