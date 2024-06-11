import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black p-6 pt-24">
      <div className="w-11/12 rounded-3xl m-auto  p-8">
        <div className="flex justify-between text-c-white">
          <Image src="/images/Logo.svg" alt="logo" width={140} height={140} />
          <p>&copy; AI Jurist 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
