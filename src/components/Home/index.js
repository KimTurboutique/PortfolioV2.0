import { Link } from 'react-router-dom';
import './index.scss';
import ProfilePic from './ProfilePic';

const Home = () => {
    return(
        <div className='container home-page'>
            <div className="text-zone">
                <h1>Hi,
                    <br />
                    I'm Kimberly.
                </h1>

                <h2>Junior Full Stack Developer / Javascript & React Proficient / Database Management</h2>
                <h2>📍South Florida</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
            </div>
            <ProfilePic />
        </div>
    )
}

export default Home;