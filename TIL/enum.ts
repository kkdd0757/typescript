enum Shoes {
  Nike = 'nike', 
  Adidas = 'Adidas'
}
let myShoes = Shoes.Nike;
console.log(myShoes);

enum Answer {
  YES = 'Y',
  NO = 'N',
}

function askQ(answer: Answer) {
  if(answer === Answer.YES) {
    console.log('정답입니다')
  }
  if(answer === Answer.NO) {
    console.log('오답입니다')
  }
}
askQ(Answer.YES);
askQ('yes');