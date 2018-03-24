// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.


function tickets(peopleInLine){
  let bank = 0;
  let holdForChange = 0;
  let even = 0;
  peopleInLine.forEach((money) => {
    if (money === 25) {
      bank = bank + money
    }
    else {
      holdForChange = holdForChange + money
    }
  })

  console.log(bank, 'bank');
  console.log(holdForChange, 'holdForChange');
  even = bank % holdForChange;
  if (even === holdForChange/2) {
    console.log('yes');
  }
  else {
    console.log('no');
  }
}

tickets([25, 100, 100])
