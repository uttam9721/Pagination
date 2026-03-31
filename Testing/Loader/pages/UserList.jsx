import React, { useState } from "react";
import { useSmartEffect } from "@uttam9721/react-smart-effect";

function UserList() {
  const [query, setQuery] = useState("");

  const { loading, error } = useSmartEffect(
    async ({ signal }) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${query}`,
        { signal }
      );
      const data = await res.json();
      console.log("Fetched Users:", data);
    },
    {
      deps: [query],
      debounce: 1000,
    }
  );

  return (
    <div>
      <h2>User Search</h2>
      <input
        type="text"
        placeholder="Search By Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>Error! {error.message}</p>}
    </div>
  );
}

export default UserList;
