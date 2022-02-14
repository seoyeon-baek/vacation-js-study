var cond=false;

while(cond){
	console.log("이 구문은 실행되지 않습니다");
}

//do-while문은 반복문을 실행할지 말지를 마지막에 검사한다.
do{
	console.log("이 구문은 한번은 실행됩니다.");
}while(cond);

do{
	var ans = parseInt(prompt("1+1=?"));
}while(ans!=2);

console.log('맞췄습니다.');