import React, {useEffect, useState} from "react";
import {Card} from "./Card";
import {PokemonInfo} from "./PokemonInfo";
import axios from "axios";

export const Main = () => {
    const [pokemonData,setPokemonData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
    const [nextUrl,setNextUrl] = useState();
    const [prevUrl,setPrevUrl] = useState();
    const [pokemonDex,setPokemonDex] = useState()
    console.log(prevUrl)

    const pokemonFunc = async () => {
        setLoading(true)
        const res = await axios.get(url)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous)
        getPokemon(res.data.results)
        console.log(res.data)
        setLoading(false)
            //console.log(pokemonData)
    }

    const getPokemon = async (res)=> {
        res.map(async (item)=>{
            const result = await axios.get(item.url)
            setPokemonData(state=> {
                state = [...state,result.data]
                 state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
        })
    }
    useEffect(() => {
        pokemonFunc()
    },[url])
    return(
        <>
            <div className='container'>
                <div className='left-content'>
                    <Card pokemon={pokemonData} loading={loading} infoPokemon={pokemon=>setPokemonDex(pokemon)}/>
                    <div className='btn-group'>
                        { prevUrl && <button onClick={()=>{
                            setPokemonData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={()=>{
                            setPokemonData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>
                </div>
                <div className='right-content'>
                    <PokemonInfo data={pokemonDex}/>
                </div>
            </div>
        </>
    )
}