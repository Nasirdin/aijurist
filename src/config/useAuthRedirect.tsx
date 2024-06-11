"use client";

import { TAccount } from "@/shared/types/customTypes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuthRedirect = () => {
  const pathname = usePathname();
  const [storedAccount, setStoredAccount] = useState<TAccount | null>();
  // const storedAccount = localStorage.getItem("account");
  useEffect(() => {
    if (typeof window === undefined) return;
    setStoredAccount(JSON.parse(localStorage.getItem("account")!));
  }, []);
  const profile = storedAccount;

  const pagesWithoutAuth = ["/login", "/register", "/"];

  if (profile == null) {
    // if (pagesWithoutAuth.includes(pathname)) return;
    //
    // return "/login";
  } else if (pathname === "/login") {
    if (profile.user_role === "client") {
      return "/chat";
    }
    return "/appointments";
  }
};
