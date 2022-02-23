function solution(s){  
  let answer;
  let sH = new Map();
  for (let x of s) { // B A C B A ...
    if (sH.has(x)) { // x가 sH Map obj에 이미 존재하면
      sH.set(x, sH.get(x) + 1); //sH[x] 에 기존 숫자에 1 더함
    } else sH.set(x, 1); //없으면 1로 초기화
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    // console.log(key, val); //B 3 | A 3 | C 5 | D 2 | E 2
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  
  return answer; // C
}

let str="BACBACCACCBDEDE";
console.log(solution(str));