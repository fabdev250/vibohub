import React, { useState } from "react";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  User, 
  Store, 
  Users, 
  TrendingUp, 
  Mic,
  LayoutDashboard
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    console.log(`Navigating to ${section}`);
    setIsMenuOpen(false);
    // In a real app with react-router-dom:
    // navigate(`/${section}`)
  };

  // Define navigation items with corresponding icons
  const navItems = [
    { id: "marketplace", label: "Marketplace", icon: Store },
    { id: "vendors", label: "Vendors", icon: Users },
    { id: "affiliates", label: "Affiliates", icon: TrendingUp },
    { id: "influencers", label: "Influencers", icon: Mic }
  ];

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={() => handleNavClick("home")}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Vendor Hub</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-white/80 hover:text-white transition-colors duration-300 relative group flex items-center space-x-1.5 px-3 py-2 rounded-lg hover:bg-white/5"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                    <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                );
              })}
              
              {/* User Profile Icon */}
              <button
                onClick={() => handleNavClick("profile")}
                className="text-white/80 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                aria-label="User profile"
              >
                <User className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => handleNavClick("dashboard")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => handleNavClick("profile")}
                className="text-white hover:text-blue-300 transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
                aria-label="User profile"
              >
                <User className="w-6 h-6" />
              </button>
              <button
                className="text-white hover:text-blue-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-2 p-4 border border-white/20 animate-fade-in">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="text-white/80 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/10 flex items-center space-x-3"
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="capitalize">{item.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={() => handleNavClick("dashboard")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}