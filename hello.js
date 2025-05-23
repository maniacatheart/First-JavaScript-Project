const calculator = (x, arg, y) => {
  switch (arg) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      return x / y;
    default:
      throw new Error('Invalid operator');
  }
}

console.log(calculator(1, '-', 2)); // -1

console.log(calculator(1, '*', 2)); // 2

console.log(calculator(1, '/', 2)); // 0.5

console.log(calculator(1, '+', 2)); // 3

