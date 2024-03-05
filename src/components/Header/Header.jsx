import './Header.scss';
import { useTheme } from '../../scripts/ThemeContext';
import { ReactComponent as LightModeIcon } from '../../assets/images/LightMode.svg';
import { ReactComponent as DarkModeIcon } from '../../assets/images/DarkMode.svg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
    const { theme, toggleTheme } = useTheme();

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
                    <Link to="/workexperience" onClick={() => window.scrollTo({ top: document.getElementById('work-experience').offsetTop, behavior: 'smooth' })}>
                        Resume
                    </Link>
                </li>

                <li className='header__nav-item'>
                    <Link to="/projects" onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}>
                        Projects
                    </Link>
                </li>

                    <li className='header__nav-item'><Link to="">Contact</Link></li>
                </ul>
            </nav>
            <button className='header__button' onClick={toggleTheme}>
                {theme === 'light' ? <LightModeIcon className="header__theme-icon" /> : <DarkModeIcon className="header__theme-icon"  />}
            </button>
        </header>
    );
}

export default Header;
