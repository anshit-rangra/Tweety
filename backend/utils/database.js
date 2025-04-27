<<<<<<< HEAD
import mongoose from "mongoose";

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("Error is here !!!!", error)
    }
}

=======
import mongoose from "mongoose";

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("Error is here !!!!", error)
    }
}

>>>>>>> b0e80f78adf7f515876dbd9be7827189301a9ab0
export default connectDB