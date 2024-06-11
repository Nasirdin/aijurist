"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header/page";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { getUser } from "@/redux/features/users/reducer";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addConsultation } from "@/redux/features/consultation/reducer";
import CModal from "@/components/UI/Modal";
import { toastError, toastSuccess } from "@/components/Toasts/toastify";
import { Form } from "react-hook-form";
import "../style.css";

const Expert = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.user.currentUser.currentUser
  );
  const [description, setDescription] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const handleAddAppointmentToExpert = () => {
    const data = {
      lawyer: +id,
      description,
    };
    description.length &&
      dispatch(addConsultation(data))
        .unwrap()
        .then(() => {
          toastSuccess(
            `You successfully send request to appointment with expert ${currentUser?.first_name}!`
          );
          handleCloseModal();
        })
        .catch(() => {
          toastError("Something wrong!");
        });
  };

  useEffect(() => {
    if (typeof id === "string") {
      dispatch(getUser(id));
    }
  }, []);

  return (
    <>
      <div className="bg-black h-screen">
        <Header />
        <div className="w-full flex flex-col items-center">
          <div className="flex gap-6 w-8/12">
            <div className="flex flex-col gap-4">
              <img
                className="w-[350px] h-[200] rounded-3xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnn84jCxET9T1zwIdRdGESUXS_hdXyW-GH-g&s"
                alt="/"
              />
              <button
                onClick={handleOpenModal}
                className="border-gray-400 p-4 bg-gray-400 rounded-xl"
              >
                Добавить встречу
              </button>
            </div>

            <div className="text-gray-500 flex flex-col gap-2">
              <h3 className="text-white text-3xl">{currentUser?.first_name}</h3>
              <p className="text-gray-300 text-xl">
                {currentUser?.specialization}
              </p>
              <p className="text-gray-500">{currentUser?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <CModal open={openModal} closeModal={handleCloseModal}>
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-2xl text-center">Добавить встречу</h2>
          <textarea
            className="rounded-xl input"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
          <button
            disabled={!description.length}
            onClick={handleAddAppointmentToExpert}
            className="border-gray-400 p-4 bg-gray-400 rounded-xl"
          >
            Добавить встречу
          </button>
        </div>
      </CModal>
    </>
  );
};

export default Expert;
