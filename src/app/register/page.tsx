"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useForm } from "react-hook-form";
import { registrationSchema } from "@/shared/zod";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const fields = [
  { name: "name", label: "Имя", placeholder: "Name", type: "text" },
  { name: "last_name", label: "Фамилия", placeholder: "Surname", type: "text" },
  {
    name: "phone",
    label: "Номер телефона",
    placeholder: "(+996)",
    type: "text",
  },
  {
    name: "email",
    label: "Почта",
    placeholder: "exemple@gmail.com",
    type: "email",
  },
  {
    name: "password",
    label: "Пароль",
    placeholder: "*******",
    type: "password",
  },
];

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const formSubmit = () => {
    console.log("ok");

    // const newUser = {
    //   first_name: firstName,
    //   last_name: lastName,
    //   password: password,
    //   email: email,
    //   contact: contact,
    // };

    // const res = await axios.post(`${baseURL}/users/users`, newUser);

    // console.log(res);
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

      <div className="bg-[#202123] rounded-3xl w-1/3 m-auto flex flex-col items-center py-6 px-12">
        <form
          className="w-full"
          onSubmit={(e) => {
            console.log('ok');
            
            e.preventDefault();
            formSubmit();
          }}
        >
          <p className="text-2xl text-c-white text-center mb-6">Регистрация</p>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-c-white">
              Имя
              <input
                className="input"
                type="text"
                placeholder="Имя"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </label>
            <label className="text-c-white">
              Фамилия
              <input
                className="input"
                type="text"
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </label>
            <label className="text-c-white">
              Телефон номер
              <input
                className="input"
                type="text"
                placeholder="+996 "
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </label>
            <label className="text-c-white">
              Email
              <input
                className="input"
                type="email"
                value={email}
                placeholder="exemple@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="text-c-white">
              Пароль
              <input
                className="input"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>
          <Button text="Зарегистрироваться" />
          <div className="flex justify-between text-c-gray text-sm mt-3 font-light">
            {/* <Link href="/register">Забыли пароль ?</Link> */}
            <Link className="link" href="/login">
              Войти в аккаунт
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
