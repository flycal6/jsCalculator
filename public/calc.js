$('.number').click(function(e) {
    var text = $(this).text();
    addToDisplay(text);
});

function addToDisplay(text) {
    $('#display').append(text);
}
var num1;
var num2;
var operation;
$('.operator').click(function(e) {
    var oper = $(this).text();

    switch (oper) {
        case '=':
            num2 = $('#display').text();
            controller(operation);
            break;

        case 'C':
            clearDisplay();
            operation = '';
            num1 = 0;
            num2 = 0;
            break;

        case '.':
            addToDisplay(oper);
            break;

        default:
            num1 = $('#display').text();
            operation = oper;
            clearDisplay();
    }

});

function controller(operator) {
    switch (operator) {
        case '/':
            divide(num1, num2);
            break;

        case 'X':
            multiply(num1, num2);
            break;

        case '+':
            sum(num1, num2);
            break;

        case '-':
            subtract(num1, num2);
            break;
    }
}

function divide(num1, num2) {
    clearDisplay();
    $('#display').text(num1 / num2);
}

function multiply(num1, num2) {
    clearDisplay();
    $('#display').text(num1 * num2);
}

function subtract(num1, num2) {
    clearDisplay();
    $('#display').text(num1 - num2);
}

function sum(num1, num2) {
    clearDisplay();
    $('#display').text(parseFloat(num1) + parseFloat(num2));
    operation = '';
}

function clearDisplay() {
    $('#display').text('');
}
