'use strict';

const div = document.createElement('div');
div.classList.add('timer');
div.textContent = '00:01:00';

document.body.append(div);

function StartTimer() {
    let seconds = 60;

    let intervalID = setInterval(() => {

        seconds > 0 ? seconds-- : clearInterval(intervalID);
        div.textContent = `00:00:${seconds.toString().padStart(2, '0')}`;

    }, 1000);
}

StartTimer();
