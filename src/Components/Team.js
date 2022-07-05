/**
 * A container for a team of pokemons
 */

import Pokemon from "./Pokemon"
import '../Styles/Team.css'

export default function Team({team}){
    return(
        <div className="team-container">
            {team.map((pokemon, index)=>(
                <div key={index}>
                    <Pokemon pokemon={pokemon}/>
                </div>
            ))}
        </div>
    )
}