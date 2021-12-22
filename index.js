function solution(arr){
  let answer = [arr[0]], max = arr[0];
  for (let i = 0; i < arr.length-1; i++) {
    if (max < arr[i+1]) {
      max = arr[i+1];
      answer.push(arr[i+1]);
    }
  }
  
  return answer.length;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));