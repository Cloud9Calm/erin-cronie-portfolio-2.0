import Profile from '../components/Profile/Profile';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import Projects from '../components/Projects/Projects';
import ContactForm from '../components/ContactForm/ContactForm';

const Homepage = () =>  {
  return (
    <section> 
      <Profile />
      <WorkExperience />
      <Projects />
      <ContactForm />
    </section>
  );
}

export default Homepage;
