
function solution(n, arr){
  let answer=0, max=Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let sum = 0, temp = arr[i];
    while(temp) {
      sum += temp%10;
      temp = parseInt(temp/10);
    }
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      if (arr[i] > answer) answer = arr[i];
    }
  }
  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
