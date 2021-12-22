// function solution(s){  
//   let answer="";
//   let arr = new Array(26).fill(false);

//   for (let x of s) {
//     let num = x.charCodeAt() - 96;
//     if (arr[num] === false) {
//       answer += x;
//       arr[num] = true;
//     } 
//   } 
//   return answer;
// }
// console.log(solution("ksekkset"));

function solution(s){
  let answer = [];

  for (let x of s) {
    if (answer.indexOf(x) === -1) {
      answer.push(x);
    }
  }

  return answer;
}

let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
