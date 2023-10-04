import React from 'react'
import { Button, TextField } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({setName}) => {
  const [input, setInput] = useState('');

  return (
    <div className="searchContainer">
      <TextField id="pokemon" size="small" placeholder='Enter pokemon' onChange={(e) => setName(e.target.value)}></TextField>
      <a onClick={() => setName(input)}>
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} style={{color: "#00ffff",}} />
      </a>
    </div>
  )
}

export default SearchBar