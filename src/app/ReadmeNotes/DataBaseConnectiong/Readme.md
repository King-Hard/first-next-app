First: we need to setup the database mongoDB
- Create lang tayo account don and then fill up some form. After that check natin yung database access - make sure lang natin na andon na yung ginawa nating account recently
- Now punta na tayo sa clusters natin and then click connect, connect to your application: drivers, then after non piliin lang natin yung latest version ng node since naka node tayo. 
- Back to vs code npm install natin yung mongodb
- after that we need to create .env.local then ilagay natin yung add connection string natin (DB_URI="mongodb+srv://KingHard:Https%3A%2F%2FHard%3F@cluster0.rxxhp7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
Kapagka may mga special characters tayo sa password need lang natin gumamit ng right term para gumana sila so bali need natin ilagay dito yung username and password na ginawa natin kanina. 
- Then gawa na tayo ng file na bd.tsx dito natin ilalagay yung pag set-up sa DB natin.  

//hash password
npm install bcrypt 
npm install --save-dev @types/bcrypt
import bcrypt from "bcrypt";

//session
npm install jose
in session = run in git bash: openssl rand -base64 32 or openssl rand -hex 32
