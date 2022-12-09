import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type TNavLink = {
  href: string;
  mobile: boolean;
  children: React.ReactNode;
};

export default function NavLink({ href, mobile, children }: TNavLink) {
  const path = usePathname();
  const active = href === path;

  return (
    <Link
      className={`${
        mobile ? "block text-base" : "text-sm"
      } rounded-md px-3 py-2 text-sm font-medium 
        ${
          active
            ? "bg-gray-300 dark:bg-gray-800 dark:hover:bg-slate-800"
            : " hover:bg-gray-200 dark:hover:bg-slate-600"
        }
      `}
      href={href}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
