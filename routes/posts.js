var express = require('express');
var moment = require('moment');
var router = express.Router();

const mongoose = require('mongoose');
var Posts = mongoose.model('Posts');

router.get('/', (req, res) => {
    Posts.find({}, 'text date', (err, stuff) => {
        var formattedstuff = stuff.map((postObj) => {
            return {text: postObj.text, date: moment(postObj.date).format('LL')}
        })
        if (err) {throw err}
        else {
            console.log()
            res.render('posts', {posts: formattedstuff});
        }
    })
    
})

module.exports = router;