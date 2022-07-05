/**
 * A component for the user to make a selection of which pokemons to display.
 */

import { useState } from 'react'
import '../Styles/Selector.css'

export default function Selector({setTeam}){

    const [number, setNumber] = useState(0)

    // Loads a pokemon from pokeapi
    async function load_pokemon(id){
        return await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()
    }

    const onSelection = async () => {
        let team = []
        for(let i = 1; i<=number; i++){
            team.push(await load_pokemon(i))
        }
        setTeam(team)
    }
    
    return(
        <div className="selector">
            <input onChange={e => {setNumber(parseInt(e.target.value))}}/>
            <button onClick={onSelection}>click</button>
        </div>
    )
}