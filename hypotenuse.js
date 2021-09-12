const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquare(a ,b){
    const sumOfSquares = Number(a*a)+Number(b*b);
    //console.log(sumOfSquares);
    return sumOfSquares;
}
function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquare(sides[0].value, sides[1].value);
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    outputEl.innerText ="Hypotenuse: "+ lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);