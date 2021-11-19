# 배열
- 배열은 배열 리터럴, Array 생성자 함수,  Array of, Array.from 메서드로 생성할 수 있다.
- 배열의 생성자 함수는 Array이며, 배열의 프로토타입 객체는 Array.prototype이다. 
- Array.prototype은 배열을 위한 빌트인 메서드를 제공한다.

- 배열은 객체지만 일반 객체와는 구별되는 독특한 특징이 있다.

<img src = "../img/chap17_1.jpg">

## 자바스크립트 배열은 배열이 아니다.
- 자바스크립트의 배열은 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있다. 
- 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열이라 한다.
- 자바스크립트 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며 배열의 요소는 프로퍼티 값으로 사용되므로 배열의 값은 어떠한 타입의 값도 할당될 수 있는것이다.

- 자바스크립트 배열은 특정 값을 검색하거나 삽입 삭제하는 경우에 일반적인 배열보다 빠르지만 인덱스로 배열 요소에 접근하는 경우에는 느리다.

## length 프로퍼티와 희소배열
- length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
- length 프로퍼티의 값은 임의의 숫자 값을 명시적으로 할당할 수도 있으며 현재 length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.
- length 프로퍼티 값보다 큰 숫자 값을 할당하는 경우 length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않고 empty가 출력된다.
- empty는 실제로 배열의 요소가 아니며 메모리 공간을 확보하지도 빈 요소를 생성하지도 않는다.

## 배열 메서드
- 배열에는 원본 배열을 직접 변경하는 메서드와 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드가 있다.

- Array.prototype.concat : 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 원본 배열은 변경되지 않는다.

```javascript
const arr1 = [1, 2]
const arr2 = [3, 4]

let result = arr1.concat(arr2)
console.log(result) // [1,2,3,4]

result = arr1.concat(3) 
console.log(result) // [1, 2, 3]

result = arr1.concat(arr2, 5) 
console.log(result) // [1, 2, 3, 4, 5]

console.log(arr1) [1, 2]
```
- 결론적으로 push / unshift 메서드와 concat 메서드를 사용하는 대신 ES6의 스프레드 문법을 일관성 있게 사용하는 것을 권장한다.


- Array.prototype.flat : 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화 한다.

```javascript
[1,2,3[1,2,3]].flat() // [1,2,3,1,2,3]
[1,2,[1,2,[1,2,[1,2]]]].flat(Infinity) // [1,2,1,2,1,2,1,2]
```
- 생략할 경우 기본값은 1이다. Infinity를 전달하면 중첩 배열 모두를 평탄화 한다.

## 배열 고차 함수

- forEach(요소값, 인덱스, 호출한 배열(this)) : forEach 메서드의 반환값은 undefined다. 호출한 배열의 길이만큼 모두 순회한다.

- map(요소값, 인덱스, 호출한 배열(this)) : 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.

- 결국 forEach와 map의 차이는 배열을 반환하냐 undefined를 반환하냐의 차이다.

- fiter(요소값, 인덱스, 호출한 배열(this)) : 반환값이 true인 요소만 추출한 새로운 배열을 반환한다.

- reduce :자신을 호출한 배열을 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출한다. 그리고 콜백 함수의 반환값을 다음 순회 시에 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결과값을 만들어 반환한다.

- reduce 인수로는 (누적값, 현재 아이템, 인덱스, 원본 배열) 초기값은 함수 몸체 다음 `,`로 구분 기본값은 첫번 째 아이템의 값이다.
```javascript
// 평균 구하기
const values [1,2,3,4,5,6]
const average = values.reduce((acc, cur, i, { legnth })=>{
  return i === length -1 ? (acc + cur) / length : acc + cur
}, 0)

console.log(average) //3.5
```

```javascript
// 중복값 제거
const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = values.reduce((acc, cur, i, arr) => {
  if (arr.indexOf(cur) === i) acc.push(cur);
  return acc;
}, []);

console.log(result); // [ 1, 2, 3, 5, 4 ]
```

```javascript
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];

const priceSum = products.reduce((acc, cur) => acc + cur.price, 0);

console.log(priceSum); // 600
```

- some(item) : 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백함수를 호출한다. 이때 some 메서드는 콜백 함수의 반환값이 단 한번이라도 참이면 true, 모두 거짓이면 false를 반환한다. ||라고 생각하면 될거 같다.

- every(item) : 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백함수를 호출한다. 이때 every 메서드는 콜백 함수의 반환값이 모두 true면 true, 하나라도 false면 false를 반환한다. &&라고 생각하면 될거 같다.

- find : 자신을 호출한 배열의 요소를 순회하면서 인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소를 반환한다. 콜백 함수의 반환값이 true인 요소가 존재하지 않는다면 undefined를 반환한다.
- find의 결과값은 배열이 아닌 해당 요소값이다.

```javascript
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];

const filter = products.find((user) => user.price > 200);
console.log(filter); // { id: 3, price: 300 }

```

- findIndex : find와 동일하지만 요소값이 아닌 index값을 반환한다. true인 요소가 없다면 -1을 반환한다.
