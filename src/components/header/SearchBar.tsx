import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="flex flex-row items-center justify-between w-full px-4 bg-white rounded-xl">
      <BiSearch className="bg-white" size={30} />
      <input
        className="w-full h-full pl-4 pr-8 text-xl font-normal bg-white"
        placeholder="메일 검색"
      />
    </div>
  );
}
