import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faHtml5, faSass, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1> About Me </h1>
                <p>
                    I am a junior full-stack developer. I completed my certification with the University of Miami's EDX Bootcamp where I acquired skills in: Javascript, HTML5, CSS3, Express, Node JS, React, Sass and experience in using tools and database systems such as Insomnia, MySQL, MongoDB Compass, etc. I'm ambitious and eager to expand my knowledge of the latest technologies and gain experience with a role in an established tech company, building diverse projects.
                </p>
                <p>
                    Growing up on my little island of Jamaica, I have always been a naturally curious and innovative problem solver. I see so many of those traits in my son, which is why I became a developer. My ultimate goal is to share the same interests with my child and even building projects together while providing the best life I can for him.
                </p>
                <p>
                    I am also a business owner. I started an auto parts company called Turboutique Auto Parts. I have always loved working in the automotive field and would be thrilled to implement my developer skills within the same space.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJsSquare} color="#fec20c" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color="#89cff0" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color="#fe6e00" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faSass} color="#ff8fab" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNode} color="#62bd69" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faDatabase} color="#0c1559" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;