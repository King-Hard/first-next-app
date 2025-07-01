3rd step, the last step for creating registration form and pagva-validate sa form nato.
- After non punta na tayo sa Lib-rules natin dito na yung schema mga rules na need ni user para ma validate yung form at mag tuloy-tuloy sa pag regsiter. 
- npm install zod lang tayo muna 
- after non import {z} from "zod" na tayo then pwede na natin start yung paggawa

export const registrationFormSchema = z
  .object({
    email: z
      .string()
      .email({message: ""})
      .trim(),
  
    password: z
      .string()
      .min(1, {message: ""})
      .regex((), {message: ""})
      .regex((), {message: ""})
      .regex((), {message: ""})
      .trim(),

    confirmPassword: z
      string()
      trim(),
  })
    .superRefine(validate, issue){
      if(validate.password !== validate.confirmPassword){
        issue.addIssue({
          code: z.ZodIssueCode.custom,
          message: "",
          path: ["confirmPassword"]
        })
      }
    }

- Dito nag export nga lang tayo ng export const registrationFromSchema nag equal lang tayo sa z.object({}) bali heto yung magiging body ng mga validations natin
- ilagay na natin yung need natin na validations fields which are email, password, and confirm password. Sa email need lang natin ng .string(), .email(), and .trim() sa email dito natin ilalagay yung validation vali sya yung magiging guard para makita kung tugma ba sa email mismo yung tinatype ni user na email.
- next natin yung sa password ganon lang ulit need na may .string(), .trim(), tapos add tayo ng min(8, {message: ""}) para malaman  ni user na 8 pataas na letters ang need natin para sa password field nato tapos lagay na natin yung mga regex natin.
- Dito naman nag .superRefine lang tayo pata pagkumparahin kung same nga ba yiung laman ng password field and confim password firld natin.
- sa superRefine nag add lang tayo ng validate and issue para sa sa ano to pag validate kung tugma nga ba passwords natin and si issue mamay pagka hindi nga tugma
- ayun na ginamit na natin dito yung validate natin vinalidate natin yung password and confirmPasssword and tehn kung hindi nga raw sila magkaparehas dito na papasok yung issue natin
- issue.addIssue lang tayo, and then code colon lang tayo tapos z.ZodIssueCode.custom, then message: "", then yung path saang inout field to mangyayari which is sa path: ["confirmPassword"] natin.

const {email, password} = validatedFields.data;

const results = await userCollection?.insertOne({email, password});