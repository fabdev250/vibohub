import React, { useState, useEffect } from "react";
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    console.log(`Navigating to ${section}`);
    setIsMenuOpen(false);
    // Add your navigation logic here
    // For React Router: navigate(`/${section}`)
    // For Next.js: router.push(`/${section}`)
  };

  const navItems = [
    { id: "marketplace", label: "Marketplace", icon: Store },
    { id: "vendors", label: "Vendors", icon: Users },
    { id: "affiliates", label: "Affiliates", icon: TrendingUp },
    { id: "influencers", label: "Influencers", icon: Mic }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card-3d:hover {
          transform: translateY(-8px) rotateX(5deg) rotateY(-2deg) scale(1.02);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(59, 130, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .logo-3d {
          transform-style: preserve-3d;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .logo-3d:hover {
          transform: translateY(-4px) rotateX(15deg) rotateY(-10deg) rotateZ(2deg) scale(1.1);
          filter: drop-shadow(0 15px 25px rgba(59, 130, 246, 0.4));
        }
        
        .nav-item-3d {
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }
        
        .nav-item-3d:hover {
          transform: translateY(-3px) rotateX(8deg) scale(1.05);
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        .nav-item-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 12px;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: -1;
        }
        
        .nav-item-3d:hover::before {
          opacity: 1;
          transform: translateZ(-10px);
        }
        
        .button-3d {
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .button-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .button-3d:hover {
          transform: translateY(-4px) rotateX(8deg) scale(1.05);
          box-shadow: 
            0 20px 40px -8px rgba(59, 130, 246, 0.6),
            0 0 25px rgba(147, 51, 234, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        .button-3d:hover::before {
          opacity: 1;
        }
        
        .button-3d:active {
          transform: translateY(-2px) rotateX(4deg) scale(1.02);
        }
        
        .mobile-menu-3d {
          transform-style: preserve-3d;
          animation: slideDown 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px) rotateX(-15deg) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }
        
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          animation: float 6s ease-in-out infinite;
          pointer-events: none;
        }
        
        .floating-orb:nth-child(1) {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .floating-orb:nth-child(2) {
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent);
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .floating-orb:nth-child(3) {
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent);
          bottom: 30%;
          left: 60%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          25% { transform: translateY(-20px) rotateZ(2deg); }
          50% { transform: translateY(0px) rotateZ(0deg); }
          75% { transform: translateY(-10px) rotateZ(-2deg); }
        }
        
        .perspective-container {
          perspective: 1000px;
          perspective-origin: center top;
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        
        .neon-border {
          box-shadow: 
            0 0 5px rgba(59, 130, 246, 0.5),
            0 0 10px rgba(59, 130, 246, 0.3),
            0 0 15px rgba(59, 130, 246, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="fixed top-0 w-full z-50 perspective-container">
        {/* Background with floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
          <div className="floating-orb"></div>
        </div>

        {/* Main Navbar */}
        <nav className={`relative transition-all duration-500 ${
          scrollY > 50 
            ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-500/20' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              {/* Logo */}
              <div
                className="flex items-center space-x-2 group cursor-pointer logo-3d"
                onClick={() => handleNavClick("home")}
              >
                <div className="relative">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 neon-border">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-300 blur-md"></div>
                </div>
                <span className="text-xl font-bold text-white glow-text">
                  Vendor Hub
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="nav-item-3d text-white/90 hover:text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
                
                {/* User Profile Icon */}
                <button
                  onClick={() => handleNavClick("profile")}
                  className="nav-item-3d text-white/90 hover:text-white p-2 rounded-lg ml-2"
                  aria-label="User profile"
                >
                  <User className="w-5 h-5" />
                </button>
                
                {/* Dashboard Button */}
                <button
                  onClick={() => handleNavClick("dashboard")}
                  className="button-3d bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 ml-4 shadow-lg shadow-blue-500/30"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-sm">Dashboard</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => handleNavClick("profile")}
                  className="nav-item-3d text-white hover:text-blue-300 p-2 rounded-lg"
                  aria-label="User profile"
                >
                  <User className="w-5 h-5" />
                </button>
                <button
                  className="nav-item-3d text-white hover:text-blue-300 p-2 rounded-lg"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mobile-menu-3d rounded-xl mt-3 p-4 mb-3 shadow-xl shadow-blue-500/20">
                <div className="flex flex-col space-y-1">
                  {navItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="card-3d text-white/90 hover:text-white py-3 px-4 rounded-lg flex items-center space-x-3 font-medium"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="capitalize">{item.label}</span>
                      </button>
                    );
                  })}
                  <button
                    onClick={() => handleNavClick("dashboard")}
                    className="button-3d bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 mt-3 shadow-lg shadow-blue-500/30"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;