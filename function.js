console.log("출력출력");

sum(10,20);//hosting

function sum(num1, num2) {
    console.log(num1 + " + " + num2 + "=" + (num1+num2));
}

function minus(num1, num2) {
    var result = num1 - num2;
    return result;
}

function concat(str1,str2) {
    return str1 + str2;
}

var numbers =[3,4,2,8,7];
function arySum() {
    var sum =0;
    for(num of numbers) {
        sum += num;
    }
    return sum;
}

var mySum = function() {
    var sum =0;
    for(num of numbers) {
        sum += num;
    }
    return sum;
}

function setBackgroundColor(element) {
    element.style.display = "inline ";
    element.style.background = "aqua";
    element.style.color = "red";
}

function sumThis() {
    r3.innerHTML = r1.value*1+r2.value*1;
    document.getElementById('result').innerHTML;
}
