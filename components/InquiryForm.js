"use client";
import { useState } from "react";

export default function InquiryForm({ selectedRoom }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email:"",
    phone: "",
    message: "",
    address: "",
    budget: "",
    purpose: "",
    configuration: "",
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
    <div className="flex justify-center items-center min-h-[80vh] m-auto px-4">
      <form
        onSubmit={handleSubmit}
        className="md:w-[700px] p-8 rounded-3xl shadow-xl space-y-5 border
        bg-white text-gray-800
        dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        {/* Title */}
        <div>
          <h2 className="text-2xl font-semibold">
            Inquiry Form
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fill details to book your unit
          </p>
        </div>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition
          dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

     <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
         focus:outline-none focus:ring-2 focus:ring-blue-500 transition
           dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition
          dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />





 {/* Address */}
        <input
          type="text"
          placeholder="Address"
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
         focus:outline-none focus:ring-2 focus:ring-blue-500 transition
           dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />






 <input
          type="text"
          placeholder="Budget (e.g. 50L - 80L)"
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition
          dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
        />

 {/* Purpose */}
        <select
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition
          dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, purpose: e.target.value })}
        >
          <option value="">Purpose</option>
          <option value="investment">Investment</option>
          <option value="own-use">Own Use</option>
        </select>

        {/* Configuration */}
        <select
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition
          dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, configuration: e.target.value })}
        >
          <option value="">Configuration</option>
          <option value="1bhk">1 BHK</option>
          <option value="2bhk">2 BHK</option>
          <option value="3bhk">3 BHK</option>
        </select>






        {/* Selected Room */}
        <div className="bg-gray-50 border rounded-2xl p-3
        dark:bg-gray-800 dark:border-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            Selected Room
          </p>
          <p className="font-medium">
            {selectedRoom || "Not Selected"}
          </p>
        </div>

        {/* Message */}
        <textarea
          placeholder="Additional Message..."
          rows={4}
          className="w-full p-3 border rounded-2xl bg-white text-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition
          dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        {/* Button */}
        <button
          disabled={loading || !selectedRoom}
          className={`w-full py-3 rounded-2xl font-medium transition text-white ${
            selectedRoom
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}



// "use client";
// import { useState } from "react";

// export default function InquiryForm({ selectedRoom }) {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     budget: "",
//     purpose: "",
//     configuration: "",
//     message: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const res = await fetch("/api/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...form,
//         room: selectedRoom,
//       }),
//     });

//     const data = await res.json();

//     if (data.success) {
//       alert("Inquiry Sent Successfully!");
//     } else {
//       alert("Failed to send inquiry");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-[80vh] px-4 m-auto">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md p-8 rounded-3xl shadow-xl space-y-5 border
//         bg-white text-gray-800
//         dark:bg-gray-900 dark:text-white dark:border-gray-700"
//       >
//         {/* Title */}
//         <div>
//           <h2 className="text-2xl font-semibold">Inquiry Form</h2>
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             Fill details to book your unit
//           </p>
//         </div>

//         {/* Name */}
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="input"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email Address"
//           className="input"
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         {/* Phone */}
//         <input
//           type="text"
//           placeholder="Mobile Number"
//           className="input"
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//         />

//         {/* Address */}
//         <input
//           type="text"
//           placeholder="Address"
//           className="input"
//           onChange={(e) => setForm({ ...form, address: e.target.value })}
//         />

//         {/* Budget */}
//         <input
//           type="text"
//           placeholder="Budget (e.g. 50L - 80L)"
//           className="input"
//           onChange={(e) => setForm({ ...form, budget: e.target.value })}
//         />

//         {/* Purpose */}
//         <select
//           className="input"
//           onChange={(e) => setForm({ ...form, purpose: e.target.value })}
//         >
//           <option value="">Purpose</option>
//           <option value="investment">Investment</option>
//           <option value="own-use">Own Use</option>
//         </select>

//         {/* Configuration */}
//         <select
//           className="input"
//           onChange={(e) => setForm({ ...form, configuration: e.target.value })}
//         >
//           <option value="">Configuration</option>
//           <option value="1bhk">1 BHK</option>
//           <option value="2bhk">2 BHK</option>
//           <option value="3bhk">3 BHK</option>
//         </select>

//         {/* Selected Room */}
//         <div className="bg-gray-50 border rounded-2xl p-3 dark:bg-gray-800 dark:border-gray-600">
//           <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
//             Selected Room
//           </p>
//           <p className="font-medium">
//             {selectedRoom || "Not Selected"}
//           </p>
//         </div>

//         {/* Message */}
//         <textarea
//           placeholder="Additional Message..."
//           rows={3}
//           className="input"
//           onChange={(e) => setForm({ ...form, message: e.target.value })}
//         />

//         {/* Button */}
//         <button
//           disabled={loading || !selectedRoom}
//           className={`w-full py-3 rounded-2xl font-medium transition text-white ${
//             selectedRoom
//               ? "bg-blue-600 hover:bg-blue-700"
//               : "bg-gray-400 cursor-not-allowed"
//           }`}
//         >
//           {loading ? "Sending..." : "Submit Inquiry"}
//         </button>
//       </form>
//     </div>
//   );
// }