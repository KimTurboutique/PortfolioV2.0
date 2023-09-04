import './index.scss';
import ProfilePic from '../../../assets/images/profilePic.svg'

const Pic = () => {
    return (
        <div className='profilePic-container'>
            <img className='solid-profilePic' src={ ProfilePic } alt="profile pic of developer"/>
        </div>
    )
}

export default Pic;