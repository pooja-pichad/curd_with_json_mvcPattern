var fs=require("fs")
// const user=require("readline-sync")
const axios=require("axios")                      ///by using axios its easy to send asynchrounous http request
axios.get("https://api.merakilearn.org/courses")
.then(res=>{
    meraki_data=res.data
    console.log(meraki_data)
    file=JSON.stringify(meraki_data,null,3)      ///stringify;-use for js object to json string
    fs.writeFileSync("course.json",file)

})
