import React from "react";
import { BiMenu } from "react-icons/bi";

import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const handleSideBarBtn = () => {
    console.log("clicked");
  };

  return (
    <div className="sticky top-0 z-20 transition-all">
      <div className="flex flex-row items-center justify-between max-xl:w-full xl:w-[90rem] mx-auto h-12">
        <div className="flex flex-row justify-between w-full max-w-sm px-8">
          <button onClick={handleSideBarBtn}>
            <BiMenu size={30} />
          </button>
          <div className="pl-4 pr-8 text-4xl font-normal">meail mail</div>
        </div>
        <SearchBar />
        <NavigationMenu />
      </div>
    </div>
  );
}
