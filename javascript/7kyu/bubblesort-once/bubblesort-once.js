function bubblesortOnce(a) {
  let arr = Array.from(a);
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubblesortOnce;
