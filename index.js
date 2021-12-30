function solution(s){
  let answer='', count = 1;
  for (let i = 0; i < s.length; i++) {
    while(s[i] == s[i+1]) {
      count++;
      i++;
    }
    if (count == 1) answer += s[i];
    else answer += `${s[i]}${count}`;
    count = 1;
  }
  return answer;
}

let str="KKHSSSSSSSE";
console.log(solution(str));