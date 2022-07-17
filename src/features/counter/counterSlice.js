import {createSlice } from '@reduxjs/toolkit';
import {play, pause} from './time'

const initialState = {
  break_value: 5,
  session_value:25,
  play:false,
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state,action) => {
      
      state[action.payload + '_value'] += state[action.payload + '_value'] < 60 && !state.play? 1:0;
      
    },
    decrement: (state,action) => {

      state[action.payload + '_value'] -= state[action.payload + '_value'] > 1 && !state.play? 1:0;
      
    },
    start_stop: (state) => {
      state.play = !state.play;
      if(state.play){
        play( state.break_value , state.session_value );
      }else{
        pause();
      }
    },
    restart: (state) => {
      state.break_value = 5;
      state.session_value = 25;
    }
    
  },
  
});

export const { increment, decrement, start_stop, restart} = counterSlice.actions;

export default counterSlice.reducer;
