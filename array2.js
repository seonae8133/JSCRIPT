var sum =0;
function aryFunc() {
var numbers = [45,28,22,10,55];
numbers.forEach(callBackFunc);
console.log(sum);
document.getElementById("ary").innerHTML = sum;
}

// numbers.forEach(function(val,idx,ary) {
//     console.log(val,idx,ary);
//     sum += val;

// });


function callBackFunc(v,i,a) {
    sum += v;
}

var num1 = 10;//변수 선언
//var num1 = "hello";
console.log(num1);

let num2 = 10;
//let num2 = "hello";
console.log(num2);

const num3  = 10;// 상수 선언

let p1 = {
    name: "Hong",
    age : 20
}

let p2 = {
    name : "Park",
    age : 25
}

let p3 = {
    name : "Choi",
    age : 30
}

let persons = [p1,p2,p3];
persons.forEach(function(a,b,c){
   // console.log(a.name + "," + a.age);
}); 


// persons.sort(function(a,b) {
//     return a.age-b.age;//뒤에가 큰고랭
// });


    persons.sort(function(a,b) {
    if(a.name<b.name) return -1;
    else return 1;
});
persons.forEach((a,b,c) => {
console.log(`value: ${a.name}, age : ${a.age}, index : ${b}`);
});
// persons.forEach(function(a,b,c){
//     console.log(a,b,c);
// });



numbers = [45,38,66,92,18,100];
numbers.sort(function(a,b) {
    return a-b;
});
console.log(numbers[0]);
console.log("--------------------");

let newNum = numbers.map(function(a,b,c) {
    console.log(`a: ${a}, b: ${b} , c: ${c}`);
    return a*b;
});

    console.log(newNum);

    let theNew = newNum.filter(function(a,b,c){
        return a>0;
    });

    console.log(theNew);

    let anotherNew = theNew.reduce((a,b,c)=> {
        console.log(`a: ${a}, b: ${b} , c: ${c}`);
        return (a + b)/2;
    },0);
    console.log(anotherNew);
    console.log("----------------");
    let anotherNew1 = theNew.reduce((a,b,c)=> {
        console.log(`a: ${a}, b: ${b} , c: ${c}`);
        
        return (a>b)?a:b;
    });
    console.log(anotherNew1);
// numbers.sort(function(a,b){
//     return a-b;
// });

// numgers.forEach(function(a){
//     console.log(a);
// })



