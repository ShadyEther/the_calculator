function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const expression = document.getElementById("result").value;
  const result = eval(expression);
  document.getElementById("result").value = result;
}

function toggleSign() {
  const currentValue = document.getElementById("result").value;
  if (currentValue !== "") {
    if (currentValue.charAt(0) === "-") {
      document.getElementById("result").value = currentValue.substr(1);
    } else {
      document.getElementById("result").value = "-" + currentValue;
    }
  }
}

function calculatePercentage() {
  const expression = document.getElementById("result").value;
  const result = eval(expression) / 100;
  document.getElementById("result").value = result;
}