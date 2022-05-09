const a = 12345; //number


const solution = (n) => {

    
    const arr=[];
    const b = String(n).split('').reverse();
    // console.log(b);
  
    // arr.push(a);

    // console.log(arr);
    
    for(let i=0; i<b.length;  i++){
        arr.push(parseInt(b[i]));
    }
    return arr;

}
console.log(solution(a));

//parseInt(a): 문자를 숫자형으로 or split(): ()을 기준으로 나뉨 or push: or string: 숫자를 문자로 or reverse: 순서가 반대  




