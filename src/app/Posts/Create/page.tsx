import { createPost } from "@/app/Actions/posts";
import BlogForm from "@/app/Components/BlogForm";

export default async function create() {
    return(
        <div className="container w-1/2">
            <h1 className="title">Create a new post</h1>

            <BlogForm handler={createPost}/>
        </div>
    );
};