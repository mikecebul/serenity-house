"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Meetings", href: "/meetings" },
  { name: "Donate", href: "/virtual-basket" },
  { name: "News", href: "/news" },
  { name: "Other Meetings", href: "/other-meetings" },
];

const Logo = () => {
  return (
    <div className="flex-col text-center xl:w-[240px]">
      <h1 className="text-lg xl:text-2xl">Serenity House</h1>
      <h2 className="text-[0.6rem] font-light -mt-1 xl:text-xs xl-mt-0">
        Charlevoix Alano Club
      </h2>
    </div>
  );
};

function Navbar() {
  const mobile = useMediaQuery("(max-width: 480px)");
  const desktop = useMediaQuery("(min-width: 481px)");

  if (mobile) {
    return (
      <nav>
        <div className="flex items-center justify-between px-8 py-2 rounded-b-lg shadow-lg">
          <Logo />
          <Menu size={32} />
        </div>
      </nav>
    );
  }

  if (desktop) {
    return (
      <nav className="flex items-center justify-between px-8 py-2 rounded-b-lg shadow-lg">
        <Logo />
        <div className="flex justify-center p-8">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item, index) => (
                <Link key={index} href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    );
  }
}

export default Navbar;
