import React from "react";
import { useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";

function RowContainer({ flag, data, scrollValue }) {
  const ref = useRef();

  console.log(data);

  useEffect(() => {
    ref.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={ref}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data &&
        data.map((product) => {
          return (
            <div
              className="w-275 h-44 min-w-[275px] md:min-w-[300px] md:w-300 my-12 backdrop-blur-lg bg-white rounded-lg py-2 px-4 hover:drop-shadow-lg flex flex-col items-center justify-even relative"
              key={product.id}
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className=" w-36 h-28 -mt-8"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={product.image}
                    className="w-full h-full object-contain"
                    alt=""
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  Denim Jeans
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-orange-500">Rs</span>{" "}
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default RowContainer;
