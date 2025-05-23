const calculator = (x, arg, y = 0) => {
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

console.log(calculator(1, '+', 2)); // 3

