function fibonacciValidator(number) {
  const fibonacciList = [0, 1]

  let currentIterator = 2;
  let isValid = false;
  const fibonacciRecurvieFn = () => {
    const lastOne = fibonacciList[currentIterator - 1]
    const lastTwo = fibonacciList[currentIterator - 2]
    const nextValue = lastOne + lastTwo

    if (nextValue === number) {
      isValid = true;
      return
    } else if (nextValue > number) {
      return
    } 

    currentIterator++
    fibonacciList.push(nextValue)
    fibonacciRecurvieFn()
  }

  fibonacciRecurvieFn()
  return `Esse número é ${isValid ? 'valido' : 'inválido'}`
}

const responseInvalid1 = fibonacciValidator(4)
console.log(responseInvalid1)

const responseInvalid2 = fibonacciValidator(6)
console.log(responseInvalid2)

const responseValid1 = fibonacciValidator(8)
console.log(responseValid1)

const responseValid2 = fibonacciValidator(13)
console.log(responseValid2)
