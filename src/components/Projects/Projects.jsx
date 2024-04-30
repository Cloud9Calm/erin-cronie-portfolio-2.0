import './Projects.scss';
import projectsData from '../../data/projects.json';

const Profile = () => {
    return (
        <section className='projects' id='projects'>
            <h2 className='projects__title title'>Projects</h2>
            <div className="projects__list">
                <p className='projects__blurb'>
                I'm thrilled to announce that some of the exciting projects I've been working! Dive in and explore the innovative solutions and features they bring. Stay tuned for further updates as I continue to enhance and refine these projects to provide the best possible experiences. Get ready to embark on an adventure filled with creativity, innovation, and endless possibilities!                </p>
                {projectsData.projects.map((project, index) => (
                    <div key={index} className="projects__list-items">
                        <h3 className='projects__name'>{project.title}</h3>
                        <p className='projects__url'>URL: <a href={`http://${project.url}`} target="_blank">{project.url}</a></p>
                        <p className='projects__description'>{project.description}</p>
                        <h3 className='projects__tech-stack-title'>Tech Stack:</h3>
                        <div className='projects__tech-stack'>
                            {
                                project.techStack.map((tech, index) => (
                                    <p key={index} className="projects__tech-stack-item">{tech}</p>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Profile;
