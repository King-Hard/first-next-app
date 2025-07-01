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
