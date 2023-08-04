import { useEffect, useState } from "react"

export const loadPokeAPI = (pokemon, setPokemon) => {
    const [tempData, setTempData] = useState([])

    useEffect(()=>{
        const fetchPokeData = async () => {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const response = await data.json();
            setTempData(response.results)
        }
        fetchPokeData();
    },[])

    useEffect(()=>{
        if(pokemon.length === 0){
            tempData.map(((item,index)=>setPokemon(
                prev => [...prev, {
                    id: index+1,
                    pokeName: item.name,
                    pokeUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
                    //pokeUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png`
                }]
            )))
        }
    },[tempData])
}

export const loadInitDiv = (setPokeArr, level, pokemon) => {
    let tempArr = [];
    while(tempArr.length < level){
        let randomIndex = Math.floor(Math.random() * 151);
        if(!tempArr.includes(pokemon[randomIndex])){
            tempArr.push(pokemon[randomIndex])
        }
    }    
    setPokeArr(tempArr)

}

export const randomizeDivs = (pokeArr, setPokeArr) => {
    let tempArr = [];
    pokeArr.sort(()=>0.5-Math.random())
    .map(randNum =>{
    tempArr.push(randNum)
    })
    setPokeArr(tempArr)
}

export const setBest = (score, bestScore, setBestScore) => {
    if(score > bestScore){
        setBestScore(score);
    }
}