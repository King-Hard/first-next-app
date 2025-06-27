import Link from "next/link";

export default function User(){
    return(
        <div>
            <h3>User</h3>
            <Link
                href="/Dashboard"
                className="border rounded-xl"
            >
                Back Page
            </Link>
        </div>
    );
}