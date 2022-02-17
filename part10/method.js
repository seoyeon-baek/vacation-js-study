//메서드란?
// 객체 속성의 값으로 함수가 들어가면 그 함수를 메서드라고 한다

//this란?
// 예약어로, 함수를 호출했을 때 어떤 객체의 파일들의 속성으로 불렀는지 알 수 있게 해준다.
// 일반적인 함수를 호출할 때 해당 함수 내부에서 사용된 this는 전역객체(browser의 경우 window)에서 호출된다.
function f(){
	console.log(this); 
	console.log("f is called");
}

function setName(name){
	this.name=name;
}

var o={
	name: "object",
	method: f,
	setName: setName
};
var o2={
	name:"",
	setName: setName
};

// f();
// o.method(); //객체의 속성에 바인드된 함수로서 호출할 수도 있다.

o.setName("object1");
o2.setName("object2");

console.log(o, o2);