import React, { useState } from 'react';
import './WorkExperience.scss';
import resume from '../../data/resume.json';
import { ReactComponent as DropDown } from '../../assets/images/dropdown.svg';

const WorkExperience = () => {
    const [isVisible, setIsVisible] = useState({
        education: false,
        experience: false,
        interests: false,
    });

    const toggleVisibility = (section) => {
        setIsVisible(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <section className='work'>
            <h2 className='work__title' id="resume">Resume</h2>
            <a 
                href="/assets/Erin-Cronie-Resume.pdf" 
                download="Erin-Cronie-Resume.pdf"
                className='work__button'>
                Download My Resume
            </a>
            <div className='work__section'>
                <div className='work__header' onClick={() => toggleVisibility('education')}>
                    <h3 className='work__education'>Education</h3>
                    <DropDown
                        className="work__dropdown-icon" 
                        style={{ transform: isVisible.education ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}  
                    />
                </div>
                {isVisible.education && (
                    <ul className='work__list'>
                        {resume.education.map((edu, index) => (
                            <li className='work__list-item' key={index}>{edu.study}, {edu.degree} - {edu.year}</li>
                        ))}
                    </ul>
                )}

                <div className='work__header' onClick={() => toggleVisibility('experience')}>
                    <h3 className='work__experience'>Experience</h3>
                    <DropDown
                        className="work__dropdown-icon" 
                        style={{ transform: isVisible.experience ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}  
                    />
                </div>
                {isVisible.experience && (
                    <ul className='work__list'>
                        {resume.experience.map((exp, index) => (
                            <li className='work__list-item' key={index}>{exp.jobTitle} at {exp.company}, {exp.duration}</li>
                        ))}
                    </ul>
                )}

                <div className='work__header' onClick={() => toggleVisibility('interests')}>
                    <h3 className='work__interests'>Interests</h3>
                    <DropDown
                        className={`work__dropdown-icon ${isVisible.interests ? 'work__dropdown--open' : ''}`} 
                        style={{ transform: isVisible.interests ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}  
                    />
                </div>
                {isVisible.interests && (
                    <ul className='work__list'>
                        {resume.interests.map((interest, index) => (
                            <li className='work__list-item' key={index}>{interest}</li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default WorkExperience;
