//prompt는 사용자가 number값을 입력해도 string으로 변환해서 출력해준다.
var height=prompt('키를 입력해주세요');
console.log(height, typeof(height));

var height_int = parseInt(height);	//int형으로 강제형변환
console.log(height_int, typeof(height_int));	//158.7 입력 => 158 출력, number출력

var height_float = parseFloat(height);	//float형으로 강제형변환
console.log(height_float, typeof(height_float));	//158.7 입력 => 158 .7출력, number 출력

//NaN (Not a Number) 이란?
// 숫자가 아닌 경우 표현되는 문자
// 수학적 오류가 있는 경우 Infinity(무한)을 출력한다.