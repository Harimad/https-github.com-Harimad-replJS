function solution(str){
  let answer=str.match(/\d/g).join('');
  return parseInt(answer);
}

let str="g0en2T0s8eSoft";
console.log(solution(str));