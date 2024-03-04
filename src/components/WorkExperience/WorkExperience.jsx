import React, { useState } from 'react';
import './WorkExperience.scss';
import resume from '../../data/resume.json';
import { ReactComponent as DropDown } from '../../assets/images/dropdown.svg';

const WorkExperience = () => {
    const [isVisible, setIsVisible] = useState({
        education: false,
        experience: false,
        skills: false,
    });

    const toggleVisibility = (section) => {
        setIsVisible(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <section className='work'>
            <div className='work__button-section'>
                <h2 className='work__title title' id="resume">Resume</h2>
                <a 
                    href="/Erin-Cronie-Resume.pdf" 
                    download="Erin-Cronie-Resume.pdf"
                    className='work__button'>
                    Download My Resume
                </a>
            </div>
            <div className='work__main-section'>
                <div className='work__header' onClick={() => toggleVisibility('education')}>
                    <h3 className='work__education title'>Education</h3>
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
                    <h3 className='work__experience title'>Experience</h3>
                    <DropDown
                        className="work__dropdown-icon" 
                        style={{ transform: isVisible.experience ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}  
                    />
                </div>
                {isVisible.experience && (
                    <ul className='work__list'>
                    {resume.experience.map((exp, index) => (
                        <li className='work__list-item' key={index}>
                            <ul className="work__details-list">
                                <li className="work__job">{exp.jobTitle}</li>
                                <li className="work__company">{exp.company}</li>
                                <li className="work__duration">{exp.duration}</li>
                                <li className="work__description">{exp.description}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
                )}

                <div className='work__header' onClick={() => toggleVisibility('skills')}>
                    <h3 className='work__skills title'>Skills</h3>
                    <DropDown
                        className={`work__dropdown-icon ${isVisible.skills ? 'work__dropdown--open' : ''}`} 
                        style={{ transform: isVisible.skills ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}  
                    />
                </div>
                {isVisible.skills && (
                    <ul className='work__list'>
                        {resume.skills.map((interest, index) => (
                            <li className='work__list-item' key={index}>{interest}</li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default WorkExperience;
