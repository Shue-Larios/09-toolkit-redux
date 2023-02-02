import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
    // para ponerle el nombre
  name: 'counter',
//   el stado inicial
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 10 // incremento en 1
    },
    decrement: (state) => {
      state.counter -= 5
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload
      console.log(action.payload);
    },
  },
})

// Los creadores de acciones se generan para cada función de reducer function
// mando todo lo q ocupo en otro lado
export const { increment,decrement,incrementByAmount  } = counterSlice.actions
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// exportacion por defecto
// export default counterSlice.reducer