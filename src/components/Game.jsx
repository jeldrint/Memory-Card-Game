import '../styles/Game.css'
import { useEffect, useState } from "react"
import { loadInitDiv } from './utils';
import { randomizeDivs } from './utils';
import { setBest } from './utils';

const Game = ({pokemon, level, setLevel, pokeArr, setPokeArr, youWin, setYouWin}) => {
    const [pokeSelection, setPokeSelection] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
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
        let eTargetName = '';

        if(e.target.className === 'game-card' || e.target.parentNode.className === 'game-card'){  //if statement to restrain click listener to only the game cards
            e.target.id ? eTargetName = e.target.id: eTargetName = e.target.parentNode.id;

            if(!pokeSelection.includes(eTargetName)){
                setPokeSelection(prev=>[...prev,eTargetName]);
                setScore(prev => prev + 1);
                randomizeDivs(pokeArr, setPokeArr)
            }else{
                setPokeSelection([]);
                setScore(0);
                setLevel(8);
                setStage(1);
                setYouWin(true);
                setBest(score, bestScore, setBestScore)
            }
        }
    }

    return(
        <>
            <div className='game-header'>
                <div style={{fontSize: '24px'}}>Pokemon Memory Card Game</div>
                <div>
                    <span style={{fontSize:'12px'}}>Score: <b>{score}</b> || Level: <b>{stage}</b> || Best Score: <b>{bestScore}</b></span>
                </div>
            </div>
            <main className="game-board">
            {pokeArr.map((item) =>{
                return (
                    <div key={item.id} className="game-card" id={item.pokeName} onClick={pokeClick}>
                        <img src={item.pokeUrl} style={{height: '130px', maxWidth: '150px'}}/>
                        <span>{item.pokeName}</span>
                    </div>
                )
            })}
            </main>
            <footer className='game-footer'>
                <span>2023 {String.fromCharCode(169)} jeldrint || Memory Card ||<span> </span></span>
                <a href='https://www.theodinproject.com/' target='_blank'>The Odin Project</a>
            </footer>
        </>
    )
}

export default Game