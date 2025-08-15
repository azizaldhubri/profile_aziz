 
import "./Skills.css"; // استيراد التنسيقات

const Skills = ({ skills }) => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
