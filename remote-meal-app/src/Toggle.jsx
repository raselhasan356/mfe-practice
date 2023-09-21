import React, { useState } from "react";

import { toast } from "react-hot-toast";

import axios from "./api/axios";
import useSWRConfig from "swr";

// import { mutate } from "swr";

import { ACTIVE_MEALS_URL } from "./utils/constants";
import { delay } from "./utils/helpers";

export default function Toggle({
  status: initialStatus,
  mealType,
  isDisabled,
  id,
}) {
  const [status, setStatus] = useState(initialStatus);

  const USER_MEAL_EDIT_URL = `/user_wise_meal/user_meal_edit/${id}`;

  const { mutate } = useSWRConfig();

  async function handleUserMealEdit(e) {
    e.stopPropagation();
    if (isDisabled) {
      toast.error("Not permitted!");
    } else {
      try {
        let requestBody = {
          [mealType]: !status,
          menu_set_id: null,
        };
        const res = await axios.put(USER_MEAL_EDIT_URL, requestBody);

        await delay(1000); // not delaying results false mutation
        console.log("from remote", res?.data);
        mutate(ACTIVE_MEALS_URL);
        setStatus((prev) => !prev);
        toast.success(res?.data?.message);
      } catch (err) {
        err.response
          ? toast.error(err.response?.data?.detail)
          : toast.error("Something went wrong!");
      }
    }
  }
  return (
    <label className="flex relative h-6 w-12 cursor-pointer">
      <input
        type="checkbox"
        checked={status}
        onClick={handleUserMealEdit}
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
      />

      <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
        <svg
          data-unchecked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          data-checked-icon
          xmlns="http://www.w3.org/2000/svg"
          className="hidden h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>

      <span className="absolute inset-0 rounded-full bg-red-300 transition peer-checked:bg-green-500"></span>
    </label>
  );
}
