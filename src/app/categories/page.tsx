import React from "react";
import Filters from "@/components/CategoryComponents/Filters";
import Header from "@/components/Header/page";
import Card from "@/components/CategoryComponents/Card";
import { categoriesList } from "@/constants/userApp/categories";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="w-10/12">
          <div className="flex gap-10 flex-wrap my-16">
            {categoriesList.map((category) => (
              <Card key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
