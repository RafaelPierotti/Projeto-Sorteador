let listNumber = [];

function random(){
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    let secretNumber = generateAleatoryNumber(quantity, from, to);

    clearField();

    displyText();
    
}

function generateAleatoryNumber(quantity, from, to){

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

function clearField(){
    let inputs = document.querySelectorAll('input');

    inputs.forEach(function(input){
        input.value = '';
    })
}

function displyText(){
    let text = document.getElementById('result');

    let numberText = listNumber.length == 1 ? 'Número sorteado' : 'Números sorteados';
    text.innerHTML = `<label class="texto__paragrafo">${numberText}: ${listNumber}</label>`;
    
    return text.innerHTML;
}