function nbDig(n, d) {
  let i = 0;
  let result = "";
  while (i <= n) {
    result = result + i ** 2;
    i++;
  }
  console.log(result[2]);
  let x = 0;
  let sum = 0;
  while (x < result.length) {
    if (result[x] == d) {
      sum = sum + 1;
      x++;
    } else {
      x++;
    }
  }
  return sum;
}
