import React from "react";
import {
  BANNER_SUB_TITLE,
  BANNER_TITLE,
  BANNER_TITLE_LABEL,
} from "@/constants/landing/text";

const Banner = () => {
  return (
    <div className="text-c-white text-center flex flex-col gap-8 w-3/4 m-auto items-center mt-32">
      <p className="text-base">{BANNER_TITLE_LABEL}</p>
      <h1 className="text-9xl whitespace-pre-wrap w-11/12 leading-tight font-medium">
        {BANNER_TITLE}
      </h1>
      <p className="text-2xl w-4/6">{BANNER_SUB_TITLE}</p>
    </div>
  );
};

export default Banner;
