function roll() {
    return Math.floor((Math.random() * 6) + 1);
}

function diceRoll() {
    let rolls = document.getElementsByClassName('roll');
    for (let el of rolls) {
        el.innerHTML = roll().toString();
    }
}