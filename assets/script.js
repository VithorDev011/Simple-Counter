let numeroatualspan = document.getElementById("currentNumber");
let currentNumber = 0;

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

document.getElementById("subtrair").addEventListener("click", function() {
    // Bloqueia o zoom do botão subtrair
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1.0, user-scalable=no");
});

document.getElementById("limpar").addEventListener("click", function() {
    // Bloqueia o zoom do botão limpar
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1.0, user-scalable=no");
});

document.getElementById("adicionar").addEventListener("click", function() {
    // Bloqueia o zoom do botão adicionar
    document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1.0, user-scalable=no");
});

function resetColor() {
    if (currentNumber == 0) {
        document.getElementById("currentNumber").style.color = "black";
    }
}

function minLimit()
{
    document.getElementById("aumentar").disabled= false
}

function maxLimit()
{
    document.getElementById("diminuir").disabled= false
}

function diminuir() {
    currentNumber = currentNumber - 1;
    numeroatualspan.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = "red";
    }

    if (currentNumber <= -10)
    {
        document.getElementById("diminuir").disabled= true
    
    }
    
    minLimit()
    resetColor()
}

function limpar() {
    currentNumber = 0
    numeroatualspan.innerHTML = currentNumber
    resetColor()
}

function aumentar() {
    currentNumber = currentNumber + 1;
    numeroatualspan.innerHTML = currentNumber;
    if (currentNumber > 0) {
        document.getElementById("currentNumber").style.color = "green";
    }

    if (currentNumber >= 10)
    {
        document.getElementById("aumentar").disabled= true
    }

    maxLimit()
    resetColor()
}