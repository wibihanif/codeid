function numberGenerator(number) {
  if (number <= 0) {
    return "invalid value input";
  }

  const numberString = number.toString();
  const numberSplit = numberString.split("");

  let originalNumber = Number(number);

  for (let n of numberSplit) {
    originalNumber += Number(n);
  }

  return originalNumber;
}

console.log(numberGenerator(-1));
