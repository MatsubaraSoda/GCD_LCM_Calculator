// script.js

function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function calculate() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "请输入两个自然数。";
        return;
    }
    else if (num1 <= 0 || num2 <= 0) {
        resultDiv.textContent = "请输入两个大于 0 的自然数。";
        return;
    }
    else if (num1 > 10000 || num2 > 10000) {
        resultDiv.textContent = "请输入两个小于等于 10000 的自然数。";
        return;
    }

    const g = gcd(num1, num2);
    const l = lcm(num1, num2);

    resultDiv.innerHTML = "最大公因数 = " + g + "<br>最小公倍数 = " + l;
}

document.getElementById("num1").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculate();
    }
  });

document.getElementById("num2").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        calculate();
    }
});
