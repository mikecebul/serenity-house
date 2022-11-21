import { Fragment } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NavLink from "./navLink";
import { useSession } from "next-auth/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Meetings", href: "/meetings"},
  // { name: "Donate", href: "/virtual-basket"},
  // { name: "News", href: "/news"},
  // { name: "Other Meetings", href: "/other-meetings"},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
    const { data: sessionData } = useSession();


  return (
    <Popover as="nav" className="bg-gray-800 relative">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:justify-start">
                <div className="hidden md:flex flex-shrink-0 items-center">
                  <div className="flex-col text-center xl:w-[160px]">
                    <h1 className="text-lg xl:text-2xl">
                      Serenity House
                      <span className="block text-[0.6rem] font-light -mt-3">
                        Charlevoix Alano Club
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        mobile={false}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {sessionData?.user?.image ? 
                        <Image
                            className="h-8 w-8 rounded-full"
                            src={sessionData.user.image}
                            alt=""
                            width={200}
                            height={200}
                        /> : 
                        <p>Signin</p>
                      }
                        
                    </Menu.Button>
                  </div>
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
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
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
          <Popover.Panel className="sm:hidden absolute z-10 dark:bg-slate-800 w-full">
            {({ close }) => (
              <div onClick={() => close()} className="space-y-1 px-2 pt-2 pb-3 hover">
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
            </div>
            )}   
          </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
