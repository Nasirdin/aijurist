"use client";

import { FC, useLayoutEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosRegistry: FC = () => {
  useLayoutEffect(() => {
    AOS.init({
      once: true,
      delay: 100,
      duration: 800,
    });
  }, []);

  return null;
};

export default AosRegistry;
