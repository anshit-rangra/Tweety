<<<<<<< HEAD
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    writer:{
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true,
    },

    time:{ 
        type: String,
        default: Date.now()
    },

    likes: {
        type: Number,
        default: 0
    }
})

const blogModel = mongoose.model("blogs", blogSchema)

=======
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    writer:{
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true,
    },

    time:{ 
        type: String,
        default: Date.now()
    },

    likes: {
        type: Number,
        default: 0
    }
})

const blogModel = mongoose.model("blogs", blogSchema)

>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
export default blogModel;