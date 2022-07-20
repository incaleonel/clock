import React from 'react';
import {LengthTime} from './features/components/LengthTime';
import {useDispatch} from 'react-redux'
import { start_stop, restart } from './features/counter/counterSlice';
import './index.css';


function App() {
    
    const dispatch = useDispatch();
    
  return (
    <div className="flex-colum">
      <h1 id='title'>25+5 Cl<span class="material-symbols-outlined logo">alarm_on</span>ck</h1>
      <div className='box-lengthtime'>
        <LengthTime type='break' 
                    title='Break'
                    value= '5'  />
        <LengthTime type='session' 
                    title ='Session'
                    value= '25'/>
      </div>
      <div className='box-d flex-colum'>
        <div className='display flex-colum'>
          <span id='timer-label'>Session</span>
          <span id='time-left'>25:00</span>
        </div>
        <div id='b_start_restart'>
              <span className="material-symbols-outlined icon re-start"
                    id="start_stop"
                    onClick={()=>dispatch(start_stop())}>play_circle</span>
              <span className="material-symbols-outlined icon re-start"
                    id="reset"
                    onClick={()=>dispatch(restart())}>replay_circle_filled</span>
        </div>
      </div>
      <audio id='beep' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
    </div>
  );
}

export default App;
