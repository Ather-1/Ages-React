import Menu from './Menu.jsx'
import LOGO from '../../../assets/AgesLogo.png'

const Header = () => {
  return (
    <header className='shadow-md'>
        <div className='LRP flex items-center justify-between px-4'>
            <div className='p-2.5 md:p-3 lg:p-3.5'>
                <img src={LOGO} alt="Ages" className='h-10 w-auto md:h-14 lg:h-13 xl:h-14' />
            </div>

            <div>
                {<Menu />}
            </div>

        </div>
    </header>
  )
}

export default Header
