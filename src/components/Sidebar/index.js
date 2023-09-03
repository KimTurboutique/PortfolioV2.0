import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import kLogo from '../../assets/images/kLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={kLogo} alt="logo" />
        </Link>
        <nav className='nav'>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" >
                <FontAwesomeIcon icon={faFileCode} color="white" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="white" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kimberly-radway-b9511826a/">
                <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                </a>
            </li>
            <li>
                <a target="_blank"
                    rel="noreferrer"
                    href="https://github.com/KimTurboutique">
                <FontAwesomeIcon icon={faGithubSquare} color="white" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;