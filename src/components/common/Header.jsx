import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext.jsx';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Assume AuthContext provides user role and logout function
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  // Role-based dashboard link
  const dashboardLink = user
    ? user.role === 'vendor' ? '/vendor/dashboard'
    : user.role === 'influencer' ? '/influencer/dashboard'
    : user.role === 'affiliator' ? '/affiliator/dashboard'
    : user.role === 'admin' ? '/admin/dashboard'
    : '/customer/orders'
    : null;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">Vendor Hub</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
            <Link to="/customer/home" className="text-gray-600 hover:text-blue-600 transition">Shop</Link>
            <Link to="/customer/categories" className="text-gray-600 hover:text-blue-600 transition">Categories</Link>
            {user && dashboardLink && (
              <Link to={dashboardLink} className="text-gray-600 hover:text-blue-600 transition">
                {user.role === 'vendor' ? 'Vendor Dashboard' :
                 user.role === 'influencer' ? 'Influencer Dashboard' :
                 user.role === 'affiliator' ? 'Affiliate Dashboard' :
                 user.role === 'admin' ? 'Admin Dashboard' : 'My Orders'}
              </Link>
            )}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/customer/cart" className="text-gray-600 hover:text-blue-600 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            {user ? (
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                Logout
              </button>
            ) : (
              <>
                <Link to="/auth/login" className="text-gray-600 hover:text-blue-600 transition">Login</Link>
                <Link to="/auth/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Home</Link>
              <Link to="/customer/home" className="text-gray-600 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Shop</Link>
              <Link to="/customer/categories" className="text-gray-600 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Categories</Link>
              {user && dashboardLink && (
                <Link to={dashboardLink} className="text-gray-600 hover:text-blue-600 transition" onClick={toggleMobileMenu}>
                  {user.role === 'vendor' ? 'Vendor Dashboard' :
                   user.role === 'influencer' ? 'Influencer Dashboard' :
                   user.role === 'affiliator' ? 'Affiliate Dashboard' :
                   user.role === 'admin' ? 'Admin Dashboard' : 'My Orders'}
                </Link>
              )}
              <Link to="/customer/cart" className="text-gray-600 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Cart</Link>
              {user ? (
                <button onClick={() => { handleLogout(); toggleMobileMenu(); }} className="text-left text-red-500 hover:text-red-600 transition">
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/auth/login" className="text-gray-600 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Login</Link>
                  <Link to="/auth/register" className="text-gray-600 hover:text-blue-600 transition" onClick={toggleMobileMenu}>Sign Up</Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;