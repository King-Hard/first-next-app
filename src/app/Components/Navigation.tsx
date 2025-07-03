import NavLink from "./NavLink";
export default function Navigation(){
    return(
        <nav>
            <div> 
              <NavLink label="Avalmeos" href="/"/>
            </div>
            <div className="space-x-5">
              <NavLink label="Dashboard" href="/Dashboard"/>
              <NavLink label="Login" href="/Login"/>
              <NavLink label="Register" href="/Register"/>
            </div>
        </nav>
    );
};