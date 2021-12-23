function solution(arr){  
  let newArr=[...arr], answer = 0;
  newArr.unshift(new Array(arr.length+2).fill(0));
  newArr.push(new Array(arr.length+2).fill(0));
  for (let i = 1; i < arr.length+1; i++) {
    newArr[i].unshift([0]);
    newArr[i].push([0]);
  }

  for(let i = 1; i < arr.length+1; i++) {
    for (let j = 1; j < arr.length+1; j++) {
      let elem = newArr[i][j];
      if(elem > newArr[i][j+1] && elem > newArr[i+1][j] && elem > newArr[i-1][j] && elem > newArr[i][j-1]) {
        answer++;
      }
    }
  }
  return answer;
}

let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];

console.log(solution(arr));