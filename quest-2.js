function textValidator(text) {
  const matchWithLetterA = text.match(/a/ig);
  const countLetterMatchWithA = matchWithLetterA?.length || 0
 
  return `A quantidade de "A"s na string "${text}" é ${countLetterMatchWithA}`
}

const response1 = textValidator("abcda")
const response2 = textValidator("AaAbcd")
const response3 = textValidator("bbbbb")
const response4 = textValidator("Lorem ipsum dolor sit amet, officia excepteu")

console.log(response1)
console.log(response2)
console.log(response3)
console.log(response4)
