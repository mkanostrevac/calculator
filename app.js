var ERROR = "syntax error";
var ZERO = "0";

function lineCalculation(expression) {

  var result;

  try {
    result = eval(expression);
  } catch (e) {
    if (e instanceof SyntaxError) {
      result = ERROR;
    }
  }

  return result;
}

var listTdTags = document.getElementsByTagName("td");

for (var i = 0; i < listTdTags.length; i++) {

  var tdTag = listTdTags[i];

  if (!tdTag.id) {
    tdTag.addEventListener("click", function(e) {
      var el = event.target || event.srcElement;

      var calculateLine = document.getElementById("calculate-line");

      if (el.innerText === "AC") {
        calculateLine.innerText = "0";
      } else if (el.innerText === "=") {
        calculateLine.innerText = lineCalculation(calculateLine.innerText);
      } else {
        if (calculateLine.innerText === ZERO || calculateLine.innerText === ERROR) {
          calculateLine.innerText = el.innerText;
        } else {
          calculateLine.innerText += el.innerText;
        }
      }
    });
  }
}