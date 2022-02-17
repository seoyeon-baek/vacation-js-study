// var array = [1,2,3,4,5,6,7,8,9];

// for(var i=0; i<array.length; i++){
// 	console.log(array[i]);
// }

var obj={
	name: "object",
	weight: 30,
	isObject: true,
	arr:[1,2,3],
	obj:{property:1}
};
// console.log(Object.keys(obj)); //object의 속성들을 배열로 출력: ["name","weight","isObject","arr","obj"]
console.log("For 구문으로 object property 반복하기");

var property_list = Object.keys(obj);
console.log("Property List: ", property_list);

for( var i=0; i<property_list.length; i++){
	var propertyName = property_list[i];
	console.log("\t", propertyName, ": ", obj[propertyName]);
}

//위 for문 코드를 아래 for in문으로 쉽게 나타낼 수 있다.
console.log("\n\nFor in 구문으로 object property 반복하기");

for(var propertyName in obj){ //in 앞에 적혀있는 변수에 in 뒤에 있는 객체의 속성에 이름을 하니씩 순차적으로 넣어주게 되면서 포문에서 객체의 이름과 이름을 가진 객체의 속성에 직접 접근이 가능해진다.
	console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("name" in obj); //true
console.log('age' in obj); //false