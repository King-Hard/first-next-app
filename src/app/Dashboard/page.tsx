import Link from "next/link";

export default function Dashboard() {
    return(
        <div>
            <h1>DashBoard</h1>
            <Link 
                href="/Dashboard/User"
                className="border rounded-lg"
            >
                User Page
            </Link>
        </div>
    );
}