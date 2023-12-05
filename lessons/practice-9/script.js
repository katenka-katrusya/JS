'use strict';

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.createElement('button');
//     let count = 0;
//
//     function increment() {
//         button.textContent = count++;
//     }
//
//     increment();
//     button.addEventListener('click', increment);
//     document.body.append(button);
// });

(() => {
    const WAIT_TIME_MS = 300;

    const textInput = document.createElement('input');
    const display = document.createElement('div');

    let timeout;

    textInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            display.textContent = textInput.value;
        }, WAIT_TIME_MS);
    });

    document.addEventListener('DOMContentLoaded', () => {
        document.body.append(textInput);
        document.body.append(display);
    });
})();