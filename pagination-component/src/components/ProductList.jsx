import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 10;

  const fetchData = async () => {
    try {
      const result = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${offset}`
      );
      const json = await result.json();
      setData(json.products);
      setTotal(json.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <div>
        <h1 className="text-6xl text-center my-10">Product List</h1>
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-4 mx-3 justify-center">
            {data.map((product) => (
              <div className="w-[300px] h-[300px] border border-black flex flex-col justify-around items-center ">
                <div className="text-3xl w-[280px] ">{product.title}</div>
                <div className="w-[200px] h-[200px]">
                  <img
                    className="w-[180px] h-[180px]"
                    src={product.images[0]}
                  />
                </div>
                <div className=" w-[280px] text-3xl">
                  Price:${product.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination updateOffset={setOffset} totalPages={totalPages} />
    </>
  );
};

export default ProductList;
