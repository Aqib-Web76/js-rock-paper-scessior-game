document.getElementById('calculate-btn').addEventListener('click', function() {
    const number = parseInt(document.getElementById('number-input').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = 'Please enter a valid non-negative integer.';
    } else {
        const { factorial, steps } = calculateFactorial(number);
        document.getElementById('result').innerText = `Factorial of ${number} is ${factorial} (${steps}).`;
    }
});

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return { factorial: 1, steps: '1' };
    }

    let factorial = 1;
    let steps = [];

    for (let i = num; i > 0; i--) {
        factorial *= i;
        steps.push(i);
    }

    return { factorial, steps: steps.join(' x ') };
}
