import React, { FC } from "react";
import Image from "next/image";

type TProps = {
  icon: string;
  title: string;
  text: string;
  classname?: string;
  animationType: string;
};

const Card: FC<TProps> = ({ icon, title, text, classname, animationType }) => {
  return (
    <div
      data-aos={animationType}
      className={`p-9 bg-[#2F2F2F] rounded-3xl ${classname}`}
    >
      <div className="bg-[#367CFF] rounded-xl p-4 w-fit">
        <Image src={icon} alt="/" height={32} width={32} />
      </div>
      <p className="text-c-white text-xl font-bold mt-4 mb-2">{title}</p>
      <p className="text-c-white">{text}</p>
    </div>
  );
};

export default Card;
