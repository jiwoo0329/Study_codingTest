const a = 123;

const b = String(a);

const c = b.split('');

const solution = (c) =>{
    let sum =0;

    for(let i=0; i<c.length; i++){
        sum += parseInt(c[i]);
    }
    return sum
}
console.log(solution(c));

//parseInt : string => number
//split: number => string
