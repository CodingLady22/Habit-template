const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const logsController = require("../controllers/logs");
const { ensureAuth } = require("../middleware/auth");

//Post Routes
//Since linked from server js treat each path as:
//post/:id, post/createPost, post/likePost/:id, post/deletePost/:id
router.get("/:id", ensureAuth, logsController.getLog);

//Enables user to create post w/ cloudinary for media uploads
router.post("/createLog", logsController.createLog);

//Enables user to like post. In controller, uses POST model to update likes by 1
router.put("/likeLog/:id", logsController.likeLog);

//Enables user to delete post. In controller, uses POST model to delete post from MongoDB collection
router.delete("/deleteLog/:id", logsController.deleteLog);

module.exports = router;