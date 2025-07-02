"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({label, href}){
    const pathName = usePathname();

    return(
        <Link
            className={`nav-link ${pathName === href ? "nav-link-active" : ""}`}
            href={href}
        >
            {label}
        </Link>
    );
};