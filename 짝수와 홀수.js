const a = 3;
function solution(num) {
    // if(num %2 === 1){return 'Odd'} else return 'Even';
    let w = '';
    num%2 === 1 ?  w='Odd' : w='Even'; // 삼항연산자

    return w;
}
console.log(solution(a));