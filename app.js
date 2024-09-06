let listNumber = [];

function random(){
    let quantity = document.getElementById('quantity').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    generateAleatoryNumber();

}

function generateAleatoryNumber(){
    let chosenNumber = parseInt(Math.random() * to + 1);

    for (let i = 0; i < quantity; i++){
        listNumber.push(chosenNumber);
    }
}
