import { Helmet } from 'react-helmet-async';
import Profile from '../components/Profile/Profile';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import Projects from '../components/Projects/Projects';
import ContactForm from '../components/ContactForm/ContactForm';

const Homepage = () => {
  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Erin Cronie",
    "jobTitle": "Software Developer",
    "url": "https://www.erincronie.me",
    "sameAs": [
      "https://www.linkedin.com/in/erincronie/",
      "https://github.com/cloud9calm"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Cloud9 Calm Co."
    },
    "description": "Erin Cronie is a software developer specializing in web development, e-commerce, and SEO.",
    "image": "https://erincronie.me/static/media/erin-cronie.2f7fa6d22fa582d16a92.jpg"
  };

  return (
   <>
      <Helmet>
  
        <title>Erin Cronie - Software Developer | Portfolio</title>
        <meta
          name="description"
          content="Erin Cronie is a software developer with expertise in web development, e-commerce solutions, and SEO."
        />
        <meta name="author" content="Erin Cronie" />
        <meta
          name="keywords"
          content="Erin Cronie, Software Developer, Web Developer, Portfolio, SEO, e-commerce, web development, cloud9 calm co"
        />

        <meta property="og:title" content="Erin Cronie - Software Developer | Portfolio" />
        <meta
          property="og:description"
          content="Erin Cronie is a software developer with expertise in web development, e-commerce solutions, and SEO."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.erincronie.me" />
        <meta property="og:image" content="https://erincronie.me/static/media/erin-cronie.2f7fa6d22fa582d16a92.jpg" />
        <meta property="og:site_name" content="Erin Cronie - Software Developer" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Erin Cronie - Software Developer | Portfolio" />
        <meta
          name="twitter:description"
          content="Erin Cronie is a software developer with expertise in web development, e-commerce solutions, and SEO."
        />
        <meta name="twitter:image" content="	https://erincronie.me/static/media/erin-cronie.2f7fa6d22fa582d16a92.jpg" />
        <meta name="twitter:site" content="@cloud9calmco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

    <main>
      <Profile />
      <WorkExperience />
      <Projects />
      <ContactForm />
    </main>
    </>
  );
};

export default Homepage;