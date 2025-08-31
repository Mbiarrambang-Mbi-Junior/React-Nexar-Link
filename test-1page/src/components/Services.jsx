import React from 'react';
import { BsLaptopFill, BsTvFill, BsGearFill, BsAndroid, BsTelephoneFill, BsFileTextFill, BsPlugFill, BsCodeSlash } from 'react-icons/bs';
import '../styles/services.css';

function Services() {
  const services = [
    { title: 'WEB DESIGN', icon: <BsTvFill /> },
    { title: 'WEB DEVELOPMENT', icon: <BsLaptopFill /> },
    { title: 'THEME DEVELOPMENT', icon: <BsCodeSlash /> },
    { title: 'GAME DEVELOPMENT', icon: <BsGearFill /> },
    { title: 'APPS DEVELOPMENT', icon: <BsAndroid /> },
    { title: 'DESKTOP APPLICATION', icon: <BsTvFill /> },
    { title: 'WORDPRESS THEMES', icon: <BsFileTextFill /> },
    { title: 'WORDPRESS PLUGINS', icon: <BsPlugFill /> },
    { title: 'SUPPORT & IT', icon: <BsTelephoneFill /> },
  ];

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem, in dolores numquam, veritatis, tempora suscipit eius doloremque autem quas aliquid debitis nostrum unde et velit ducimus. Repellendus, temporibus in.</p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="grid-item" key={index}>
            <div className="icon-card">
              {service.icon}
            </div>
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;