"use server";

export async function createPost(state, formData) {
    // collecting input title and content
    const title = formData.get("title")
    const content = formData.get("content")

    console.log(title, content)
    // validate form fields 

    // if any form fields are invalid

    // check if user is signed in

    // save the new post in DB


};