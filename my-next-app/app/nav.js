"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/dashboard"
        className={pathname === "/dashboard" ? "active" : ""}
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/settings"
        className={pathname === "/settings" ? "active" : ""}
      >
        Settings
      </Link>
    </nav>
  );
};

export default Nav;
