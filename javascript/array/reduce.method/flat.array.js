//flat array using reduce 

const arrays = [[1, 2], [3, 4], [5]];


let ans = arrays.reduce((acc,val)=>{
    return acc.concat(val)
},[])


console.log(ans)