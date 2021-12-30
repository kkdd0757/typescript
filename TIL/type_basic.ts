// 문자열
const str: string = 'hello';

// 숫자
const num: number = 10;

// 배열 -> string만 들어갈 수 있는 배열
const arr: Array<string> = [];
arr.push('hi');

// 배열 - 리터럴 적용
const items: string[] = [];
// items.push(10);

// 튜플
// 배열 전체에 타입을 지정하는 것이 아니라 배열의 특정 인덱스에 타입 정함
const address: [string, number] = ['판교', 40];

// 객체
// 특정 속성과 갖가지 특성 정의하는 방법
//'{}' 형식에 '{ name: string; age: number; }' 형식의 name, age 속성이 없습니다.ts(2739)
const obj: object = {};
let person: { name: string; age: number } = {
  name: 'thor',
  age: 100,
};
// obj.a = 10;

// 타입 객체
const char: { age: number; name: string } = { age: 100, name: 'Capt' };
person.age = 101;

// 진위값
let isLogin: boolean = false;
