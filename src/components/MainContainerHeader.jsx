import React from "react";
import HeroBg from '../assets/hero.png';

function MainContainerHeader() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex flex-col items-start justify-center flex-1 gap-5">
        <p className="text-[2.5rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos
          hic, quasi optio eligendi ipsa rem fugiat, quidem quam sapiente
          eveniet nihil beatae ipsam cupiditate! Voluptate accusantium animi
          deleniti dignissimos?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      {/* p-4 */}
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-505"
          alt="hero-bg"
        />
      </div>
    </section>
  );
}

export default MainContainerHeader;
