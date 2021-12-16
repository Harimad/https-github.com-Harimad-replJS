function func(numbers) {
  let newArr = [];
  for (let i = 0; i< numbers.length; i++) {
    if (numbers[i] > 3) {
      newArr.push(numbers[i]);    
    }
  }
  return newArr;
}

const numbers = [1,2,3,4,5,6,7];
console.log(func(numbers));
console.log();
console.log();
