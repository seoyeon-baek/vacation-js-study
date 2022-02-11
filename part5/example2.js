var str="abcdeabcde";
console.log(str.charAt(2)); //str변수의 괄호 안 번호의 글자값을 출력 (c), 1번째 글자는 0번방부터 시작한다
console.log(str.length); //10
console.log(str.charAt(9)); //e
console.log(str.charAt(10)); //"", 문자열이 범위를 벗어났기 때문
console.log(str.charAt(-1)); //"", 위와 동일
console.log(str[1]); //b, array 형식
console.log(str[10]); //undefined, 문자열이 범위를 벗어났기 때문이다. charAt보다 용이하게 사용한다.
console.log(str.substring(2,4)); //2번방 문자부터 4번방 문자전까지 출력 (cd)
console.log(str.substr(2,4)); //2번방 문자부터 총 4개의 문자 출력 (cdea)
console.log(str.substring(2)); //2번방 문자부터 마지막 문자까지 출력 (cdeabcde)
console.log(str.substr(2)); //위와 동일
console.log(str.substr(-7)); //뒤에서부터 7번째 문자부터 출력 (deabcde)
console.log(str.substr(-7,2)) //뒤에서부터 7번째 문자부터 2개의 문자 출력(de)
console.log(str.indexOf("bc")); //bc가 언제 처음으로 반환되는지 (1)
console.log(str.lastIndexOf("bc")); //bc가 언제 마지막으로 반환되는지 (6)
console.log(str.lastIndexOf("f")); //문자열에서 존재하지 않는 문자 입력 시, -1 반환 (-1)

