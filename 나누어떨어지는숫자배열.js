
    // https://programmers.co.kr/learn/courses/30/lessons/12910

    
        const arr = [ 5, 9, 7, 10];
        const divisor = 5;

        function solution(arr, divisor) {

            const arr2 = [];
        
            
            for(let i=0; i<arr.length; i++){

                console.log(`i : ${arr[i]}`);

                if(arr[i] % divisor == 0){

                    console.log('dd');
                    arr2.push(arr[i]);
                    console.log(`arr2 : ${arr2}`);
                    
                } 
                
            }
            return arr2;
            
        }
        solution(arr, divisor);
