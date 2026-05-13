import { useState } from 'react';

function SearchBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const categories = ['All', 'Programming', 'Music', 'Cooking', 'Language', 'Fitness', 'Business'];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    onFilter(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;