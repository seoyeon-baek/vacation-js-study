//pop, shift: 변수의 앞과 뒤에서 element를 삭제하는 역할
//push, unshift: 변수의 앞과 뒤에서 element를 추가하는 역할
var arr=[1,2,3,4,5];

console.log(arr.pop()); //5, 배열의 맨 뒤의 element를 삭제
console.log(arr); //[1,2,3,4]

console.log(arr.shift()); //1, 배열의 맨 앞 element를 삭제
console.log(arr); //[2,3,4]

console.log(arr.push(6)); //4, 배열의 길이 반환, 괄호 안에 있는 숫자를 배열의 맨 뒤에 추가하겠다는 의미
console.log(arr); //[2,3,4,6]

console.log(arr.unshift(0)); //5, 배열의 길이 반환, 괄호 안에 있는 숫자를 배열의 맨 앞에 추가하겠다는 의미
console.log(arr); //[0,2,3,4,6]

console.log(arr.reverse()); //[6,4,3,2,0], 배열을 반대로 뒤집어서 반환
console.log(arr.sort()); //[0,2,3,4,6], 배열을 순서대로  정렬하여 반환

var arr1=[1,2,3];
var arr2=[4,5,6];
console.log(arr1.concat(arr2)); //[1,2,3,4,5,6], 배열을 합쳐서 반환
// concat을 하더래도 각각의 배열에는 변화가 없다
console.log(arr1); // [1,2,3]
console.log(arr2); // [4,5,6]

// concat을 하기 위해선 새로운 배열에 값을 담아서 저장해야한다.
var arr3 = arr1.concat(arr2); //[1,2,3,4,5,6]

var arr4 = [1,2,3,1,2,3];
console.log(arr4.indexOf(2)); //1, 괄호 안의 문자를 배열의 처음으로 오는 방 번호를 찾아서 반환
console.log(arr4.lastIndexOf(2)); //4, 괄호 안 문자를 배열의 마지막으로 오는 번째의 값 찾아서 반환

var str="1,2,3,4,5";
console.log(str.split(","));  //["1","2","3","4","5"], 문자열을 쪼개서 배열에 집어넣을 수 있음