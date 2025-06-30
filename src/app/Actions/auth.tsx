"use server";

import { registrationFormSchema } from "../Lib/rules";
import { getCollection } from "../Lib/db";

export async function register(state, formData){
    const validatedFields = registrationFormSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),        
        confirmPassword: formData.get("confirmPassword"),
    });

    if(!validatedFields.success){
        return{
            errors:
                validatedFields.error.flatten().fieldErrors,
                email: formData.get("email"),
                password: formData.get("password"),
        };
    };

    const {email, password} = validatedFields.data;
    const userCollection = await getCollection("users");
    const results = await userCollection?.insertOne({email, password});
    console.log(results);
};
