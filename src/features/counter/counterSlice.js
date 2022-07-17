import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  break_value: 5,
  session_value:25,
  display_counter: [25,'00'],
  display_label:'Session'
  
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state,action) => {
      
      state[action.payload + '_value'] += state[action.payload + '_value'] < 60 ? 1:0;
      state.display_counter=[state.session_value,'00'];
      
    },
    decrement: (state,action) => {

      state[action.payload + '_value'] -= state[action.payload + '_value'] > 1 ? 1:0;
      state.display_counter=[state.session_value,'00'];
    },
    start_stop: (state) => {

    },
    restart: (state) => {
      state.break_value= 5;
      state.session_value=25;
      state.display_counter=[25,'00'];
      state.display_label='Session';
    }
    
  },
  
});

export const { increment, decrement, start_stop, restart} = counterSlice.actions;

export default counterSlice.reducer;
