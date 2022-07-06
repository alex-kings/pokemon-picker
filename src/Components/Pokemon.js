/**
 * A simple container for a pokemon
 */
import '../Styles/Pokemon.css'

export default function Pokemon({ pokemon }) {

    const typeBg = {
        'normal': '#A8A77A',
        'fighting': '#C22E28',
        'flying': '#A98FF3',
        'poison': '#A33EA1',
        'ground': '#E2BF65',
        'rock': '#B6A136',
        'bug': '#A6B91A',
        'ghost': '#735797',
        'steel': '#B7B7CE',
        'fire': '#EE8130',
        'water': '#6390F0',
        'grass': '#7AC74C',
        'electric': '#F7D02C',
        'psychic': '#F95587',
        'ice': '#96D9D6',
        'dragon': '#6F35FC',
        'dark': '#705746',
        'fairy': '#D685AD',
        'unknown': 'white',
        'shadow': 'violet'
    }

    // Returns the background depending on the types given
    function getBg(types) {
        if (types.length === 1) return typeBg[types[0].type.name]
        else return `linear-gradient(45deg, ${typeBg[types[0].type.name]}, ${typeBg[types[1].type.name]})`
    }

    function getRand(min, max){
        return Math.random()*(max-min) + min
    }

    // Returns a random transformation for this card
    function getRandomTransform(){
        let rot = getRand(-20, 20)
        let tx = getRand(-10,10)
        let ty = getRand(-70,70)
        let scale = getRand(0.9,1.1)
        return `translate(${tx}px,${ty}px) rotateZ(${rot}deg) scale(${scale})`
    }
    

    return (
        <div className='flip-container' style={{transform:getRandomTransform()}}>
            <div className='flip-card' style={{ background: getBg(pokemon.types) }}>
                <div className='flip-front'>
                    <img className='img' src={pokemon.sprites.other['official-artwork'].front_default} alt={''} />
                </div>
                <div className='flip-back'>
                    {pokemon.name}
                </div>
            </div>
        </div>
    )
}