"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/slice";

const Header = () => {
  const path = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const logoutFromAccount = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-between p-12">
      <div className="flex items-center gap-24">
        <Image src={"/images/Logo.svg"} alt="/" width={140} height={20} />
        {path !== "/" && path !== "/appointments" && (
          <ul className="flex justify-between gap-8 text-sm">
            <li
              className={`text-gray-400 hover:text-c-white cursor-pointer px-4 py-2 ${path === "/chat" && "bg-gray-800 text-white rounded-xl"}`}
            >
              <Link href="/chat">ЧАТ</Link>
            </li>
            <li
              className={`text-gray-400 hover:text-c-white cursor-pointer px-4 py-2 ${path === "/experts" && "bg-gray-800 text-white rounded-xl"}`}
            >
              <Link href="/experts">СПЕЦИАЛИСТЫ</Link>
            </li>
          </ul>
        )}
      </div>

      <div className="flex gap-4 items-center">
        {path === "/" ? (
          <Link href="/login">
            <button className="border rounded-full text-c-white py-2 px-4">
              Начать
            </button>
          </Link>
        ) : (
          <button
            onClick={logoutFromAccount}
            className="border rounded-full text-c-white py-2 px-4"
          >
            Выйти
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
