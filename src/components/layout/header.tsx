import { routes } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

// import Hamburger from './Hamburger';

export const Header = () => {
  const router = useRouter();

  return (
    <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link
            key={l.label}
            href={l.path}
            onClick={(e) => {
              if (router.pathname === l.path) e.preventDefault();
            }}
          >
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link href={l.path}>{l.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
    {/* <Hamburger /> */}
  </header>
  )
};
