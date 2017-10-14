$('.number').click(function(e) {
    var currentText = $('#display').text();
    $('#display').text(currentText + $(this).text());
});

var num1;
var num2;
var operation;
$('.operator').click(function(e) {
    var oper = $(this).text();
    if(oper !== '='){
        num1 = $('#display').text();
        clearDisplay();
    }
    switch (oper) {
        case '/':
            operation = '/';
            break;

        case 'X':
            operation = 'X';
            break;

        case '+':
            operation = '+';
            break;

        case '-':
            operation = '-';

            break;
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
        default:
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
    $('#display').text(parseInt(num1) + parseInt(num2));
    operation = '';
}

function clearDisplay() {
    $('#display').text('');
}
