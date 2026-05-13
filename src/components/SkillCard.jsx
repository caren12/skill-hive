import React from 'react';

const SkillCard = ({ id, title, category, onDelete }) => {
  return (
    <div>
      <div>
        <span>{category}</span>
        <h3>{title}</h3>
      </div>
      <div>
        {/* Delete button passes the ID back to the parent */}
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default SkillCard;