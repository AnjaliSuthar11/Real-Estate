"use client";
import { useState } from "react";

export default function InquiryForm({ selectedRoom }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...form,
      room: selectedRoom,
    }),
  });

  const data = await res.json();

  if (data.success) {
    alert("Inquiry Sent Successfully!");
  } else {
    alert("Failed to send inquiry");
  }

  setLoading(false);
};

  return (
    <div className="flex justify-center items-center min-h-[80vh] m-auto">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-3xl shadow-xl bg-white space-y-5 border"
      >
        {/* Title */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Inquiry Form
          </h2>
          <p className="text-sm text-gray-500">
            Fill details to book your unit
          </p>
        </div>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        {/* Selected Room */}
        <div className="bg-gray-50 border rounded-2xl p-3">
          <p className="text-xs text-gray-500 mb-1">Selected Room</p>
          <p className="font-medium text-gray-800">
            {selectedRoom || "Not Selected"}
          </p>
        </div>

        {/* Message */}
        <textarea
          placeholder="Write your message..."
          rows={4}
          className="w-full p-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        {/* Button */}
        <button
          
          disabled={loading}
          className={`w-full py-3 rounded-2xl text-white font-medium transition ${
            selectedRoom
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
         
            {loading ? "Sending..." : " Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}