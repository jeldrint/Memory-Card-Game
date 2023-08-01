import { useState } from 'react'
import './App.css'
import {loadPokeAPI} from './components/00_loadPokeAPI';
import Game from './components/Game';
const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  loadPokeAPI(pokemon, setPokemon);

  return (
    <>
      <h1>Memory Card</h1>
      <Game pokemon={pokemon} isLoading={isLoading}/>    
    </>
  )
}

export default App