function solution(a, b){         
  let answer=[];
  for (let i=0; i<a.length; i++) {
    let diff = a[i]-b[i];
    if (diff == 1 || diff == -2) answer.push('A');
    else if (diff == -1 || diff == 2) answer.push('B');
    else answer.push('D');
  }
  return answer;
}


let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));