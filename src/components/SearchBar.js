import React, { useState } from 'react'

const SearchBar = ({searchMission}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMission(value);
    setValue("");
  }

  return (
    <form className='SearchBar'onSubmit={handleSubmit}>
      <input type='text' className='searchbar-input' value={value} placeholder='Looking for a mission?' 
      onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='searchbar-btn'>Search</button>
    </form>
  )
}

export default SearchBar