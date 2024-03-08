import './Header.scss';
import { useTheme } from '../../scripts/ThemeContext';
import { ReactComponent as LightModeIcon } from '../../assets/images/LightMode.svg';
import { ReactComponent as DarkModeIcon } from '../../assets/images/DarkMode.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <header className='header'>
            <div className='header__info'>
                <h2 className='header__title title'>
                    Welcome
                </h2>
                <h3 className='header__subtitle'>
                    erincronie.me
                </h3>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>
                        <Link to="/workexperience" onClick={() => scrollToSection('work-experience')} aria-label="Resume">Resume</Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to="/projects" onClick={() => scrollToSection('projects')} aria-label="Projects">Projects</Link>
                    </li>
                    <li className='header__nav-item'>
                        <Link to="/contact" onClick={() => scrollToSection('contact')} aria-label="Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <button className='header__button' onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === 'light' ? <LightModeIcon className="header__theme-icon" /> : <DarkModeIcon className="header__theme-icon"  />}
            </button>
        </header>
    );
}

export default Header;
