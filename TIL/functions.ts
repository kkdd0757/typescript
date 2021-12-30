// 자바스크립트 함수 선언
function sum(a, b) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 매개 변수(parameter) 타입 정함
function add(a: number, b: number) {
  return a + b;
}

// 타입스크립트 함수 선언 - 함수의 반환 타입
// return 값이 없으면 에러
function add2(a: number, b: number): number {
  return a + b;
}

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
// 불필요한 인자를 넣었다고 에러가 남.
// 에러 : `1개의 인수가 필요한데 2개를 가져왔습니다.`
function log(a: string) {
  console.log(a);
}
log('a', 10);

// 함수 옵셔널 파라미터(optional parameter)
// ?: => 사용해도 되고 사용하지 않아도 되는 인자인 경우
function printText(text: string, type?: string) {
  console.log(text);
}
printText('hi');
