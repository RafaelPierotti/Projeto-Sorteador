let listNumber = [];

function random(){
    let quantity = parseInt(document.getElementById('quantity').value);
    let from = parseInt(document.getElementById('from').value);
    let to = parseInt(document.getElementById('to').value);

    let secretNumber = generateAleatoryNumber(quantity, from, to);

    alert(secretNumber);

}

function generateAleatoryNumber(quantity, from, to){

    for (let i = 0; i < quantity; i++){
        let chosenNumber = parseInt(Math.random() * to + 1);
        listNumber.push(chosenNumber);
    }

    return listNumber;
}


