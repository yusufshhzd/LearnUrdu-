import React from "react";
import { useNavigate } from "react-router-dom";  
import '../css/WelcomePage.css'; 

export function WelcomePage() {
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/tenses");  // Redirect to the login page
  };

  const handleGuest = () => {
    navigate("/tenses");  // Redirect to the homepage as a guest
  };

  return (
    <div className="welcome-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>LearnUrdu</h1>
          <p>Master Urdu at your own pace. Learn tenses, vocabulary, and more.</p>
          <div className="button-container">
            <button className="cta-button" onClick={handleLogin}>
              Login
            </button>
            <button className="cta-button guest-button" onClick={handleGuest}>
              Continue as Guest
            </button>
          </div>
        </div>
      </header>
      <footer className="footer">
        <p>© 2025 LearnUrdu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default WelcomePage