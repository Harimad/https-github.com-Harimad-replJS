function solution(s){
  let answer="YES", copy = s.split(/\W\s/).map((val) => val.toUpperCase());
  for (let i = 0; i < parseInt(copy.length/2); i++) {
    if (copy[i].split('').reverse().join('') !== copy[copy.length-1-i]) answer = "NO";
  }
  return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));