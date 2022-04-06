const express=require("express")
const bodyparser=require("body-parser")
const app=express();
const {router}=require("./routes/routerfile")
const port=5000;
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

app.use(bodyparser.json())
app.use('/',router)
app.listen(port,()=>{
    console.log("post number 5000")
})