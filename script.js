let string = "";
const screen = document.getElementById('screen');

const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
        
        if (buttonText === '=') {
            const result = evaluateExpression(string);
            screen.innerText = result;ss
            string = result.toString();
        } else if (buttonText === 'AC') {
            string = '';
            screen.innerText = '';
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            screen.innerText = string;
        } else if (buttonText === '%') {
            string += '/100';
            screen.innerText = evaluateExpression(string);
        } else {
            string += buttonText;
            screen.innerText = string;
        }
    });
});

function evaluateExpression(string) {
    try {
        return eval(string); //
    } catch (error) {
        return 'Error'; // Handle any evaluation errors gracefully
    }
}
