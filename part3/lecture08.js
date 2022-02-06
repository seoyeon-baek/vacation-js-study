//undefined란?
// 시스템에서 어떠한 변수나 속성에 정의되지 않은 경우를 표현함

// 초기화하지 않고 선언한 변수
var uninitialized_var;
console.log(uninitialized_var);		//undifined

var obj = {
	x: 1,
	y: 2
};

console.log(obj.x);	//1
console.log(obj.y);	//2
// console.log(obj.z);	//undifined

//null이란?
// 값은 비어있지만 null이라는 객체가 저장돼있음
var null_var;
null_var=null;
console.log(null_var);
console.log(typeof(null_var));