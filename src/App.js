import '../src/styles/partials/_global.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './scripts/ThemeContext';
import AnimatedCursor from "react-animated-cursor";
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import WorkExperience from './components/WorkExperience/WorkExperience';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Homepage from './pages/Homepage';

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
      <BrowserRouter>
    <Homepage />
        <Routes>
          <Route path="/workexperience" />
        </Routes>
        <SocialMedia />
    </BrowserRouter>
      </div>
  );
}

export default App;
