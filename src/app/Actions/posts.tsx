"use server";

import { redirect } from "next/navigation";
import getAuthUser from "../Lib/getAuthUser";
import { BlogPostSchema } from "../Lib/rules";
import { getCollection } from "../Lib/db";
import { ObjectId } from "mongodb";

export async function createPost(state, formData) {
    // validate form fields 
    const validatedFields = BlogPostSchema.safeParse({
        title: formData.get("title"),
        content: formData.get("content"),
    });

    // if any form fields are invalid
    if(!validatedFields.success) return{
        errors: validatedFields.error.flatten().fieldErrors,
        title: formData.get("title"),
        content: formData.get("content"),
    };

    // check if user is signed in
    const user = await getAuthUser();
    if(!user) return redirect("/");

    // save the new post in DB
    try{
        const postCollection = await getCollection("posts");
        const post = {
            title: validatedFields.data.title,
            content: validatedFields.data.content,
            userId: ObjectId.createFromHexString(user.userId)
        }
        await postCollection?.insertOne(post);
    }
    catch (error){
        return{
            errors: {title: error.message}
        };
    }

    redirect("/Dashboard");
};