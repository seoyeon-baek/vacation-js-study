// 연산자 우선순위
// 1. Logical Operator: not (!)
// 2. Arithmetic Operator: +, -, *, /, %
// 3. Relational Operator: >, <, <=, >=, ==, !=
// 4. Logical Operator: and (&&)
// 5. Logical Operator: or (||)
var a=7+3*2;
console.log(a); //13
a=(7+3)*2;
console.log(a); //20

2*3 > 4*5  && 6/3 == 2 || false
// 1. 2*3 > 4+5 && 6/3 == 2 || true
// 2. 6 > 9 && 2 == 2 || true
// 3. 6 > 9 && 2 == 2 || true
// 4. false && true || true
// 5. fasle || true
// result: true

height >= 180 && gender == "male" || height >= 165 && gender == "femail"
// 괄호는 연산자 우선순위를 위해서도 사용하지만 코드의 가독성을 위해서도 사용함
(height >= 180 && gender == "male") || (height >= 165 && gender == "femail")