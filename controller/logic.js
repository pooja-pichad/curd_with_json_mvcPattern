const meraki_data=require("../model/course.json")
// const bodyparser=require("body-parser")
var fs=require("fs")


const get_method=(req,res)=>{
    res.json(meraki_data)        //we used here json bescase we want aur data is come in json  format
}


const post_method = (req,res)=>{               //post method is use for post or ceate a new data 
    console.log(req.body)
    const user={
        id: meraki_data.length+1,
        name: req.body.name,
        logo: req.body.log,
        notes: req.body.notes,
        days_to_complete: req.body.days_to_complete,
        short_description: req.body.short_description,
        type: req.body.type,
        course_type:req.body.course_type,
        lang_available: req.body.lang_available

    }
    meraki_data.push(user)     ///stringify;-use for js object to json string
    fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))               //jo bhi merakki data hai oo user mai aa jane ke lie
    res.send({message:"post successfully"})

}

const put_method=(req,res)=>{                             //put method is used for a update the given data
    let id= req.body.id
    let name= req.body.name
    let logo= req.body.log
    let notes= req.body.notes
    let days_to_complete= req.body.days_to_complete
    let short_description=req.body.short_description
    let type= req.body.type
    let course_type=req.body.course_type
    let lang_available= req.body.lang_available

    let index=meraki_data.findIndex((data)=>{         // finindex function is used for find  perticular index
        return (data.id==Number.parseInt(id))          // parseint is used for convert given id in to integer
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
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        // res.send({message:"success"})

    }
    else{
        res.send({message:"do not "})
    }
}

const delete_data=(req,res)=>{
    let id=req.params.id;                       
    let index =meraki_data.findIndex((data)=>{
        return (data.id==Number.parseInt(id))
    })
    if(index>=0){
        let data1=meraki_data[index]
        meraki_data.splice(index,1)    //splice function The splice() method adds and/or removes array elements.
        fs.writeFileSync("course.json",JSON.stringify(meraki_data,null,3))  
        res.json(data1)
    }
    else{
        res.send({message:" try again "})
    }
}




module.exports={get_method,
                post_method,
                put_method,
                delete_data}



