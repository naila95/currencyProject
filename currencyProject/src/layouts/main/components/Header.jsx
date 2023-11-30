import React from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function () {
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-5">
        <h5 className="text-2xl">Dashboard</h5>
        <div className="flex justify-between items-center">
          <input
            className="outline outline-1 outline-gray rounded-md px-2 py-1 mr-3"
            type="text"
            placeholder="Search..."
          />
          <CiMenuBurger />
        </div>
      </div>
    </div>
  );
}
