import GameTester from './components/00_GameTester';
import { useState } from 'react'
import './App.css'
import {loadPokeAPI} from './components/01_loadPokeAPI';
import Game from './components/Game';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [level, setLevel] = useState(8);

  loadPokeAPI(pokemon, setPokemon);

  return (
    <div className='container'>
      <h1 style={{textAlign:'center'}}>Memory Card Game</h1>
      <Game pokemon={pokemon} level={level} />
    </div>
  )
}

export default App