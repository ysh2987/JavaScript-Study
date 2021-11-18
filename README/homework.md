# RegExp 생성자 함수를 사용하여 RegExp 객체 생성 방식

- new RegExp(패턴, 플래그)
```javascript
const regxp = new RegExp(/is/,i) // ES6 
const regxp = new RegExp(/is/,'i')
const regxp = new RegExp('/is/','i')
```


## 활용 예시

// 프로그래머스 예제
- 2three45sixthree => 234563

```javascript
function solution(s) {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const result = arr.reduce((accumulator, currentValue, index) => {
    const regexAll = new RegExp(arr[index], 'gi');
    return accumulator.replace(regexAll, index);
    // accumulator.replace(/arr[index]/, index) arr[index]를 문자로 인식
  }, s);
  return Number(result);
}

solution('2three45sixthree');
```