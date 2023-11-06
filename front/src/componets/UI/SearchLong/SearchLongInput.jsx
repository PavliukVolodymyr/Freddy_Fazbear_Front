import React from "react";


const SearchLongInput = ({ onSearch }) => {
  const handleChange = (e) => {
    const searchText = e.target.value;
    onSearch(searchText); // Відправити текст пошуку до батьківського компонента
  };

  return (
    <input
      className="what-would-you-like-to-eat"
      type="search"
      placeholder="What would you like to eat?"
      onChange={handleChange} // Викликати зміну тексту при введенні
    />
  );
}

export default SearchLongInput;
