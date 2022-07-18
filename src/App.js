import React from 'react';
import {LengthTime} from './features/components/LengthTime';
import { useSelector, useDispatch} from 'react-redux'
import { start_stop, restart } from './features/counter/counterSlice';
import './index.css';


function App() {
    const break_value = useSelector((state) => state.counter.break_value);
    const session_value = useSelector((state) => state.counter.session_value);
    const dispatch = useDispatch();
    
    
    
  return (
    <div className="App">
      <h1>25+5 Clock</h1>
      <section className='box-lengthtime'>
        <LengthTime type='break' 
                    title='Break Length'
                    value= {break_value}  />
        <LengthTime type='session' 
                    title ='Session Length'
                    value= {session_value}/>
      </section>
      <div className='display'>
        <span id='timer-label'>Session</span>
        <span id='time-left'>25:00</span>
        <div>
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
