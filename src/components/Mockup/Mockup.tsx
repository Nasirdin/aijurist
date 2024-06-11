import React from "react";
import Image from "next/image";
import { MOCKUP_SUB_TITLE, MOCKUP_TITLE } from "@/constants/landing/text";

const Mockup = () => {
  return (
    <div className="bg-black pt-40">
      <div className="w-5/6 flex justify-between items-center gap-8 m-auto">
        <Image
          data-aos="zoom-out-up"
          className="w-full"
          src="/images/landing/Mockup.png"
          alt="mockup"
          width={500}
          height={500}
        />
        <div data-aos="zoom-out-up" className="w-full text-end">
          <h2 className="text-c-blue font-medium text-6xl mb-8">
            {MOCKUP_TITLE}
          </h2>
          <p className="text-c-white text-md">{MOCKUP_SUB_TITLE}</p>
        </div>
      </div>
    </div>
  );
};

export default Mockup;
