var str="Hello";
console.log(str.length); //str 변수에 들어있는 값의 길이 (5)
console.log(str["length"]); //위와 같은 의미를 지님
console.log("hello".length) //대입된 값 이외에도 글자수를 출력함 (5)

var str2 = " World";
console.log(str.concat(str2)); //concat 함수는 .앞의 변수와 ()안의 변수를 붙여 하나의 명령어로 출력함
var str3 = str.concat(str2); //이런식으로 변수에 넣어 사용도 가능하다
console.log(str.concat(str2).concat("!")); //여러번 이어 사용할 수도 있다.
console.log("Hello".concat(" World").concat("!")); //변수에 대입한게 아닌 문자열끼리도 사용 가능하다.
console.log(str+str2); //+연산자를 통해서도 문자열을 붙일 수 있다.
console.log("Hello"+" World");	// 대입된 값 아니여도 +연산자를 통해 붙여서 출력할 수 있다.
console.log("PI is "+3.14); //문자열 뿐만아니라 넘버형도 사용할 수 있다.
console.log(3.14+" is PI"); // 넘버형이 앞에 있어도 사용할 수 있다.
