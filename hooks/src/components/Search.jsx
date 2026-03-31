// import React, { useState } from "react";

// const Search = () => {
//   const [name, setName] = useState("");
//   const [active, setActive] = useState(null);

//   const data = [
//     { id: 1, name: "Uttam", subject: "Math" },
//     { id: 2, name: "Ajay", subject: "Science" },
//     { id: 3, name: "Ravi", subject: "English" },
//     { id: 4, name: "Neha", subject: "Biology" }
//   ];


//   const filteredData = data.filter((item) =>
//     item.name.toLowerCase().includes(name.toLowerCase())
//   );

//   return (
//     <div style={{ width: "300px", margin: "20px auto" }}>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ width: "100%", padding: "8px" }}
//       />

//       {filteredData.length === 0 ? (
//         <div>No data</div>
//       ) : (
//         filteredData.map((val) => (
//           <div
//             key={val.id}
//             onClick={() => setActive(val.id)}
//             style={{
//               padding: "10px",
//               cursor: "pointer",
//               background: active === val.id ? "lightblue" : "white",
//               border: "1px solid #ccc",
//               marginTop: "5px"
//             }}
//           >
//             {val.name}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Search;


import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [data, setData] = useState([]);

  // Fetch API data
  const fetchData = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(res.data);
  };

  // Filter data
  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h1>Fetching API</h1>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />

      {filtered.length === 0 ? (
        <div>No data</div>
      ) : (
        filtered.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveId(idx)}
            style={{
              display: "flex",
              gap: "10px",
              padding: "10px",
              marginTop: "5px",
              cursor: "pointer",
              background: activeId === idx ? "red" : "lightgreen",
              border: "1px solid #ccc"
            }}
          >
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Search;