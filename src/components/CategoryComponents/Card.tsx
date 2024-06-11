import React, { FC } from "react";
import Button from "@/components/UI/Button";
import { TCategory } from "@/constants/userApp/categories";
import Link from "next/link";

type TProps = {
  category: TCategory;
};

const Card: FC<TProps> = ({ category }) => {
  return (
    <Link href="/experts" className="flex flex-col gap-4 w-1/4">
      <h3 className="text-white text-3xl">{category.title}</h3>
      <p className="text-gray-500">{category.description}</p>
      <Button text="Перейти" />
    </Link>
  );
};

export default Card;
