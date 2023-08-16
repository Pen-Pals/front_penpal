import React from "react";
import { BiMenu } from "react-icons/bi";

import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const handleSideBarBtn = () => {
    console.log("clicked");
  };

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex flex-row">
        <button onClick={handleSideBarBtn}>
          <BiMenu />
        </button>
        <div>Meail Mail</div>
      </div>
      <SearchBar />
      <NavigationMenu />
    </div>
  );
}
