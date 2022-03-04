const express = require('express');
const res = require('express/lib/response');

const router = express.Router()
const app = express()
const path = require('path')
app.use(express.json());
const Profile=require("../models/profile.model")
const imageUpload = require("../utils/file-upload")
router.post('/', imageUpload.single('image'), async(req, res) => {
  // console.log(req.body,"hjdfd")
  const profile = await Profile.create({
    name:req.body.name,
    image:req.file.path

  })

    res.send(profile)
    res.send("hi")
}, (error, req, res, next) => {
    console.log("hi i am an error");
    res.status(400).send({ error: error.message })
})

router.get("/",async(req,res)=>{
  const profile = await Profile.find().lean().exec();
  return res.status(200).json(profile)
})

module.exports =router;