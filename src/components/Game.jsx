
const Game = ({pokemon, isLoading}) => {
return(
    <>
        {isLoading && pokemon.map(item=>{
            return(
                <div key={item.pokeName}>
                    {item.pokeName}
                </div>
            )
        })}
    </>
)
}

export default Game