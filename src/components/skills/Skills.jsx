// Skills.jsx
import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Backend',
    color: '#6499ff',
    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'JDBC', 'JSP', 'MyBatis', 'JWT']
  },
  {
    category: 'Frontend',
    color: '#ffb066',
    items: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React']
  },
  {
    category: 'Database',
    color: '#6fdca9',
    items: ['Oracle', 'MySQL']
  },
  {
    category: 'Deployment & Cloud',
    color: '#b088f9',
    items: ['AWS', 'Firebase', 'GCP']
  },
  {
    category: 'Collaboration & Tools',
    color: '#6bdcd1',
    items: ['Git', 'GitHub', 'GitAction', 'Notion', 'Figma', 'Slack', 'Postman']
  }
];

const Skills = () => (
  <section id="skills" className="section skills-section">
    <div className="inner">
      <h1 className="section-title">Skills</h1>
      <div className="skills-grid">
        {skills.map(({ category, items, color }) => (
          <div className="skill-card" key={category} style={{ borderTop: `6px solid ${color}` }}>
            <h2>{category}</h2>
            <ul className="skill-list">
              {items.map(skill => (
                <li key={skill}>
                  <span className="bullet" style={{ backgroundColor: color }}></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;