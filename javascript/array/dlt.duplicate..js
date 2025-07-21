
let arr = [1,21,1,2,3,4,3];
let output=  []

for(let i=0; i<arr.length; i++){
    for(let j = i+1 ; j<=arr.length; j++){
        if(arr[i]==arr[j]){
            output.push(arr[i])
        }
    }
}


