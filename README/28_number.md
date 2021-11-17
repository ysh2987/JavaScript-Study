# Number
- 표준 빌트인 객체인 Number 객체는 생성자 함수 객체다. 따라서 new 연산자와 함께 호출하여 Number 인스턴스를 생성할 수 있다.
- 인수를 전달하지 않고 new 연산자와 함께 호출하면 `[[NumberData]]` 내부 슬롯에 0을 할당한 Number 래퍼 객체를 생성한다.
- 인수로 숫자를 전달하면 new 연산자와 함꼐 호출하면 `[[NumberData]]` 내부 슬롯에 인수로 전달받은 숫자를 할당한 Number 래퍼 객체를 생성한다.
- 인수로 숫자가 아닌 값을 전달하면 인수를 숫자로 강제 변환한 후 `[[NumberData]]` 내부 슬롯에 변환된 숫자를 할당한 Number 래퍼 객체를 생한다. 인수를 숫자로 변환 할 수 없다면 NaN을 `[[NumberData]]` 내부 슬롯에 할당한 Number 래퍼 객체를 생성한다.
- new 연산자를 사용하지 않고 Number 생성자 함수를 호출하면 Number 인스턴스가 아닌 숫자를 반환한다. 이를 이용하여 명시적으로 타입을 변환 하기도 한다.

## Number 프로퍼티
- Number.EPSILON - 부동소수점 산술연산은 정확한 결과를 기대하기 어렵기 때문에 Number.EPSILON을 사용해 부동소수점을 비교할 수 있다.
```javascript
function isEqual(a, b){
  // a에서 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
  return Math.abs(a-b) < Number.EPSILON
}

console.log(isEqual(0.1 + 0.2, 0.3)) // true
console.log(Number.EPSILON) // 2.220446049250313e-16
```
- Number.MAX_VALUE : 자바스크립트에서 표현할 수 있는 가장 큰 양수 값, 이보다 큰 숫자는 Infinity다
- Number.MIN_VALUE : 자바스크립트에서 표현할 수 있는 가장 작은 양수 값, 이보다 작은 숫자는 0이다.
- Number.MAX_SAFE_VALUE : 자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수 값
- Number.MIN_SAFE_VALUE : 자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수 값
- Number.POSITIVE_INFINITY : 양의 무한대를 나타내는 숫자값 Infinity와 같다
- Number.NEGATIVE_INFINITY : 음의 무한대
- Number.Nan : NaN을 나타내는 숫자값

## Number 메서드
- Number.isFinite : 인수로 전달된 숫자값이 정상적인 유한수, 즉 Infinity 또는 -Infinity가 아닌지 검사하여 그결과를 불리언 값으로 반환한다. 만약 인수가 NaN이면 언제나 false를 반환한다.
- Number.isfinite 메서드와 빌트인 전역 함수 isFinite의 차이는 빌트인 전역함수는 전달 받은 인수를 숫자로 암묵적 타입 변환하여 검사를 수행하고 Number.isfinite 메서드는 암묵적 타입 변환을 하지 않는다. 따라서 숫자가 아닌 인수가 주어졌을 때 반환값은 언제나 false다.

- Number.isInteger : 인수로 전달된 숫자값이 정수인지 검사하여 그결과를 불리언 값으로 반환한다. 암묵적 타입하지 않는다.
- Number.isNaN : 인수로 전달된 값이 NaN인지 검사하여 불리언 값으로 반환 인수를 암묵적 타입 변환하지 않는다. 빌트인 전역 함수 isNaN은 암묵적 타입을 변환한다.

- Number.prototype.toExponential : 숫자를 지수 표기법으로 변환하여 문자열로 반환한다.
- Number.prototype.toFixed : 반올림 하여 문자열로 반환한다.
- Number.prototype.toString : 숫자를 2진수, 3진수 같은 진수표기법으로 문자열로 반환한다.