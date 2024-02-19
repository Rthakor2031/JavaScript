function ToDisplay(value) {
    document.getElementById('Show').value += value;
}
function Result() {
    const input = document.getElementById('Show').value;
    const result = eval(input);

    if (isNaN(result) || !isFinite(result)) {
        document.getElementById('Show').value = 'Error';
    } else {
        document.getElementById('Show').value = result;
    }
}
function clearAll() {
    document.getElementById('Show').value = '';
}
function clearLast() {
    const currentValue = document.getElementById('Show').value;
    document.getElementById('Show').value = currentValue.slice(0, -1);
}
function modu() {
    const input = document.getElementById('Show').value;
    const result = eval(input);

    if (isNaN(result) || !isFinite(result)) {
        document.getElementById('Show').value = 'Error';
    } else {
        document.getElementById('Show').value = result % 1;
    }
}
