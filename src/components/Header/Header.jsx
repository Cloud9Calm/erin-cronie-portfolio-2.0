import './Header.scss';
import { useTheme } from '../../scripts/ThemeContext';

const Header = () => {
    const { toggleTheme } = useTheme();

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
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
}

export default Header;