function solution(arr){         
  let answer=0, acc=1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 1) {
      answer+=acc;
      acc++;
    } else if(arr[i] == 0){
      acc = 1;
    }
  }
    
  return answer;
}

let arr=[1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));