import { useState } from "react";

const Sidebar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-all duration-300 ease-in-out h-screen flex items-start ${
        hovered ? "w-64" : "w-12"
      } bg-gray-200`}
    >
      <div className="w-12">
        {/* Replace these with your icons */}
        <div className="p-2">Icon 1</div>
        <div className="p-2">Icon 2</div>
        <div className="p-2">Icon 3</div>
      </div>

      {/* Display additional content if hovered */}
      {hovered && (
        <div className="pl-2">
          <div className="p-2">More content 1</div>
          <div className="p-2">More content 2</div>
          <div className="p-2">More content 3</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
