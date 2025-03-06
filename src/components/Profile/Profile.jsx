import './Profile.scss';
import Name from '../Name/Name'; 
import erinCronieDesk from '../../assets/images/profileimg.jpg';

const Profile = () => {
    return (
        <section className='profile' id='top'>
            <div className='profile__name-title'>
                <Name />
            </div>
            <div className='profile__background'>
                <h2 className='profile__title title-background title'>
                    More about Erin's Background
                </h2>
                
                <div className="profile__img-section">
                    <img class="profile__img" src={erinCronieDesk} alt="Erin Cronie sitting at her desk with computer screen" />
                 
                    
                    <p className='profile__info'>
                        Embarking on a <i>transformation journey</i> from the <b>picturesque vineyards</b> of the wine industry to the <b>dynamic realm of technology</b> was a leap of <i>passion</i> and <i>reinvention</i>. The pivotal moment arrived when I <b><u>secured a role with Shopify and Shopify Plus Support</u></b>, unveiling to me the <i>fascinating world of code</i>.
                    </p>
                    <p className='profile__info'>   
                        Navigating the <b>complexities of e-commerce</b> and <b>digital solutions</b>, my role at Shopify became the <b><i>catalyst</i></b> for a <i>profound shift</i> in my career trajectory. Through <i>dedicated support, mentorship,</i> and <i>hands-on experiences</i>, I not only <b><u>embraced the language of code</u></b> but also <i>discovered a profound love</i> for the <b>intricacies of web development</b>.
                    </p>
                    <p className='profile__info'>    
                        The <b>synergy</b> of my background in the <b>wine industry</b> and <b>newfound tech expertise</b> has uniquely shaped my approach to <i>problem-solving</i> and <i>innovation</i>. Today, as I continue to navigate this <i>thrilling intersection</i> of <b>creativity and technology</b>, I find joy in <b><u>crafting digital experiences</u></b> that resonate with the same <b>artistry</b> and <i>attention to detail</i> as a <b><i>perfectly aged vintage</i></b>.
                    </p>
                </div>  
            </div>
        </section>
    );
}

export default Profile;