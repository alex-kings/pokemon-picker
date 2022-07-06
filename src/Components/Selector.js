/**
 * A component for the user to make a selection of which pokemons to display.
 */

import '../Styles/Selector.css'

export default function Selector({setTeam}){

    const teamNumber = 6
    const total_nb_pkm = 386 // Gen 3

    // Loads a pokemon from pokeapi
    async function load_pokemon(id){
        return await (await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)).json()
    }

    const onSelection = async () => {
        let team = []

        // Generate 6 unique random numbers
        var arr = [];
        while(arr.length < teamNumber){
            var r = Math.floor(Math.random() * total_nb_pkm) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }

        console.log(arr)
        for(let i = 0; i < arr.length; i++){
            team.push(await load_pokemon(arr[i]))
        }
        setTeam(team)
    }

    
    
    return(
        <div className="selector">
            <button className='btn' onClick={onSelection}>click</button>
        </div>
    )
}