import React, { useState, useEffect } from "react";

import { RxCross2 } from "react-icons/rx";
import { PiListNumbers } from "react-icons/pi";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { mutate } from "swr";

import axios from "./api/axios";

import { ACTIVE_MEALS_URL } from "./utils/constants";
import { delay } from "./utils/helpers";

export default function Modal({
  id,
  guest_number_lunch,
  guest_number_snacks,
  onSetModalShown,
}) {
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("lunchMealNo", guest_number_lunch);
    setValue("snacksMealNo", guest_number_snacks);
  }, [setValue, guest_number_lunch, guest_number_snacks]);

  const GUEST_MEAL_UPDATE_URL = `/user_wise_meal/${id}`;

  const handleGuestMealUpdate = async (data) => {
    try {
      setSubmitButtonClicked(true);
      const payload = [
        {
          meal_type: "lunch",
          menu_set_id: null,
          no_of_guest: Number(data.lunchMealNo),
        },
        {
          meal_type: "snacks",
          menu_set_id: null,
          no_of_guest: Number(data.snacksMealNo),
        },
      ];
      await axios.put(GUEST_MEAL_UPDATE_URL, payload);
      delay(500); // not delaying results false mutation
      mutate(ACTIVE_MEALS_URL);
      toast.success("Successfully Updated guest meal!");
      onSetModalShown(false);
    } catch (err) {
      err.response
        ? toast.error(err.response?.data?.detail)
        : toast.error("Something went wrong!");
    } finally {
      setSubmitButtonClicked(false);
    }
  };

  return (
    <>
      {/* component */}
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 py-10 z-50">
        <div className="max-h-full w-full max-w-xl px-5 overflow-y-auto sm:rounded-2xl bg-white">
          <div className="w-full">
            <div className="flex justify-between w-full p-2 border-b">
              <p className="p-3  text-gray-700 text-2xl  font-semibold">
                Update Guest Meal
              </p>
              <button
                onClick={() => onSetModalShown(false)}
                className="p-2  text-red-500 text-2xl bg-white font-semibold"
              >
                <RxCross2 />
              </button>
            </div>
            <div className="m-8 my-8 max-w-[400px] mx-auto">
              <form onSubmit={handleSubmit(handleGuestMealUpdate)}>
                <div className="flex flex-col">
                  <div>
                    <div className="mb-5">
                      <p className="text-gray-800 text-lg  font-semibold">
                        Lunch Menu Set
                      </p>
                      <label className="text-sm">Meal No</label>
                      <div className="flex  space-x-2 p-2 border rounded items-center input-field px-3">
                        <PiListNumbers />
                        <input
                          className="w-full bg-slate-100 p-1"
                          type="number"
                          min={0}
                          max={100}
                          required={true}
                          placeholder="0"
                          {...register("lunchMealNo", {})}
                        />
                      </div>
                    </div>

                    <p className="text-gray-800 text-lg  font-semibold">
                      Snacks Menu Set
                    </p>
                    <label className="text-sm">Meal No</label>
                    <div className="flex  space-x-2 p-2 border rounded items-center input-field px-3">
                      <PiListNumbers />
                      <input
                        className="w-full bg-slate-100 p-1"
                        type="number"
                        min={0}
                        max={100}
                        required={true}
                        placeholder="0"
                        {...register("snacksMealNo", {})}
                      />
                    </div>
                    <div className="btn-field mt-6 bg-slate-700 text-white w-24 rounded-2xl">
                      <button
                        className={submitButtonClicked ? "disabled" : ""}
                        type="submit"
                        disabled={submitButtonClicked}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
