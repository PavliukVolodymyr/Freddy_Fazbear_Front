import React from "react";
import Navigation from "./componets/Navigation";
import Background from "./componets/Background";
import Header from "./componets/Header";
import SearchIcon from "./componets/SearchIcon";
import './styles/SearchLongInput.css';
import SearchLongInput from "./componets/SearchLongInput";

function App() {
  return (
    <div>
    <Header/>
    <Background/>
    <Navigation/>
    <SearchIcon>
      <SearchLongInput/>
    </SearchIcon>
    </div>
    
  );
}

export default App;
