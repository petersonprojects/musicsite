
// routes to the index ejs
const express = require('express');

const router = express.Router();

let dataFile = require('../data/data.json')

router.get('/',(req,res)=>{
    //code and then res.render
    let albums = dataFile.albums;
    let artist = albums[0].name;
    
    // albums.forEach(albumObj=>{
        
    // })

    res.render('index',{
        artist:artist,
        albums:albums
    })

})

module.exports = router;