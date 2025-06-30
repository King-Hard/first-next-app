"use server";

import { registrationFormSchema } from "../Lib/rules";

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

    console.log(validatedFields);
};