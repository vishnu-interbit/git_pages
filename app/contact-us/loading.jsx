"use client";
import React from "react";
import { Spinner } from "flowbite-react";

export default function loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-24">
      <Spinner color="warning" aria-label="Warning spinner example" size="xl" />
      <p className="text-primary text-xl font-medium mt-5">Loading...</p>
    </div>
  );
}
