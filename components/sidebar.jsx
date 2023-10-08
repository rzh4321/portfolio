'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

const navLinks = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/projects": {
    name: "projects",
  },
  "/contact": {
    name: "contact",
  },
};

export default function SideBar() {
  const [activeNavLink, setActiveNavLink] = useState('/');
  const pathname = usePathname();

  // Set activeNavLink from pathname
  useEffect(() => {
    setActiveNavLink(pathname);
  });

  return (
    <aside>
      <nav className="flex flex-col flex-wrap pr-2 md:sticky md:top-20">
        <Link className="pl-2 text-3xl md:w-auto font-medium" href="/">Ricky</Link>
        <ul className="flex flex-row md:flex-col">
          {Object.keys(navLinks).map((link) => (
            <li key={link} 
              className={`rounded px-2 py-1 hover:text-black 
              ${activeNavLink === link ? 'bg-gray-100 dark:bg-neutral-800' : ''}`}
            >
              <Link href={link}
                className={`font-medium hover:text-black dark:hover:text-gray-200 
                ${activeNavLink === link ? 'dark:text-gray-200 text-black' : 'text-neutral-500'}`}
              >
                {navLinks[link].name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}