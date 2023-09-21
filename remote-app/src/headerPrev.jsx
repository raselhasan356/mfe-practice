import { useState } from "react";
import ArrowDownIcon from "./assets/icons/arrowDownIcon";
import Logo from "./assets/icons/logo";
import NotificationIcon from "./assets/icons/notificationIcon";
import UserProfileIcon from "./assets/icons/userProfileIcon";
import Dropdown from "./dropdown";
import useOnClickOutsideRef from "./hooks/useOnClickOutsideRef";

export default function Header() {
  const [dropdownShown, setDropdownShown] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const dropdownRef = useOnClickOutsideRef(() => setDropdownShown(false));

  function handleDropdownClick() {
    setDropdownShown(true);
  }

  return (
    <header>
      <div className="flex items-center justify-between p-5 bg-white flex-wrap">
        <Logo />

        <div className="hidden md:flex justify-center items-center space-x-4">
          <div>
            <button className="flex justify-center items-center bg-[#F4F7FF] rounded-full h-[36px] w-[36px]">
              <NotificationIcon />
            </button>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <UserProfileIcon />
            <div>
              <button
                ref={dropdownRef}
                onClick={handleDropdownClick}
                className="flex justify-center items-center space-x-2 "
              >
                <div className="inline-flex flex-col items-start relative">
                  <div className=" w-fit font-semibold font-poppins text-black text-[14px] leading-[normal]">
                    VivaSoft
                  </div>
                  <div className=" w-fit opacity-70 font-normal font-poppins text-black text-[10px] leading-[normal]">
                    Admin
                  </div>
                  {dropdownShown && <Dropdown />}
                </div>
                <ArrowDownIcon />
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuShown((prev) => !prev)}
          className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200"
        >
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600"></div>
        </button>
      </div>
      {/* // */}
      <div
        className={`${
          mobileMenuShown ? "flex" : "hidden"
        } md:hidden h-4/5 w-3/5 flex-col justify-between border-e bg-green-300`}
      >
        <div className="px-4 py-1">
          <ul className="mt-6 space-y-1">
            <li>
              <a
                href=""
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                General
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Billing
              </a>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Invoices
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action="/logout">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
      {/* // */}
    </header>
  );
}
