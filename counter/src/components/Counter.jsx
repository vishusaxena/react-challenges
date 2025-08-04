import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen space-x-4">
      <p className="text-xl font-semibold">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-400 text-white rounded px-6 py-3 hover:bg-blue-500 transition"
      >
        +
      </button>

      <button
        onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
        className="bg-blue-400 text-white rounded px-6 py-3 hover:bg-blue-500 transition"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
