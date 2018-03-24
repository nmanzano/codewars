// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.


function tickets(peopleInLine){
     let bill25  = 0,
      bill50  = 0,
      bill100 = 0

  return peopleInLine.every(person => {
    switch (person) {
      case 25:
        bill25 += 1
        return true
      case 50:
        bill50 += 1
        bill25 -= 1
        return bill25 >= 0
      case 100:
        bill100 += 1
        if (bill50 >= 1) {
          bill50 -= 1
          bill25 -= 1
        } else bill25 -= 3
        return bill50 >= 0 && bill25 >= 0
    }
  }) ? 'YES' : 'NO'
}

// tickets([25,25,25,100,25,25,25,100,25,25,50,100,25,50,25,100])
// tickets([25,25,50,100,25,25,50,100,25,25,50,100,25,25,25,100,25,25,50,100,25,50,50,25])
// tickets([25,25,50,100,25,25,50,100,25,25,50,100,25,50,25,100,25,25,25,100,100,100])
// tickets([25,25,25,100,25,25,50,100,25,50,25,100,25,25,50,100,25,50,50,50])
// tickets([25,25,25,100,25,50,25,100,25,25,25,100,50,25])
tickets([25,25,50,50])
tickets([25, 100])
// tickets([25, 50])
