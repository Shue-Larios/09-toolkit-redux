import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'


export const store = configureStore({
  reducer: {

    // para utilizar nuestro Slice
    // es el nombre de como lo voy a identificar
counter: counterSlice.reducer,
pokemon: pokemonSlice.reducer
  },

})