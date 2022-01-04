function solution(arr){
  let answer=[];
  for (let x of arr) {
    x = parseInt(x.toString().split('').reverse().join(''));
    if (isPrime(x)) answer.push(x);
  }
  return answer;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i*i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
