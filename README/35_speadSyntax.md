# 디스트럭처링 할당
- 디스트럭처링 할당(구조 분해 할당)은 구조화된 배열과 같은 이터러블 또는 객체를 디스트럭처링 하여 1개 이상의 변수에 개별적으로 할당하는 것을 말한다. 배열과 같은 이터러블 또는 객체 리터럴에서 필요한 값만 추출하여 변수에 할당할 때 유용하다.

## 배열 디스트럭처링 할당

```javascript
const arr = [1, 2, 3]

const [one, two, three] = arr
console.log(one, two, three) // 1 2 3
```

- 할당 연산자 왼쪽에 값을 할당받을 변수를 선언해야 한다. 이때 변수를 배열 리터럴 형태로 선언한다.

- 배열 디스트럭처링 할당 기준은 배열의 인덱스다. 즉, 순서대로 할당된다. 이때 변수의 개수와 이터러블의 요소 개수가 반드시 일치할 필요는 없다.


```javascript
const [a, b = 2, c = 3] = [1, 3];
console.log(a, b, c); //1, 3, 3
```
- 기본값 설정이 가능하며 기본값보다 할당된 값이 우선한다.

```javascript
function parseURL(url = "") {
  const paresedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parseURL);
  /*
  [
    'https://test.com/test/hi/ko',
    'https',
    'test.com',
    'test/hi/ko'
  ] 
  */

  if (!paresedURL) return {};

  const [, protocol, host, path] = parseURL;
  return { protocol, host, path };
}
```

- 위 예제는 URL을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 반환한다

## 객체 디스트럭처링 할당

- 객체 디스트럭처링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당한다. 이때 객체 디스트럭처링 할당의 대상은 객체이어야 하며, 할당 기준은 프로퍼티 키다. 즉, 순서는 의미가 없으며 선언된 변수 이름과 프로퍼티 키가 일치하면 할당된다.

```javascript
const user = { firstName: 'Song', lastName : 'Yu'}

const { lastName, firstName } = user
console.log(firstName, lastName) // Song Yu
```

- 이때 우변에 객체로 평가될 수 있는 표현식(문자열, 숫자, 배열 등)을 할당하지 않으면 에러가 발생한다.


- 객체의 프로퍼티 키와 다른 변수 이름으로 프로퍼티 값을 할당 받으려면 아래와 같이 변수를 선언한다.

```javascript
const firstName = "First";
const lastName = "last";
const user = { firstName, lastName };

const { lastName: ln, firstName: fn } = user;
console.log(ln, fn); // Song Yu
```



