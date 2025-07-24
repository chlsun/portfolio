import React from 'react';
import './Skills.css';

const skills = {
    Backend: [
        'Java', 'JDBC', 'Spring Framework', 'Spring Boot', 'Spring Security', 'JPA', 'JSP',  'JWT', 'MyBatis'
    ],
    Frontend: [
        'HTML', 'CSS', 'JavaScript', 'jQuery', 'React'
    ],
    Database: [
        'Oracle', 'MySQL'
    ],
    'Deployment & Cloud': [
        'AWS', 'Firebase', 'GCP'
    ],
    'Collaboration & Tools': [
        'Git', 'GitHub', 'GitAction', 'Notion', 'Figma', 'Slack', 'Postman'
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="skills-full">
            <h1 className="title">Skills</h1>
            <div className="skills-container no-img">
                {Object.entries(skills).map(([category, items]) => (
                    <div className="skill-category" key={category}>
                        <h2>{category}</h2>
                        <ul className="skill-list-text">
                            {items.map(skill => (
                                <li key={skill} className="skill-text-item">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;