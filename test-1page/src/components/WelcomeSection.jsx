import React from 'react';
import '../styles/welcome.css';

function WelcomeSection() {
  return (
    <div className="welcome-section">
      <div className="text-content">
        <h2 className="greetings">
            welcome to our website
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis lacus tellus, eges fringllla enim feugiat in. Pellentesque nec euismod lectus. Nam dictum est sed tortor condimentum, vitae an elit sed.
        </p>
        <button className="read-more-button">
            read more
        </button>
      </div>
    </div>
  );
}

export default WelcomeSection;