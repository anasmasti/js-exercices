// Get Number Of Letters
((letters) => {
  let lettersList = Array.from(letters);
  let sortedLettersList = lettersList.sort();
  let result = new Set();
  let counter = 0;
  for (let i = 0; i < sortedLettersList.length; i++) {
    counter = 0;
    for (let j = 0; j < sortedLettersList.length; j++)
      if (sortedLettersList[i] === sortedLettersList[j]) counter++;

    result.add(counter + sortedLettersList[i]);
  }
  let finalResult = Array.from(result);
  finalResult.forEach((some_of_letters) => {
    console.log(some_of_letters);
  });
})("aaaajjjabgggb");


// Triangle
((rows) => {
  for (let i = 0; i < rows; i++) {
    for (let x = 0; x < rows - i; x++)
      console.log(" ");

    for (let j = 0; j < i; j++)
      console.log("* ");

    console.log(" ");
  }
})(5);


// Close to zero
((ts) => {
  let tsList = []
  let sortedList = []

  if (ts.length === 0 || !(ts.length >= 0 && ts.length <= 10000)) { console.log(0); }

  if (ts.length !== 0) {
    ts.map(number => {
      if (number < 0)
        number = number * -1
      tsList.push(number)
    })
    sortedList = tsList.sort((a, b) => {
      return a - b;
    })

    console.log(sortedList[0]);
  }
})([0.5, 1, 56, 6, 4, 5, 88, 7, -5, -6, -2, -9, 41]);


// Concatinate tables
((listX, listY) => {
  let result = listX.map((x, index) => { return x = [x, listY[index]] })
  console.log(result);
})([1, 6, 5, 2], [4, 5, 3, 0]);


// Line break if the words finish
((words) => {
  let regex = /\s/g;
  let result = words.replace(regex, '\n');
  console.log(result);
})('Hello im anas !')



// CalculateTotalPrice
function calculateTotalPrice(prices, discount) {
    const maxProductPrice = prices.reduce((prev, curr) => prev > curr ? prev : curr, 0)
    const totalOtherProductPrices = prices.reduce((prev, curr) => prev + curr, 0)
    const [otherProductPrices] = prices.splice(prices.indexOf(maxProductPrice), 1)
    const total = totalOtherProductPrices - (otherProductPrices * discount / 100)

    return Math.floor(total)
}

// Return money
function change(cash) {
       if (cash === 1 || cash === 3) {
        return null
    }

    const b10 = cash / 10;
    const r10 = cash % 10;

    const b5 = r10 / 5;
    const r5 = r10 % 5;

    const p2 = r5 / 2;
    const r2 = r5 % 2;

    return {
        two: Math.floor(p2),
        five: Math.floor(b5),
        ten: Math.floor(b10)
    };
}
