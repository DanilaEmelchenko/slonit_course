// Подготовьте простой калькулятор simpleCalculate,
// который будет выполнять нужную операцию из четырех стандартных:
// */+-. Без использования операторов ветвления (if/else).

// const selectedOperation = "multiply";
// console.log(calculate(6, 3, operations[selectedOperation])); // 18

function calculate(a, b, calculateFunction) {
  return calculateFunction(a, b);
}

const calculateMultiplication = function (a, b) {
  return a * b;
};

const calculateDivision = function (a, b) {
  return a / b;
};

const calculateAddition = function (a, b) {
  return a + b;
};

const calculateSubtraction = function (a, b) {
  return a - b;
};

const operations = {
  multiply: calculateMultiplication,
  division: calculateDivision,
  addition: calculateAddition,
  subtraction: calculateSubtraction,
};

const selectedOperation1 = "multiply";
const selectedOperation2 = "division";
const selectedOperation3 = "addition";
const selectedOperation4 = "subtraction";

console.log(calculate(6, 3, operations[selectedOperation1]));
console.log(calculate(6, 3, operations[selectedOperation2]));
console.log(calculate(6, 3, operations[selectedOperation3]));
console.log(calculate(6, 3, operations[selectedOperation4]));
