//merge two arrays and find the duplicate elements




let one = [1,2,3,5,7];
let two = [2,3,4,5,5];



let merge = [...one,...two];
let duplicate = [];
for(let i = 0; i<merge.length; i++){
    for(let j = i+1; j<=merge.length; j++){
        if(merge[i]==merge[j]&&!duplicate.includes(merge[i])){
            duplicate.push(merge[i]);
            break
        }
    }
}
//console.log(merge)
console.log(duplicate)

