//스코프란 선언된 변수가 어떤 위치에서 유효한지를 나타냄. { } 사이를 뜻함
//자바스크립트 스코프는 function scope를 따른다.
// => 어떠한 객체를 선언하고 나면 그 객체는 선언된 함수 안에서만 접근이 가능하다
function a(){
	var v_a="a";

	function b(){
		var v_b="b";
		console.log('b: ', typeof(v), typeof(v_a),typeof(v_b)); //b:  undefined string string
	}
	b();
	console.log('a: ', typeof(v), typeof(v_a),typeof(v_b)); //a:  undefined string undefined
}
a();

var v="v";
console.log('o: ', typeof(v), typeof(v_a),typeof(v_b)); //o:  string undefined undefined