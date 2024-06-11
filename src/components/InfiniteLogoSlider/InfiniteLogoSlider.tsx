import React from "react";
import Image from "next/image";
import styles from "./InfiniteLogoSlider.module.scss";

const loop = [1, 2, 3, 4, 5, 6];

const InfiniteLogoSlider = () => {
  return (
    <div className="bg-black pt-40">
      <div className={styles.slides__container}>
        <div className={styles.slides}>
          {loop.map((logo) => (
            <div key={logo} className="flex items-center gap-10 w-fit">
              <h2 className="text-c-white text-8xl font-medium whitespace-nowrap">
                AI JURIST
              </h2>
              <Image
                src="/images/landing/BlueRectangle.svg"
                alt="loop-logo"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoSlider;
