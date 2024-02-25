import './Profile.scss';
import profImg from '../../assets/images/17_Erin-Cronie---Software-Engineering---Sep-2023.jpg';
import Name from '../Name/Name'; 

const Profile = () => {
    return (
        <section className='profile'>
            <Name />
                <h4 className='profile__title'>Software Developer</h4>
        </section>
    );
}

export default Profile;