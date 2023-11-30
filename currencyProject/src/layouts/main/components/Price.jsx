import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

export default function Price({ data }) {
  const [countForLoad, setCountForLoad] = useState(5);
  const [newDataForLoad, setNewDataForLoad] = useState([]);
  const [isFilteredByName, setIsFilteredByName] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [isFilteredByPrice, setIsFilteredByPrice] = useState(false);
  const [isFilteredByHours, setIsFilteredByHours] = useState(false);
  const getDataByBtn = (dataProp) => {
    let newData = [...dataProp];
    setNewDataForLoad(newData.splice(0, countForLoad));
  };
  const filterByPrice = () => {
    let copyData = [...data];
    if (isFilteredByPrice) {
      setFilteredData(
        copyData.sort((a, b) => {
          if (a.priceUsd < b.priceUsd) {
            return -1;
          }
          if (a.priceUsd > b.priceUsd) {
            return 1;
          }
          return 0;
        })
      );
      setIsFilteredByPrice(false);
    } else {
      setFilteredData(
        copyData.sort((a, b) => {
          if (a.supply > b.supply) {
            return -1;
          }
          if (a.supply < b.supply) {
            return 1;
          }
          return 0;
        })
      );
      setIsFilteredByPrice(true);
    }
  };

  const filteredByHours = () => {
    let copyData = [...data];
    if (isFilteredByHours) {
      setFilteredData(
        copyData.sort((a, b) => {
          if (a.changePercent24Hr < b.changePercent24Hr) {
            return -1;
          }
          if (a.changePercent24Hr > b.changePercent24Hr) {
            return 1;
          }
          return 0;
        })
      );
      setIsFilteredByHours(false);
    } else {
      setFilteredData(
        copyData.sort((a, b) => {
          if (a.changePercent24Hr > b.changePercent24Hr) {
            return -1;
          }
          if (a.changePercent24Hr < b.changePercent24Hr) {
            return 1;
          }
          return 0;
        })
      );
      setIsFilteredByHours(true);
    }
  };

  const filterByName = () => {
    let copyData = [...data];
    if (isFilteredByName) {
      setFilteredData(
        copyData.sort((a, b) => {
          if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
          }
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
          }
          return 0;
        })
      );
      setIsFilteredByName(false);
    } else {
      setFilteredData(
        copyData.sort((a, b) => {
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return -1;
          }
          if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return 1;
          }
          return 0;
        })
      );
      setIsFilteredByName(true);
    }
  };

  useEffect(() => {
    if (filteredData.length) {
      getDataByBtn(filteredData);
    } else {
      getDataByBtn(data);
    }
  }, [data, countForLoad, filteredData]);
  return (
    <>
      <div className="mt-6 flex flex-col bg-[#fff] border-solid border-2 border-[#e8e8e8] rounded-[12px] w-[20rem]">
        <div className="flex justify-between px-2 py-2">
          <button
            onClick={() => filterByName()}
            className="text-xs text-gray-400 flex justify-between items-center"
          >
            <p className="mr-1">Name</p>
            <div className="flex justify-between flex-col">
              <FaCaretUp />
              <FaCaretDown />
            </div>
          </button>
          <button
            onClick={() => filterByPrice()}
            className="text-xs text-gray-400 flex justify-between items-center"
          >
            <p className="mr-1">Price</p>
            <div className="flex justify-between flex-col">
              <FaCaretUp />
              <FaCaretDown />
            </div>
          </button>
          <button
            onClick={() => filteredByHours()}
            className="text-xs text-gray-400 flex justify-between items-center"
          >
            <p className="mr-1">Change 24h</p>
            <div className="flex justify-between flex-col">
              <FaCaretUp />
              <FaCaretDown />
            </div>
          </button>
        </div>
        {newDataForLoad.map((currency) => {
          return (
            <div
              key={currency.rank}
              className="flex justify-between px-3 py-3 border-solid border-y border-[#e8e8e8]"
            >
              <div className="flex justify-start gap-4 items-center">
                <Rate count={1} />
                <div className="">
                  <h5 className="text-[#171717] text-base">{currency.name}</h5>
                  <p className="text-[#848484] text-sm">
                    {Math.round(currency.supply)}
                  </p>
                </div>
              </div>
              <div className="px-[10px] py-[5px] w-1/2 bg-[#1ABC7B] text-white rounded-md flex justify-center items-center">
                <p>{Math.round(currency.changePercent24Hr)}</p>
              </div>
            </div>
          );
        })}
        {data.length === newDataForLoad.length ? null : (
          <button
            className="px-3 py-2 border-sky-700 rounded-[12px] border-solid border-2"
            onClick={() => setCountForLoad((prew) => prew + 5)}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
