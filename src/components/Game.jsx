import '../styles/Game.css'
import { useState } from "react"

const Game = ({pokemon,level}) => {
    const [pokeArr, setPokeArr] = useState([]);

    if(pokeArr.length === 0 && pokemon.length != 0) {          //pokemon.length != 0 is for checking if pokemon array is already loaded
        let tempArr = [];
        while(tempArr.length < level){
            let randomIndex = Math.floor(Math.random() * 151);
            console.log(randomIndex)
            if(!tempArr.includes(pokemon[randomIndex])){
                tempArr.push(pokemon[randomIndex])
            }
        }
        setPokeArr(tempArr)
    }

    console.log(pokeArr)
    return(
        <div className="game-board">
            {pokeArr.map((item) =>{
                return (
                    <div className="game-card">
                        <img src={item.pokeUrl} style={{height: '130px'}}/>
                        <span key={item.id}>{item.pokeName}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Game