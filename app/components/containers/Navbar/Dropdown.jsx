import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Dropdown({ data }) {
  return (
    <Menu as="div" className="relative inline-block text-left w-full lg:w-auto">
      <Menu.Button className="inline-flex hover:text-blue-700 justify-between lg:justify-center lg:px-4 w-full px-3 pt-6 lg:pt-0 pb-5 lg:pb-0 border-b lg:border-none border-primary">
        Services
        <ChevronDownIcon
          className="ml-1 w-4 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute lg:fixed w-full lg:w-auto lg:right-1/4 lg:left-1/4 top-0 mt-12 flex items-center justify-center rounded-xl">
          <div className="relative w-full shadow-2xl shadow-gray-900 rounded-xl bg-primary scroll-smooth text-white h-[600px] overflow-y-scroll p-5 lg:p-7 text-xs lg:text-sm">
            <h1 className="text-2xl text-center font-semibod">Our Services</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-3 w-full">
              {data.items.map((item, index) => (
                <Link
                  key={index}
                  className="p-2 rounded border border-white/50 text-center hover:text-black text-xs hover:bg-white transition-all"
                  href={item.path}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
