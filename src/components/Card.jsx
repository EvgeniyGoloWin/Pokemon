import React from "react";

export const Card = ({pokemon,loading,infoPokemon}) => {
    console.log(pokemon)
    return (
        <>
            {
                loading ? <h3>Loading...</h3>:
                    pokemon?.map((item)=> {
                        return (
                            <>
                                <div className='card' key={item.id} onClick={()=>infoPokemon(item)}>
                                    <h3>{item.id}</h3>
                                    <img src={item.sprites.front_default} alt='img'/>
                                    <h3>{item.name }</h3>
                                </div>
                            </>
                        )
                    })
            }
        </>
    )
}