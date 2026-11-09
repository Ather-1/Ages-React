import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from '../../assets/AgesLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="LRP flex items-center justify-between p-4">
        <div className="">
          <img src={Logo} alt="" className="h-20 w-auto"/>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-x-8 text-2xl font-semibold text-gray-800">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About us</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Our Services</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Our Projects</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </ul>
        </nav>

        <button 
          className="lg:hidden text-3xl text-gray-700 focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} >
          {isMenuOpen ? '✕' : '☰'} 
        </button>
      </div>

      {isMenuOpen && (
        <div 
          className={`lg:hidden fixed top-1/2 left-1/2 w-[85%] h-[70%] z-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out border border-gray-400 rounded-xl bg-gray-400/75
                      ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
          
          <ul className="flex flex-col gap-y-6 text-2xl h-full items-center justify-center">
            <Link to="/" onClick={()=> setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={()=> setIsMenuOpen(false)}>About us</Link>
            <Link to="/services" onClick={()=> setIsMenuOpen(false)}>Our Services</Link>
            <Link to="/projects" onClick={()=> setIsMenuOpen(false)}>Our Projects</Link>
            <Link to="/contact" onClick={()=> setIsMenuOpen(false)}>Contact</Link>
          </ul>
        </div>
      )}


    </header>
  )
}

export default Header