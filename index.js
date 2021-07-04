// Get Number Of Letters
((letters) => {
  let lettersList = Array.from(letters);
  let sortedLettersList = lettersList.sort();
  let result = new Set();
  let counter = 0;
  for (let i = 0; i < sortedLettersList.length; i++) {
    counter = 0;
    for (let j = 0; j < sortedLettersList.length; j++)
      if (sortedLettersList[i] === sortedLettersList[j])
         counter++;
         sortedLettersList.splice(i, 0);

    result.add(counter + sortedLettersList[i]);
  }
  let finalResult = Array.from(result);
  console.log(finalResult);
})("aaaajjjabgggb");
