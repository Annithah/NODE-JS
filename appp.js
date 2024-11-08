const express=require("express");
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log(`application running at ${port}`);
    
}
)
app.get('/getstudents', function(req,res){
    res.send({
        name:"anitha",
        age:4567
    })
})