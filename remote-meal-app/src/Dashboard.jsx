import { useEffect, useState } from "react";

import {
  add,
  isAuthenticated,
  getAccessToken,
} from "remoteApp/remoteUtilityFunctions";

import MealAvailabilityToggle from "./MealAvailabilityToggle";
import Table from "./Table";

import { ACTIVE_MEALS_URL, AVAILABILITY_URL } from "./utils/constants";
import useSWR from "swr";

export default function Dashboard() {
  const [authStatus, setAuthStatus] = useState(null);
  const [doesTakeFood, setDoesTakeFood] = useState(false);
  const [isSpinnerActive, setIsSpinnerActive] = useState(false);

  const { data: activeMeals, isLoading } = useSWR(ACTIVE_MEALS_URL);
  const { data: availabilityStatus } = useSWR(AVAILABILITY_URL);

  if (!isLoading) console.log(activeMeals);

  useEffect(() => {
    availabilityStatus &&
      setDoesTakeFood(() => availabilityStatus.does_take_food);
  }, [availabilityStatus]);

  useEffect(() => {
    isAuthenticated().then((status) => {
      // console.log(status);
      setAuthStatus(status);
    });
  }, [authStatus]);

  async function handleUserChangeAvailability() {}

  return (
    <>
      {authStatus === null ? (
        <p>Dashboard Loading...</p>
      ) : authStatus === true ? (
        <div className="bg-slate-300 p-8 min-h-screen">
          <div className="rounded-3xl px-4 py-8 bg-white">
            <div className="flex items-center justify-between">
              <div className="text-blue-950 font-bold text-center">
                Meal Entry
              </div>
              <div className="flex space-x-2 justify-center items-center">
                <div className="text-blue-950 font-bold text-center">
                  Availability
                </div>
                <MealAvailabilityToggle
                  status={doesTakeFood}
                  clicked={isSpinnerActive}
                  onChangeStatus={handleUserChangeAvailability}
                />
              </div>
            </div>
            <div className="">
              <Table data={activeMeals} buttonIsDisabled={!doesTakeFood} />
            </div>
          </div>
        </div>
      ) : (
        <p>You are not authenticated.</p>
      )}
    </>
  );
}
