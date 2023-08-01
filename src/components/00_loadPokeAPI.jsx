import { useEffect, useState } from "react"

export const loadPokeAPI = (setPokemon, setIsLoading, isLoading) => {
    const [tempData, setTempData] = useState([])

    useEffect(()=>{
        const fetchPokeData = async () => {
            const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const response = await data.json();
            setTempData(response.results)
            console.log(isLoading, tempData)
        }
        fetchPokeData();
    },[])

    useEffect(()=>{
        tempData.map(((item,index)=>setPokemon(
            prev => [...prev, {
                pokeName: item.name,
                pokeUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg`
            }]
        )))
    },[tempData])

    
}