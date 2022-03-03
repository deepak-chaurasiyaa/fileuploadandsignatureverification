const multer=require('multer')
const path=require('path')
const fs = require("fs")
const imageStorage = multer.diskStorage({
    destination: '../Desktop/images', 
      filename: (req, file, cb) => {
        cb(null, (file.originalname))
        let xyz = file.originalname;
        setTimeout(function(){
            getvalue(xyz)
        },10)
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 10000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png||jpg||pdf||txt)$/)) { 
         console.log("imageStorage");
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
})

function getvalue(data){
    fs.readFile(`../Desktop/images/${data}`,(err,data)=>{
        if (err){
            console.log(err);
            return
        }
    var res=new Uint8Array(data).subarray(0,4)
    console.log(res)
    })
}
module.exports = imageUpload