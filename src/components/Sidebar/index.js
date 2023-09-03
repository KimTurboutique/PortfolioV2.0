import { Link } from 'react-router-dom'
import './index.scss'
import kLogo from '../../assets/images/kLogo.svg'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={kLogo} alt="logo" />
        </Link>
    </div>
)

export default Sidebar;