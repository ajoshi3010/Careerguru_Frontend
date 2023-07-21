import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Import the CSS file
const HomePage = () => {
    return (
      <div className="container">
        <h2>Welcome to the Career Guru App!</h2>
        <div className="link-container">
          <Link to="/signin">Sign In</Link>
          {/* You can add other links or buttons here */}
        </div>
      </div>
    );
  };
  
  export default HomePage;
