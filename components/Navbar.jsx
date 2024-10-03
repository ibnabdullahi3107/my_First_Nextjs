"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Array of links
const links = [
  { href: "/", label: "Home" },
  { href: "/client", label: "Client" },
  { href: "/about", label: "About" },
  { href: "/drinks", label: "Drinks API" },
  { href: "/tasks", label: "Task" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-base-300 py-5 shadow-md">
      <div className="navbar px-8 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link href="/">Next.js</Link>
        </div>

        <ul className="menu menu-horizontal mt-4 sm:mt-0 space-x-4 text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span
                  className={`capitalize ${
                    pathname === link.href
                      ? "text-accent font-bold"
                      : "text-base-content"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
