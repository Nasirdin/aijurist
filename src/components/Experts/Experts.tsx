import React from "react";
import {
  // EXPERTS_IMG_SUB_TITLE,
  // EXPERTS_IMG_TITLE,
  EXPERTS_SUB_TITLE,
  EXPERTS_TITLE,
} from "@/constants/landing/text";
import Image from "next/image";

const Experts = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between gap-20 items-center w-3/4 m-auto pt-40">
        <div data-aos="zoom-in-right" className="w-full">
          <h2 className="text-c-blue text-7xl mb-8">{EXPERTS_TITLE}</h2>
          <p className="text-c-white text-md">{EXPERTS_SUB_TITLE}</p>
        </div>
        <div data-aos="zoom-in-left" className="w-3/4">
          <div className="bg-c-dark-gray rounded-3xl w-full h-[420px] overflow-y-scroll px-12 pt-12">
            <Image
              className="m-auto"
              src="/images/landing/Experts.png"
              alt="experts"
              height={350}
              width={360}
            />
          </div>
          <div className="px-8 mt-12">
            {/* <h3 className="text-c-white text-2xl mb-4">{EXPERTS_IMG_TITLE}</h3>
            <p className="text-c-gray">{EXPERTS_IMG_SUB_TITLE}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
