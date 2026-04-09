"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Primary navigation links used in desktop and mobile menus.
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // Sticky site header with brand, nav links, and action buttons.
    <header className="sticky top-0 z-30 px-4 pt-5 sm:px-6">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full bg-[#f4f4f4] px-4 py-3  sm:px-8">
        {/* Brand area with logo icon and home link. */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#e8e8e8] text-red-500">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="currentColor"
            >
              <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.01 6.01 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
            </svg>
          </span>
          <Link
            href="/"
            className="truncate text-2xl font-semibold tracking-tight text-[#222]"
          >
            HemaFlow
          </Link>
        </div>

        {/* Desktop navigation links with active state styling. */}
        <div className="ml-auto hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[1.5rem] leading-none font-medium transition ${
                  isActive ? "text-red-500" : "text-[#232323] hover:text-red-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Utility actions: language switch and login button. */}
        <div className="flex items-center gap-4 sm:gap-5">
          <button
            type="button"
            className="hidden items-center gap-2 text-[1.5rem] leading-none font-medium text-[#222] md:inline-flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
            </svg>
            English
          </button>

          <button
            type="button"
            className="rounded-full bg-red-500 px-7 py-3.5 text-[1.5rem] leading-none font-medium text-white transition hover:bg-red-600"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Mobile navigation row shown below the main nav. */}
      <div className="mx-auto mt-3 flex w-full max-w-7xl items-center justify-center gap-8 px-4 text-sm font-medium text-[#232323] md:hidden">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${isActive ? "text-red-500" : "hover:text-red-500"}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
