"use client";

export default function UnitsGrid({ data, onSelectRoom }) {
  return (
    <div className="space-y-6">
      {data.map((floor, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold mb-2">{floor.floor}</h2>

          <div className="grid grid-cols-4 gap-4">
            {floor.units.map((room) => (
              <div
                key={room.code}
                onClick={() =>
                  room.status === "available" && onSelectRoom(room.code)
                }
                className={`p-6 text-center rounded-xl cursor-pointer
                  ${
                    room.status === "available"
                      ? "bg-green-500 text-white"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }
                `}
              >
                {room.code}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}