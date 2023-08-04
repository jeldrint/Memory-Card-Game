import '../styles/Game.css'
import { useEffect, useState } from "react"
import { loadInitDiv } from './02_manageDivs';
import { randomizeDivs } from './02_manageDivs';

const Game = ({pokemon, level, setLevel, pokeArr, setPokeArr}) => {
    const [pokeSelection, setPokeSelection] = useState([]);
    const [score, setScore] = useState(0);

    console.log(pokeArr)
    useEffect(()=>{
        if(pokemon.length != 0) {          //pokemon.length != 0 is for checking if pokemon array is already loaded
            loadInitDiv(pokeArr, setPokeArr, level, pokemon);
        }
    },[pokemon])

    const pokeClick = (e) => {
        if(e.target.className === 'game-card'){  //if statement to restrain click listener to only the game cards
            if(!pokeSelection.includes(e.target.id)){
                setPokeSelection(prev=>[...prev,e.target.id]);
                setScore(prev => prev + 1);
                randomizeDivs(pokeArr, setPokeArr)
            }else{
                setScore(0);
            }
        }else if(e.target.parentNode.className === 'game-card'){
            if(!pokeSelection.includes(e.target.parentNode.id)){
                setPokeSelection(prev=>[...prev,e.target.parentNode.id]);
                setScore(prev => prev + 1);
                randomizeDivs(pokeArr, setPokeArr)
            }else{
                setPokeSelection([]);
                setScore(0);
            }

        }
        console.log(pokeSelection.length, level)

        if(pokeSelection.length === level){
            console.log('proceed')
            setLevel(prev =>prev + 2);
            setPokeArr([]);
            loadInitDiv(pokeArr, setPokeArr, level, pokemon);
        }
    }

    return(
        <>
            <p>{score}, {pokeSelection}</p>
            <div className="game-board">
            {pokeArr.map((item) =>{
                return (
                    <div key={item.id} className="game-card" id={item.pokeName} onClick={pokeClick}>
                        <img src={item.pokeUrl} style={{height: '130px'}}/>
                        <span>{item.pokeName}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Game