// Sum two
function caseOne(array, size) {
  const interval = 2;
  const newArr = [];

  for (let i = 0; i < size; i++) {
    if (i !== 0) {
      const lastItem = array[i - 1];
      newArr.push(lastItem + interval);
    } else {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

const responseCaseOne = caseOne([1, 3, 5, 7], 5);
// [1,3,5,7,9]
console.log("Primeiro caso: " + responseCaseOne);

// Times two
function caseTwo(array, size) {
  const interval = 2;
  const newArr = [];

  for (let i = 0; i < size; i++) {
    if (i !== 0) {
      const lastItem = array[i - 1];
      newArr.push(lastItem * interval);
    } else {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

const responseCaseTwo = caseTwo([2, 4, 8, 16, 32, 64], 7);
// [2,4,8,16,32,64, 128]
console.log("Segundo caso: " + responseCaseTwo);

// Sum 2 to interval in each iteration
function caseThree(array, size) {
  let interval = 1;
  const intervalJump = 2;
  const newArr = [];

  for (let i = 0; i < size; i++) {
    if (i !== 0) {
      const lastItem = array[i - 1];
      newArr.push(lastItem + interval);
      interval += intervalJump;
    } else {
      newArr.push(array[0]);
    }
  }

  return newArr;
}

const responseCaseThree = caseThree([0, 1, 4, 9, 16, 25, 36], 8);
// [0,1,4,9,16,25,36,49]
console.log("Terceiro caso: " + responseCaseThree);


// Sum 8 to interval in each iteration
function caseFour(array, size) {
  let interval = 12;
  const intervalJump = 8;
  const newArr = [];

  for (let i = 0; i < size; i++) {
    if (i !== 0) {
      const lastItem = array[i - 1];
      newArr.push(lastItem + interval);
      interval += intervalJump;
    } else {
      newArr.push(array[0])
    }
  }

  return newArr;
}

const responseCaseFour = caseFour([4, 16, 36, 64], 5);
// [4,16,36,64,100]
console.log("Quarto caso: " + responseCaseFour);

// Fibonacci algorithm
function caseFive(array, size) {
  const newArr = [];

  for (let i = 0; i < size; i++) {
    if (i > 1) {
      const lastOne = array[i - 1];
      const lastTwo = array[i - 2];
      newArr.push(lastOne + lastTwo);
    } else {
      newArr.push(array[0])
    }
  }

  return newArr;
}

const responseCaseFive = caseFive([1, 1, 2, 3, 5, 8], 7);
// [1,1,2,3,5,8,13]
console.log("Quinto caso: " + responseCaseFive);

const numbers = {
  2: { number: 2, extense: "dois"},
  12: { number: 12, extense: "doze"},
  16: { number: 16, extense: "dozesseis"},
  17: { number: 17, extense: "dezessete"},
  18: { number: 18, extense: "dezoito"},
  19: { number: 19, extense: "dezenove"},
  20: { number: 20, extense: "vinte"},
  21: { number: 21, extense: "vinte e um"},
  200: { number: 200, extense: "duzentos"},
  201: { number: 201, extense: "duzentos e um"},
}

// Choose numbers with first letter "D"
//  [2,12,16,17,18,19,200]
function caseSix(size) {
  const newArr = [];

  for (let i = 0; newArr.length !== size ; i++) {
    const numberGuess = numbers[i + 1] 

    if (!numberGuess) continue

    if (/^d/i.test(numberGuess.extense)) {
      newArr.push(numberGuess.number)
    }
  }

  return newArr;
}

const responseCaseSix = caseSix(7);
console.log("Sexto caso: " + responseCaseSix);

