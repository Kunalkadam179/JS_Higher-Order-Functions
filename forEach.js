let array1 = [5,76,34,89,70,23];
let total = 0;

console.log("Using forEach method");

function getTotal(num)
{
    total = total + num;
}

array1.forEach(getTotal);
console.log("Total: " + total);

total = 0;

console.log("Using custom made forEach");

function customGetTotal(array1){
    for(let i = 0;i<array1.length;i++)
    {
        total += array1[i];
    }
}

function customForEach(functionName, array1){
    functionName(array1);
    return ;
}

customForEach(customGetTotal,array1);

console.log("Total: "+ total);