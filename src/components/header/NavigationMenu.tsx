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
    <div>
      <button onClick={handleSettingBtn}>
        <FiSettings />
      </button>
      <button onClick={handleMenuBtn}>
        <BiSolidGrid />
      </button>
      <button onClick={handleMyPageBtn}>
        <img />
      </button>
    </div>
  );
}
