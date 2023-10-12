const array2 = [2,6,44,36,45,78,77,6,43,57,86,99];

console.log("Using filter method");

console.log("Even Nubers: "+array2.filter(item => item %2 == 0));

console.log("Using Custome made filter method");

function oddNumbers(array2){
    let result = [];
    for(let i = 0 ;i< array2.length ;i++)
    {
        if(array2[i] % 2 == 1)
            result.push(array2[i]);
    }
    return result;
}

function customeFilter(myFunction, array2){
    let res = myFunction(array2);
    return res;
}

console.log("Odd Numbers: ", customeFilter(oddNumbers,array2));