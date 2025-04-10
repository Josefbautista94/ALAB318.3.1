const express = require("express")
const router = express.Router() // creating a express router instance , using router to define comment-related endpoints
const error = require('../utilities/error') // custom error handling function

let comments = []; // This will store comment objects in memory, since there is no DB

// GET/ api/comments
router.get("/", (req, res) => { //defines a route that handles GET request sent to the /api/comments in the index.js
    const { userId, postId } = req.query; // using destructuring to exctract userId and postId from the query string, these values are used to filter the comments

    let filtered = comments; // setting up filtered and starting with all the original comments
    //we'll apply filters to this list based on the query parameters

    if (userId) filtered = filtered.filter(c => c.userId == userId); // if the userId is provided, it filters the list so only comments that match that UserId remain allowing clients to fetch only the comments by that specific user
    if (postId) filtered = filtered.filter(c => c.postId === postId) // if the postId is provided it filters the list again so only the comments for that post is provided

    res.json(filtered); // sends the possible filtered array of comments back to the client as JSON
})

//POST /api/comments
router.post("/", (req, res, next) => { // Creating a post route at /api/comments, we're calling this when we want to add a new comment it could be either on the front end orr Postman

    const { userId, postId, body } = req.body; // using destructuring to pull out userId, postId and body

    // For example, if the JSON sent is:
    // { "userId": 1, "postId": 3, "body": "Nice post!" }
    // …it assigns:

    // userId = 1

    // postId = 3

    // body = "Nice post!"

    if ((!userId || !postId || !body)) { // checks if any of the required fields are missing
        return next(error(400, "Missing fields : userId, postId and body are required!")) // if one is missing it triggers a custom error handler with a bad request(400)
    }

    const newComment = { // creating a new comment object
        id: comments.length + 1, // id is generated as one more than the current number of comments
        userId,
        postId,
        body,
    };
    comments.push(newComment); // pushing the new comments to the comments array
    res.status(201).json(newComment); // sends a 201 response with the newly added comment 
})

router.get("/:id", (req, res, next) => { // setting up a get route that listens at /api/comments/:id, ex : /api/comments/5

    const comment = comments.find(c => c.id == req.params.id); // looking through the comments array for a comment whose id matches the one in the URL

    if (!comment) {
        return next(error(404, "The comment wasn't found!")) // If the comment isnt founf it returns a 404

    }
    res.json(comment) // if there is a matching comment this send it back to the client in JSON format

})

module.exports = router;

