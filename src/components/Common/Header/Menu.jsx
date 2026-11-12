import { useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuOpen, setIsOpenMenu] = useState(false);
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About us', paht: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ]


    return (
        <>
            <nav className="hidden lg:block">
                <ul className="flex gap-x-4 text-base font-medium text-gray-800">
                {navLinks.map((link) => (
                    <li key={link.name}>
                    <Link to={link.path} className="hover:text-blue-600 transition">
                        {link.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>


        </>
    )
}

export default Menu
