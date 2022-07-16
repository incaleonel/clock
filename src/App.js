import React from 'react';
import {LengthTime} from './features/components/LengthTime';
import { useSelector} from 'react-redux'

import './index.css';
function App() {
    const break_value = useSelector((state) => state.counter.break_value);
    const session_value = useSelector((state) => state.counter.session_value);
    
  return (
    <div className="App">
      <h1>25+5 Clock</h1>
      <section>
        <LengthTime type='break' 
                    title='Break Length'
                    value= {break_value}/>
        <LengthTime type='session' 
                    title ='Session Length'
                    value= {session_value}/>
      </section>
      <div>
        <span id='time-label'>Session</span>
        <span id='time-left'></span>
        <span class="material-symbols-outlined"
              id="start_stop">play_circle</span>
        <span class="material-symbols-outlined"
              id="reset">replay_circle_filled</span>
      </div>
    </div>
  );
}

export default App;
