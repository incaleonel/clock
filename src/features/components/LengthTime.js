import { useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'
import './LengthTime.css'

export function LengthTime(props){
    const dispatch = useDispatch();

    return(
        
    <div className='f-box'>
        <h2 id={props.type+'-label'}
            className='title'>{props.title + ' Length'}</h2>
        <div className='handler-box'>
            <button className="material-symbols-outlined icon down" 
                  id={props.type + '-decrement'} 
                  onClick={()=>dispatch(decrement(props.title))}>arrow_circle_down</button>

            <div id={props.type+'-length'}>{props.value}</div>

            <button className="material-symbols-outlined icon up" 
                  id={props.type + '-increment'} 
                  onClick={()=>dispatch(increment(props.title))}>arrow_circle_up</button>
        </div>
    </div>
        
    );
}