// 함수가 선언될 때의 environment로 구성된다.																																																																																								

function makeCounterFunction(initVal){
	var count = initVal;
	function Increase(){
		count++;
		console.log(count);
	}
	return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

counter1();
counter2();