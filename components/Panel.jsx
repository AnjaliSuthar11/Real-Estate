"use client";

import React, { useState } from "react";
import ToggleTabs from "./ToggleTabs";
import InquiryForm from "./InquiryForm";
import Unit from "./Unit";

const Panel = () => {
  const [activeTab, setActiveTab] = useState("units");
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleSelectRoom = (roomCode) => {
    setSelectedRoom(roomCode);
    setActiveTab("inquiry"); // 🔥 switch tab automatically
  };

  return (
    <div className="">
      <ToggleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
<div className="py-10 flex items-center justify-center md:justify-start md:px-20 px-3 ">


      {activeTab === "units" && (
        <Unit onSelectRoom={handleSelectRoom} />
      )}

      {activeTab === "inquiry" && (
        <InquiryForm selectedRoom={selectedRoom} />
      )}
</div>
    </div>
  );
};

export default Panel;