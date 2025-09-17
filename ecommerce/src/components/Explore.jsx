import React from 'react';
import {
  BsHeadset, BsPerson, BsCarFront, BsArrowLeftCircleFill, BsArrowRightCircleFill, BsBoxes, BsTools,
  BsHouse, BsGift, BsLightbulb, BsPlug, BsBook,
} from 'react-icons/bs';

function Explore() {
  return (
    <section className="explore-section capitalize bg-gray-100 py-10">
      <h2 className="explore-heading text-center text-3xl font-bold text-teal-800 mb-10 relative">
        Explore Our Products
        <span className="block w-20 h-1 bg-teal-500 mx-auto mt-2"></span>
      </h2>
      <div className="explore-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center px-4">
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsHeadset size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Headphones</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsPerson size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Customer Service</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsCarFront size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Vehicles</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsBoxes size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Packaging</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsTools size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Tools</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsHouse size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Home Appliance</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsGift size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Gifts & Crafts</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsLightbulb size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Light & Lighting</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsPlug size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">Electrical Equipment</h3>
        </div>
        <div className="explore-icon flex flex-col items-center justify-center p-4 rounded-xl shadow-md border-2 border-transparent w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] hover:scale-105 transition-transform duration-300 hover:border-orange-500">
          <BsBook size={30} className="mb-2" />
          <h3 className="text-sm sm:text-base text-center">School & Office Supplies</h3>
        </div>
      </div>
    </section>
  );
}

export default Explore;