"use client";

import React, { Suspense, useEffect } from "react";
import Header from "@/components/Header/page";
import Filters from "@/components/CategoryComponents/Filters";
import ExpertCard from "@/components/CategoryComponents/ExpertCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import { getUsersList } from "@/redux/features/users/reducer";
import { UserTypeEnum } from "@/shared/types/aijusrist";

const Page = () => {
  const dispatch = useAppDispatch();
  const usersList = useSelector(
    (state: RootState) => state.user.usersList.usersList,
  );

  useEffect(() => {
    dispatch(getUsersList({ user_type: "expert" as UserTypeEnum }));
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="w-10/12">
          <Filters />
          <div className="flex gap-8 flex-wrap my-16">
            {usersList.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
