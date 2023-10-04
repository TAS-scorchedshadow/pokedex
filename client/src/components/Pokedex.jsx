import React from 'react'
import './Pokedex.css'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import SearchBar from './SearchBar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'



const Pokedex = () => {
  const [pokeName, setPokeName] = useState('piplup');
  const [pokeImage, setPokeImage] = useState(["", ""]);
  const [showFront, setShowFront] = useState(true)
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
        const sprites = data.sprites
        const frontSprite = sprites.front_default
        const backSprite = sprites.back_default
        setPokeImage([frontSprite, backSprite])
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
        {isLoading ? <CircularProgress /> : <img className="pokeImg" src={showFront ? pokeImage[0] : pokeImage[1]}></img>}
        <div className='text-container'>
          <h4>{pokeName}</h4>
          <a onClick={() => setShowFront((e) => !e)}>
            <FontAwesomeIcon className="searchIcon" icon={faRotate}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pokedex