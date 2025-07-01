2nd step: After non punta naman tayo sa register na natin dito yung logic nang pagkuha ng mga ininput ni user at saka yung pag-stay ng tinype ni user at saka yung validation natin doon sa loob ng form kada submit ni user ng form natin.

- "user sever" lang tayo ibig sabihin nito is sa node console natin mapupunta yung result don tayo mag console.log safe way to para sati nlang mismo lumabas yung ita-type ni user na mga info.
- import lang tayo import registrationFormSchema from "./Lib/rules"
- Dito gagawa lang tayo ng export async funtion register() yung lalagay ng logic natin for staying validation and input type sa loob ng form natin kahit na mag submit si user. 

export async register(state, formData){
  const validatedFields = registrationFormSchema.safeParse({
    email: fromData("email"),
    password: fromData("password"),
    confirmPassword: fromData("confirmPassword"),
  });

  if(!validatedFields.success){
    return{
      errors:
        validatedFields.error.flatten().fieldErrors,
        password: fromData("password"),
        confirmPassword: fromData("confirmPassword"),
    };
  };
  console.log(validatedFields)
};

- Ano nangyari rito? yung formData natin is sya yung ipangge-get natin ng input types natin. 
- Second line gumawa lang tayo ng validatedFields dito tapos inequal lang natin sya sa validationFormSchema kase andito yung mga validations natin sa bawat input field. Tapos nag safeParse lang tayo para siguraduhin natama yung ginawa natin dito sa validationFormSchema na dapat naka string yung mga ita-type ni user sa bawat inout fileds natin
- Next heto na yung logic sa pagkuha natin ng mga input types ni user, lagay lang tayo ng email, password, and confirmPassword. and then lagyan lang natin ng colon: saka natin ngayon ibaba yung formData natin tugtong lang ng .get and parenthesis tapos double quationn mark lagay na natin yung mga name nila na nakalagay don kanina sa register form natin na mga names nila na email, password, and confirmPassword. 
- Next heto naman yung sinasabi natin kanina na logic way para ma pa stay natin yung validation and yung mga tinype ni user sa email and password. Nag if lang tayo rito !validated.succcess kung naka false raw to heto yung mga mangyayari ibaba lang natin yung validatedFields then dugtungan natin .error then .flatten() then .fieldErrors heto yung way para mapa-stay natin yung validations error natin don sa form kada submit ni user. Then idugtong na rin natni dito yung ayaw natin na mawal everytime na gsubmit si user which are email and password i-copy lang natin yun sa email: formData.get("email") ganon lang din sa password password: formData.get("password")
- Tapos nag console.log(validatedFields) lang tayo rito, heto yung magru-run once na naka true na yung success natin na meet nya lahat ng hinahanap sa registratio FormSchema natin: makikitqa natin dito yung email, password, and confirm password na nilagay ni user.
