
// routes to the index ejs
const express = require('express');

const router = express.Router();

let dataFile = require('../data/data.json')

router.get('/',(req,res)=>{
    //code and then res.render
})

module.exports = router;