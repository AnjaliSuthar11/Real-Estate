"use client";
import React from "react";

const Unit = ({ onSelectRoom }) => {
  const rooms = [
 {
    floor: "1st Floor",
    units: [
      { code: "101", status: "available" },
      { code: "102", status: "sold" },
      { code: "103", status: "sold" },
      { code: "104", status: "available" },
      { code: "105", status: "available" },
    ],
  },
  {
    floor: "2nd Floor",
    units: [
      { code: "201", status: "sold" },
      { code: "202", status: "available" },
      { code: "203", status: "sold" },
      { code: "204", status: "available" },
      { code: "205", status: "available" },
    ],
  },
  {
    floor: "3rd Floor",
    units: [
      { code: "301", status: "sold" },
      { code: "302", status: "sold" },
      { code: "303", status: "available" },
      { code: "304", status: "available" },
      { code: "305", status: "available" },
    
    ],
  },
  {
    floor: "4th Floor",
    units: [
      { code: "401", status: "sold" },
      { code: "402", status: "available" },
      { code: "403", status: "sold" },
      { code: "404", status: "sold" },
      { code: "405", status: "sold" },
    ],
  },
  {
    floor: "5th Floor",
    units: [
      { code: "501", status: "sold" },
      { code: "502", status: "available" },
      { code: "503", status: "available" },
      { code: "504", status: "sold" },
      { code: "505", status: "available" },
    ],
  },
  {
    floor: "6th Floor",
    units: [
      { code: "601", status: "sold" },
      { code: "602", status: "sold" },
      { code: "603", status: "available" },
      { code: "604", status: "available" },
      { code: "605", status: "sold" },
    ],
  },
  ];

  return (
    <div className="flex justify-start items-center flex-col space-y-6">
      {rooms.map((room, index) => (
        <div key={index} className="flex md:flex-row flex-col  justify-center items-center gap-4 md:gap-20">
            <div className="">
          {/* Floor Title */}
          <h2 className="text-xl font-semibold">
            {room.floor}
          </h2>
        </div>
        <div className="w-[1px] h-[100px] bg-gray-400 hidden sm:block "></div>
          {/* Flex Layout */}
          <div className="flex flex-wrap gap-2 md:gap-4 pb-8">
            {room.units.map((unit) => (
              <div
  key={unit.code}
  onClick={() =>{
    unit.status === "available" && onSelectRoom(unit.code)}
  }
  className={`w-15 md:w-20 h-15 md:h-20 flex items-center justify-center rounded-lg text-white font-medium
    ${
      unit.status === "available"
        ? "bg-green-500 cursor-pointer hover:scale-105 transition"
        : "bg-gray-400 cursor-not-allowed"
    }
  `}
>
  {unit.code}
</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Unit;