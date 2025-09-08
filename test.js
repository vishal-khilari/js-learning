let n = prompt("Enter number of numbers: ");
let arr = [];
for(let i = 0; i < n; i++){
    arr.push(i + 1);
}
console.log(arr);



let arr1 = arr.reduce((a,b) => {
    return a * b});


function print(output){
    console.log(output);
}
print(arr1);