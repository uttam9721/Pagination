// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Pagination = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8; // thoda zyada for full screen

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("https://dummyjson.com/products");
//       setProducts(res.data.products);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const lastIndex = currentPage * itemsPerPage;
//   const firstIndex = lastIndex - itemsPerPage;
//   const currentProducts = products.slice(firstIndex, lastIndex);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         width: "100vw",
//         padding: "30px",
//         boxSizing: "border-box",
//         background: "#f5f5f5",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//         Product Listing
//       </h2>

//       {/* Products Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {currentProducts.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               background: "#fff",
//               padding: "15px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//             }}
//           >
//             <img
//               src={item.thumbnail}
//               alt={item.title}
//               style={{
//                 width: "100%",
//                 height: "180px",
//                 objectFit: "cover",
//                 borderRadius: "6px",
//               }}
//             />
//             <h4 style={{ margin: "10px 0" }}>{item.title}</h4>
//             <p style={{ fontWeight: "bold" }}>₹ {item.price}</p>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div
//           style={{
//             marginTop: "40px",
//             display: "flex",
//             justifyContent: "center",
//             gap: "10px",
//             flexWrap: "wrap",
//           }}
//         >
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((p) => p - 1)}
//           >
//             Prev
//           </button>

//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index + 1)}
//               style={{
//                 padding: "6px 12px",
//                 background:
//                   currentPage === index + 1 ? "#000" : "#fff",
//                 color:
//                   currentPage === index + 1 ? "#fff" : "#000",
//                 border: "1px solid #000",
//                 cursor: "pointer",
//               }}
//             >
//               {index + 1}
//             </button>
//           ))}

//           <button
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((p) => p + 1)}
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pagination;











import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from './Loading';

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔁 Debounce Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms delay

    return () => clearTimeout(timer); // cleanup
  }, [search]);

  // Filtered products (use debounced value)
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  // Reset page on debounced search change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "98vw",
        padding: "30px",
        boxSizing: "border-box",
        background: "#f5f5f5",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Product Listing
      </h2>

      {/* 🔍 Search Bar */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "300px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
      </div>

      {/* Products Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <h4 style={{ margin: "10px 0" }}>{item.title}</h4>
              <p style={{ fontWeight: "bold" }}>₹ {item.price}</p>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: "1/-1", textAlign: "center" }}>
            {/* No products found */}
            <Loading />
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                padding: "6px 12px",
                background:
                  currentPage === index + 1 ? "#000" : "#fff",
                color:
                  currentPage === index + 1 ? "#fff" : "#000",
                border: "1px solid #000",
                cursor: "pointer",
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
