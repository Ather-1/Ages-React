import Menu from './Menu.jsx'
import LOGO from '../../../assets/AgesLogo.png'

const Header = () => {
  return (
    <header>
        <div className='LRP'>
            <div className='p-2.5 md:p-3 lg:p-4'>
                <img src={LOGO} alt="Ages" className='h-10 w-auto md:h-14 lg:h-14 xl:h-15' />
            </div>

            {<Menu />}
        </div>
    </header>
  )
}

export default Header
