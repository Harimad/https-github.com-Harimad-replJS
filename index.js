function solution(s){
  let answer="YES";
  let stack = [];

  for (let x of s) {
    if (x === '(') stack.push(x);
    else if (x === ')') {
      if (stack.pop('(') === undefined) return "NO"; // '(' 가 많은 경우
      stack.pop();
    }
  }
  if (stack.length !== 0) answer = "NO";
  return answer;
}
// '('가 더 많은 경우
let a="(()(()))(()";
console.log(solution(a)); //NO
let b = "()()(";
console.log(solution(b)); //NO

// ')'가 더 많은 경우
let c = "()()())";
console.log(solution(c)); //NO

// '( )' 짝이 맞는 경우
let d = "()()";
console.log(solution(d)); //YES