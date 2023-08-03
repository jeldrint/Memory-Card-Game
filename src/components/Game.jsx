import '../styles/Game.css'
import { useEffect, useState } from "react"
import { loadInitDiv } from './02_generateInitDivs';
import { randomizeDivs } from './02_generateInitDivs';

const Game = ({pokemon,level}) => {
    const [pokeArr, setPokeArr] = useState([]);
    const [pokeSelection, setPokeSelection] = useState([]);
    const [score, setScore] = useState(0);

    useEffect(()=> {
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
                    setScore(0);
                }

            }

        }
        document.addEventListener('click',pokeClick)
        return () => document.removeEventListener('click', pokeClick)

    },[pokeSelection])

    if(pokeArr.length === 0 && pokemon.length != 0) {          //pokemon.length != 0 is for checking if pokemon array is already loaded
        loadInitDiv(pokeArr, setPokeArr, level, pokemon);
    }

    //console.log(pokeArr)
    return(
        <div className="game-board">{score}
            {pokeArr.map((item) =>{
                return (
                    <div key={item.id} className="game-card" id={item.pokeName}>
                        <img src={item.pokeUrl} style={{height: '130px'}}/>
                        <span>{item.pokeName}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Game