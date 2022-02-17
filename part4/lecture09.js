var a=5, b=3;
a+b;	//8 (더하기)
a-b;	//2 (빼기)
a+3;	//8
5+3;	//8
a*b;	//15 (곱하기)
a/b;	//1.66666... (나누기)
a%b	//2 (나머지)
-a;	//-5


//증감연산자란?
//변수의 값을 증감시키거나 감소시키는 연산자
//변수의 값을 수식 안에서 사용할 수 있을 뿐만아니라, 값을 업데이트한다.
a++;
++a;
a--;
--a;

var c=1;
console.log(c);
console.log(c+1);	//2
console.log(c);		//1

var d=1;
console.log(d);
console.log(++d);	//2 (d+1과 같은 의미이다)
console.log(d);		//1

var e=1;
console.log(e);
console.log(--e);	//0 (e-1과 같은 의미이다)
console.log(e);		//0

var f=1;
console.log(f);
console.log(f++);	//1 (console.log가 먼저 실행되기 때문에 값이 아래 결과값에 출력된다)
console.log(f);		//2

//Math 객체
console.log(Math.pow(2,3)); //2의 3제곱
console.log(Math.sqrt(16)); //16의 제곱근 (4)
console.log(Math.random()); //랜덤한 수를 반환해줌, 인자X => 0~1사이의 난수 반환