"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { Button, CunninghamProvider } from "@openfun/cunningham-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("default");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/hooks", label: "React Hooks" },
    { href: "/users", label: "External API" },
  ];

  return (
    <nav className={styles.navbar}>
      <CunninghamProvider theme={theme}>
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
        <Button
          onClick={() => setTheme(theme === "default" ? "dark" : "default")}
        >
          {theme === "default" ? "🌜" : "☀️"}
        </Button>
      </CunninghamProvider>
    </nav>
  );
}
