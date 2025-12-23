import React, { useState, useEffect } from "react";

const Todo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [store, setStore] = useState(() => {
    const savedData = localStorage.getItem("todoData");
    return savedData ? JSON.parse(savedData) : [];
  });


  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(store));
  }, [store]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !age) return;

    setStore([...store, { name, age, email }]);
    setName("");
    setAge("");
    setEmail("");
  };


  const handleDelete=(index)=>{
    const filterData=store.filter((_,i)=>i!==index);
    setStore(filterData);
  }
  

  return (
    <>
      <h1 className="text-2xl text-center mb-4">Todo</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded px-2"
          type="text"
          placeholder="Name"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-gray-300 rounded px-2"
          type="number"
          placeholder="Age"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-2"
          type="email"
          placeholder="Email"
        />
    
        <button className="bg-green-600 px-4 rounded text-white font-bold">
          Add
        </button>
      </form>

      {store.length > 0 && (
        <table className="m-auto border border-collapse w-2/3">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Age</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {store.map((item, idx) => (
              <tr key={idx}>
                <td className="border p-2 text-center">{item.name}</td>
                <td className="border p-2 text-center">{item.age}</td>
                <td className="border p-2 text-center">{item.email}</td>
                <td className="border flex gap-2 p-2 text-center">
                  <button
                  onClick={()=>handleDelete(idx)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Todo;
