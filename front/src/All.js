// All.js
import React, { useState } from "react";
import Background from "./componets/Background";
import Header from "./componets/Header";
import Navigation from "./componets/Navigation";
import UserInterface from "./componets/UserInterface";
import Message from "./componets/Message";
import AuthStatus from "./componets/AuthStatus";
import ListAll from "./componets/ListAll";
import SearchIcon from "./componets/UI/SearchLong/SearchIcon";
import SearchLongInput from "./componets/UI/SearchLong/SearchLongInput"; // Імпортуйте SearchLongInput

function All() {
  const [searchText, setSearchText] = useState(''); // Стан для збереження тексту пошуку

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div>
      <Background />
      <Header />
      <AuthStatus />
      <Navigation />
      <SearchIcon>
        {/* Переміщений SearchLongInput з ListAll.js */}
        <SearchLongInput className="what-would-you-like-to-eat" onSearch={handleSearch} />
      </SearchIcon>
      <UserInterface />
      <Message>
      Choose with your mind or your stomach!
      </Message>
      {/* Блок listRestourants також перенесений в ListAll.js */}
      <ListAll searchText={searchText} />
    </div>
  );
}

export default All;
