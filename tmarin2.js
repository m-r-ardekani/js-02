const left_number = +prompt('left number')
const operator = prompt('your oprator')
const right_number = +prompt('right number')
if (operator === '+') {console.log(left_number + right_number)}
if (operator === '-') {console.log(left_number - right_number)}
if (operator === '*') {console.log(left_number * right_number)}
if (operator === '/') {console.log(left_number / right_number)}
if (isNaN(left_number) || isNaN(right_number)) {console.log("error")}
if (operator === '/' && right_number === 0) {console.log('undefined')}