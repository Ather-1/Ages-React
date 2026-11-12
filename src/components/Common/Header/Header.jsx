import Menu from './Menu.jsx'
import LOGO from '../../../assets/AgesLogo.png'

const Header = () => {
  return (
    <header>
        <div className='LRP border'>
            <div>
                <img src={LOGO} alt="Ages" className='h-12 w-auto' />
            </div>

            {<Menu />}
        </div>
    </header>
  )
}

export default Header
