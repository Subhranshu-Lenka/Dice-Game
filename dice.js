
const button = document.querySelector("#btn");

button.addEventListener("click", function () {
    // random num generate
    // change the dice acc to num
    // check for winner 
    // if draw try again 

    let obj = generateNum();
    changeDice(obj);
    checkWinner(obj);

});


function generateNum() {
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;

    console.log(`num1 is ${num1} and num2 is ${num2}`);
    return { num1: num1, num2: num2 }
}

function changeDice(obj) {
    const arr = ['zero -will never be used', 'one', 'two', 'three', 'four', 'five', 'six'];
    let num1 = obj.num1;
    let num2 = obj.num2;

    document.querySelector(".player1 img").setAttribute("src", `./asset/${arr[num1]}.jpg`);
    document.querySelector(".player2 img").setAttribute("src", `./asset/${arr[num2]}.jpg`);
}

function checkWinner(obj) {
    if (obj.num1 > obj.num2) {
        document.querySelector(".headings h2").innerText = "Player 1 Wins!";
    }
    else if (obj.num2 > obj.num1) {
        document.querySelector(".headings h2").innerText = "Player 2 Wins!";
    }
    else {
        document.querySelector(".headings h2").innerText = "Draw! Let's try again.";
    }

}
