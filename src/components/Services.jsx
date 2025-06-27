import React, { use } from "react";
import ServicesCard from "./ServicesCard";
import { Fade } from "react-awesome-reveal";
// import { Typewriter } from "react-simple-typewriter";


const ServicesData = fetch("/service.json").then((res) => res.json());
const Services = () => {
  const sData = use(ServicesData);
 
  return (
    <div className="pb-20 p-15">
      <Fade direction="up" triggerOnce duration={2000}>
        <h1 className="font-semibold pt-25 pb-10 text-[#3d92e7] md:text-5xl text-3xl text-center">
         We are Provide Best Services
          
        </h1>
      </Fade>
      <div className=" xl:grid-cols-4 xl:w-11/12 mx-auto md:grid-cols-2 px-2 md:mx-auto  gap-6 xl:justify-center  items-center grid  mt-8 ">
        {sData.map((data, index) => (
          <ServicesCard key={index} data={data}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
