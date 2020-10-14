window.onload = event =>{
    tictacboss();
}

function tictacboss(){
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');
    let status = document.getElementById('status');
    let restart = document.getElementsByClassName('btn')[0];

    let state = new Array(9); 
    let last = 'O';
    let indexcount = 0;

    let GameEndCheck = false;

    for (let square of squares){
        square.classList.add('square');
        square.id = indexcount ++; 
        
        square.onclick = (event)=>{

            if (state[event.target.id] || GameEndCheck){
                return;
            }

            if (last === 'X'){
                event.target.innerText = 'O';
                event.target.classList.add('O');
                state[event.target.id] = 'O';
                last = 'O';
            }
            else if (last === 'O'){
                event.target.innerText = 'X';
                event.target.classList.add('X');
                state[event.target.id] = 'X';
                last = 'X';
            }

            if ( state[0] !== undefined && ((state[0]===state[1] && state[1]===state[2]) 
                || (state[0]===state[3] && state[3]===state[6]) 
                || (state[0]===state[4] && state[4]===state[8]) )){  
                
                status.innerText = `Congratulations! ${state[0]} is the Winner!`;
                status.classList.add('you-won');
                GameEndCheck = true;
               
            }
            
            else if (state[4] !== undefined && ((state[1]===state[4] && state[4]===state[7]) 
                || (state[3]===state[4] && state[4]===state[5])
                || (state[2]===state[4] && state[4]===state[6]) )){
                
                status.innerText = `Congratulations! ${state[4]} is the Winner!`;
                status.classList.add('you-won');
                GameEndCheck = true;
               
            }

            else if( state[8] !== undefined && ((state[6]===state[7] && state[7]===state[8]) 
                || (state[2]===state[5] && state[5]===state[8]))){
                    
                status.innerText = `Congratulations! ${state[8]} is the Winner!`;
                status.classList.add('you-won');
                GameEndCheck = true;
               
            }

        };

        square.onmouseover = event =>{
            if(!GameEndCheck){
                event.target.classList.add('hover');
            }
        };

        square.onmouseleave = event =>{
            event.target.classList.remove('hover');
        };
    }

    restart.onclick = event =>{
        state = new Array(9);
        GameEndCheck = false;
        
        status.classList.remove('you-won');
        status.innerText = 'Move your mouse over a square and click to play an X or an O.';

        last = 'O';

        for (let square of squares){
            square.classList.remove('X');
            square.classList.remove('O');
            square.innerText = '';
        }

    };
}