//find largest from an array using redcuce



let arr = [1,2,3,4,5,6,6];

let secondLargest = arr.reduce((acc,val)=>{
     if (val>acc.largest) {
          acc.second = acc.largest;
          acc.largest =val
     }else if(val>acc.second&&val<acc.largest){
          acc.second = val
     }
     return acc
},{largest:-Infinity,second:-Infinity})

console.log(secondLargest.second);
