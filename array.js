var students = [];


students.push("최령준");//새로운 요소를 배열의 제일 마지막에 추가할때 push
students[1]="저영내" //지정 주소값에 추가
students.unshift("히당");//앞에 추가

students.pop(); //뒤에서 제거
students.shift(); //앞에서 제거

console.log("잉 =?" + students[0]);
console.log("이잉 =?" + students[1]);

students.splice(1,0,"이광호똥깨","김상민알파카");
for(student of students) {
    console.log(student);
}
console.log("------------------------------------------");
var newStu = students.slice(1,3); //1번째 인덱스느느 포함, 3번째 인덱스는 제외한 1<= index값 <3
for(student of newStu) {
    console.log(student);
}

students.sort();
for(student of student) {
    console.log(student);
}


var numbers = [4,6,2,9,1,10,100];

numbers.sort(function(a,b) {
    console.log(a,b);
    return b-a;//값이 - 이면 => 오름차순
});
for(num of numbers) {
    console.log(num);
}