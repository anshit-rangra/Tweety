import express from "express";
import blogsController from "../controllers/blogs-controller.js";

const app = express.Router()

app.route("/blogs").get(blogsController.getAllBlogs).post(blogsController.uploadBlog)

app.route("/myblogs").get(blogsController.getUserBlogs)

app.route("/blog/like/:id").patch(blogsController.likeBlog)

app.route("/blog/dislike/:id").patch(blogsController.dislikeBlog)

app.route("/blog/delete/:id").delete(blogsController.deleteBlog)

export default app