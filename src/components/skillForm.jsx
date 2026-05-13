import React, { useState } from 'react';

const SkillForm = ({ onAddSkill }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return;

    onAddSkill({ title, category });
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Skill Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillForm;