import './Header.scss';
import { useTheme } from '../../scripts/ThemeContext';
import { ReactComponent as LightModeIcon } from '../../assets/images/LightMode.svg';
import { ReactComponent as DarkModeIcon } from '../../assets/images/DarkMode.svg';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className='header'>
            <div className='header__info'>
                <h2 className='header__title'>
                    Welcome
                </h2>
                <h3 className='header__subtitle'>
                    erincronie.me
                </h3>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li className='header__nav-item'>Resume</li>
                    <li className='header__nav-item'>Projects</li>
                    <li className='header__nav-item'>Contact</li>
                </ul>
            </nav>
            <button className='header__button' onClick={toggleTheme}>
                {theme === 'light' ? <LightModeIcon className="header__theme-icon" /> : <DarkModeIcon className="header__theme-icon"  />}
            </button>
        </header>
    );
}

export default Header;