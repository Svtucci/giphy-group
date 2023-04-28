import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import FindGif from '../SearchResults/FindGif';

function App() {
  

  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchBar />
      <br />
      <SearchResults />
      <FindGif />
    </div>
  );
}

export default App;
