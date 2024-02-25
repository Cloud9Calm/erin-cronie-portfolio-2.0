import './Profile.scss';
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