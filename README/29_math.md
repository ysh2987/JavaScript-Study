# Math
- Math는 생성자 함수가 아니기 때문에, 정적 프로퍼티와 정적 메서드만 제공한다.

## Math 프로퍼티
- Math.PI : 원주율 PI 값을 반환한다

## Math 메서드
- Math.abs : 인수로 전달된 숫자의 절대값을 반환한다. 전달 받은 인수는 암묵적 타입이 변환된다.
- Math.round : 인수의 소수점을 반올림한다.
- Math.ceil : 인수의 소수점을 올림한다.
- Math.floor : 인수의 소수점을 내림한다.
- Math.sqrt : 인수의 제곱근을 반환한다.
- Math.random : 임의의 난수를 반환한다. 0이상 1미만의 실수 

```javascript
// Math.random은 0에서 1미만의 랜덤 실수를 반환하기 때문에
// Math.floor를 이용해 원하는 숫자만큼 잘라서 사용할 수 있다.
const random = Math.floor((Math.random() * 100)+1)
console.log(random) // 1에서 100범위의 정수
```

- Math.pow : 첫 번째 인수를 밑으로, 두 번째 인수를 지수로 거듭제곱한 결과를 반환한다.

```javascript
Math.pow(2, 8) // 256
Math.pow(2, 3) // 8

// 지수 연산자 가독성이 더 좋다.
2 ** 8 // 256
2 ** 3 // 8
```

- Math.max : 전달 받은 인수 중 가장 큰 수를 반환한다. 인수가 전달되지 않으면 -Infinity를 반환한다.

```javascript
// 배열 요소 중에서 최대값을 얻으려면
// 스프레트 문법이나 apply 메서드를 사용
Math.max(...[1,2,3,4,5])
```

- Math.min : 전달받은 인수 중 가장 작은 수를 반환한다. 인수가 절달되지 않으면 Infinity를 반환한다.
- 배열 요소중 최소 값을 구하려면 위에 방법과 동일하다.