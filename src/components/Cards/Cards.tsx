import React from "react";
import { SECTIONS_TITLE_1, SECTIONS_TITLE_2 } from "@/constants/landing/text";
import Card from "@/components/Cards/Card";
import Image from "next/image";
import { cards } from "@/constants/landing/cards";

const Cards = () => {
  return (
    <div className="bg-black">
      <div className="text-center flex flex-col items-center mb-40">
        <h2 className="text-6xl text-c-white whitespace-pre-wrap w-7/12 font-medium">
          {SECTIONS_TITLE_1}
        </h2>
        <h2 className="text-6xl text-c-blue whitespace-pre-wrap font-medium">
          {SECTIONS_TITLE_2}
        </h2>
      </div>
      <div>
        <div className="grid grid-rows-5 grid-flow-col gap-6 w-2/4 m-auto">
          <div
            data-aos="fade-right"
            className="row-span-1 bg-c-blue w-auto h-[150px] rounded-3xl"
          />
          {cards.map(({ id, icon, title, text, animationType }) => (
            <Card
              key={id}
              animationType={animationType}
              classname="row-span-2"
              icon={icon}
              title={title}
              text={text}
            />
          ))}
          <div
            data-aos="fade-left"
            className="row-span-1 bg-c-blue w-auto h-[150px] rounded-3xl flex gap-4 items-center justify-center cursor-pointer"
          >
            {/* <p className="text-3xl font-medium text-c-white w-1/4">
              Learn More
            </p> */}
            <Image
              src="/icons/ArrowCircleRight.svg"
              alt="arrow"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
