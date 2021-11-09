# strict mode
- ES5부터 strict mode(엄격모드)가 추가되었다. strict mode는 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.
- ESLint 같은 도구를 사용해도 strict mode와 유사한 효과를 얻을 수 있다.

## strict mode의 적용
- 전역의 선두 또는 함수 몸체의 선두에 'use strict'를 추가한다. 전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용된다.
- 선두에 작성하지 않으면 해당 use strict 위에 있는 문법은 제대로 동작하지 않으므로 코드의 선두에 작성해야한다.

## 전역에 strict mode를 적용하는 것은 피해야한다.
- html 문서는 스크립트 단위로 적용되 다른 스크립트에 영향을 주지 않고 해당 스크립트에 한정되어 적용한다.
- 라이브러리를 사용하는 경우 라이브러리가 non-strict mode인 경우도 있기 때문에 전역에 적용하는 것은 바람직하지 않다.
- 이러한 겨우 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.
- 즉 stict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직 하다.

## strict mode가 발생시키는 에러
- 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.
- delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
- 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
- with 문을 사용하면 SyntaxError가발생한다.

## strict mode 적용에 의한 변화
- strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문에 에러는 발생하지 않는다.

```javascript
(function () {
  'use strict'
  function foo() {
    console.log(this) // undefined
  }
  foo()

  function Foo() {
    console.log(this) // Foo{}
  }

  new Foo()

}())
```

- strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.

```javascript
(function (a){
  'use strict'
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2 
  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments) // {0:1, length: 1}
}(1))
```