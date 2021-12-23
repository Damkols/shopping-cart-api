const express = require('express');
const router = express.Router();

//posts Model
const Posts = require('../../models/Posts')

// @routes Get api/posts
// @description Get All posts
router.get('/', async (req, res) => {
    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No items');
        res.status(200).json(posts);
    }catch(err) {
        res.status(400).json({ msg: err })
    }
});


// @routes Get api/posts/:id
// @description Get A post
router.get('/:id', async (req, res) => {
    try{
        const post = await Posts.findById(req.params.id);
        if(!post) throw Error('No item');
        res.status(200).json(post);
    }catch(err) {
        res.status(400).json({ msg: err })
    }
});



// @routes Post api/posts
// @description Create A post
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);

    try{
        const post = await newPost.save();
        if(!post) throw Error('Something went wrong while saving the post')

        res.status(200).json(post);

    }catch(err) {
        res.status(400).json({ msg: err })
    }
});




// @routes Update api/posts/:id
// @description Update a post
router.patch('/:id', async (req, res) => {
    try{
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error('Something went wrong while updating the post');
        res.status(200).json({ successfullyUpdated: true })
    }catch(err) {
        res.status(400).json({ msg: err })
    }
});



// @routes Delete api/posts/:id
// @description Delete a post
router.delete('/:id', async (req, res) => {
    try{
        const post = await Posts.findByIdAndDelete(req.params.id);
        if(!post) throw Error('No post found!');
        res.status(200).json({ successfullyDeleted: true })
    }catch(err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;