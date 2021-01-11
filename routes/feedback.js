
const express = require('express')
const router = express.Router();
const data = require('../data/data.json')

//this file displays feedback form from feedback.ejs
router.get('/feedback', (req,res)=>{

    //make sure partials are gettting data needed to render

    res.render('feedback.ejs',{
        albums: data.albums,
        pageID: "Feedback"
    })

})


module.exports = router;