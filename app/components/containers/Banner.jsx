import Image from "next/image";
import React from "react";
import { Container } from "../common";
import Navbar from "./Navbar";

export default function Banner({ data }) {
  return (
    <Container className="bg-blue-50 py-12">
      <div className="lg:w-9/12 w-10/12 flex text-center flex-col items-center text-gray-700">
        <Navbar
          services={data.allServices}
          contact={data.contact}
        />
        <div className="lg:w-10/12 grid lg:grid-cols-2 gap-5 lg:gap-10 mt-7">
          <div className="bg-primary p-1 rounded-lg">
            <Image
              className="w-full rounded"
              src="/img/banner-left.webp"
              height={200}
              width={300}
              alt="Banner Img Left"
            />
          </div>
          <div className="bg-primary p-1 rounded-lg">
            <Image
              className="w-full rounded"
              src="/img/banner-right.webp"
              height={200}
              width={300}
              alt="Banner Img Left"
            />
          </div>
        </div>
        <h1 className="text-2xl font-medium uppercase mt-5 text-primary">
          24 Hours a Day, 7 Days a Week
        </h1>
        <h1 className="mt-1">YOUR SAFETY IS OUR PRIORITY</h1>
      </div>
    </Container>
  );
}
