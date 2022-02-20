function solution(m, arr) {  
  let answer = lt = sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) sum -= arr[lt++];
    if (sum === m) answer++;
  }
  return answer;
}
console.log(solution(6, [1, 1, 1, 2, 4])); // 1
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2])); // 3
console.log(solution(2, [1, 1, 1])); // 2