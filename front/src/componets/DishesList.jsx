import React, { useState } from 'react';
import DishesItem from './DishesItem';
import SearchLongInput from './UI/SearchLong/SearchLongInput';

const DishesList = ({ data }) => {
  const [searchResults, setSearchResults] = useState(data);
  
  const handleSearch = (searchText) => {
    // Ваша логіка пошуку та оновлення результатів
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <SearchLongInput onSearch={handleSearch} />
      <div className="dishes-list">
        {searchResults.map((item, index) => (
          <DishesItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DishesList;
