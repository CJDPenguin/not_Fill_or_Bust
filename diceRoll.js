function diceRoll() {
    let roll = Math.floor((Math.random() * 6) + 1);
    console.log(roll);
    document.querySelector('#rollValue').innerHTML = roll.toString();
}