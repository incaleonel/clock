
export function play( b_minutes ,s_minutes ){

    const t_left = document.getElementById('time-left');
    
        setTimeout(()=>{ 
            t_left.innerHTML = minutes + ':' + seconds

        },1000)
        
   
        
}

export function pause(){

}