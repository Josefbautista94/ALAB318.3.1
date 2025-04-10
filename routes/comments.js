const express = require("express")
const router = express.Router() // creating a express router instance , using router to define comment-related endpoints
const error = require('../utilities/error') // custom error handling function

let comments = []; // This will store comment objects in memory, since there is no DB

// GET/ api/comments
router.get("/",(req,res)=>{ //defines a route that handles GET request sent to the /api/comments in the index.js
    const {userId,postId} = req.query; // using destructuring to exctract userId and postId from the query string, these values are used to filter the comments

    let filtered = comments; // setting up filtered and starting with all the original comments
    //we'll apply filters to this list based on the query parameters

    if(userId) filtered = filtered.filter(c => c.userId == userId); // if the userId is provided, it filters the list so only comments that match that UserId remain allowing clients to fetch only the comments by that specific user
    if(postId) filtered = filtered.filter(c => c.postId === postId) // if the postId is provided it filters the list again so only the comments for that post is provided

    res.json(filtered); // sends the possible filtered array of comments back to the client as JSON
})

module.exports = router;
