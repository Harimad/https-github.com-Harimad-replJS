function solution(arr){
  let answer = arr;
  let sum = [...arr].reduce((prev, curr) => prev + curr) - 100;

  for (let i = 0; i < answer.length-1; i++) {
    for (let j = i+1; j < answer.length; j++) {
      if (answer[i] + answer[j] === sum) {
          answer.splice(j, 1);
          answer.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));