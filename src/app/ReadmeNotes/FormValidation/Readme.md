1, Sa paggawa ng form at paglalagay ng validation sa form we need 3 folders For (auth)/Register-page.tsx, Actions-auth.tsx, and Lib-rules.tsx. yung slash it means folder yung minus it means file.

1st step: After non punta muna tayo sa Regsiter-page.tsx natin para gumawa ng form na may lamang 3 input fields which are email, password, and confirm password. Lastly button, and yung do you have account? then Link log in. Then gawa na tayo ng useActionState natin 
import register from "@/Actions/auth"
const [state, action, isLoading] = useActionState(register, undefined);
<form action={action}>
  <button disabled={isLoading}>
    {isLoading ? "Loading..." : "Regsiter"}
  </button>
</form>

Sabi rito yung sa ginawa natin useActionState is sya yung ipangha-handle natin ng pang get ng ininput ni user and also pang trace natin ng validation once na may mali sa ini-input ni user sa input fields natin. 
1. const [state, action, isLoading] =
- Yung state is heto yung ipapangha-handle natin mamaya ng error kumbaga sya yung gagamitin natin para mapalabas qyung error sa loob ng form natin
- Yung action naman is ayun nga ico-connect lang antin sya sa form natin action={action} kumbaga yung laman ng useActionState natin mamaya is ayun yung iru-run nya or don sya pupunta para kunin yung mga need natin sa loob ng from.
- Yung isLoading is para naman to sa button natin disabled lang tayo disabled={isLoading} then sya rin yung ilalagay natin sa loob ng button natin kumbaga naming natin curly braces lang then tinerary condition tayo {isLoading ? "Loading..." : "Register"}

2, useActionState(register, undefined);
- Yung register natin is dito natin ilalagay mamaya yung mga logic natin para makuha yung tina-type ni user sa 3 input fields natin, saka dito rin natin gagawin yung kada submit ng from natin is mapapa-stay natin yung sa email, password and then yung validation natin don sa loob ng form. In short mahalaga to para sa pagpapa-stay ng validation sa loob ng form natin.
- Yung undefined natin is kapartner to ng register

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

- After lahat nang iyon is babalik na tayo sa Register-page natin para ilagay na yung mga validation natin
- first punta tayo sa email and password maglagay tayo ng defaultValue={state?.email} and defaultValue={state?.password} naaala natin yung sinabi ko kanina na gagamitin na natin yung state para sa paglagay ng mga validation text sa loob ng form natin heto na yon magagamit na natin sya. Bakit tayo naglagay ng defaultValue para to sa kanina na ginawa natin sinama natin sila sa mga hindi mawawala yung value once na nag dubmit si user ng form don sa loob ng actions-auth natin. 
- then heto na yung paglagay natin first sa email:
{state?.errors?.email && (
  <p classname="error">{state.errors.email}</p>
)}
Sabi rito baba lang natin yung state question mark and then yung errors natin kunin natin andon to sa actions natin kapartner sila para mapalabas natin yung validation then .email complete na lalabas an yon.

- second sa password naman: 
{state?.errors?.password && (
  <div classname="error">
    <p>Password must:</p>
    <ul classname="list-disc list-inside ml-4">
      {state.error.password.map((err) =>(
        <li key={err}>{err}</li>
      ))}
    </ul>
  </div>
)}

- third sa confirmPassword:
{state?.errors?.confirmPassword && (
  <p clasname="error">{state.errors.confirmPassword}</p>
)}