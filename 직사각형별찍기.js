<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
    
    <!-- https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript -->




    <script>
            const a = 5;
            const b = 3;

            const solution = (n, m) => {

                const arr = [];
                for(let i=0; i<m; i++){ // 0 1 2

                    console.log(i);

                    for(let j=0; j<n; j++){

                        console.log(j);
                        
                        arr[i][j] = '*';
                    }
                }
            }

            solution(a, b);
            

    </script>
</body>
</html>