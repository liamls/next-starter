"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/hooks", label: "React Hooks" },
    { href: "/users", label: "External API" },
  ];

  return (
    <nav className={styles.navbar}>
      {navLinks.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
