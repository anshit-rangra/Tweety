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

export default blogModel;