const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');
const requireLogin = require("../middleware/requireLogin");


//INDEX
router.get('/', async (req, res) => {
    try {
        const findPosts = await Posts.find();
        console.log("this is the index for the post");
        res.render('posts/index.ejs', {
            posts: findPosts,
        });
    }catch (error) {
        res.send(error);
    }
})


//NEW
router.get('/new', async (req, res) => {
    try{
        const foundUserId = req.session.userId
        console.log(foundUserId)
        console.log("this is the new page for the post")
        res.render('posts/new.ejs', {
            userId: foundUserId
        })
    }catch (error) {
        res.send(error);
    }
})

//SHOW
router.get('/:id', async (req, res) => {
    try{
        const foundShowPost = await Posts.findById(req.params.id).populate("user"); 
        const foundPostBody = await Posts.findById(req.params.id);
        console.log(foundShowPost);
        res.render('posts/show.ejs', {
            posts: foundShowPost,
        });
    }catch (error){
        res.send(error);
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    try{
        await Posts.findByIdAndDelete(req.params.id);
        res.redirect('/posts');
    } catch(error) {
        res.send(error);
    }
});



//EDIT
router.get('/:id/edit', async (req, res) => {
    try{
     const foundPost = await Posts.findById(req.params.id);
     res.render('posts/edit.ejs', {
         posts: foundPost
     })
 }catch(error){
         res.send(error);
     }
 });

 //UPDATE 
 router.put('/:id', async(req, res) => {
     try{
         const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body)
         res.redirect('/posts');
     } catch(error){
         res.send(err)
     }
 });

//CREATE
router.post('/', async (req, res) => {
    try{
        const createdPost = await Posts.create(req.body);
        console.log(req.body)
        res.redirect('/posts');
    }catch(error) {
        res.send(error)
    }
});







module.exports = router;