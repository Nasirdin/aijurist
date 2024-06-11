"use client";
import React, { ReactNode, useEffect } from "react";
import { useAuthRedirect } from "@/config/useAuthRedirect";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const AuthRedirectProvider = ({ children }: { children: ReactNode }) => {
  const redirect = useAuthRedirect();
  const dispatch = useAppDispatch();
  // if (localStorage.getItem("account")) {
  //   dispatch(restoreSession());
  // }
  const router = useRouter();

  useEffect(() => {
    if (redirect !== undefined) {
      router.push(redirect);
    }
  }, [redirect, router]);

  return <div>{children}</div>;
};

export default AuthRedirectProvider;
