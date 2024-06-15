"use client";

import { useState } from "react";
import AddNewBlog from "../add-new-blog";
const initialBlogFormData = {
    title: "",
    description: "",
};
export default function BlogOverview() {
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
    console.log(blogFormData)
    return (
        <div className="min-h-screen flex flex-col gap-10  bg-gradient-to-r from-purple-500 to-blue-600 p-6">
            <AddNewBlog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                loading={loading}
                setLoading={setLoading}
                blogFormData={blogFormData}
                setBlogFormData={setBlogFormData}
            />
            <div>Blog List Section</div>
        </div>
    );
}
