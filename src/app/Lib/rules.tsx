import {z} from "zod";

export const loginFormSchema = z.object({
    email: z
        .string()
        .email({message: "Oops! That doesn't look like a valid email."})
        .trim(),
    

    password: z
        .string()
        .min(1, {message: "Password is required."})
        .trim(),
});

export const registrationFormSchema = z
    .object({
        email: z
            .string()
            .email({message: "Oops! That doesn't look like a valid email."})
            .trim(),

        password: z
            .string()
            .min(8, {message: "Be at least 8 characters long."})
            .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
            .regex(/[0-9]/, { message: "Contain at least one number." })
            .regex(/[^a-zA-Z0-9]/, {message: "Contain at least one special character."})
            .trim(),
        
        confirmPassword: z
            .string()
            .trim(),
})
    .superRefine((validate, issue) =>{
        if(validate.password !== validate.confirmPassword){
            issue.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Password fields doesn't match.",
                path: ["confirmPassword"],
            });
        };
    });

export const BlogPostSchema = z
    .object({
        title: z    
            .string()
            .min(1, {message: "Title field is required."})
            .max(100, {message: "Title can't be more than 100 characters."})
            .trim(),

        content: z
            .string()
            .min(1, {message: "Content field is required."})
            .trim(),
});