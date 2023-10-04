import React from 'react'
import './Pokedex.css'
import { useEffect, useState } from 'react'
import SearchBar from './SearchBar.jsx'



const Pokedex = () => {
  const [pokeName, setPokeName] = useState('piplup');
  const [pokeImage, setPokeImage] = useState('');

  const updatePokeName = (name) => {
    setPokeName(name);
    return;
  }

  useEffect(() => {
    // Write your fetch statement here!
    // It should fetch the link of the sprite for the given pokemon and store it inside the pokeImage state
    //
  }, [pokeName, pokeImage])
  return (
    <div>
      <div className="container">
        <img className="pokedex_bg" src="/images/pokedex_bg.jpg"></img>
      </div>
      <SearchBar setName={updatePokeName}/>
      <div className="pokeImg-container">
        <img className="pokeImg" src={pokeImage}></img>
        <h4 className="pokeName">{pokeName}</h4>
      </div>
    </div>
  )
}

export default Pokedex