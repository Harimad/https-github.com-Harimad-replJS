function solution(s){  
  let answer, num = parseInt(s.length / 2);

  if (s.length % 2 === 1) {
    answer = s[num];
  } else {
    answer = s[num-1] + s[num];
  }
  return answer;
}
// console.log(solution("study"));
console.log(solution('study!'));