import React from 'react';
import { BsTruck, BsShieldCheck, BsHeadset, BsGift } from 'react-icons/bs';
import '../styles/services.css';

// Service data to be rendered dynamically
const servicesData = [
  {
    id: 1,
    icon: <BsTruck />,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders over $100. We deliver to your doorstep at no extra cost.'
  },
  {
    id: 2,
    icon: <BsShieldCheck />,
    title: 'Secure Payments',
    description: 'Shop with confidence knowing all your payments are 100% secure through our encrypted gateway.'
  },
  {
    id: 3,
    icon: <BsHeadset />,
    title: '24/7 Support',
    description: 'Our customer support team is available around the clock to assist you with any questions or issues.'
  },
  {
    id: 4,
    icon: <BsGift />,
    title: 'Daily Offers',
    description: 'Find new and exciting deals every day. Don’t miss out on our limited-time offers and promotions.'
  },
];

const Services = () => {
  return (
    <section className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-grid">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;