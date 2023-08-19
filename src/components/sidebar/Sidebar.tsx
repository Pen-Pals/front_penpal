import { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { FaUserFriends, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-all duration-300 ease-in-out h-screen flex flex-col items-start ${
        hovered ? "w-64" : "w-12"
      }`}
    >
      <div className="flex items-center w-full h-16">
        {/* Icon */}
        <button className="p-2 w-12 h-full flex items-center justify-center">
          <BiMailSend size={30} />
        </button>
        {/* Additional content */}
        <div
          className={`transition-all ease-in-out flex-grow pl-2 ${
            hovered ? "opacity-100 delay-300" : "opacity-0"
          }`}
        >
          지구본 메일함
        </div>
      </div>

      <div className="flex items-center w-full h-16">
        {/* Icon */}
        <button className="p-2 w-12 h-full flex items-center justify-center">
          <FaUserFriends size={30} />
        </button>
        {/* Additional content */}
        <div
          className={`transition-all ease-in-out flex-grow pl-2 ${
            hovered ? "opacity-100 delay-300" : "opacity-0"
          }`}
        >
          내 친구 찾기
        </div>
      </div>

      <div className="flex items-center w-full h-16">
        {/* Icon */}
        <button className="p-2 w-12 h-full flex items-center justify-center">
          <FaUsers size={30} />
        </button>
        {/* Additional content */}
        <div
          className={`transition-all ease-in-out flex-grow pl-2 ${
            hovered ? "opacity-100 delay-300" : "opacity-0"
          }`}
        >
          새로운 친구 탐색하기
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
