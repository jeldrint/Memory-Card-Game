import '../styles/Game.css'
import { useEffect, useState } from "react"
import { loadInitDiv } from './utils';
import { randomizeDivs } from './utils';

const Game = ({pokemon, level, setLevel, pokeArr, setPokeArr, youWin, setYouWin}) => {
    const [pokeSelection, setPokeSelection] = useState([]);
    const [score, setScore] = useState(0);
    const [stage, setStage] = useState(1);

    useEffect(()=>{
        if(pokemon.length != 0) {          //pokemon.length != 0 is for checking if pokemon array is already loaded
            loadInitDiv(setPokeArr, level, pokemon);
        }
    },[pokemon])

    useEffect(()=>{
        if(pokeSelection.length === level){
            setPokeArr([]);
            setPokeSelection([]);
            setYouWin(true);
            setStage(prev =>prev + 1);
            if(level < 12){
                setLevel(prev =>prev + 1);
            }
        }
    },[pokeSelection])

    useEffect(()=>{
        if(youWin){
            loadInitDiv(setPokeArr, level, pokemon);
            setYouWin(false);
        }
    },[youWin])

    const pokeClick = (e) => {
        if(e.target.className === 'game-card'){  //if statement to restrain click listener to only the game cards
            if(!pokeSelection.includes(e.target.id)){
                setPokeSelection(prev=>[...prev,e.target.id]);
                setScore(prev => prev + 1);
                randomizeDivs(pokeArr, setPokeArr)
            }else{
                setPokeSelection([]);
                setScore(0);
                setLevel(8);
                setYouWin(true);
            }
        }else if(e.target.parentNode.className === 'game-card'){
            if(!pokeSelection.includes(e.target.parentNode.id)){
                setPokeSelection(prev=>[...prev,e.target.parentNode.id]);
                setScore(prev => prev + 1);
                randomizeDivs(pokeArr, setPokeArr)
            }else{
                setPokeSelection([]);
                setScore(0);
                setLevel(8);
                setStage(1);
                setYouWin(true);
            }

        }
    }

    return(
        <>
            <p>Score: {score}</p>
            <p>Level: {stage}</p>
            <div className="game-board">
            {pokeArr.map((item) =>{
                return (
                    <div key={item.id} className="game-card" id={item.pokeName} onClick={pokeClick}>
                        <img src={item.pokeUrl} style={{height: '130px', maxWidth: '150px'}}/>
                        <span>{item.pokeName}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Game