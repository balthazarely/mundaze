const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// if(image === '') {
//   image = undefined;
// }

const postSchema = new mongoose.Schema({
	title: {type: String, required:true},
    postBody: {type: String, required:true},
    dateCreated: {
        type: Date, 
        default: Date.now
    },
    video: String, 
    photo: String,
    // photo: {
    //     type: String, 
    //     default:'https://i.imgur.com/3FWYaDH.png'
    // },  
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});




const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;
