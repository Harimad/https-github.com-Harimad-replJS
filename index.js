function solution(s){
  let answer='YES', copy = s.toUpperCase();

  for (let i = 0; i < parseInt(s.length/2); i++) {
    if (copy[i] != copy[s.length-1-i]) answer = 'NO';
  }
  console.log(s);
  return answer;
}

let str="goooG";
console.log(solution(str));
