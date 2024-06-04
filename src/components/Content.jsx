import React from "react";
import vector from "../assets/Vector.svg";
import group from "../assets/Group 35923.svg";
import group2 from "../assets/Group 35933.svg";
import star from "../assets/star-05.svg";
import cube1 from "../assets/cube-02.svg";
import cube2 from "../assets/cube-04.svg";
import frame from "../assets/Frame 1.svg";

const Content = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center mt-2 space-y-8 lg:space-y-0">
        <div className="container mx-auto text-center py-12 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-6xl font-semibold text-gray-800 leading-tight mb-6">
            Make The Best Financial Decisions
          </h1>
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-6">
            Cum Et Convallis Risus Placert Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor
          </p>
          <div className="flex items-center justify-center mb-8">
            <button className="flex items-center justify-center px-6 py-4 bg-black text-white rounded hover:bg-gray-800">
              <span className="mr-2">Get Started</span>
              <img src={vector} alt="" className="w-6 h-6" />
            </button>
            <p className="text-lg lg:text-xl text-black ml-4 cursor-pointer">
              Watch video
            </p>
          </div>
          <img src={group} alt="" className="mx-auto w-64 lg:w-96 mt-8" />
        </div>
        <div className="flex justify-center items-center lg:ml-8">
          <img src={frame} alt="frame" className="w-full max-w-lg" />
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8 mt-12 px-4 lg:px-0">
        <img src={group2} alt="" className="mb-8 w-full max-w-xl lg:mb-0" />
        <div className="lg:mt-16">
          <p className="text-xl lg:text-2xl text-red-600">Features</p>
          <h1 className="text-3xl lg:text-4xl font-semibold mt-8 text-gray-800 lg:mt-8">
            Uifry Premium
          </h1>
          <div className="mt-8 space-y-8">
            <div>
              <div className="flex items-center">
                <img src={star} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                <h1 className="ml-2 text-xl lg:text-2xl font-semibold text-gray-800">
                  Budgeting Intervals
                </h1>
              </div>
              <p className="text-gray-600 mt-2">
                Cum Et Convallis Risus Placert Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src={cube1} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                <h1 className="ml-2 text-xl lg:text-2xl font-semibold text-gray-800">
                  Budgeting Intervals
                </h1>
              </div>
              <p className="text-gray-600 mt-2">
                Cum Et Convallis Risus Placert Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src={cube2} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                <h1 className="ml-2 text-xl lg:text-2xl font-semibold text-gray-800">
                  Budgeting Intervals
                </h1>
              </div>
              <p className="text-gray-600 mt-2">
                Cum Et Convallis Risus Placert Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
