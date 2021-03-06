const add = (x, y) => +x + +y
const subtract = (x, y) => +x - +y
const multiply = (x, y) => +x * +y
const divide = (x, y) => +x / +y

const validateNumber = (x, y) => {
    return (isNaN(x) || isNaN(y)) ? false: true
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    validateNumber
}