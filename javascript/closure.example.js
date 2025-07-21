function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++
        console.log(count)
    }
    return innerFunction
}

const inner = outerFunction()
inner();
inner();
inner();
inner();