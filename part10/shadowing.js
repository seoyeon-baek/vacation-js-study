//변수의 shadowing이란?
// 서로 다른 함수에서 같은 변수를 선언했을 때 발성하는 현상
function shadowing_example(){
	console.log("F", val); //F 0
	val++;
}

var val=0;
shadowing_example();
console.log("O    ", val); //O 1