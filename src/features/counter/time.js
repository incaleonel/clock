
var minutes;
var break_min;
var session_min;
var last_min_s = 0;
var seconds = 0;
var t;
var t_left;
var t_label;

export function play( b_minutes ,s_minutes ){
    t_left = document.getElementById('time-left');
    t_label = document.getElementById('timer-label');
    break_min = b_minutes;
    session_min = s_minutes; 
    timer();
}
function timer(){
    if(last_min_s !== session_min){
        last_min_s = session_min;
        minutes = session_min;
        seconds = 0;
    }
    if(minutes=== 0 && seconds === 0){
        minutes =t_label.textContent === 'Session' ? break_min : session_min;
        t_label.textContent = t_label.textContent === 'Session' ? 'Break' : 'Session';
    }
    t = setTimeout(temp, 1000);

}
function temp(){
       
        subtract();
        t_left.textContent = (minutes > 9 ? minutes : '0' + minutes)
                     + ':' + (seconds > 9 ? seconds : '0' + seconds);
        timer();
}
function subtract(){

        if(seconds === 0){
            seconds = 59;
            minutes--;
        }else{
            seconds--;
        }
}


export function pause(restart){
    clearTimeout(t);
    if(restart){
        minutes = 25;
        seconds = 0;
        t_left.textContent = (minutes > 9 ? minutes : '0' + minutes)
                     + ':' + (seconds > 9 ? seconds : '0' + seconds);
    }
     
}



