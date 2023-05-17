import addTwo from './add.js';
import multiplyTwo from './multiply.js';
import subtractTwo from './subtract.js';
import divideTwo from './divide.js';

const firstNumber = Number(process.argv[2]);
const operator = process.argv[3];
const secondNumber = Number(process.argv[4]);

if (operator === 'plus') {
  console.log('result: ', addTwo(firstNumber, secondNumber));
} else if (operator === 'minus') {
  console.log('result: ', subtractTwo(firstNumber, secondNumber));
} else if (operator === 'time') {
  console.log('result: ', multiplyTwo(firstNumber, secondNumber));
} else if (operator === 'divide') {
  console.log('result: ', divideTwo(firstNumber, secondNumber));
} else {
  console.log(
    ' please use this format: 2 minus 1; 2 plus 2; 3 divide 2; 5 time 5; use operators : plus, minus, time,divide'
  );
}
