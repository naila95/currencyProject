import React from "react";
import { mockData } from "../../../helpers/constants";

export default function Board() {
  return (
    <div>
      {mockData.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-6 flex flex-col bg-[#fff] border-solid border-2 border-[#e8e8e8] rounded-[12px] w-[20rem]"
          >
            <div className="flex justify-between px-3 py-3 border-solid border-y border-[#e8e8e8]">
              <div className="flex justify-between items-center">
                <h5 className="px-2 py-1 bg-[#E0F64B] rounded-3xl mr-3">
                  {item.id}
                </h5>
                <h5 className="text-[#171717] text-base">{item.name}</h5>
              </div>
              <div className="px-[10px] ph-[5px] bg-[#1ABC7B] text-white rounded-md flex justify-center items-center">
                <p>{item.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
