var arr=[]; //빈 배열 생성
var arr2=[1,2,3,4,5]; //1~5까지의 값을 가진 배열 생성

// 하나의 변수가 가진 배열 안에는 여러가지 자료형을 사용할 수 있다.
var mixed_arr = [1, true, 3.14, "string", {name:"object"}, [1,2,3]];
console.log(mixed_arr); //1, true, 3.14, "string", object, array(3)

console.log(mixed_arr.length); //6
console.log(arr2.length); //5
console.log(arr.length); //0

console.log(arr2[0]); //1
console.log(arr2[3]); //4
console.log(arr2[7]); //undefined, 범위를 벗어남

