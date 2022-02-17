var array = [1,2,3,4,5,6,7,8,9,10];

 //반복문 진입 전 실행될 조기 코드
for( var i = 0; i<array.length; i++){ 	//조건식
	//반복 실행 될 코드
	console.log(array[i]);
}

//break 문을 만나면 for문 밖으로 빠져나감
// continue문을 만나면 조건식을 다시 실행