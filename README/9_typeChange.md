# 타입 변환
- 자바스크립트의 타입 변환은 암묵적 타입 변환과 명시적 타입 변환( 타입 캐스팅 )이 있다.
- 타입 변환이 기존 원시 값을 직접 변경하는 것은 아니다.
- 원시 값은 변경 불가능한 값이므로 변경할 수 없다.
- 암묵적 타입 변환은 기존 변수 값을 재할당하여 변경하는 것이 아닌 타입을 변환해 새로운 타입의 값을 만들어 단 한번 사용하고 버린다.
- 가독성이 좋은 코드를 만들때는 코드를 예측할 수 있어야 한다.


## 암묵적 타입변환
- 개발자의 의도와는 상관없이 코드의 문맥을 고려해 암묵적으로 데이터 타입을 강제 변환하는 것을 말한다.
```javascript
'10' + 2 // '102'

5 * '10' // 50
```
- 위 처럼 암묵적으로 타입이 변환 되는 것이다

- 숫자 + 문자 = 문자
- 숫자 - 문자 = 숫자
- 숫자 * 문자 = 숫자
- 순자 / 문자 = NaN
- '1' > 0 = true
- +" = 0
- +'0' = 0
- +'1' = 1
- +'string' = NaN
- +true = 1
- +false = 0
- +null = 0
- +undefined = NaN
- +Symbol() = TypeError
- +{} = NaN
- +[] = 0
- +[10, 20] = NaN
- +(function(){}) = NaN
- 산술 연산자를 사용하면 숫자 값을 만든다.

## 불리언 타입으로 변환
- 불리언 타입은 Falsy 값을 제외하고는 전부 Truthy 값이다.
- Falsy값 = false, undefined, null, 0 / -0, NaN, ""(빈 문자열)

## 명시적 타입 변환
- 개발자의 의도에 따라 명시적으로 타입을 변경하는 방법은 다양한다.
- 표준 빌트인 생성자 함수를 new 연산자 없이 호출하는 방법과 빌트인 메서드를 사용하는 방법, 암묵적 타입 변환을 이용하는 방법이 있다.

- 문자열 타입으로 변환 : String(값), toString 메서드 사용, 문자열 연결 연산자 등이 있다.
- 숫자 타입으로 변환 : Number(값), paseInt(값), parseFloat(값), +단항 산술 연산자, * 산술 연산자 등이 있다.
- 불리언 타입으로 변환 : Boolean(값), 부정 논리 연산자 두번 사용 !!

# 단축 평가
- 논리 합(||) 또는 논리 곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수 있다. 
```javascript
'cat' && 'Dog' // Dog
```
- 논리곱 연사자는 2개의 피연산자가 모두 true로 평가될 때 true를 반환하며 좌항에서 우항으로 평가가 진행된다.
- 첫 번쨰 연산자 'cat'은 true 값으로 평가되며 && 연산자 이기 때문에 우항의 피연산자가 평가 결과를 결정하기 때문에 우항의 문자열을 그대로 반환한다.
- 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반화하며, 평가 도중 결과가 확정된 경우 나머지 평과 과정을 생략하는 것을 단축 평가라 한다.
- 단축 평가를 사용하면 if문을 대체할 수 있다. 어떤 조건이 Truthy 값일 때 무언가를 해야 한다면 논리곱 연산자 표현식으로 if문을 대체할 수 있다.

```javascript
var done = true
var message = ''

if (done) message = '완료'

// if문문을 단축 평가로 대체 가능하다

message = done && '완료'
console.log(message) // 완료
```

- 단축 평가는 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때 유용하게 사용한다.

```javascript
var elem = null
var value = elem.value // 원래라면 타입에러 반환

// 단축 평가 사용

var elem = null
var value = elem && elem.value // null 반환
```

## 옵셔널 체이닝 연산자
-ES11에서 도입된 옵셔널 체이닝 연산자 ?.는 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다

```javascript
// 옵셔널 체이닝 연산자
var elem = null

var value = elem?.value // undefined


```

- 논리 연산자 &&는 좌항 피연산자가 false로 평가되면 좌항 피연산자를 그대로 반환한다. 0이나 ''인 경우도 마찬가지 이지만 0이나 ''은 객체로 평가될 때도 있다.

```javascript
var str = ''
var length = str && str.length
console.log(length) // str.length인 0이 아닌 ''을 반환한다.
```

- 하지만 옵셔널 체이닝 연산자 ?.는 false로 평가되는 Falsy값이라도 null 도는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.

```javascript
var str = ''
var length = str?.length;
console.log(length) // 0
```

## null 병합 연산자
- ES11에서 도입된 null 병합 연산자 ??는 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다. 

```javascript
var foo = null ?? 'default string'
console.log(foo) // 'default string'
// ?? 기준 좌항이 null이나 undefined면 우항의 값을 가진다.


var test = '' ?? 'default string'
console.log(test)
// ''은 Falsy값이지만 null이나 nudefined가 아니기 때문에 '' 출력

```