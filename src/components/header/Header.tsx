import React from "react";
import { BiMenu } from "react-icons/bi";

import SearchBar from "./SearchBar";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  const handleSideBarBtn = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div>
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
