

const express = require('express');
const router = express.Router();

const data = require('../data/data.json');

router.get('/chat', (req,res)=>{
    let albums = data.albums;
    res.render('chat', {
        // stuff needed for partials
        albums:albums
    });

});

module.exports = router;