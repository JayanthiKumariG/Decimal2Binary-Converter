let n = document.getElementById("input-field");
let btn1 = document.getElementById("submit");
let btn2 = document.getElementById("clear");

btn1.addEventListener("click", function () {
    let m = n.value;
    let p, res = '';
    if (isNaN(m) || m === "") {
        alert("Please enter a valid number!");
        return;
    }
    m = Number(m);
    while (m > 0) {
        p = m % 2;
        res = String(p) + res;
        m = Math.floor(m / 2);
    }
    let oldResult = document.querySelector('.result');
    if (oldResult) {
        oldResult.remove();
    }
    let result = document.createElement("p");
    result.classList.add('result');
    result.style.color = "Brown";
    result.style.paddingTop = "30px";
    result.style.fontSize = "30px";
    result.style.textAlign = "center";
    result.style.margin = "10px";
    result.textContent = `The Binary Equivalent is ${res}`;

    let m1 = document.querySelector('.main');
    m1.appendChild(result);
});

btn2.addEventListener("click", function () {
    n.value = '';  
    let oldResult = document.querySelector('.result');
    if (oldResult) {
        oldResult.remove();
    }
});
