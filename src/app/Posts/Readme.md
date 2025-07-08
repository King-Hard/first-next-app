First - Create lang tayo ng folder na posts dito natin ilalagay yung CRUD natin, but first we add Create folder with page.tsx

Second- Ganon lang din same sa regsiter, and login merong page na apra sa form, authentication and schema but let's create Container sa loob ng folder natin na create and sa page.tsx an laman nya. Kumbaga heto yung magiging container lang natin 

Third - Gawa na tayo ng Component ng BlogForm di natin ilalagay yung form natin, then ibabato natin to sa Posts folder natin don sa create-page.tsx so yun nnga same process we have form, and useActionState. div with label and input for title and content. and also button. tapos yun nga lagya lang antin yung action, isPending sa form and button. 

Fourth - Gawa na tayo ng authentication and schema. sa authentication export default async function createPost tahen parameter lang ulit na state and formData. isntead na validatedFields ang ginamit natin is const title and content and then nag formData.get email and password lang tayo. Sa schema ganon pa rin export const BlogFormSchema = z.object({then nilagay lag natin yung title and content limit lang tayo ng title and min and max then sa content string and trim lang})

Fifth - Yung sa useActionState natin sa BlogPost instead na yung parameters natin is yung sa authentication and undefined. is gianwa nating handler and undefined. Ngayon balik na tayo sa Post folder natin create-page.tsx import na natin yung ginawa nating BlogForm and sa loob lagay lang natin yung handler saka yung autentication name na ginamit natin.

Sixth - Balik na tayo sa authentication natin doon sa postAuthentication next natin gawin validated form fields ayun nga crate lang tayo nga export default async function createPost na may apramenters na state and form data after non balik tayo sa validation form field natin const lang tayo validatedFields and then kunin natin yung gainawa natin schema FormBlogSchema.safeParse({then ganon lang den title and content then formData.get(title and content)})

Seventh - Check natin kung valid ba lahat ng forms natin if lang tayo then not baba lang natin yung validateFileds natin .sucess lang tayo then return lang tayo tas errors colon then baba ulit natin validatedFieldse.error.flatten().fieldErrors then ilagay lang natin yung title and content natin para di mawal sa form natin incase na may erorr na mangyari bali add lang tayo ng default value sa form natin sa title and content state?.title and content

Eigth - check natin kung naka register ba or login na si user using cookies natin diba pag walang laman yon it mwans di pa tayo naka login or register, bali ayun gagamitin natin. import lang natin yung getAuthUser natin kase andon yung checking natin kung may laman ba talga yung cookies natin or wala. bali const user lang tayo then = await tapos yung inimport natin na getAuthUser() and then heto na if(!user) walang laman return lang natin yung page nya sa HomePage

Nineth - Last paglagay natin sa Database nung post try and catch lang tayo first sa try muna tayo const lang tayo postCollection = getCollection yung getCollection nato is sya yung pinaka storage natin and then parameter lang tayo it means yung idadagdag natin na parameter is new folder yon sa loob ng getCollection natin yung storage. const post lang tayo then equal sa cruly braces ano-ano daw yung ilalgay natin na information sa loob ng post na ilalagay natin sa database don sa folder na dinagdag natin which are title and content validataed.data.title and contnet tapos yung userId. and then after that ipasa na antin sya sa loob ng database natin await lang tayo postCollection then .insertOne(post); and then sa catch error lang tayo then return errors: then yung error na paramter tapso .message

Tenth - Then after the 9 steps, redirect na tayo sa dashboard after mag post.

