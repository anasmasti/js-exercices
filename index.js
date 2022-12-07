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
function closeToZero(numbers) {
   if(!numbers || !numbers.length) {
    return 0
   }

   let closeToZero =0
   for(let i =0; i<numbers.length; i++) {
    if(closeToZero===0) {
        closeToZero =numbers[i]
    }
    else if (numbers[i]>0 && numbers[i] <= Math.abs(closeToZero)) {
        closeToZero = numbers[i]
    }
    else if (numbers[i]< 0 && -numbers[i] < Math.abs(closeToZero)) {
        closeToZero = numbers[i]
    }
   }

   return closeToZero
};


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


// Calculate Total Price CodinGame
function calculateTotalPrice(prices, discount) {
    const maxProductPrice = prices.reduce((prev, curr) => prev > curr ? prev : curr, 0)
    const totalOtherProductPrices = prices.reduce((prev, curr) => prev + curr, 0)
    const [otherProductPrices] = prices.splice(prices.indexOf(maxProductPrice), 1)
    const total = totalOtherProductPrices - (otherProductPrices * discount / 100)

    return Math.floor(total)
}

// Return money CodinGame
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

// Tast plce CodinGame
function solve(width, height, length, mass) {
  let tassPlace = ""
  const isEncombrant = (width * height * length >= 1000000) || width >= 150 || height >= 150 || length >= 150
  const isLourd = mass >= 20

  if (isEncombrant || isLourd) {
   tassPlace= "SPECIAL"
  }
  if (isEncombrant && isLourd) {
    tassPlace= "REJECTED"
  }
  if (!isEncombrant && !isLourd) {
    tassPlace= "STANDARD"
  }
  
  return tassPlace;
}
