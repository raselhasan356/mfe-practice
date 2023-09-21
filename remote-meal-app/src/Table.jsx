import React, { useState } from "react";

import { FiMoreHorizontal } from "react-icons/fi";

import Toggle from "./Toggle";
import Modal from "./Modal";

export default function Table({ data, buttonIsDisabled }) {
  const [modalShown, setModalShown] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const [activeGuestNumberLunch, setActiveGuestNumberLunch] = useState(0);
  const [activeGuestNumberSnacks, setActiveGuestNumberSnacks] = useState(0);

  function handleAction(id, guest_number_lunch, guest_number_snacks) {
    setActiveId(id);
    setActiveGuestNumberLunch(guest_number_lunch);
    setActiveGuestNumberSnacks(guest_number_snacks);
    setModalShown(true);
  }

  const renderHeaderCells = () => {
    return (
      <>
        {modalShown && (
          <Modal
            id={activeId}
            guest_number_lunch={activeGuestNumberLunch}
            guest_number_snacks={activeGuestNumberSnacks}
            onSetModalShown={setModalShown}
          />
        )}
        <thead className=" text-gray-900 bg-gray-200 text-left">
          <tr>
            <th
              scope="col"
              className="flex justify-center items-center text-sm px-6 py-2"
            >
              SL
            </th>
            <th scope="col" className="text-sm px-6 py-2">
              DATE
            </th>
            <th scope="col" className="text-sm px-6 py-2">
              LUNCH
            </th>
            <th scope="col" className="text-sm px-6 py-2">
              SNACKS
            </th>
            <th scope="col" className="flex justify-center text-sm px-6 py-2">
              ACTION
            </th>
          </tr>
        </thead>
      </>
    );
  };

  const renderDataCells = (item, index) => {
    console.table(item);
    console.log(index);
    return (
      <>
        <td className="flex justify-center items-center px-6 py-2 text-slate-700">
          {index + 1}
        </td>
        <td className="px-6 py-2 text-slate-700">
          {item.date.toLocaleString()}
        </td>
        <td className="px-6 py-2">
          <Toggle
            status={item.lunch}
            mealType={"lunch"}
            isDisabled={buttonIsDisabled}
            id={item.id}
          />
        </td>
        <td className="px-6 py-2">
          <Toggle
            status={item.snacks}
            mealType={"snacks"}
            isDisabled={buttonIsDisabled}
            id={item.id}
          />
        </td>
        <td className="flex justify-center items-center px-6 py-3">
          <button
            onClick={() =>
              handleAction(
                item.id,
                item.guest_number_lunch,
                item.guest_number_snacks
              )
            }
            className="flex justify-center bg-slate-200 items-center border p-1 w-10 h-7 rounded"
          >
            <FiMoreHorizontal className="h-5 w-5 text-gray-600" />
          </button>{" "}
        </td>
      </>
    );
  };

  const renderRows = () => {
    return (
      <tbody>
        {data.map((item, index) => (
          <tr className=" bg-white border-b" key={item.id}>
            {renderDataCells(item, index)}
          </tr>
        ))}
      </tbody>
    );
  };

  const renderTable = () => {
    return (
      <table className="w-full shadow-md">
        {renderHeaderCells()}
        {renderRows()}
      </table>
    );
  };

  return (
    <>
      {Array.isArray(data) && (
        <div className="flex overflow-x-auto p-6 items-center justify-center">
          {renderTable()}
        </div>
      )}
    </>
  );
}
