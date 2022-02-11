var a=1, b=2, c=3, d=4;
var e="a", f="b", g="c", h="d";

console.log(a<b); //true, a는 b보다 작다
console.log(a>b); //false, a는 b보다 크다
console.log(a<=b); //true, a는 b보다 작거나 같다
console.log(a>=b); //false, a는 b보다 크거나 같다
console.log(a==a); //true, a는 a와 같다
console.log(a==b); //fasle, a는 b와 같다
console.log(a!=b); //true, a는 b와 같지 않다
console.log(a!=a); //false, a는 a와 같지 않다

//관계연산자는 number type 뿐만아니라 string type에도 가능하다.
console.log(e==e); //true
console.log(e!=e); //true
//string type의 대소 관계는 사전순으로 결정 (ㄱ가 ㄴ보다 작은 쪽)
console.log(e<f); //true
console.log(f<e); //false

console.log(1<3); //true
console.log("a"<"b"); //true

//and (&&) 연산자는 값이 모두 참일때만 true반환, 한개라도 false면 false 반환
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false

// or (||) 연산자는 값이 모두 참이거나, 둘 중 하나라도 true일 때 true 반환, 모두 false면 false 반환
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//not(!) 연산자는 현재 값의 반댓값을 출력함. true => false, false => true
console.log(!true); //false
console.log(!false); //true


var height=180, age=20;
//180이상이고 20대인사람
console.log(height>=180 && age>=20 && age<30); //true
height=170 //키를 170으로 낮춰봄
console.log(height>=180 && age>=20 && age<30); //false
//8살 초과 또는 65세 이하
console.log(age < 8 || age >= 65);
