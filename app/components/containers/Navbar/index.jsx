"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { CallLink, Container } from "../../common";

const Navbar = ({ contact, services }) => {
  const [sidebar, openSidebar] = useState(false);
  const handleSidebar = () => {
    openSidebar(!sidebar);
  };

  return (
    <Container>
      <nav className="w-10/12 lg:w-9/12 flex space-y-2 flex-col items-center text-center">
        <div className="text-primary">
          <Link href="/">
            <h1 className="text-4xl mb-3 font-semibold">
              Los Angeles Towing Services
            </h1>
          </Link>
          <h1 className="text-lg">We exist to assist</h1>
        </div>
        <CallLink data={contact} />
        <div>
          <div className="hidden text-sm lg:flex items-center justify-center mt-3 space-x-3">
            <Link className="hover:text-blue-700" href="/">
              Home
            </Link>
            <Dropdown data={services} />
            <Link className="hover:text-blue-700" href="/contact-us">
              Contact
            </Link>
          </div>
        </div>
        <span className="hidden lg:block"></span>
        {/* <Bars3Icon
          onClick={handleSidebar}
          className="lg:hidden text-primary h-8"
        /> */}
      </nav>

      <div
        className={
          sidebar
            ? "h-screen w-10/12 lg:w-9/12 py-16 flex flex-col items-center"
            : "hidden"
        }
      >
        <Link
          className="w-full px-3 pt-6 pb-5 border-b border-primary"
          href="/"
        >
          Home
        </Link>
        <Dropdown data={services} />
        <Link
          className="w-full px-3 pt-6 pb-5 border-b border-primary"
          href="/contact-us"
        >
          Contact Us
        </Link>
        <span className="mt-20 flex justify-center w-full">
          <CallLink className="w-full" data={contact} />
        </span>
      </div>
    </Container>
  );
};

export default Navbar;
