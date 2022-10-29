import React, { useState, useEffect } from "react";
import { IoFastFood } from "react-icons/io5";
import RowContainer from "./RowContainer";
import { motion } from "framer-motion";
import { categories } from "../utils/data";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

function Famous() {
  const [scrollValue, setScrollValue] = useState(0);
  const [filter, setFilter] = useState("cloths");
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [scrollValue]);

  return (
    <section className="w-full my-6">
      <div className="w-full flex flex-col items-center justify-center ">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-48 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Famous Products
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => {
              return (
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  onClick={() => setFilter(category.urlParamName)}
                  key={category.id}
                  className={`group ${
                    filter === category.urlParamName
                      ? "bg-orange-500"
                      : "bg-card"
                  } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-orange-500`}
                >
                  <div
                    className={`w-10 h-10 rounded-full shadow-lg ${
                      filter === category.urlParamName
                        ? "bg-white"
                        : "bg-orange-500"
                    } group-hover:bg-white flex items-center justify-center`}
                  >
                    <IoFastFood
                      className={`${
                        filter === category.urlParamName
                          ? "text-textColor"
                          : "text-white"
                      } group-hover:text-textColor text-lg`}
                    />
                  </div>
                  <p
                    className={`text-sm ${
                      filter === category.urlParamName
                        ? "text-white"
                        : "text-textColor"
                    } group-hover:text-white`}
                  >
                    {category.name}
                  </p>
                </motion.div>
              );
            })}
        </div>
      </div>
      <div className="w-full">
        <RowContainer scrollValue={scrollValue} flag={true} data={data} />
      </div>
    </section>
  );
}

export default Famous;
