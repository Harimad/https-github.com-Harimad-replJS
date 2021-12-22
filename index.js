function solution(s){  
  let answer="", maxLen = s[0].length;
  for (let x of s) {
    if (x.length > maxLen) {
      maxLen = x.length;
      answer = x;
    }
  }
  
  return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));