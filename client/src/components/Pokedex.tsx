import React from 'react'
import './Pokedex.css'
import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'



const Pokedex = () => {
  const [pokeData, setPokeData] = useState(null);
  const [pokeName, setPokeName] = useState<String>('piplup');
  const [pokeImage, setPokeImage] = useState<string>('');

  const updatePokeName = (name: String) => {
    setPokeName(name);
    return;
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result["flavor_text_entries"][9]["flavor_text"]);
          setPokeData(result)
        }
      )
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokeName}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setPokeImage(result["sprites"]["front_default"]);
        }
      )
  }, [pokeName, pokeImage])
  return (
    <div>
      <div className="container">
        <img className="pokedex_bg" src="/images/pokedex_bg.jpg"></img>
      </div>
      <SearchBar setName={updatePokeName}/>
      <img className="pokeImg" src={pokeImage}></img>
    </div>
  )
}

export default Pokedex