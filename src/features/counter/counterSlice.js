import {createSlice } from '@reduxjs/toolkit';
import {play, pause, change} from './time'

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
      if(!state.play){
        state[action.payload + '_value'] += state[action.payload + '_value'] < 60 && !state.play? 1:0;
        change(state.break_value,state.session_value,action.payload);
      }
      
    },
    decrement: (state,action) => {
      if(!state.play){
        state[action.payload + '_value'] -= state[action.payload + '_value'] > 1 && !state.play? 1:0;
        change(state.break_value,state.session_value,action.payload);
      }
      
    },
    start_stop: (state) => {
      state.play = !state.play;
      if(state.play){
        play( state.break_value , state.session_value);
      }else{
        pause(false);
      }
    },
    restart: (state) => {
        
      state.break_value = 5;
      state.session_value = 25;
      pause(true);
      state.play = false;
    }
    
  },
  
});

export const { increment, decrement, start_stop, restart} = counterSlice.actions;

export default counterSlice.reducer;
