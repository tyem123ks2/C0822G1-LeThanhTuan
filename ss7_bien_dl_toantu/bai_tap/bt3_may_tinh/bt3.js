function add() {
    let num1 = document.getElementById("operand1").value;
    let num2 = document.getElementById("operand2").value;
    let result1 = Number(num1) + Number(num2);
    document.getElementById("operator").innerHTML = result1;
}
function sub() {
    let num1 = document.getElementById("operand1").value;
    let num2 = document.getElementById("operand2").value;
    let result2 = Number(num1) - Number(num2);
    document.getElementById("operator").innerHTML = result2;
}
function mul() {
    let num1 = document.getElementById("operand1").value;
    let num2 = document.getElementById("operand2").value;
    let result3 = Number(num1) * Number(num2);
    document.getElementById("operator").innerHTML = result3;
}
function div() {
    let num1 = document.getElementById("operand1").value;
    let num2 = document.getElementById("operand2").value;
    let result4 = Number(num1) / Number(num2);
    document.getElementById("operator").innerHTML = result4;
}