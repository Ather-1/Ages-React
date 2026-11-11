import { useState } from "react";
import { Link } from "react-router-dom"
import Logo from '../../assets/AgesLogo.png';
import { NavLink } from '../Common/Typography.jsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-4 left-0 z-50 w-full">
      <div className="LRP flex items-center justify-between py-2.5 pl-4 pr-8 rounded-[100px] border border-gray-600 bg-linear-to-r from-light via-black/5 to-black ">
        <div className="">
          <img src={Logo} alt="" className="h-9 md:h-10 xl:h-11 w-auto"/>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/projects">Our Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>

        <button 
          className="lg:hidden text-2xl text-light focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)} >
          {isMenuOpen ? '✕' : '☰'} 
        </button>
      </div>

      {isMenuOpen && (
        <div 
          className={`lg:hidden fixed left-0 right-0 bottom-0 top-[20%] transition duration-300 ease-in-out border border-gray-400 rounded-xl bg-gray-400/95
                      ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
          
          <ul className="flex flex-col gap-y-6 text-2xl h-full items-center justify-center">
            <NavLink to="/" onclick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onclick={() => setIsMenuOpen(false)}>About us</NavLink>
            <NavLink to="/services" onclick={() => setIsMenuOpen(false)}>Our Services</NavLink>
            <NavLink to="/projects" onclick={() => setIsMenuOpen(false)}>Our Projects</NavLink>
            <NavLink to="/contact" onclick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </ul>
        </div>
      )}


    </header>
  )
}

export default Header


/* <Link to="/" className="hover:text-blue-600 transition">Home</Link>
  <Link to="/about" className="hover:text-blue-600 transition">About us</Link>
  <Link to="/services" className="hover:text-blue-600 transition">Our Services</Link>
  <Link to="/projects" className="hover:text-blue-600 transition">Our Projects</Link>
  <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link> */