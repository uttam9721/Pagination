import { useState } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState("");

  const options = [
    { id: 1, name: "React", description: "A JavaScript library for building user interfaces." },
    { id: 2, name: "Angular", description: "A TypeScript framework for web applications." },
    { id: 3, name: "Vue", description: "A progressive JavaScript framework." },
    { id: 4, name: "Node.js", description: "A JavaScript runtime for server-side development." },
    { id: 5, name: "MongoDB", description: "A NoSQL document database." },
  ];

  const selectedData = options.find(
    (option) => option.name === selected
  );

  return (
    <div className="mx-auto mt-10 w-full max-w-sm space-y-4">
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500"
      >
        <option value="">Select technology</option>

        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      {selectedData && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <h2 className="text-lg font-bold text-blue-700">
            {selectedData.name}
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            {selectedData.description}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            ID: {selectedData.id}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;