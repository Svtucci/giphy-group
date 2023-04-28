import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import SearchBar from '../SearchBar/SearchBar';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchBar />
    </div>
  );
}

export default App;
