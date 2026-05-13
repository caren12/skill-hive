 import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';
import SkillForm from '../components/SkillForm';

const Skills = () => {
  // READ: Initialize state with your data from image.png and image_2.png
  const [skillData, setSkillData] = useState([
    { id: 1, category: "Programming", title: "Web Development", instructor: "Sarah Chen", rating: "4.9", offering: "React", seeking: "UI/UX", icon: "💻" },
    { id: 2, category: "Music", title: "Guitar for Beginners", instructor: "Alex Martinez", rating: "4.7", offering: "Acoustic", seeking: "Piano", icon: "🎵" }
  ]);

  // CREATE: Function to add a new skill
  const addSkill = (newSkill) => {
    setSkillData([...skillData, { ...newSkill, id: Date.now() }]);
  };

  // DELETE: Function to remove a skill
  const deleteSkill = (id) => {
    setSkillData(skillData.filter(skill => skill.id !== id));
  };

  return (
    <div>
      <header>
        <h1>Featured Skill Exchanges</h1>
        {/* Render the Form Component */}
        <SkillForm onAdd={addSkill} />
      </header>

      <main>
        <div>
          {skillData.map((skill) => (
            <div key={skill.id}>
              <SkillCard {...skill} />
              {/* DELETE Button */}
              <button onClick={() => deleteSkill(skill.id)}>Delete Skill</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Skills;