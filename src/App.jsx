 
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,incrementByAmount } from './store/slices/counter';

function App() {
 

  const ValorAction = 2;

  // para leer algo del store usamos useselector
// dentro del parentecis va lo q quiero regresar
 const { counter } = useSelector ( state => state.counter )

// para hacer el disparo de las acciones las mismas vienen exportadas por el archivo index
const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        {/* acordar q el incremente hay q importarlo los parentecis sirven como decirle ejecutar */}
        <button onClick={() => dispatch(increment() ) }>
          Incremente
        </button>
        <button onClick={() => dispatch(decrement() ) }>
          Decrement
        </button>
        {/* el (2) es el palyload de la accion */}
        <button onClick={() => dispatch(incrementByAmount(ValorAction) ) }>
          Incremente by 2
        </button>
      </div>
    </div>
  )
}

export default App
