import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://www.chingu.io/logo-with-text-192.png" 
            alt="Chingu Pro Logo" 
            className="h-8"
          />
          <span className="text-2xl font-bold text-[#059669]">Pro</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/how-it-works" className="hover:text-[#059669] transition-colors">
            How it works
          </Link>
          <Link to="/pricing" className="hover:text-[#059669] transition-colors">
            Pricing
          </Link>
          <Link to="/donate" className="hover:text-[#059669] transition-colors">
            Donate
          </Link>
          <Link to="/login" className="text-[#059669] hover:text-[#047857] transition-colors">
            Sign in
          </Link>
          <Link
            to="/signup"
            className="bg-[#059669] text-white px-4 py-2 rounded-full hover:bg-[#047857] transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
};

export default Header;