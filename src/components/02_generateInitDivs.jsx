
export const loadInitDiv = (pokeArr, setPokeArr, level, pokemon) => {
    let tempArr = [];

    if (pokeArr.length === 0){
        while(tempArr.length < level){
            let randomIndex = Math.floor(Math.random() * 151);
            //console.log(randomIndex)
            if(!tempArr.includes(pokemon[randomIndex])){
                tempArr.push(pokemon[randomIndex])
            }
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