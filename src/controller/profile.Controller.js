const express = require('express');
const res = require('express/lib/response');

const router = express.Router()
const app = express()
const path = require('path')
app.use(express.json());
const Profile=require("../models/profile.model")
const imageUpload = require("../utils/file-upload")
router.post('/', imageUpload.single('image'), async(req, res) => {
  const profile = await Profile.create(req.body);
    // res.send(req.file)
    res.send("hi")
}, (error, req, res, next) => {
    console.log("hi i am an error");
    res.status(400).send({ error: error.message })
})

module.exports =router;