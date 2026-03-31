// import React, { useState } from "react";

// const Todo = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [store, setStore] = useState([]);
//   const [editIndex,setEditIndex]=useState(null);

//   // ✅ Submit Handler
//   const handlerSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email || !number) return;
//     if(editIndex===null){
//         setStore([...store, { name, email, number }]);
//     }else{

//         store[editIndex].name=name;
//         store[editIndex].email=email;
//         store[editIndex].number=number;
//         setEditIndex(null)
//     }

//     // Clear inputs
//     setName("");
//     setEmail("");
//     setNumber("");
//   };

//   const handleDelete=(index)=>{
//     const deleted=store.filter((_,i)=>i!==index)
//     setStore(deleted)
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
//           Todo CRUD
//         </h1>

//         {/* Form */}
//         <form
//           onSubmit={handlerSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 text-left"
//         >
//           {/* Name */}
//           <div>
//             <label className="block mb-1 font-medium text-gray-600">
//               Name
//             </label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Enter name"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1 font-medium text-gray-600">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="text"
//               placeholder="Enter email"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Number */}
//           <div className="md:col-span-2">
//             <label className="block mb-1 font-medium text-gray-600">
//               Number
//             </label>
//             <input
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               type="text"
//               placeholder="Enter number"
//               className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="md:col-span-2 bg-green-500 py-2 rounded-lg text-white font-semibold hover:bg-green-600 transition"
//           >
//             Add User
//           </button>
//         </form>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full border rounded-xl overflow-hidden">

//             <thead className="bg-gray-200 text-gray-700">
//               <tr>
//                 <th className="p-3 border">#Id</th>
//                 <th className="p-3 border">Name</th>
//                 <th className="p-3 border">Email</th>
//                 <th className="p-3 border">Number</th>
//                 <th className="p-3 border">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {store.map((item, idx) => (
//                 <tr key={idx} className="text-center hover:bg-gray-50">
//                   <td className="p-3 border">{idx + 1}</td>
//                   <td className="p-3 border">{item.name}</td>
//                   <td className="p-3 border">{item.email}</td>
//                   <td className="p-3 border">{item.number}</td>
//                   <td className="p-3 border space-x-2">
//                     <button
//                     onClick={()=>{(setName(store[idx].name),(setEmail(store[idx].email),(setNumber(store[idx].number)))),setEditIndex(editIndex[idx].number),setEditIndex(idx)}}
//                     className="bg-blue-500 px-3 py-1 text-white rounded hover:bg-blue-600">
//                       Edit
//                     </button>
//                     <button
//                     onClick={()=>handleDelete(idx)}
//                     className="bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Todo;






import React, { useState } from "react";

const Todo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [store, setStore] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Submit Handler
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number) return;

    if (editIndex === null) {
      // ➕ Add
      setStore([...store, { name, email, number }]);
    } else {
      // ✏️ Update (IMMUTABLE WAY)
      const updated = [...store];
      updated[editIndex] = { name, email, number };
      setStore(updated);
      setEditIndex(null);
    }

    // Clear inputs
    setName("");
    setEmail("");
    setNumber("");
  };

  // ❌ Delete
  const handleDelete = (index) => {
    const deleted = store.filter((_, i) => i !== index);
    setStore(deleted);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Todo CRUD
        </h1>

        {/* Form */}
        <form
          onSubmit={handlerSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 text-left"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-600">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-600">
              Number
            </label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              placeholder="Enter number"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-green-500 py-2 rounded-lg text-white font-semibold hover:bg-green-600 transition"
          >
            {editIndex === null ? "Add User" : "Update User"}
          </button>
        </form>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border rounded-xl overflow-hidden">

            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3 border">#Id</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Number</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {store.map((item, idx) => (
                <tr key={idx} className="text-center hover:bg-gray-50">
                  <td className="p-3 border">{idx + 1}</td>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.email}</td>
                  <td className="p-3 border">{item.number}</td>
                  <td className="p-3 border space-x-2">

                    {/* ✅ FIXED EDIT BUTTON */}
                    <button
                      onClick={() => {
                        setName(item.name);
                        setEmail(item.email);
                        setNumber(item.number);
                        setEditIndex(idx);
                      }}
                      className="bg-blue-500 px-3 py-1 text-white rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(idx)}
                      className="bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Todo;