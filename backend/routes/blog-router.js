<<<<<<< HEAD
import express from "express";
import blogsController from "../controllers/blogs-controller.js";

const app = express.Router()

app.route("/blogs").get(blogsController.getAllBlogs).post(blogsController.uploadBlog)

app.route("/myblogs").get(blogsController.getUserBlogs)

app.route("/blog/like/:id").patch(blogsController.likeBlog)

app.route("/blog/dislike/:id").patch(blogsController.dislikeBlog)

app.route("/blog/delete/:id").delete(blogsController.deleteBlog)

=======
import express from "express";
import blogsController from "../controllers/blogs-controller.js";

const app = express.Router()

app.route("/blogs").get(blogsController.getAllBlogs).post(blogsController.uploadBlog)

app.route("/myblogs").get(blogsController.getUserBlogs)

app.route("/blog/like/:id").patch(blogsController.likeBlog)

app.route("/blog/dislike/:id").patch(blogsController.dislikeBlog)

app.route("/blog/delete/:id").delete(blogsController.deleteBlog)

>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
export default app