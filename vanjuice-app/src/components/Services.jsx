import React from "react";
import {
  BsTruck,
  BsGift,
  BsHeart,
  BsCupStraw,
  BsArrowRight,
} from "react-icons/bs";

function Services({ id }) {
  const services = [
    {
      id: 1,
      icon: <BsTruck className="text-5xl mb-4 text-[#78c102]" />,
      title: "Fast Delivery",
      description:
        "Get your fresh juices delivered to your doorstep in record time. We ensure the cold chain is maintained so your drink arrives icy fresh!",
    },
    {
      id: 2,
      icon: <BsHeart className="text-5xl mb-4 text-[#78c102]" />,
      title: "100% Organic",
      description:
        "We source our fruits directly from local organic farmers. No added sugars, no preservatives, just pure nature in a bottle.",
    },
    {
      id: 3,
      icon: <BsGift className="text-5xl mb-4 text-[#78c102]" />,
      title: "Gift Baskets",
      description:
        "Show you care with our customizable wellness gift baskets. Perfect for birthdays, get-well-soon gifts, or corporate events.",
    },
    {
      id: 4,
      icon: <BsCupStraw className="text-5xl mb-4 text-[#78c102]" />,
      title: "Event Catering",
      description:
        "Planning a wedding or party? Our juice bars are a hit! We provide professional servers and live blending stations.",
    },
  ];

  return (
    <section
      id={id}
      className="min-h-screen bg-[#78c102] py-24 px-4 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full"></div>
          <p className="text-white text-lg mt-4 max-w-2xl mx-auto">
            Beyond just juice, we provide health, happiness, and convenience.
            Explore how VanJuice can be a part of your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="bg-gray-50 p-4 rounded-full mb-6 group-hover:bg-[#f0f9e8] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="mt-auto text-[#78c102] font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-wide">
                Learn More <BsArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm p-8 rounded-3xl border border-white/30">
            <h3 className="text-3xl font-bold text-white mb-2">
              Need something special?
            </h3>
            <p className="text-white/90 mb-6">
              We accept custom bulk orders for offices and schools.
            </p>
            <button className="bg-white text-[#78c102] px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Contact Us for Custom Orders
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
