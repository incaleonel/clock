import React from 'react';
import {LengthTime} from './features/components/LengthTime';
import { useSelector, useDispatch} from 'react-redux'
import { start_stop, restart } from './features/counter/counterSlice';
import './index.css';


function App() {
    const break_value = useSelector((state) => state.counter.break_value);
    const session_value = useSelector((state) => state.counter.session_value);
    const label = useSelector((state)=>state.counter.display_label);
    const counter = useSelector((state)=>state.counter.display_counter);
    const dispatch = useDispatch();
    
  return (
    <div className="App">
      <h1>25+5 Clock</h1>
      <section>
        <LengthTime type='break' 
                    title='Break Length'
                    value= {break_value}  />
        <LengthTime type='session' 
                    title ='Session Length'
                    value= {session_value}/>
      </section>
      <div>
        <span id='timer-label'>{label}</span>
        <span id='time-left'>{counter[0]+':'+counter[1]}</span>
        <span class="material-symbols-outlined"
              id="start_stop"
              onClick={()=>dispatch(start_stop())}>play_circle</span>
        <span class="material-symbols-outlined"
              id="reset"
              onClick={()=>dispatch(restart())}>replay_circle_filled</span>
      </div>
    </div>
  );
}

export default App;
