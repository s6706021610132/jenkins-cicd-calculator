function add(a, b) {
    return a + b;
}

function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = add(num1, num2);

    document.getElementById("result").textContent =
        "Result: " + result;
}

if (typeof module !== 'undefined') {
    module.exports = { add };
}