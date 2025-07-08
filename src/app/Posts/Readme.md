First - Create lang tayo ng folder na posts dito natin ilalagay yung CRUD natin, but first we add Create folder with page.tsx

Second- Ganon lang din same sa regsiter, and login merong page na apra sa form, authentication and schema but let's create Container sa loob ng folder natin na create and sa page.tsx an laman nya. Kumbaga heto yung magiging container lang natin 

Third - Gawa na tayo ng Component ng BlogForm di natin ilalagay yung form natin, then ibabato natin to sa Posts folder natin don sa create-page.tsx so yun nnga same process we have form, and useActionState. div with label and input for title and content. and also button. tapos yun nga lagya lang antin yung action, isPending sa form and button. 

Fourth - Gawa na tayo ng authentication and schema. sa authentication export default async function createPost tahen parameter lang ulit na state and formData. isntead na validatedFields ang ginamit natin is const title and content and then nag formData.get email and password lang tayo. Sa schema ganon pa rin export const BlogFormSchema = z.object({then nilagay lag natin yung title and content limit lang tayo ng title and min and max then sa content string and trim lang})

Fifth - Yung sa useActionState natin sa BlogPost instead na yung parameters natin is yung sa authentication and undefined. is gianwa nating handler and undefined. Ngayon balik na tayo sa Post folder natin create-page.tsx import na natin yung gianwa nating BlogForm and sa loob lagay lang natin yung handler saka yung autentication name na gianmit natin.

