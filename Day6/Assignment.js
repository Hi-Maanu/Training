//1 . 

//2 . 
    let arr =  [-1 , -2 , 1 , 2 , 3 , - 10, 2 , 3 , 4];

        let max_sum = 0 ; 
        let result = -Infinity; 

        for(let i = 0 ; i < arr.length; i++)
        {
        max_sum += arr[i];

        if(max_sum < 0)
        {
            max_sum = 0 ; 
        }

        result = Math.max(max_sum , result); 

        }
        console.log(result);

//3 . 

    function numberOfPaths(m, n)
    {
        if (m == 1 || n == 1)
            return 1;

        return numberOfPaths(m - 1, n) + numberOfPaths(m, n - 1);
       
    }
    
    console.log(numberOfPaths(3, 3));