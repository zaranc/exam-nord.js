import axios from "axios";
import React, { useEffect, useState } from "react";
const MyProducts = () => {
  const getUser = JSON.parse(localStorage.getItem("userData"));
  const [product, setproduct] = useState([]);

  const getproductdata = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/v1/product/manual/${getUser._id}`);
      setproduct(res.data.result);
      console.log("🚀 ~ getproductdata ~ res:", res.data.result)
    } catch (error) {
      // console.error("Error fetching recipes:", error);
    }
  };



  useEffect(() => {
    
    getproductdata();
  }, []);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-white">
        <div className="fileicon text-[17rem]">
         !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </div>
        <div className="text-file text-white font-bold text-2xl">
          <h1>no product</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {product?.map((val) => (
        <div
          key={val._id}
          className="flex flex-col justify-between gap-2 max-w-sm p-7 bg-slate-800 border text-white border-slate-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">
              <span className="text-3xl text-slate-100 capitalize">
                name -
              </span>
              {val.name}
            </h5>
          </a>
          <p className="mb-3 font-normal">
            <span className="text-slate-100 font-bold text-lg capitalize">
              createdBy -
            </span>
            {val.createdBy.email}
          </p>
          <p className="mb-3 font-normal">
            <span className="text-slate-100 font-bold text-lg capitalize">
              price -
            </span>
            {val.price}
          </p>
      
        
     
        </div>
      ))}
    </div>
  );
};

export default MyProducts;
