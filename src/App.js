import React from 'react';
import {LengthTime} from './features/components/LengthTime';
import {useDispatch} from 'react-redux'
import { start_stop, restart } from './features/counter/counterSlice';
import './index.css';


function App() {
    
    const dispatch = useDispatch();
    
  return (
    <div className="App">
      <h1 id='title'>25+5 Clock</h1>
      <section className='box-lengthtime'>
        <LengthTime type='break' 
                    title='Break'
                    value= '5'  />
        <LengthTime type='session' 
                    title ='Session'
                    value= '25'/>
      </section>
      <div className='display'>
        <span id='timer-label'>Session</span>
        <span id='time-left'>25:00</span>
        <div id='b_start_restart'>
              <span className="material-symbols-outlined"
                    id="start_stop"
                    onClick={()=>dispatch(start_stop())}>play_circle</span>
              <span className="material-symbols-outlined"
                    id="reset"
                    onClick={()=>dispatch(restart())}>replay_circle_filled</span>
        </div>
      </div>
      <audio id='beep' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
    </div>
  );
}

export default App;
