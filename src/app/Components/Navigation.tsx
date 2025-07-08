import { logout } from "../Actions/auth";
import getAuthUser from "../Lib/getAuthUser";
import NavLink from "./NavLink";

export default async function Navigation(){
  const authUser = await getAuthUser();
  
  return(
    <nav>
      <NavLink label="Avalmeos" href="/"/>
        {authUser 
        ? (<div className="flex justify-center">
            <NavLink label="New Post" href="/Posts/Create"/>
            <NavLink label="Dashboard" href="/Dashboard"/>
            <form action={logout}>
              <button className="logout">Logout</button>
            </form>
          </div>)
        : (<div>
            <NavLink label="Register" href="/Register"/>         
            <NavLink label="Login" href="/Login"/>
          </div>)
        }        
    </nav>
  ); 
};