
var minutes;
var break_min;
var session_min;
var last_min_s = 0;
var last_min_b = 0;
var seconds = 0;
var t;
var state= 'Session';
var t_left;
var t_label;
var audio;

export function play( b_minutes ,s_minutes ){
    
    
    
    break_min = b_minutes;
    session_min = s_minutes; 
    if(state === 'Session'){
        if(last_min_s !== session_min){
            last_min_s = session_min;
            minutes = session_min;
            seconds = 0;
        }
    }else{
        if(last_min_b !== break_min){
            last_min_b = break_min;
            minutes = break_min;
            seconds = 0;
        }
    }
    timer();
}

export function change(b,s,type){
    t_left = document.getElementById('time-left');
    if(state === 'Session' && type === 'session'){
        t_left.textContent = (s > 9 ? s : '0' + s)+ ':00';
        last_min_s = 0;
    }else if(state === 'Break' && type === 'break'){
        t_left.textContent = (b > 9 ? b : '0' + b)+ ':00';
        last_min_b = 0;
    }
}
function timer(){
    t_label = document.getElementById('timer-label');
    audio = document.getElementById('beep');
    if(minutes=== 0 && seconds === 0){
        minutes = state === 'Session' ? break_min : session_min;
        state = state === 'Session' ? 'Break' : 'Session';
        t_label.textContent = state;
        audio.play();
        timer();
        return 
    }
    t = setTimeout(temp, 1000);

}
function temp(){
    t_left = document.getElementById('time-left');
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
    t_left = document.getElementById('time-left');
    t_label = document.getElementById('timer-label');
    clearTimeout(t);
    if(restart){
        audio = document.getElementById('beep');
        audio.pause();
        audio.currentTime = 0;
        minutes = 25;
        last_min_s = 25;
        last_min_b = 5;
        seconds = 0;
        state = 'Session'
        t_label.textContent = state;
        t_left.textContent = (minutes > 9 ? minutes : '0' + minutes)
                     + ':' + (seconds > 9 ? seconds : '0' + seconds);
    }
     
}



