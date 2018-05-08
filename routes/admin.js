var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://oliver:neubauten@cluster0-shard-00-00-1ezm9.mongodb.net:27017,cluster0-shard-00-01-1ezm9.mongodb.net:27017,cluster0-shard-00-02-1ezm9.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', function(error) {
  if (error) {
    console.log(error)
  }
  else {
    console.log('connected to mongo atlas!!');
  }
});

const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

const PostsSchema = new Schema({
    tags: Array,
    text: String,
    date: {type: Date, default: Date.now}
})

var Posts = mongoose.model('Posts', PostsSchema);



router.get('/', (req, res) => {
    res.render('admin');
})

router.post('/', (req, res) => {
var newPost = new Posts({
    text: req.body.content,
})
newPost.save((error) => {
    if (error) {console.log(error)}
    else {console.log("new post saved!")}
})
res.send("thanks");
})

module.exports = router;