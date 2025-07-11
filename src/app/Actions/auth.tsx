"use server";

import bcrypt from "bcrypt";
import { loginFormSchema, registrationFormSchema } from "../Lib/rules";
import { getCollection } from "../Lib/db";
import { redirect } from "next/navigation";
import { createSession } from "../Lib/sessions";
import { cookies } from "next/headers";

export async function register(state, formData){
    // await new Promise(resolve => setTimeout(resolve, 1500));

    // Validated form fields
    const validatedFields = registrationFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),        
        confirmPassword: formData.get("confirmPassword"),
    });

    // If any form fields are valid
    if(!validatedFields.success) return{
            errors: validatedFields.error.flatten().fieldErrors,
            email: formData.get("email"),
            password: formData.get("password"),
        };

    // Extract form fields
    const {email, password} = validatedFields.data;

    // Check if Email is already Registered
    const userCollection = await getCollection("users");
    if(!userCollection) return{
        errors: {email: "Server error!"}
    };

    const existingUser = await userCollection.findOne({email});
    if(existingUser) return{
        errors:{email: "An account with this email already exists."},
        email: formData.get("email"),
    };

    // Hash the password 
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save in DB
    const results = await userCollection?.insertOne({
        email, 
        password: hashedPassword,
    });

    //Create session
    await createSession(results.insertedId.toString())
     
    // Redirect 
    return redirect("/Dashboard");
};

export async function login(state, formData){
    // await new Promise(resolve => setTimeout(resolve, 1500));

    // Validate form fields
    const validatedFields = loginFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    // If any form fields are valid
    if(!validatedFields.success) return{
            errors: validatedFields.error.flatten().fieldErrors,
        };

    // Extract from Field
    const {email, password} = validatedFields.data;

    // Check if Email exist in our DB
    const userCollection = await getCollection("users");
    if(!userCollection) return{
        errors:{email: "Server Error"},
    };

    const existingUser = await userCollection.findOne({email})
    if(!existingUser) return{
        errors:{email: "Email doesn't exist!"},
        email: formData.get("email"),
    };

    // Check Password
    const matchedPassword = await bcrypt.compare(password, existingUser.password) 
    if(!matchedPassword) return{
        errors:{password: "Invalid password!"},
        email: formData.get("email"),
    };
    
    // Create a Session
    await createSession(existingUser._id.toString());

    // Redirect
    return redirect("/Dashboard");
};


export async function logout(){
    const cookieStore = cookies();
    cookieStore.delete("session");

    return redirect("/");
};

