function solution(e){

    let sum = 0;

    for(let i=1; i<=e; i++){

     e% i === 0 ? sum += i : false;
    }

return sum;
}
solution(a);
