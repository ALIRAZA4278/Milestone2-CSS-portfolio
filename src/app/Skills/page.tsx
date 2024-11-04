import React from 'react';
import "./Skills.css";

export default function SkillsPage() {
  const skills = [
    { name: 'HTML', level: '95%' },
    { name: 'CSS', level: '90%' },
    { name: 'JavaScript', level: '75%' },
    { name: 'React', level: '60%' },
    { name: 'Node.js', level: '65%' },
    { name: 'MongoDB', level: '60%' },
    { name: 'Tailwind CSS', level: '82%' },
    { name: 'TypeScript', level: '70%' },
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <p className="skills-description">
        My name is Ali Raza, a passionate web developer with expertise in 
        HTML, CSS, JavaScript, TypeScript, Node.js, Express.js, and MongoDB. 
        I also specialize in AI chatbot development, utilizing tools like 
        Langchain, Flowise, Dialogflow, and Twilio to create intelligent and 
        responsive solutions. I am dedicated to building seamless user experiences 
        and leveraging technology to solve real-world problems.
      </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level }}
              />
            </div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
