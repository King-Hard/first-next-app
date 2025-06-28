import Link from "next/link";

export default function User(){
    return(
        <div>
            <h1 className="text-2xl font-semibold text-[#273E47]">User</h1>
            <Link
                href="/Dashboard"
                className="border rounded-xl"
            >
                Back Page
            </Link>
        </div>
    );
}