const persons = [
    {firstname: "Rahul", lastname: "Kumar"},
    {firstname: "Varsha", lastname: "Reddy"},
    {firstname: "Prem", lastname: "Sharma"}
];

console.log("Using Map Method");

console.log(
    persons.map(function(object){
        return [object.firstname, object.lastname].join(" ");
    })
)

console.log("Using custome made Map method");

function getFullNames(array) {
    let resNames = [];
    for(let i = 0; i< array.length;i++){
        let object = array[i];
        resNames.push([object.firstname,object.lastname].join(" "));
    }
    return resNames;
}

function customeMap(myfunction, array){
    let res = myfunction(array);
    return res;
}

console.log(customeMap(getFullNames,persons));