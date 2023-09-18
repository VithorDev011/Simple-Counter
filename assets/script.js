let numeroatualspan = document.getElementById("currentNumber");
let currentNumber = 0;

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