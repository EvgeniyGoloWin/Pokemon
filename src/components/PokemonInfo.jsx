import React from "react";

export const PokemonInfo = ({data}) => {
    return(
        <>
            {
                (data && Object.keys(data).length > 0) ? (
                    <>
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}/>
                        <div className='abilities'>
                            {
                                data?.abilities.map(pokemon => (<div className='group'><h2>{pokemon.ability.name}</h2></div>))
                            }
                        </div>
                        <div className='base-stat'>
                            {
                                data.stats.map(pokemon => <h3>{pokemon.stat.name}:{pokemon.base_stat}</h3>)
                                }
                        </div>
                    </>
                ) : <h2>Not found data</h2>
            }
        </>
    )
}