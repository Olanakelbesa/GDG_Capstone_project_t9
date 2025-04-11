import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPackagesOpen, setPackagesOpen] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white z-50 opacity-90">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
        
        <div className={`flex items-center ${showSearch ? "hidden" : "flex"} md:flex`}>
        <img
        
         src="/image/logo1.png" 
        alt="Rebel Rover Logo"
        className="h-10 md:h-12 object-contain"
      />
        </div>

      
        <ul className="hidden md:flex space-x-10 ml-auto items-center">
          <li><Link to='/' className="hover:text-gray-400">Home</Link></li>
          <li><Link to='/about' className="hover:text-gray-400">About Us</Link></li>
          <li 
            className="relative"
            onMouseEnter={() => setPackagesOpen(true)} 
            onMouseLeave={() => setPackagesOpen(false)}
          >
            <Link to="/packages" className="flex items-center gap-1 hover:text-gray-400">
              Package <FaChevronDown className="text-xs" />
            </Link>
            {isPackagesOpen && (
              <ul className="absolute left-0 mt-2 bg-gray-700 text-sm rounded shadow-lg">
                <li><Link to='/package1' className="block px-4 py-2 hover:bg-gray-600">Adventure Package</Link></li>
                <li><Link to='/package2' className="block px-4 py-2 hover:bg-gray-600">Relaxation Package</Link></li>
              </ul>
            )}
          </li>
          <li className="flex items-center gap-1 hover:text-gray-400 cursor-pointer">
  <Link to='/blog' className="flex items-center gap-1">
    Blog <FaChevronDown className="text-xs" />
  </Link>
</li>
          <li><Link to='/contact' className="hover:text-gray-400">Contact</Link></li>
        </ul>

       
        <div className="flex items-center gap-3 md:gap-4 md:ml-4">
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              onBlur={() => setShowSearch(false)}
              className="px-3 py-1 rounded-md w-full max-w-xs text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          )}

         
          <div className="flex items-center gap-3">
            <button onClick={handleSearchToggle} className="text-white text-lg">
              <FaSearch />
            </button>
            <button
              className="md:hidden text-white text-xl"
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setShowSearch(false);
              }}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

  
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-3 text-sm">
          <Link to="/" className="block py-1 hover:text-yellow-400">Home</Link>
          <Link to="/packages" className="block py-1 hover:text-yellow-400">Package</Link>
          <Link to="/blog" className="block py-1 hover:text-yellow-400">Blog</Link>
          <Link to="/contact" className="block py-1 hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;