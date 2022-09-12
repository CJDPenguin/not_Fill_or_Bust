function roll() {
    let roll = Math.floor((Math.random() * 6) + 1);
    return roll;
}

function diceRoll() {
    let rolls = document.getElementsByClassName('roll');
    let kept = Array.from(document.getElementsByClassName('keep'));

    console.log(kept.length);
    console.log(rolls.length);
}