import { useState } from "react";
import ArrowDownIcon from "./assets/icons/arrowDownIcon";
import Logo from "./assets/icons/logo";
import NotificationIcon from "./assets/icons/notificationIcon";
import UserProfileIcon from "./assets/icons/userProfileIcon";
import Dropdown from "./dropdown";
import useOnClickOutsideRef from "./hooks/useOnClickOutsideRef";
import { navigationData } from "./data/navigationData";
import SubModule from "./SubModule";

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

      {/* Mobile Menu */}
      <div
        className={`${
          mobileMenuShown ? "flex" : "hidden"
        } md:hidden w-3/5 flex-col justify-between border-e`}
      >
        <div className="px-4 py-1">
          <ul className="mt-6 space-y-1">
            {navigationData.map((module) => {
              return <SubModule key={module.SubModuleId} module={module} />;
            })}
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-y border-gray-100">
          <a
            href="#"
            className="flex items-center gap-4 bg-white p-4 px-8 hover:bg-gray-50"
          >
            <div className="flex items-center justify-center gap-4">
              <div>
                <p className="opacity-70 text-black text-xs font-normal font-poppins">
                  <span className="block font-semibold">VivaSoft</span>
                  <span>Admin</span>
                </p>
              </div>
              <div>
                <UserProfileIcon />
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* // */}
    </header>
  );
}
