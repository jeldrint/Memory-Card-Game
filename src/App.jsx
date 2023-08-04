import { useState } from 'react'
import './App.css'
import {loadPokeAPI} from './components/utils';
import Game from './components/Game';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeArr, setPokeArr] = useState([]);
  const [level, setLevel] = useState(8);
  const [youWin, setYouWin] = useState(false);

  loadPokeAPI(pokemon, setPokemon);

  return (
    <div className='container'>
      <h1 style={{textAlign:'center'}}>Memory Card Game</h1>
      <Game pokemon={pokemon} level={level} setLevel={setLevel} pokeArr={pokeArr} setPokeArr={setPokeArr} youWin={youWin} setYouWin={setYouWin}/>
    </div>
  )
}

export default App