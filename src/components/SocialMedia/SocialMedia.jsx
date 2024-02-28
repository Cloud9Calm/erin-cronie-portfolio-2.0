import './SocialMedia.scss';
import InstagramSVG from '../../assets/images/Instagram.svg';
import LinkedInSVG from '../../assets/images/LinkedIn.svg';
import GitHubSVG from '../../assets/images/GitHub.svg';

const SocialMedia = () => {
    return (
        <section className='social-media'>
            <h2 className='social-media__title title'>Social Media</h2>
           <ul className='social-media__list'>
                <li className='social-media__list-item'>
                    <a 
                        className='social-media__link'
                        href="https://github.com/erincronie" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Find my GitHub
                    </a>
                    <img 
                        src={GitHubSVG} 
                        alt="GitHub Icon"
                        className='social-media__svg' 
                    />
                </li>
                <li className='social-media__list-item'>
                    <a 
                        className='social-media__link'
                        href="https://www.instagram.com/cloud9calm" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Follow me on Instagram
                    </a>
                    <img 
                        src={InstagramSVG} 
                        alt="Instagram Icon"
                        className='social-media__svg' 
                    />
                </li>
                <li className='social-media__list-item'>
                    <a 
                        className='social-media__link'
                        href="https://www.linkedin.com/in/erin-cronie/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            Connect with me on LinkedIn
                    </a>
                    <img 
                        src={LinkedInSVG} 
                        alt="LinkedIn Icon" 
                        className='social-media__svg'
                    />
                </li>
           </ul>
        </section>
    );
}

export default SocialMedia;

