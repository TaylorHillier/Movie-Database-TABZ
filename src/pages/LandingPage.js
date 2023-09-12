import React from "react";
import { useLocation } from "react-router-dom";

function Banner() {
  const location = useLocation();

  // Check if the current route is the landing page ("/landingpage")
  const isLandingPage = location.pathname === "/landingpage";

  // Render the Banner component only on the landing page
  if (isLandingPage) {
    return (
      <div className="banner">
      </div>
    );
  }

  // Return null for other routes (won't render the Banner component)
  return null;
}

export default Banner;

