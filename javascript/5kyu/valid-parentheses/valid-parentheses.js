const validParentheses = (str) => {
  const bracesPattern = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const verify = str.split("").reduce((accum, curr) => {
    if (curr === bracesPattern[accum[accum.length - 1]]) {
      accum.pop();
    } else {
      accum.push(curr);
    }
    return accum;
  }, []).length;

  return !verify;
};

module.exports = validParentheses;
