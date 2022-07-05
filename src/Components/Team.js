/**
 * A container for a team of pokemons
 */

 import Pokemon from "./Pokemon"

export default function Team({team}){
    return(
        <div>
            {team.map((pokemon, index)=>(
                <div key={index}>
                    <Pokemon pokemon={pokemon}/>
                </div>
            ))}
        </div>
    )
}