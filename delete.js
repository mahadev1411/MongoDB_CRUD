const dbConnect=require('./index');

const delete1=async()=>{
    let db=await dbConnect();
    result=await db.deleteOne(
        {
            "name":"efg",
        }

    )
    if(result.acknowledged)
    console.log(result);
    else
    console.log("error occurred");
}
delete1();