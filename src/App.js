import '../src/styles/partials/_global.scss';
import { useEffect } from 'react';
import { useTheme } from './scripts/ThemeContext';
import AnimatedCursor from "react-animated-cursor";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme'); 
    document.body.classList.add(`${theme}-theme`); 
    return () => {
      document.body.classList.remove(`${theme}-theme`);
    };
  }, [theme]);

  return (
    <div className='App'>
      <AnimatedCursor />
      <Header />
      <Profile />
    </div>
  );
}

export default App;
