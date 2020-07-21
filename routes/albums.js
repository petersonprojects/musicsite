
const express = require('express');

const router = express.Router();

let dataFile = require('../data/data.json')


router.get('/albums',(req,res)=>{
     //code and then res.render

    const albums = dataFile.albums; 
    const artist = albums[0].name;

     let albumCovers = []; //populate with all of the artwork
     let albumNames = [];
     let hrefsAM = [];
 
     albums.forEach(albumObj=>{
         albumCovers = albumCovers.concat(albumObj.artwork[0])
         hrefsAM = hrefsAM.concat(albumObj.appleMusic)
         albumNames = albumNames.concat(albumObj.albumname)

     })
 
     res.render('albums',{
         albums:albums,
         artwork: albumCovers,
         albumnames: albumNames,
         artist: artist,
         hrefsAM: hrefsAM
     })
})

router.get(`albums/:albumid`,(req,res)=>{

    const albums = dataFile.albums; 
    const artist = albums[0].name;

    let covers = [];
    let album = [];
    
    albums.forEach(albumObj=>{

        if(albumObj.shortname == req.params.albumid)
        {
            covers.push(albumObj.artwork[0]);
            album.push(albumObj);

        }

    })

    res.render('albums',{

        artwork: covers,
        albums: album
        
    })

})

module.exports = router;