import './SocialMedia.scss';

const SocialMedia = () => {
    return (
        <section className='social-media'>
            <h2 className='social-media__title title'>Social Media</h2>
           <ul className='social-media__list'>
           <li className='social-media__list-item'>
                <a 
                    href="https://github.com/erincronie" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Find my GitHub
                </a>
            </li>
            <li className='social-media__list-item'>
                <a 
                    href="https://www.instagram.com/cloud9calm" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Follow me on Instagram
                </a>
            </li>
            <li className='social-media__list-item'>
                <a 
                    href="https://www.linkedin.com/in/erin-cronie/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Connect with me on LinkedIn
                </a>
            </li>
           </ul>
        </section>
    );
}

export default SocialMedia;