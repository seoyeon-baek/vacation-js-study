console.log("Menu");
console.log('1. Ice Americano');
console.log('2. Cafe Latte');
console.log('3. Cappuccino');
console.log('4. Tea');

var choice = parseInt(prompt("메뉴를 선택해주세요."));
console.log(choice+"번 메뉴를 선택하셨습니다.");

switch(choice){
	case 1: 
		console.log('아이스 아메리카노는 1500원 입니다.');
		break;
	case 2:
		console.log('카페라떼는 1800원 입니다.');
		break;
	case 3:
		console.log('카푸치노는 2000원 입니다.');
		break;
	case 4:
		console.log('홍차는 1300원 입니다.');
		break;
	default:
		console.log('죄송합니다. 해당 메뉴는 존재하지 않습니다.');
		break;
}