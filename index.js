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
    for (let x = 0; x < rows - i; x++) {
      console.log(" ");
    }
    for (let j = 0; j < i; j++) {
      console.log("* ");
    }
    console.log(" ");
  }
})(5);
