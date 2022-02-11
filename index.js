function solution(test){
  let answer=0, 확인용= [];
  let studentNum = test[0].length;
  let testNum = test.length;
  //모든 학생을 반복문 돌아줌(부르트포스)
  for (let i = 1; i <= studentNum; i++) { //i가 멘토
    for (let j = 1; j <= studentNum; j++) { //j가 멘티
      //멘토인 i가 멘티인 j보다 등수가 높은지 확인해야함
      let count = 0;
      for (let k = 0; k < testNum; k++) { //시험 횟수만큼 반복
        let rankI = 0;
        let rankJ = 0;
        for (let l = 0; l < studentNum; l++) { //등수만큼 반복
          if (test[k][l] === i) rankI = l;
          if (test[k][l] === j) rankJ = l;
        }
        if (rankI < rankJ) count++;
      }
      if (count === testNum) {
        확인용.push([i, j]);
        answer++;
      }
    }
  }
  console.log(확인용); //[[3, 1] [3, 2] [4, 2]]
  return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));
  