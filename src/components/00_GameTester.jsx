
const GameTester = ({pokemon}) => {    
    return(
        <>
            {pokemon.map(item=>{
                return(
                    <div key={item.pokeName}>
                        {item.pokeName}, {item.pokeUrl}
                    </div>
                )
            })}
        </>
    )
}

export default GameTester