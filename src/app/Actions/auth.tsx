"use server"

import { registrationFormShema } from "../Lib/rules";

export async function register(state, formData){

    const validatedFields = registrationFormShema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    });

    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        };
    };

    console.log(validatedFields);
};