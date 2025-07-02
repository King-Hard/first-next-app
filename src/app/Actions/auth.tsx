"use server";

import bcrypt from "bcrypt";
import { registrationFormSchema } from "../Lib/rules";
import { getCollection } from "../Lib/db";
import { redirect } from "next/navigation";
import { createSession } from "../Lib/sessions";

export async function register(state, formData){
    //await new Promise(resolve => setTimeout(resolve, 1500));

    // Validated form fields
    const validatedFields = registrationFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),        
        confirmPassword: formData.get("confirmPassword"),
    });

    // If any form fields are invalid
    if(!validatedFields.success){
        return{
            errors:
                validatedFields.error.flatten().fieldErrors,
                email: formData.get("email"),
                password: formData.get("password"),
        };
    };

    // Extract form fields
    const {email, password} = validatedFields.data;

    // Check if email is already registered
    const userCollection = await getCollection("users");
    if(!userCollection){
        return {
            errors:{
                email: "Server error!"
            },
        };
    };

    const existingUser = await userCollection.findOne({email});
    if(existingUser){
        return{
            errors:{
                email: "Email already exis in our database!"
            },
        };
    };

    // Hash the password 
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save in DB
    const results = await userCollection?.insertOne({email, password: hashedPassword,});

    //Create session
    await createSession(results.insertedId.toString())
     
    // Redirect 
    redirect("/Dashboard")
};
