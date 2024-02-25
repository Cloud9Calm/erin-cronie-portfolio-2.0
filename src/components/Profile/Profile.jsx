import './Profile.scss';
import profImg from '../../assets/images/17_Erin-Cronie---Software-Engineering---Sep-2023.jpg' 

const Profile = () => {
    return (
        <section className='profile'>
            <img src={profImg} 
            className='profile__img'
            alt="Erin Cronie's profile image" 
            />
            <div className='profile__info'>
                <h3 className='profile__name'>Erin Cronie</h3>
                    <h4 className='profile__title'>Software Developer</h4>
            </div>
        </section>
    );
}

export default Profile;