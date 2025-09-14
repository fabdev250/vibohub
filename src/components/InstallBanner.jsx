// src/components/InstallBanner.jsx
import { useEffect, useState } from "react";


export default function InstallBanner() {
  // Always show banner for testing
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#f0f0f0",
      padding: "10px",
      textAlign: "center",
      boxShadow: "0 -2px 5px rgba(0,0,0,0.2)",
      zIndex: 1000,
    }}>
      <span>Download our app for a better experience!</span>
      <button
        style={{ marginLeft: "10px", padding: "5px 10px", cursor: "pointer" }}
      >
        Install App
      </button>
    </div>
  );
}
