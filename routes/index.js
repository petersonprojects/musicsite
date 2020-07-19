
// routes to the index ejs
const express = require('express');

const router = express.Router();

let dataFile = require('../data/data.json')

router.get('/',(req,res)=>{
    //code and then res.render
    let albums = dataFile.albums;


    let artist = albums[0].name;

    let albumCovers = []; //populate with all of the artwork
    let albumNames = [];
    let hrefsAM = [];
    

    albums.forEach(albumObj=>{
        albumCovers = albumCovers.concat(albumObj.artwork[0])
    })

    albums.forEach(albumObj=>{
        albumNames = albumNames.concat(albumObj.albumname)
    })

    albums.forEach(albumObj=>{
        hrefsAM = hrefsAM.concat(albumObj.appleMusic)
    })

    res.render('index',{
        albums:albums,
        artwork: albumCovers,
        albumnames: albumNames,
        artist: artist,
        hrefsAM: hrefsAM
    })

})

module.exports = router;