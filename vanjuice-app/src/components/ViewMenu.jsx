import React from "react";
import juiceData from "../utils/juiceData.json";
import { BsCartPlus, BsStarFill } from "react-icons/bs";

const ViewMenu = () => {
  return (
    <section
      id="view-menu"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4">
            Freshly Squeezed
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Delicious Menu
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of 100% organic fruit juices. Each bottle is
            packed with vitamins and pure happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {juiceData.map((juice) => (
            <div
              key={juice.id}
              className="group bg-white rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                {/* Badge */}
                <div
                  className={`absolute top-3 left-3 ${
                    juice.badgeColor || "bg-gray-800"
                  } text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm`}
                >
                  {juice.label || "Fresh"}
                </div>

                <img
                  src={juice.image}
                  alt={juice.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-orange-600 font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-orange-50">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-2 pb-2 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {juice.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    <BsStarFill />
                    <span className="text-gray-400 font-medium">4.9</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  Refreshing and natural {juice.name.toLowerCase()} for your
                  daily vitamin boost.
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {juice.price}{" "}
                    <span className="text-sm text-gray-400 font-normal">
                      XAF
                    </span>
                  </span>
                  <button className="bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-orange-500 transition-colors group-active:scale-95">
                    <BsCartPlus className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ViewMenu;
