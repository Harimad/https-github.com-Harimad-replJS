function solution(s){  
  let answer;
  let students = [...s];
  let countedNames = students.reduce((prev, curr) => {
    if (curr in prev) prev[curr]++
    else prev[curr] = 1;
    return prev;
  }, {});
  console.log(countedNames); //{B: 3, A: 3, C: 5, D: 2, E: 2}

  let max = 0;
  for (let x in countedNames) {
    if (max < countedNames[x]) {
      max = countedNames[x];
      answer = x;
    }
  }
  return answer; // C
}

let str="BACBACCACCBDEDE";
console.log(solution(str));