import { useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'

export function LengthTime(props){
    const dispatch = useDispatch();

    return(
        
    <div>
        <h2 id={props.type+'-label'}>{props.title}</h2>
        <div>
            <span class="material-symbols-outlined" 
                  id={props.type + '-decrement'} 
                  onClick={()=>dispatch(decrement(props.type))}>arrow_circle_down</span>

            <span id={props.type+'-length'}>{props.value}</span>

            <span class="material-symbols-outlined" 
                  id={props.type + '-increment'} 
                  onClick={()=>dispatch(increment(props.type))}>arrow_circle_up</span>
        </div>
    </div>
        
    );
}