import React, { useState } from "react";

import {
  BiSolidDownArrow,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { GrRefresh } from "react-icons/gr";

const MailMenuBar = () => {
  const listCnt = 10;
  const curPage = 1;
  const maxPage = 5;

  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-row w-full">
        <input type="checkbox" />
        <button>
          <BiSolidDownArrow size={20} />
        </button>
        <button>
          <GrRefresh size={20} />
        </button>
      </div>
      <div className="flex flex-row w-full">
        <p>
          {listCnt}개 중 {curPage}-{maxPage}
        </p>
        <button>
          <BiChevronLeft size={30} />
        </button>
        <button>
          <BiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default MailMenuBar;
