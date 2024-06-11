import React, { FC } from "react";
import Link from "next/link";
import { User } from "@/shared/types/aijusrist";

type TProps = {
  expert: User;
};


const Card: FC<TProps> = ({ expert }) => {
  console.log(expert);
  
  return (
    <Link href={`/experts/${expert.id}`} className="flex flex-col gap-2 w-1/7">
      <img
        className="rounded-2xl w-[200px] h-[200px] object-cover"
        src={
          expert.photo ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnn84jCxET9T1zwIdRdGESUXS_hdXyW-GH-g&s"
        }
        alt="/"
      />
      <h3 className="text-white text-xl">{expert.first_name}</h3>
      <p className="text-gray-500">{expert.specialization}</p>
    </Link>
  );
};

export default Card;
