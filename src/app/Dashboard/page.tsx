import Link from "next/link";

export default function Dashboard() {
    return(
        <div>
            <h1 className="text-2xl font-semibold text-[#273E47]">DashBoard</h1>
            <Link 
                href="/Dashboard/User"
                className="border rounded-lg"
            >
                User Page
            </Link>
        </div>
    );
}