import React from 'react';
import '/src/css/WelcomePage.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
  
  const navigate = useNavigate();

  return (
    <div>

      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="rightOfSidebar">
          <div className="welcome-container">
            <div className="welcome-card">
              <h1>Welcome</h1>
              <p className="subtitle">Learn Urdu easily through the Roman script!</p>
              <button className = "start-button" onClick={() => navigate('/hona')} >Start Learning </button>

            </div>
          </div>
        </div>
        </SidebarProvider>

    </div>

  );
};

export default WelcomePage;
