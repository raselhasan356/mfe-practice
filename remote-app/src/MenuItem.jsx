import { useState } from "react";
import useOnClickOutsideRef from "./hooks/useOnClickOutsideRef";
import { IconComponents } from "./utils/iconMapper";

export default function MenuItem({ module, onChangeSubMenuItems }) {
  const [subMenuShown, setSubMenuShown] = useState(false);

  const subMenuRef = useOnClickOutsideRef(() => setSubMenuShown(false));

  const MenuIcon = IconComponents[module.SubModuleIconName];

  function handleSubMenuClick(items) {
    setSubMenuShown(true);
    onChangeSubMenuItems(items);
  }

  return (
    <>
      <button
        ref={subMenuRef}
        onClick={() => handleSubMenuClick(module.Sections)}
        className={`${
          subMenuShown ? "text-[#202020] font-semibold" : "text-[#696969]"
        } hover:text-[#202020] hover:font-semibold font-poppins text-sm flex justify-center items-center space-x-1`}
      >
        <MenuIcon />
        <p>{module.SubModuleName}</p>
      </button>
    </>
  );
}
