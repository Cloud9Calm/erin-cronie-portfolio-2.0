import '../src/styles/partials/_global.scss';
import { useEffect } from 'react';
import { useTheme } from './scripts/ThemeContext';
import AnimatedCursor from "react-animated-cursor";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Apply the theme class to the body element
    document.body.classList.remove('light-theme', 'dark-theme'); // Remove existing theme classes
    document.body.classList.add(`${theme}-theme`); // Add the current theme class

    // Cleanup function to remove the class when the component unmounts or theme changes
    return () => {
      document.body.classList.remove(`${theme}-theme`);
    };
  }, [theme]);

  return (
    <div className={`App ${theme}-theme`}>
      <AnimatedCursor />
      <Header />
      <Profile />
    </div>
  );
}

export default App;
