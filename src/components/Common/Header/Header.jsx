import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from './Menu.jsx'
import LOGO from '../../../assets/AgesLogo.png'


const Header = () => {
    const headerRef  = useRef(null);
    const [headerHeight, setHeaderHeright] = useState(0);
    const navigateToHome = useNavigate();

    useEffect(() => {
        const measureHeight = () => {
            if (headerRef.current) {
                const height = headerRef.current.offsetHeight;
                setHeaderHeright(height);
                document.documentElement.style.setProperty('--header-h', `${height}px`);
            }
        };
        measureHeight();
        window.addEventListener('resize', measureHeight);
        return () => window.removeEventListener('resize', measureHeight);
    }, []);


    const goToHome  = () => {
        navigateToHome('/');
    };
    


    return (
        <header ref={headerRef} className='shadow-md'>
            <div className='LRP flex items-center justify-between pl-2 pr-4'>
                <div className='p-2.5 md:p-3 lg:p-3.5'>
                    <img src={LOGO} alt="Ages" onClick={goToHome} className='h-10 w-auto md:h-14 lg:h-13 xl:h-14' />
                </div>

                <div>
                    {<Menu headerHeight={headerHeight} />}
                </div>

            </div>
        </header>
    )
}

export default Header
