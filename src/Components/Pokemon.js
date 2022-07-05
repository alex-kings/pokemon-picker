/**
 * A simple container for a pokemon
 */
import '../Styles/Pokemon.css'

export default function Pokemon({pokemon}){

    const typeBg = {
        'normal':'gray',
        'fighting':'brown',
        'flying':'lightblue',
        'poison':'purple',
        'ground':'lightbrown',
        'rock':'brown',
        'bug':'lightgreen',
        'ghost':'lightpurple',
        'steel':'gray',
        'fire':'red',
        'water':'blue',
        'grass':'green',
        'electric':'yellow',
        'psychic':'pink',
        'ice':'cream',
        'dragon':'darkblue',
        'dark':'black',
        'fairy':'pink',
        'unknown':'white',
        'shadow':'violet'
    }
    function getBg(types){
        console.log(types.length)
        if(types.length === 1) return typeBg[types[0].type.name]
        else return `linear-gradient(45deg, ${typeBg[types[0].type.name]}, ${typeBg[types[1].type.name]})`
    }

    

    return(
        <div className="pokemon-card" style={{background:getBg(pokemon.types)}}>
            
            <div className='img-container'>
                <img width={150} src={pokemon.sprites.other['official-artwork'].front_default} alt={''}/>
            </div>
            <p className='title'>{pokemon.name}</p>
        </div>
    )
}