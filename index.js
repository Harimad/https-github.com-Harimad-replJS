function solution(arr){  
  let answer = 0, max = Number.MIN_SAFE_INTEGER, rowSum = 0, colSum = 0, rightCross = 0, leftCross = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
      if (i == j) {
        rightCross += arr[i][j];
        leftCross += arr[i][arr.length-1-j];
      }
    }
    if (max < rowSum) {
      max = rowSum;
      answer = max;
    }
    if (max < colSum) {
      max = colSum;
      answer = max;
    }
    if (max < rightCross) {
      max = rightCross;
      answer = max;
    }
    if (max < leftCross) {
      max = leftCross;
      answer = max;
    }
    rowSum = 0;
    colSum = 0;
  }

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15], 
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];
console.log(solution(arr));
