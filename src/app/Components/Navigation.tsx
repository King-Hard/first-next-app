import getAuthUser from "../Lib/getAuthUser";
import NavLink from "./NavLink";

export default async function Navigation(){
  const authUser = await getAuthUser();
  
  return(
    <nav>
      <NavLink label="Avalmeos" href="/"/>
        {authUser 
        ? (<div className="flex justify-center">
            <NavLink label="Dashboard" href="/Dashboard"/>
          </div>)
        : (<div>
            <NavLink label="Register" href="/Register"/>         
            <NavLink label="Login" href="/Login"/>
          </div>)
        }        
    </nav>
  ); 
};