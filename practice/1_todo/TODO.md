1. node i

2. format on save : prettier off

3. 타이핑 : 타입이 정의되지 않은 코드에 타입을 입혀주는 행위

4. void : return type이 없다.

## 오류 해결

1. `'object[]' 형식에 'done' 속성이 없습니다.`

- 객체 모습 구체적으로 정의하기.

```
let todoItems: {id:number; title:string; done:boolean}[];
```

2. `'object[]' 형식은 '{ id: number; title: string; done: boolean; }[]' 형식에 할당할 수 없습니다. '{}' 형식에 '{ id: number; title: string; done: boolean; }' 형식의 id, title, done 속성이 없습니다.ts(2322) 빠른 수정을 사용할 수 없음`

```
function fetchTodoItems() : {id:number; title:string; done:boolean}[]
```
## 중복 제거 

- `{id:number; title:string; done:boolean}`를 `Todo`로 변경

1. 타입 이름 정의 

```
type Todo = {
  id: number;
  title:string;
  done:boolean;
}
```

2. interface 정의
```
interface Todo{
  id:number,
  title:string,
  done:boolean,
}
```