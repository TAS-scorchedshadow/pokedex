import React from 'react'
import './Pokedex.css'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import SearchBar from './SearchBar.jsx'



const Pokedex = () => {
  const [pokeName, setPokeName] = useState('piplup');
  const [pokeImage, setPokeImage] = useState('');
  const [isLoading, setIsLoading] = useState(false)


  const updatePokeName = (name) => {
    setPokeName(name);
    return;
  }

  useEffect(() => {
    // Write your fetch statement here!
    // It should fetch the link of the sprite for the given pokemon and store it inside the pokeImage state
    const getData = setTimeout(() => {
      setIsLoading(true)
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(resp => resp.json())
      .then(data => {
        const frontSprite = data.sprites.front_default
        setPokeImage(frontSprite)
        setIsLoading(false)
      }).catch(error => {
        console.log(error)
      })
    }, 2000)
    return () => clearTimeout(getData)
  }, [pokeName])
  return (
    <div>
      <div className="container">
        <img className="pokedex_bg" src="/images/pokedex_bg.jpg"></img>
      </div>
      <SearchBar setName={updatePokeName}/>
      <div className="pokeImg-container">
        {isLoading ? <CircularProgress /> : <img className="pokeImg" src={pokeImage}></img>}
        <h4 className="pokeName">{pokeName}</h4>
      </div>
    </div>
  )
}

export default Pokedex