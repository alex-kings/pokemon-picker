/**
 * A component for the user to make a selection of which pokemons to display.
 */

import '../Styles/Selector.css'

export default function Selector({setTeam}){

    const teamNumber = 6

    // Loads a pokemon from pokeapi
    async function load_pokemon(id){
        return await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()
    }

    const onSelection = async () => {
        let team = []
        for(let i = 1; i<=teamNumber; i++){
            team.push(await load_pokemon(i))
        }
        setTeam(team)
    }

    
    
    return(
        <div className="selector">
            <button onClick={onSelection}>click</button>

        </div>
    )
}