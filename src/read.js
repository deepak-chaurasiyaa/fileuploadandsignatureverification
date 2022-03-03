const fs = require("fs")
// const aa = require("../images/aa.pdf")
fs.readFile('../images/aa.pdf',(err,data)=>{
    if (err){
        console.log(err);
        return
    }
   var res=new Uint8Array(data).subarray(0,4)
   console.log(res)
})
