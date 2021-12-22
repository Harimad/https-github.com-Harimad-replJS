function solution(s){  
  let answer="";
  let arr = new Array(26).fill(false);

  for (let x of s) {
    let num = x.charCodeAt() - 96;
    if (arr[num] === false) {
      answer += x;
      arr[num] = true;
    } 
  } 
  return answer;
}
console.log(solution("ksekkset"));