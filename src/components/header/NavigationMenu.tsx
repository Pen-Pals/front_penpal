import React from "react";
import { BiSolidGrid } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
export default function NavigationMenu() {
  const handleSettingBtn = () => {
    console.log("clicked");
  };
  const handleMenuBtn = () => {
    console.log("clicked");
  };
  const handleMyPageBtn = () => {
    console.log("clicked");
  };
  return (
    <div className="flex flex-row justify-end w-full max-w-sm gap-3 px-8">
      <button onClick={handleSettingBtn}>
        <FiSettings size={30} />
      </button>
      <button onClick={handleMenuBtn}>
        <BiSolidGrid size={30} />
      </button>
      <button onClick={handleMyPageBtn}>
        <img className="bg-gray-200 border-none rounded-full w-9 h-9" />
      </button>
    </div>
  );
}
