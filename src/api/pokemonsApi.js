// instalar axion yarn add axios
// importamos axios
import axios from "axios";

// permite crear una configuracion estandar que ayuda a no repetir codigo
export const pokemonApi = axios.create({

    // esta es la parte dl URL q no va a cambiar
    baseURL: 'https://pokeapi.co/api/v2/'
})