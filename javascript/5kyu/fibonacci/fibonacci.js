function fibonacci(num, memo = {}) {
  if (num in memo) return memo[num];

  if (num == 0 || num == 1) return num;

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

  return memo[num];
}

module.exports = fibonacci;
