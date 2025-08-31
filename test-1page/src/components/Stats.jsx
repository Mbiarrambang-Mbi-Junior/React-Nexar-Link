import React from 'react';
import '../styles/stats.css';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsAward } from 'react-icons/bs';

function Stats() {
  const stats = [
    { number: '12+', text: 'YEARS OF EXPERIENCE', icon: <BsFillBellFill /> },
    { number: '999+', text: 'COMPLETED PROJECTS', icon: <BsFillEnvelopeFill /> },
    { number: '480+', text: 'TOTAL CLIENTS', icon: <BsPersonCircle /> },
    { number: '15+', text: 'AWARD WON', icon: <BsAward /> },
  ];

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stats-item" key={index}>
            <div className="icon-wrapper">
              {stat.icon}
            </div>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-text">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;