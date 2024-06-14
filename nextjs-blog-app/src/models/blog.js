import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    description: String
})

const Blog = mongoose.models.Blog || mongoose.Schema('Blog', blogSchema)
export default Blog