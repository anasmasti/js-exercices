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

// Rendu de monnaie (CodinGame)
function change(cash) {
  if (cash <= 3) {
      return null
  }

  let r10 = 0;
  let r5 = 0;
  let r2 = 0;

  while (cash !== 0) {
      if (cash % 2 === 0) {
          if (cash >= 10) {
              r10 = Math.floor(cash / 10)
              cash = cash - (r10 * 10)
          } else {
              r2 = cash / 2
              cash = cash - (r2 * 2)
          }
      } else {
          cash = cash - 5;
          r5++
      }
  }

  return {
      ten: r10,
      five: r5,
      two: r2
  };
}

// Classification de paquets robotisée (CodinGame)
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

// Approximation de π (CodinGame)
function approx(pts) {
  let pointsOutput = [];

  for (let i = 0; i < pts.length; i++) {
    let point = pts[i];
    let x = point[0];
    let y = point[1];

    if (Math.pow(x, 2) + Math.pow(y, 2) <= 1) {
      pointsOutput.push(point);
    }
  }

  let appoxPi = 4 * (pointsOutput.length / pts.length);

  return appoxPi;
}
