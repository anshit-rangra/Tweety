<<<<<<< HEAD
import blogModel from "../models/blog-model.js"
import jwt from "jsonwebtoken"


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find()
        res.json(blogs)
    } catch (error) {
        res.json({error})
    }
}

const uploadBlog = async (req, res) => {
    try {
        const {body} = req.body

        const token = req.cookies.token

        if(!token){ return res.json({message: "No token found !"})}
        
        const decoded = await jwt.verify(token, process.env.JSON_KEY)

        const blog = {
            writer: decoded.username,
            body: body,
            time: Date.now(),
            likes: 0
        }

        const uploadBlog = await blogModel.create(blog)

        res.json({message: "The blog is uploaded sucessfully !"})

    } catch (error) {

        res.json({error})
    }
}

const getUserBlogs = async (req, res) => {
    try {
        const token = req.cookies.token;

        const {username} = jwt.verify(token, process.env.JSON_KEY);
        
        const blogs = await blogModel.find({writer: username})

        res.json(blogs)

    } catch (error) {
        res.json({error})
    }
}

const likeBlog = async (req, res) => {
    const _id = req.params.id
    if(_id) {
        const updatedBlog = await blogModel.findOne({_id})
        const blog = await blogModel.findByIdAndUpdate(_id, {likes: updatedBlog.likes +1},
            {new: true}
        )
        res.status(200).json({message: "Liked sucessfully !"})
    }
}

const dislikeBlog = async (req, res) => {
    const _id = req.params.id
    if(_id) {
        const updatedBlog = await blogModel.findOne({_id})
        const blog = await blogModel.findByIdAndUpdate(_id, {likes: updatedBlog.likes -1},
            {new: true}
        )
        res.status(200).json({message: "Dislike sucessfully !"})
    }
}

const deleteBlog = async (req, res) => {
    try {
        const _id = req.params.id
    if(_id){
        await blogModel.findByIdAndDelete(_id)
        res.json({message: "The blog is deleted sucessfully !"})
    }else {
        res.json({message: "Post not found !"})
    }
    } catch (error) {
        res.json({message: "Internal Server error !"})
    }

    
}

=======
import blogModel from "../models/blog-model.js"
import jwt from "jsonwebtoken"


const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find()
        res.json(blogs)
    } catch (error) {
        res.json({error})
    }
}

const uploadBlog = async (req, res) => {
    try {
        const {body} = req.body

        const token = req.cookies.token

        if(!token){ return res.json({message: "No token found !"})}
        
        const decoded = await jwt.verify(token, process.env.JSON_KEY)

        const blog = {
            writer: decoded.username,
            body: body,
            time: Date.now(),
            likes: 0
        }

        const uploadBlog = await blogModel.create(blog)

        res.json({message: "The blog is uploaded sucessfully !"})

    } catch (error) {

        res.json({error})
    }
}

const getUserBlogs = async (req, res) => {
    try {
        const token = req.cookies.token;

        const {username} = jwt.verify(token, process.env.JSON_KEY);
        
        const blogs = await blogModel.find({writer: username})

        res.json(blogs)

    } catch (error) {
        res.json({error})
    }
}

const likeBlog = async (req, res) => {
    const _id = req.params.id
    if(_id) {
        const updatedBlog = await blogModel.findOne({_id})
        const blog = await blogModel.findByIdAndUpdate(_id, {likes: updatedBlog.likes +1},
            {new: true}
        )
        res.status(200).json({message: "Liked sucessfully !"})
    }
}

const dislikeBlog = async (req, res) => {
    const _id = req.params.id
    if(_id) {
        const updatedBlog = await blogModel.findOne({_id})
        const blog = await blogModel.findByIdAndUpdate(_id, {likes: updatedBlog.likes -1},
            {new: true}
        )
        res.status(200).json({message: "Dislike sucessfully !"})
    }
}

const deleteBlog = async (req, res) => {
    try {
        const _id = req.params.id
    if(_id){
        await blogModel.findByIdAndDelete(_id)
        res.json({message: "The blog is deleted sucessfully !"})
    }else {
        res.json({message: "Post not found !"})
    }
    } catch (error) {
        res.json({message: "Internal Server error !"})
    }

    
}

>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
export default {getAllBlogs, uploadBlog, getUserBlogs, likeBlog, dislikeBlog, deleteBlog}