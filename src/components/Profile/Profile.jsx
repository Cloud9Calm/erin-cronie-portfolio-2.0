import './Profile.scss';
import Name from '../Name/Name'; 

const Profile = () => {
    return (
        <section className='profile' id='top'>
            <div className='profile__name-title'>
                <Name />
                    <h4 className='profile__title'>Software Developer</h4>
            </div>
            <div className='profile__background'>
                <h2 className='profile__title title-background title'>
                    More about my background
                </h2>
                    <p className='profile__info'>
                        Embarking on a transformation journey from the picturesque vineyards of the wine industry to the dynamic realm of technology was a leap of passion and reinvention. The pivotal moment arrived when I secured a role with Shopify and Shopify Plus Support, unveiling to me the fascinating world of code.
                    </p>
                    <p className='profile__info'>   
                        Navigating the complexities of e-commerce and digital solutions, my role at Shopify became the catalyst for a profound shift in my career trajectory. Through dedicated support, mentorship, and hands-on experiences, I not only embraced the language of code but also discovered a profound love for the intricacies of web development.
                    </p>
                    <p className='profile__info'>    
                        The synergy of my background in the wine industry and newfound tech expertise has uniquely shaped my approach to problem-solving and innovation. Today, as I continue to navigate this thrilling intersection of creativity and technology, I find joy in crafting digital experiences that resonate with the same artistry and attention to detail as a perfectly aged vintage.
                    </p>
            </div>
        </section>
    );
}

export default Profile;