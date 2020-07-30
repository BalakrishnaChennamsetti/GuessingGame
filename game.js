const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessNumber = Math.round(Math.random() * 100);
var lives = 10;
$submitButton.onclick = () => {
    let userinput = document.getElementById("number-id").value;
    lives--;
    if (userinput == guessNumber) {
        location.href = "./win.html";
    }
    else if (lives == 0) {
        location.href = "./lose.html";
    }
    else if (userinput > guessNumber) {
        var msg = `Oops ! Your guess in too high .you have ${lives} reamining.`;

    }
    else if (userinput < guessNumber) {
        var msg = `Oops ! Your guess in too low.you have ${lives} reamining.`;
    }
    $message.style.display = "inherit";
    $message.innerHTML = msg;
    $lives.innerHTML = lives;
}