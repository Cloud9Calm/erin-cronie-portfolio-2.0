import '../src/styles/partials/_global.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './scripts/ThemeContext';
import AnimatedCursor from "react-animated-cursor";
import Header from './components/Header/Header';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Homepage from './pages/Homepage';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import ContactForm from './components/ContactForm/ContactForm';

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
        <AnimatedCursor />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <SocialMedia />
      </BrowserRouter>
    </div>
  );
}

export default App;