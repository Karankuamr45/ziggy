import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {

  const [searchTxt,setsearchTxt]=useState('')

  return (
    <div className="flex items-center bg-white p-2 rounded-md h-8">
      <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        value={searchTxt}
        onChange={(e)=>{setsearchTxt(e.target.value)}}
        className="bg-transparent text-red-600 focus:outline-none w-36 sm:w-64"
      />

      <button
      onClick={()=>{
       
        console.log(searchTxt)

      }}
       className='text-black'>Search</button>
    </div>
  );
};

export default SearchBar;
