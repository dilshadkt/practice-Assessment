import React from "react";

const SideNav = () => {
  return (
    <div className="fixed right-0 top-0 bottom-0 m-auto bg-white border-l-2 border-black flex items-center w-[100px]">
      <div className="w-full">
        <ul>
          <li className="cursor-pointer flex items-center justify-center font-semibold py-3 px-4 hover:bg-yellow-400 bg-yellow-200 w-full">
            New
          </li>
          <li className="cursor-pointer flex items-center justify-center font-semibold py-3 px-4 hover:bg-yellow-400 bg-yellow-200 w-full">
            Insert
          </li>
          <li className="cursor-pointer flex items-center justify-center font-semibold py-3 px-4 hover:bg-yellow-400 bg-yellow-200 w-full">
            Save
          </li>
          <li className="cursor-pointer flex items-center justify-center font-semibold py-3 px-4 hover:bg-yellow-400 bg-yellow-200 w-full">
            Print
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
