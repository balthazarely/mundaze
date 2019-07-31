const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new mongoose.Schema({
	title: {type: String, required:true},
    postBody: {type: String, required:true},
    dateCreated: {type: Date, default: Date.now},
    video: String, 
    photo: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;
