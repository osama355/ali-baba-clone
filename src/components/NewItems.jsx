import React,{useState,useEffect} from "react";
import RowContainer from "./RowContainer";
import { motion } from "framer-motion";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";


function NewItems() {

  const [scrollValue, setScrollValue] = useState(0);

  const [data,setData]= useState();

  const fetchData=async()=>{
    const res =await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    setData(data)
  }

  useEffect(()=>{
    fetchData();
  },[])

  useEffect(() => {}, [scrollValue]);
  return (
    <section className="w-full my-6">
      <div className="w-full flex items-center justify-between ">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          New Arrival
        </p>
        <div className="hidden md:flex gap-3 items-center">
          <motion.div
            onClick={() => setScrollValue(-200)}
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-600 cursor-pointer hover:shadow-lg flex items-center justify-center"
          >
            <MdChevronLeft className="text-lg text-white" />
          </motion.div>
          <motion.div
            onClick={() => setScrollValue(200)}
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-600 cursor-pointer hover:shadow-lg flex items-center justify-center"
          >
            <MdChevronRight className="text-lg text-white" />
          </motion.div>
        </div>
      </div>
      <RowContainer
        scrollValue={scrollValue}
        flag={true}
        data={data}
      />
    </section>
  );
}

export default NewItems;
