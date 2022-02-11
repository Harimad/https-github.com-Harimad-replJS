function solution(m, product){
  let answer=0;
  let student = product.length; //5 명
  product.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1])); //총비용 오름차순 재정렬
  
  for (let i = 0; i < student; i++) { //i번째 상품을 할인받는다
    let money = m- (product[i][0]/2 + product[i][1]); //할인 받은 상품은 산걸로 가정함, money는 남은 예산을 말한다
    let count = 1; //할인받은건 샀으니 1부터 시작
    for (let j = 0; j < student; j++) {
      if (j !== i && (product[j][0]+product[j][1]) > money) break;
        //i는 할인된거 이미 샀으니 조건 추가
      if (j !== i && (product[j][0]+product[j][1] <= money)) { 
        money -= product[j][0]+product[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));