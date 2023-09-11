import react from "react";

const section = () => {
  return (
    <div>
      <section className="py-5 w-screen h-screen text-center bg-[#036148] ">
        <div className="flex flex-col justify-center items-center mt-6 h-screen">
          <h1 className="md:text-[50px] text-[30px] font-bold text-[#fff]">
            The Most Ambitious <br /> Products Uses{" "}
            <span className=" border-stone-200 border-solid pr-4 ">DETOX.</span>
            UI-UX
          </h1>
          <p className="md:p-6 md:text-[30px] text-[#fff] p-2 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex
            aliquam doloremque tempora blanditiis perferendis beatae nesciunt
            error? Laudantium beatae minus distinctio totam quam ex alias
            molestiae aliquid culpa soluta!
          </p>
          <div>
            <button className="p-3  bg-slate-50 text-[#036148] font-bold rounded-lg hover:bg-slate-200 m-4">
              See all Products
            </button>
            <button className=" m-4 bg-transparent border-2 border-gray-300 p-3 rounded-lg text-[#fff] font-bold">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
