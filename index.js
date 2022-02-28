function solution(s){  
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else if (x === ')') {
      // while(true) {
      //   let tmp = stack.pop();
      //   if (tmp === '(') break;
      // }
      while(stack.pop() !== '('){} //위의 4문장과 같음
    } else {
      stack.push(x);
    }
  }
  answer = stack.join('');
  return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));