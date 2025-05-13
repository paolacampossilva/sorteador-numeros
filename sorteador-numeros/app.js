function randomize() {
    let quantity = parseInt(document.getElementById("quantity").value);
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);
    
    if (from >= to) {
        alert("Usuário, reveja se as informações inseridas estão corretas, visto que o campo 'Do número' possui um valor maior que o campo 'Até o número'.");
        return;
    }
    
    if (quantity > (to - from + 1)) {
        alert("Usuário, reveja se as informações inseridas estão corretas, visto que a quantidade de números solicitada é maior que o intervalo disponibilizado.");
        return;
    }

    let chosenNumbers = [];
    let number;

    for (let i = 0; i < quantity; i++) {
        number = getRandomNumber(from, to);

        while (chosenNumbers.includes(number)) {
            number = getRandomNumber(from, to);
            alert("Tentando obter um número inédito.");
        } 
        
        chosenNumbers.push(number);
    }
    
    let results = document.getElementById("results");
    results.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${chosenNumbers}</label>`;

    changeButtonStatus();
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeButtonStatus() {
    let button = document.getElementById("btn-restart");
    if (button.classList.contains("container__botao-desabilitado")) {
        button.classList.remove("container__botao-desabilitado");
        button.classList.add("container__botao");
    } else {
        button.classList.remove("container__botao");
        button.classList.add("container__botao-desabilitado");
    }
}

function restart() {
    document.getElementById("quantity").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("results").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    changeButtonStatus();
}
