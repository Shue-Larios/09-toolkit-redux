// este archivo va a tener todas las peticiones http

import { pokemonApi } from "../../../api/pokemonsApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

// funcion para ir a traer lo pokemos
export const getPokemon = ( page = 0 ) => {


// esta funcion se va a mandar a llamar con el dispash y es asincrona
    return async ( dispash, getState ) =>{
dispash( startLoadingPokemons() );

//Todo: realizar peticion http
// const resp = await fetch(`${pokemonApi}/pokemon?limit=10&offset=${ page * 10 }`)
// const data = await resp.json();
// // console.log(data);
// en ves de hacer todo eso se arriba hacemos esto
const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)

// console.log(resp);
dispash( setPokemons( { pokemons: data.results, page: page + 1}  ) );
    }
}