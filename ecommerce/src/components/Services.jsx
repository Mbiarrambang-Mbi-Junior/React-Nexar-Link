import React from 'react';
import '../styles/services.css'
import services from '../utils/services.json';
import { BsTruck, BsShieldCheck, BsHeadset, BsGift } from 'react-icons/bs';

// Create a mapping object that links the icon string to the component
const iconComponents = {
  BsTruck: BsTruck,
  BsShieldCheck: BsShieldCheck,
  BsHeadset: BsHeadset,
};


function Services() {
  return (
    <section id="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-grid">
        {services.map(service => {
          // Get the correct icon component from the map using the service.icon string
          const IconComponent = iconComponents[service.icon];

          return (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {IconComponent ? <IconComponent size={40} /> : null}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;