import React, { useState } from 'react';

function SearchShortInput({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    onSearch(text); // Оновлення стану searchText у вищестоящому компоненті
  };

  return (

      <input
      className='what-would-you-like-to-eat1'
        type="search"
        placeholder="What would you like to eat?"
        value={searchText}
        onChange={handleSearch}
      />

  );
}

export default SearchShortInput;
