//오름차순 내림차순에서 sort사용.
// 오름차순 a-b 나타내기
const aa = [10, 3, 12, 2];

const b = aa.sort((a, b)=>{ return a - b });
console.log(b);


// 내림차순 d - c 나타내기
const cc = [10, 3, 12, 2];

const d = cc.sort((c, d)=>{ return d - c });
console.log(d);
