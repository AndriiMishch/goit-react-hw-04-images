import React, { useState } from 'react';
import SearchBar from '../Searchbar';
import css from './App.module.css';
import ImageGallery from '../ImageGallery';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = value => {
    setSearchQuery(value);
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery searchQuery={searchQuery} />
    </div>
  );
};

export default App;