import Profile from '../components/Profile/Profile';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import Projects from '../components/Projects/Projects';

const Homepage = () =>  {
  return (
    <section> 
      <Profile />
      <WorkExperience />
      <Projects />
    </section>
  );
}

export default Homepage;
