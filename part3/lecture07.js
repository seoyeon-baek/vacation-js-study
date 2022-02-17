// 객체 (object)린?
// 어떠한 하나의 값으로 정의되는 것이 아니라, 속성(property)들의 집합

var empty_obj = { };
console.log(typeof(empty_obj)); //object

var man = {
	name: '백서연',
	age: 19,
	height: 158
};
console.log(man);

//object에서 property 하나씩 확인하기
console.log(man.name);
console.log(man["name"]);

//object에서 propety 값 변경하기
man.name = "백설공주"
man["age"] = 20;

// 확인하기
console.log(man);