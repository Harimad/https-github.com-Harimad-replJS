function 아나그램판별(obj1, obj2) {
  if(obj1.size !== obj2.size) return false;
  for (let [key, val] of obj1) {
    if(!obj2.has(key) || obj2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t){
  let answer=0;
  let len = t.length;
  let sH = new Map();
  let tH = new Map();

  for (let i = 0; i < len; i++) {
    if(tH.has(t[i])) tH.set(t[i], tH.get(t[i])+1);
    else tH.set(t[i], 1);
  }
  
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) {
      sH.set(s[i], sH.get(s[i])+1);
    }
    sH.set(s[i], 1);
  }
  console.log(sH); //{'b' => 1, 'a' => 1, 'c' => 1}
  if(아나그램판별(sH, tH)) answer++;
  
  for (let i = len; i < s.length; i++) {
    //삭제
    if(sH.has(s[i-len])) {
      sH.set(s[i-len], sH.get(s[i-len])-1);
      if (sH.get(s[i-len]) == 0) sH.delete(s[i-len]);
    }
    //추가
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
    else sH.set(s[i], 1);
    console.log(sH);
    //{'a' => 2, 'c' => 1}
    //{'a' => 1, 'c' => 1, 'A' => 1}
    //{'a' => 2, 'A' => 1}
    //{'a' => 1, 'A' => 1, 'c' => 1}
    //{'a' => 1, 'c' => 1, 'b' => 1}
    //{'c' => 1, 'b' => 1, 'a' => 1}
    if (아나그램판별(sH, tH)) answer++;
  }
  
  return answer;
}
let a="bacaAacba";
let b="abc";
console.log(solution(a, b));