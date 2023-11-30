import React, { useEffect, useState } from "react";
import { mockData } from "../../../helpers/constants";
import img from "../../../assets/wallet.webp";

export default function Wallet() {
  const [count, setCount] = useState(5);
  const [staticData, setStaticData] = useState([]);
  const getStaticData = () => {
    let myArr = [...mockData];
    setStaticData(myArr.splice(0, count));
  };
  useEffect(() => {
    getStaticData();
  }, [count]);
  return (
    <div className="flex flex-col">
      <h3 className="mb-5">Wallet Cryptocurrency</h3>
      <div className="bg-[#171717] h-[120px] w-[20rem] rounded-lg relative">
        <img className="absolute bottom-0 right-[15px] w-[120px]" src={img} />
        <p className="text-white px-2 py-2">Total Assets</p>
      </div>
      <div className="mt-6 flex flex-col bg-[#fff] border-solid border-2 border-[#e8e8e8] rounded-[12px]">
        {staticData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between px-3 py-3 border-solid border-y border-[#e8e8e8]"
            >
              <div className="">
                <h5 className="text-[#171717] text-base">{item.name}</h5>
                <p className="text-[#848484] text-sm">{item.shortName}</p>
              </div>
              <div className="">
                <h5 className="text-[#171717] text-base">{item.value}</h5>
                <p className="text-[#848484] text-sm">{item.currency}USD</p>
              </div>
            </div>
          );
        })}

        {mockData.length === staticData.length ? null : (
          <button
            className="px-3 py-2 border-sky-700 rounded-[12px] border-solid border-2"
            onClick={() => setCount((prew) => prew + 5)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
