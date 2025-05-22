import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-between h-[80px]">
          {/* Logo Centered on Mobile */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" className="flex items-center ">
              <img src={logo} alt="PICON Logo" className="w-[160px] object-contain" style={{ minWidth: 160, minHeight: 160, maxWidth: 160, maxHeight: 160 }} />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${location.pathname === link.path
                    ? 'text-[#e87c2a]' // active link orange
                    : 'text-[#17936d] hover:text-[#e87c2a]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/products"
              className="btn bg-[#e87c2a] text-white hover:bg-[#d96c1a] font-bold"
            >
              Shop Now
            </Link>
          </div>
          {/* Mobile Menu Button Right */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#17936d]"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
        >
          <div className="py-4 flex flex-col items-center space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`w-full text-center px-4 py-2 rounded-md font-medium transition-colors duration-200 ${location.pathname === link.path
                    ? 'text-[#e87c2a] bg-[#fff4ea]' // active link orange
                    : 'text-[#17936d] hover:text-[#e87c2a] hover:bg-[#e6f4ef]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/products"
              className="w-full text-center px-4 py-2 bg-[#e87c2a] text-white rounded-md hover:bg-[#d96c1a] font-bold"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 