import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NavLink from "./navLink";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeButton from "./themeButton";
// import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Meetings", href: "/meetings" },
  // { name: "Donate", href: "/virtual-basket"},
  // { name: "News", href: "/news"},
  // { name: "Other Meetings", href: "/other-meetings"},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { data: sessionData } = useSession();
  // const { resolvedTheme, setTheme } = useTheme();

  return (
    <Popover as="nav" className="relative bg-slate-50 dark:bg-slate-700 rounded-b-lg dark:text-slate-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 dark:text-slate-200 dark:hover:text-slate-100"
                      aria-hidden="true"
                    />
                  )}
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 z-10 bg-black opacity-60" />
              </div>
              <div className="flex flex-1 items-center justify-center md:justify-start">
                <div className="hidden flex-shrink-0 items-center md:flex">
                  <div className="flex-col text-center xl:w-[160px]">
                    <h1 className="text-lg xl:text-2xl">
                      Serenity House
                      <span className="-mt-3 block text-[0.6rem] font-light">
                        Charlevoix Alano Club
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink key={item.name} href={item.href} mobile={false}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 "> */}
              <div className="flex items-center justify-center">
                {/* Light/Dark Mode ?xl:w-[160px]? */}
                <ThemeButton className="items-center justify-center bg-slate-300 dark:bg-slate-600" />

                {/* Notifications */}
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text- hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    {sessionData ? (
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {sessionData.user?.image ? (
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={sessionData.user.image}
                            alt=""
                            width={200}
                            height={200}
                          />
                        ) : (
                          <UserIcon />
                        )}
                      </Menu.Button>
                    ) : (
                      <Menu.Button
                        onClick={() => signIn()}
                        className="flex rounded-2xl bg-rose-700 px-4 py-2 text-sm font-medium text-white transition duration-75 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        Sign in
                      </Menu.Button>
                    )}
                  </div>
                  {sessionData ? (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => signOut()}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block w-full px-4 py-2 text-start text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  ) : null}
                </Menu>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute z-10 w-full bg-slate-50 dark:bg-slate-700 rounded-b-lg dark:text-slate-50 md:hidden">
              {({ close }) => (
                <div
                  onClick={() => close()}
                  className="hover space-y-1 px-2 pt-2 pb-3"
                >
                  {navigation.map((item) => (
                    <Popover.Button
                      key={item.name}
                      href={item.href}
                      as={NavLink}
                      mobile={true}
                    >
                      {item.name}
                    </Popover.Button>
                  ))}
                  {/* Light/Dark Mode */}
                  {/* <div className="pt-6">
                    <Popover.Button
                      className="flex w-full items-center space-x-4 border-t border-gray-200 pt-3 pl-3 "
                      onClick={() => {
                        setTheme(resolvedTheme === "light" ? "dark" : "light");
                      }}
                    >
                      <ThemeButton className="bg-slate-300 dark:bg-slate-600" />
                      <p className="text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700">
                        Toggle Light/Dark Mode
                      </p>
                    </Popover.Button>
                  </div> */}
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
