import React from "react";
import { Button } from "flowbite-react";
import bgimage from "./assets/bg-image.png";

const SecondDiv = () => {
  return (
    <div className="w-screen h-screen  bg-gray-50 text-slate-200 text-center  m-0">
      <h1 className="  text-[26px] pt-10 text-[#000] font-normal">
        Trusted by <span className="font-bold text-[#036148]">5000+ </span>{" "}
        Companies
      </h1>
      <section className="flex justify-between items-center flex-row w-screen h-44 bg-black p-6">
        <img src="" alt="logo1" />
        <img src="" alt="logo2" />
        <img src="" alt="log3" />
        <img src="" alt="logo4" />
        <img src="" alt="logo5" />
        <img src="" alt="logo6" />
      </section>

      <section className="section2 flex  flex-row relative  w-screen h-fit">
        <div className="  pl-10  p-4 w-1/2  ">
          <h1 className="text-[60px] text-start mx-4 my-4 text-black font-semibold">
            Our Poducts
          </h1>
          <div className="flex  justify-between ">
            <Button className="p-3 bg-[#036148] text-[30px] font-normal">
              {" "}
              Templates
            </Button>
            <Button className="p-3 bg-transparent border-2 border-[#036148] text-[30px] font-normal text-[#000]">
              {" "}
              Design Kits
            </Button>
            <Button className="p-3 bg-transparent border-2 border-[#036148] text-[30px] font-normal text-[#000]">
              {" "}
              Buttons
            </Button>
            <Button className="p-3 bg-transparent border-2 border-[#036148] text-[30px] font-normal text-[#000]">
              {" "}
              Dashboards
            </Button>
          </div>
        </div>

        {/* make sure you use framermotion to work on the animations such that anytime user hover the image it will pop out by itself  */}
        <div className="image-div w-1/2 bg-slate-500 overflow-hidden content-center mt-20 m-10">
          <img src={bgimage} alt="image here" className=" w-[100%] h-fit" />
        </div>
      </section>
    </div>
  );
};

export default SecondDiv;
