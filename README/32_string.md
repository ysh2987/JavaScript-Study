# String
- 표준 빌트인 객체인 String 객체는 생성자 함수 객체다. 따라서 new 연산자와 함께 호출하여 String 인스턴스를 생성할 수 있다.
- String 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 내부 슬롯에 빈 문자열을 할당한 String 래퍼 객체를 생성한다.
- String 생성자 함수에 인수를 전달하면 `[[StringData]]` 내부 슬롯에 인수로 전달받은 문자열을 할당한 String 래퍼 객체를 생성한다.
- String 래퍼 객체는 배열과 마찬가지로 length 프로퍼티와 인덱스를 나타내는 숫자 형식의 문자열을 프로퍼티 키로, 각 문자를 프로퍼티 값으로 갖는 유사 배열 개체이면서 이터러블이다. 따라서 인덱스를 사용하여 문자에 접근할 수 있다.
- 단, 문자열은 원시 값이므로 변경할 수 없다. 에러는 발생하지 않는다.
```javascript
let str = 'Hello'
str[0] = 'S'
console.log(str) // Hello
```
- new 연산자를 사용하지 않고 생성자 함수를 호출하면 문자열을 반환한다. 이를 이용하여 명시적으로 타입을 변환하기도 한다.

## String 메서드
- String 객체에는 원본 String 래퍼객체를 직접 변경하는 메서드는 존재하지 않는다. 즉, String 객체의 메서드는 언제나 새로운 문자열을 반환한다. 문자열은 원시값 이기 때문이다.

- String.prototype.indexOf : 인수로 전달받은 문자열을 검색하여 첫번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환하고, 인수가 2개인경우 2번째 인수는 검색을 시작한 인덱스로 전달한다.

- String.prototype.search : 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.

- String.prototype.includes : 대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 확인하여 그결과를 true 또는 false로 반환한다. 2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.

- String.prototype.startsWidth : 대상 문자열이 인수로 전달받은 문자열로 시작하는지 확인하여 true, false로 반환한다. 2번째의 인수로 검색을 시작할 인덱스를 전달할 수 있다.

- String.prototype.endsWith : 인수로 전달받은 문자열로 끝나는지 확인해 true, false로 반환한다. 2번째 인수로 검색할 문자열의 길이를 전달할 수 있다.

- String.prototype.charAt : 대상 문자열에서 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환한다. 인덱스가 문자열의 범위를 벗어난 정수인 경우 빈 문자열을 반환한다. str[0] 과 str.charAt(0)이 같은 기능인 것이다.

- String.prototype.substring : 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전까지의 부분 문자열을 반환한다.
  - 첫번째 인수 > 두 번째 인수인 경우 두인수는 교환된다.
  - 인수 < 0 또는 NaN인 경우 0으로 취급된다.
  - 인수 > 문자열의 길이인 경우 인수는 문자열의 길이로 취급된다.

- String.prototype.slice : substring 메서드와 동일하게 동작하지만 음수인 인수를 전달하면 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반환한다.

```javascript
let str = 'Hello'

console.log(str.substring(-3,5)) // hello 
console.log(str.slice(-3, 5)) // llo
```

- String.prototype.toUpperCase : 대문자로 변환
- String.prototype.toLowerCase : 소문자로 변환
- String.prototype.trim : 대상 문자열 앞뒤에 공백 문자가 있을 경우 이를 제거한 문자열 반환
- String.prototype.repeat : 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다. 인수가 0이면 빈 문자열을 반환하고, 음수이면 RangeError를 발생시킨다. 생략하면 기본값 0이 설정

```javascript
const str = 'abc'

str.repeat() // ''
str.repeat(0) // ''
str.repeat(1) // 'abc'
str.repeat(2) // 'abcabc'
str.repeat(2.5) // 'abcabc'
str.repeat(2.9) // 'abcabc' 내림처리
// str.repeat(-1) // RangeError
```

- String.prototype.replace : 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여 두 번째 인수로 전달한 문자열로 치환한 문자열을 반환한다.
  - 무조건 첫 번째로 검색된 문자열만 치환한다.
  - 특수한 교체 패턴을 사용할 수 있다. 예를 들어 $&는 검색된 문자열을 의미한다. 특수 교체 패턴은 아래 주소에서 확인 가능하다.
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace

- String.prototype.split : 대상 문자열에서 첫 번째 인수로 전달한 문자열 또는 정규표현식을 검색하여 문자열을 구분 한 후 분리된 각 문자열로 이루어진 배열을 반환한다. 인수로 빈 문자열을 전달하면 각 문자를 모두 분리하고, 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.

```javascript
const str = 'How are you doing?'

// 공백으로 구분
str.split(' ') // [ 'How', 'are', 'you', 'doing?' ]
 
// \s는 여러 가지 공백 문자를 의미
str.split(/\s/) // [ 'How', 'are', 'you', 'doing?' ]

// 빈문자열을 전달하면 모두 분리
str.split('') // [ 'H', 'o', 'w', ' ', 'a',... 'g', '?']

// 생략하면 전체를 단일요소로 배열 반환
str.split() // [ 'How are you doing?' ]

// 응용
console.log(str.split('').reverse().join('')) // ?gniod uoy era woH
```
