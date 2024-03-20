import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input

  const handleSubmit = (e) => { // Handles search submission
    e.preventDefault();
    setSearchTerm("");
    onSearchSubmit(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a City or Town" // Input field for search term
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Updates search term state on change
        />
      </form>
    </div>
  );
};

export default SearchBar;
