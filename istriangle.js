const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    var sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
    return sumOfAngles;
}
function isTriangle(){
    if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") return;
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        //console.log("Yay, the angles form a triangle");
    outputEl.innerText ="Yay, the angles form a triangle"}
    else{
        //console.log("Oops!... The angles don't form a triangle");
        outputEl.innerText ="Oops!... The angles don't form a triangle"};
    }

isTriangleBtn.addEventListener('click', isTriangle)