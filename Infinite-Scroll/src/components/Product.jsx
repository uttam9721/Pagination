import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Product = () => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const stepCount = 8;

  const fetchData = async () => {
    const result = await axios.get("https://dummyjson.com/products");
    setData(result.data.products);

    // first load
    setVisible(result.data.products.slice(0, stepCount));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = () => {
    if (visible.length >= data.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setVisible((prev) => [
        ...prev,
        ...data.slice(prev.length, prev.length + stepCount),
      ]);
    }, 500);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={visible.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
        endMessage={
          <p className="text-center font-bold">
            🎉 All products loaded
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5">
          {visible.map((item, idx) => {
            return (
              <div
                className="w-80 border border-[#ccc] gap-5 mx-auto"
                key={idx}
              >
                <div>
                  <img
                    className="w-50 h-60 mx-auto"
                    src={item.images[0]}
                    alt={item.title}
                  />
                </div>

                <div className="p-5">
                  <h3>{item.title}</h3>
                  <p>{item.description.slice(0, 50)}...</p>
                </div>

                <div className="justify-center mx-auto p-2 w-full flex">
                  <button
                    className="justify-center w-full font-bold text-white py-2 bg-gray-800"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Product;