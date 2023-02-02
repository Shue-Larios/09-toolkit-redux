import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "./store/slices/pokemon";





export const PokemonApp = () => {


  // para leer algo del store usamos useselector
  // en la otra parte es el nombre del principal q sale en la extencion de redux
  // // dentro del parentecis va lo q quiero regresar
  const { isLoading, pokemons, page } = useSelector(state => state.pokemon)



  console.log(pokemons);

  // para hacer el disparo de las acciones las mismas vienen exportadas por el archivo index
  const dispatch = useDispatch();


  // si yo quiero hacer algo cuando el componente es creado la primera ves y solo una ves enotncs uso el useEffect
  useEffect(() => {
    // aca coloco que accion quiero disparar
    dispatch(getPokemon());

  }, [])


  return (
    <>

      <h1>PokemonApp</h1>
      <hr />

      <span> Loading: {isLoading ? 'True' : 'False'} </span>

      <ul>
        {/* este pokemons es un arreglo x lo cual tengo q recorerlo y no puedo entrar como si fuera string o number */}
        {
          // desestructuramos para pokemons para solo traer el name
          pokemons.map(({ name, url }) => (
            <li key={name}>
              {name}
            </li>
          ))

        }
      </ul>
      <button
        // disabled={ isLoading == true }
        onClick={() => dispatch(getPokemon(page))}
      >
        Next
      </button>





    </>
  )
}
