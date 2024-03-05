import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnimatedCursor from "react-animated-cursor";
import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import SocialMedia from '../components/SocialMedia/SocialMedia';

const Homepage = () =>  {
  return (
    <section>
      <AnimatedCursor />
      <Header />   
      <Profile />
      <WorkExperience />
      
    </section>
  );
}

export default Homepage;
