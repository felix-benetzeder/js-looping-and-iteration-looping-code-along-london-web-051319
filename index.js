function writeCards(person, event) {
  let cards = []
  for (let i = 0; i < person.length; i++) {
    cards.push(`Thank you, ${person[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

function countdown(number){
  while (number >= 0){
    console.log(number);
    number--;
  }
}
