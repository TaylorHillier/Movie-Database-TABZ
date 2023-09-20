import React from "react";
import { useLocation } from "react-router-dom";
import Banner from '../components/Banner';

export default function PageHome() {
  const location = useLocation();

  // Check if the current route is the landing page ("/landingpage")
  const isLandingPage = location.pathname === "/";

  // Render the Banner component only on the landing page
  if (isLandingPage) {
    return (
      <div className="banner">
        <Banner />
      </div>
    );
  }

  // Return null for other routes (won't render the Banner component)
  // return null;
}

// export PageHome;
