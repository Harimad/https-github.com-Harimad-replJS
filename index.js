function solution(m, arr){
  let answer=0, lt = sum = 0;

  for(let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) sum -= arr[lt++];
    // if (sum <= m) //이거 굳이 안해도 위에 while(sum >m)값의 반대 조건이니까 주석 조건과 같은은 조건을 충족한다.
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution(5, [1,3,1,2,3])); // 10
console.log(solution(100, [1,1,1,1,1])); // 15