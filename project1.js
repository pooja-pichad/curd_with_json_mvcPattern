var fs=require("fs")
const axios=require("axios")                    
  ///by using axios its easy to send asynchrounous http request
// axios.get("https://api.merakilearn.org/courses")
// .then(res=>{
//     meraki_data=res.data
//     console.log(meraki_data)
//     file=JSON.stringify(meraki_data,null,3)      ///stringify;-use for js object to json string
//     fs.writeFileSync("course.json",file)

// })


const express=require("express")
const meraki_data=require("./course.json")
var app=express()
app.use(express.json())
app.listen(3000,()=>{
    console.log("3000 port run")
})
app.get('/',(req,res)=>{
    res.json({message:"API is working"})
})
app.get("/data",(req,res)=>{
    res.json(meraki_data)
})

app.post('/apidata1',(req,res)=>{
    const user={
        id: req.body.id,
        name: req.body.name,
        logo: req.body.log,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type:req.body.course_type,
        lang_available: req.body.lang_available

    }
    meraki_data.push(user)
    res.send({message:"post succesfully"})
})

app.put("/dataput/:id",(req,res)=>{
    let id= req.body.id
    let name= req.body.name
    let logo= req.body.log
    let notes= req.body.notes
    let days_to_complete= req.body.days_to_complete
    let short_description=req.body.short_description
    let type= req.body.type
    let course_type=req.body.course_type
    let lang_available= req.body.lang_available

    let index=meraki_data.findIndex((data)=>{
        return (data.id==Number.parseInt(id))
    
    })
    if (index>=0){
        let data1=meraki_data[index]
        data1.name=name
        data1.notes=notes
        data1.days_to_complete=days_to_complete
        data1. short_description=short_description
        data1.type= type
        data1.course_type=course_type
        data1.logo=logo
        data1. lang_available=lang_available

        res.json(data1)
        res.send({message:"success"})

    }
    else{
        res.send({message:"do not "})
    }

})

app.delete('/delete/:id',(req,res)=>{
    let id=req.params.id;
    let index =meraki_data.findIndex((data)=>{
        return (data.id==Number.parseInt(id))
    })
    if(index>=0){
        let data1=meraki_data[index]
        meraki_data.splice(index,1)
        res.json(data1)
    }
    else{
        res.send({message:" try again "})
    }
})