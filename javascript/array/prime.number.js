let arr = [1,3,5,7,9];

function findPrime(arr){

    let prime = []

    let isPrime ;

    let num

    for(let i = 0; i<arr.length; i++){

        isPrime = true

         num = arr[i];

        if(num<=1){

            continue;
        }
        for(let j = 2; j< num; j++){

            if(num%j==0){

                isPrime= false;

                break;
            }
        }
         if(isPrime){
            
        prime.push(num)
    }
    }
   
    return prime
};


console.log(findPrime(arr))