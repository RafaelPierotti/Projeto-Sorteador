let listNumber = [];

function random(){ // função ao apertar o botão de sortear
    let quantity = parseInt(document.getElementById('quantity').value); // coleta os dados colcoados pelo usuário
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    let secretNumber = generateAleatoryNumber(quantity, from, to); 

    displayText(from, to);
    
    changeButtonStatus();
}

function generateAleatoryNumber(quantity, from, to){ //função para gerar número aleatório

    listNumber = [];

    for (let i = 0; i < quantity; i++){
        let chosenNumber = parseInt(Math.random() * to + 1);

        if (listNumber.includes(chosenNumber)){
            return generateAleatoryNumber(quantity, from, to);
        } else {
            listNumber.push(chosenNumber);
        }
    }
    return listNumber;
}

function clearField(){ // função para limpar os campos
    let inputs = document.querySelectorAll('input');

    inputs.forEach(function(input){
        input.value = '';
    })

    document.getElementById('result').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
}

function displayText(from, to){ // função para exibir os números secretos
    let text = document.getElementById('result');

    if (from > to){
        text.innerHTML = '<label class="texto__paragrafo">Número inválido</label>';
    } else {
        let numberText = listNumber.length == 1 ? 'Número sorteado' : 'Números sorteados';
        text.innerHTML = `<label class="texto__paragrafo">${numberText}: ${listNumber}</label>`;
    }
    return text.innerHTML;
}

function changeButtonStatus(){ // função para alterar o status do botão reiniciar
    let button = document.getElementById('restart-button');

    if (button.classList.contains('container__botao-desabilitado')){
        button.classList.remove('container__botao-desabilitado');
        button.classList.add('container__botao');
    } else {
        button.classList.remove('container__botao');
        button.classList.add('container__botao-desabilitado')
    }
}

function restart (){ // função do botão de restart
    clearField();
    changeButtonStatus();
}