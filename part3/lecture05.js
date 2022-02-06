//prompt는 사용자가 number값을 입력해도 string으로 변환해서 출력해준다.
var height=prompt('키를 입력해주세요');
console.log(height, typeof(height));

var height_int = parseInt(height);	//int형으로 강제형변환
console.log(height_int, typeof(height_int));	//158.7 입력 => 158 출력, number출력

var height_float = parseFloat(height);	//float형으로 강제형변환
console.log(height_float, typeof(height_float));	//158.7 입력 => 158 .7출력, number 출력