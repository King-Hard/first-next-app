import Link from "next/link";

export default function Dashboard() {
    return(
        <div>
            <h3>DashBoard</h3>
            <Link 
                href="/Dashboard/User"
                className="border rounded-lg"
            >
                User Page
            </Link>
        </div>
    );
}