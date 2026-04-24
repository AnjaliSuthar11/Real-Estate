"use client";

export default function ToggleTabs({ activeTab, setActiveTab }) {
  return (
        <div className="flex flex-col">
    <div className="flex gap-4 mb-6 items-center justify-center">
      <button
        onClick={() => {
           setActiveTab("inquiry")}}
        className={`px-4 py-2 rounded-xl ${
          activeTab === "inquiry"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
        }`}
      >
        <h2 className="md:text-3xl  font-semibold md:p-4 p-2">Inquiry Form</h2>
      </button>

      <button
        onClick={() => setActiveTab("units")}
        className={`px-4 py-2 rounded-xl ${
          activeTab === "units"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
        }`}
      >
       <h2 className="md:text-3xl font-semibold md:p-4 p-2 px-8"> Units</h2>
      </button>
    </div>
    <hr></hr>
     </div>
  );
}