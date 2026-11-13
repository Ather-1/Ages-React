import { useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = ({headerHeight}) => {
    const [isMenuOpen, setIsOpenMenu] = useState(false);
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ]


    return (
        <>
            <nav className="hidden lg:block">
                <ul className="flex gap-x-4 text-base font-semibold text-dark tracking-wide">
                {navLinks.map((link) => (
                    <li key={link.name}>
                    <Link to={link.path} className="hover:text-blue transition duration-300">
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>

            <button className='lg:hidden text-lg font-semibold text-dark cursor-pointer focus:outline-none'
                onClick={() => setIsOpenMenu(!isMenuOpen)} >
                {isMenuOpen ? '✕' : '☰'}
            </button>


            <div className={`lg:hidden fixed right-0 w-[75%] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out bg-white/80 border border-gray-300
                            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                            style={{top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)`}} >
                <ul className='flex flex-col items-center text-center p-4 text-sm md:text-base md:font-semibold'>
                    {navLinks.map((link) => (
                        <li key={link.name} className='w-full py-2.5 border-b border-gray-200'
                                    onClick={() => setIsOpenMenu(false)}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>


        </>
    )
}

export default Menu
