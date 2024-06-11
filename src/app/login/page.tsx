"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { LoginUser } from "@/shared/types/aijusrist";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/shared/zod";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { login } from "@/redux/features/auth/reducer";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { control, handleSubmit } = useForm<LoginUser>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin = (data: LoginUser) => {
    dispatch(login(data))
      .unwrap()
      .then((res) => {
        if (res.data.user_role === "client") {
          router.push("/chat");
        } else {
          router.push("/appointments");
        }
      });
  };

  return (
    <main className="bg-black h-screen flex justify-center">
      <Link href="/">
        <Image
          className="absolute top-8 left-8"
          src={"/images/Logo.svg"}
          alt="/"
          width={140}
          height={20}
        />
      </Link>

      <div className="bg-[#202123] rounded-3xl w-1/3 m-auto flex flex-col items-center py-8 px-12">
        <form onSubmit={handleSubmit(onLogin)} className="w-full">
          <p className="text-2xl text-c-white text-center mb-6">Войти</p>
          <div className="flex flex-col gap-2 mb-6">
            <Input
              control={control}
              label="Почта"
              name="email"
              placeholder="exemple@gmail.com"
              type="email"
            />
            <Input
              control={control}
              label="Пароль"
              name="password"
              placeholder="*******"
              type="password"
            />
          </div>
          <Button type="submit" text="Войти" />
          <div className="flex justify-between text-c-gray text-sm mt-12 font-light">
            <Link href="/login">Забыли пароль ?</Link>
            <Link href="/register">Регистрация</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
