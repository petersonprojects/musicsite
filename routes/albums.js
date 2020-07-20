
const express = require('express');

const router = express.Router();

let dataFile = require('../data/data.json')

const albums = dataFile.albums;

router.get(`/albums/${albums.shortname}`,(req,res)=>{
     //code and then res.render

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
 
     res.render('albums',{
         albums:albums,
         artwork: albumCovers,
         albumnames: albumNames,
         artist: artist,
         hrefsAM: hrefsAM
     })
})