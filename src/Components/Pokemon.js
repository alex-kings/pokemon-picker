/**
 * A simple container for a pokemon
 */

export default function Pokemon({pokemon}){
    return(
        <div className="pokemon">
            {pokemon.name}
        </div>
    )
}