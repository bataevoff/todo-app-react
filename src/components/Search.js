import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search({ handleSearchNote }) {
  return (
    <div className='search'>
      <FontAwesomeIcon icon={faSearch} />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder='type to search'
      />
    </div>
  );
}

export default Search;