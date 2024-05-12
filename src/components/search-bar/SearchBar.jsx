import React from 'react';

import './SearchBar.css';

export default function SearchBar() {

  return (
    <div className='search-bar-container'>
      <input type="text" className="search-bar" placeholder='Search'/>
    </div>
  )
}
