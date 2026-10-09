
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          Counter App
        </h1>

        <div className="mb-8 flex h-32 items-center justify-center rounded-xl bg-gray-50">
          <span className="text-6xl font-extrabold text-blue-600">
            {count}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            + Increment
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            − Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            className="col-span-2 rounded-lg bg-gray-800 px-5 py-3 font-semibold text-white transition hover:bg-gray-900 active:scale-95"
          >
            Reset Counter
          </button>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          React useState Counter
        </p>
      </div>
    </div>
  );
};

export default Counter;
