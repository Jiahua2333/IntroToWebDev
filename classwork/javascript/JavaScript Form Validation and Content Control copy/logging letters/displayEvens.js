var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {
  numberFun.className = "needs-validation";
  console.log(numberFun.checkValidity);

  if (!numberFun.checkValidity()) {
    numberFun.className = "was-validated";
    return false;
  }

  var operand1 = parseInt(num1.value, 10);
  var operand2 = parseInt(num2.value, 10);
  var operand3 = parseInt(num3.value, 10);
  console.log(operand1, operand2);
  if (operand1 >= operand2) {
    alert("Start number should be less than end number!");
    return false;
  }

  var result =
    "Here are the even numbers between " +
    operand1 +
    " and " +
    operand2 +
    " by " +
    operand3 +
    "'s:";

  for (var i = operand1; i <= operand2; i += operand3) {
    if (i % 2 === 0) result += "<div>" + i + "</div>";
  }
  results.innerHTML = result;
  submitButton.innerText = "Recalculate";

  return false;
}
