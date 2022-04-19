function solution(a, b){

    let sum = 0;
    let c = 0;

    if(a > b){ c = a; a = b; b = c; }

    for(let i=a; i<b; i++){ sum += i; } return sum;
}