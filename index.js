function solution(s){
  let answer= '';
  for (let x of s) {
    if (x !== 'A') answer += x;
    else answer += '#';
  }
  return answer;
}

let str="BANANA";
console.log(solution(str));