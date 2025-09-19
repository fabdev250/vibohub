// src/components/InstallBanner.jsx
import { useEffect, useState } from "react";


export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault(); // Prevent default Chrome prompt
      setDeferredPrompt(e); // Save event for later
      setShowBanner(true); // Show banner
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // Show install prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    setShowBanner(false);
    setDeferredPrompt(null);
  };

  if (!showBanner) return null;

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
        onClick={handleInstall}
        style={{ marginLeft: "10px", padding: "5px 10px", cursor: "pointer" }}
      >
        Install App
      </button>
    </div>
  );
}
