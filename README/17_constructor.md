# 생성자 함수에 의한 객체 생성

## Object 생성자 함수
- new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
- 생성자 함수란 new 연산자와 함께 호출하여 객체를 생성하는 함수를 말한다. 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.
- object 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, promise 등의 빌트인 생성자 함수를 제공한다.

## 생성자 함수
- 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하지만 하나의 객체만 생성하기 때문에, 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 생성자 함수를 사용한다.
- 객체를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있다.

```javascript
// 생성자 함수
function Circle(radius){
  this.radius = radius
  this.getDiameter = function() {
    return 2 * this.radius
  }
}

const circle1 = new Circle(5)
const circle2 = new Circle(10)

console.log(circle1.getDiameter()) // 10
console.log(circle2.getDiameter()) // 20
```

## 생성자 함수의 인스턴스 생성과정
1. 인스턴스 생성과 this 바인딩
2. 인스턴스 초기화
3. 인스턴스 반환

- 만약 생성자 함수 내의 원시 값 반환문이 있으면 어떻게 될까 객체를 명시적으로 반환하면 return 문에 명시한 객체가 반환되고 원시 값을 명시적으로 반환하면 원시 값 반환은 무시되고 암묵적으로 this가 반환된다.

## constructor와 non-constructor의 구분
- 함수가 호출되면 함수 객체의 내무 메서드[[Call]]이 호출되고 new 연산자와 함께 생성자 함수로서 호출되면 내무 메서드 [[Construct]]가 호출된다.
- 내부 메서드 [[Call]]을 갖는 함수 객체를 callable이라 하고
- 내부 메서드 [[Construct]]를 갖는 함수 객체를 constructor이라 하고
- [[Construct]]를 갖지 않는 함수 객체를 non-constructor라고 부른다.

- 모든 함수는 내부 메서드[[call]]을 갖고 있으므로 호출할 수 있다.
- 모든 함수 객체는 호출할 수 있지만 모든 함수 객체를 생성자 함수로서 호출할 수 있는 것은 아니다.

- constructor : 함수 선언문, 함수 표현식, 클래스
- non-constructor : 메서드, 화살표 함수

- 함수 정의 방식에 따라 constructor와  non-constructor를 구분한다.
- 즉 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor이고
- ES6의 화살표 함수와 메서드 축약 표현으로 정의된 함수는 non-constructor다.


## new 연산자
- new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다. 즉, 함수 객체의 내부 메서드 [[Call]]이 호출되는 것이 아니라 [[Construct]]가 호출된다. 단, new 연산자와 함께 호출하는 함수는 non-construct가 아닌 constructor이어야 한다.
- 반대로 new 연산자 없이 생성자 함수를 호출하면 일반 함수로 호출된다. 즉 [[Call]]이 호출된다.
- 생성자 함수를 일반함수로 호출하게 되면 this는 전역 객체 window를 가르키게 된다. 따라서 생성자 함수를 생성한 뒤 일반 함수로 호출하면 생성자 함수에 있던 프로퍼티와 메서드는 전역 객체의 프로퍼티와 메서드가 된다.
- 따라서 생성자 함수는 일반 함수와 구분하기 위해 첫 문자를 대문자로 기술하는 파스칼 케이스로 작성하는 걸 권장한다.
- 생성자 함수와 일반함수를 구분하기 어렵기 때문에 실수는 언제나 발생된다. 이를 방지하기 이해 생성자 함수에 new.target 프로퍼티로 new 연산자를 사용하지 않았을 경우 일반함수를 호출하는게 아닌 생성자 함수를 호출하게 방지하는 방법도 있다.