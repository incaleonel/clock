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
            <span className="material-symbols-outlined" 
                  id={props.type + '-decrement'} 
                  onClick={()=>dispatch(decrement(props.title))}>arrow_circle_down</span>

            <div id={props.type+'-length'}>{props.value}</div>

            <span className="material-symbols-outlined" 
                  id={props.type + '-increment'} 
                  onClick={()=>dispatch(increment(props.title))}>arrow_circle_up</span>
        </div>
    </div>
        
    );
}