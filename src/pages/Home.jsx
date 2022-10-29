import React from "react";
import HeroBg from '../assets/hero.png'
import Famous from "../components/Famous";
import MainContainerHaider from "../components/MainContainerHeader";
import NewItems from "../components/NewItems";

function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
        <MainContainerHaider/>
        <NewItems/>
        <Famous/>
    </div>
  );
}

export default Home;
