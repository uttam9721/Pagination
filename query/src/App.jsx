import React from "react";
import { useQuery } from "@tanstack/react-query";

// API function
const fetchProducts = async () => {

  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

const App = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <h2 className="text-center">Loading...</h2>;
  if (error) return <h2 className="text-center">Error: {error.message}</h2>;

  return (
    <div style={{ padding: "20px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <h1>Products List</h1>

      {data.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;