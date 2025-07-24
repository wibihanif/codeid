function numberGenerator(number) {
  if (number <= 0) {
    return "invalid value input";
  }

  const selfNumbers = [1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97];
  const selfNumbersString = selfNumbers.map((val) => val.toString());

  const numberString = number.toString();
  const numberSplit = numberString.split("");
  numberSplit.push(number.toString());

  const toBeSum = [];

  for (let x of numberSplit) {
    for (let n of selfNumbersString) {
      if (n === x) {
        console.log("true");
        toBeSum.push(Number(n));
      } else {
        console.log("false");
      }
    }
  }

  //   console.log(numberSplit);
  //   console.log(toBeSum);

  let sumResult = 0;
  for (let y of toBeSum) {
    sumResult += y;
  }

  return sumResult;
}

function selfNumberGenerator(startNumber, endNumber) {
  const numbers = [];
  for (let i = startNumber; i <= endNumber; i++) {
    numbers.push(i);
  }

  const numbersString = numbers.map((val) => val.toString());

  const collectedNumbers = [];

  for (let n of numbersString) {
    const originalNum = n.toString();
    collectedNumbers.push({
      originalNumber: originalNum,
      splitNumbers: n.split(""),
    });
  }

  const collectedNumberGenerated = [];
  for (let x of collectedNumbers) {
    console.log(x.splitNumbers);
    const 
    for
  }
}

selfNumberGenerator(1, 5000);

// console.log(numberGenerator(100));
