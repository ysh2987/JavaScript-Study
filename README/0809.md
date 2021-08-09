# 2021년 8월 09일
# javascript 기초 
- let - 변할 수 있는 값 
- const - 절대 바뀌지 않는 상수
- null - 존재하지 않는 값
- undefined - 할당되지 않은 값
- typeof - 타입 확인할때
- alert() - 알림 창
- prompt - 입력 받기(input) 
- confirm - 확인 
```javascript
// prompt
const name = prompt("예약일을 입력하세요", "2020-10-");// 2번째 매개변수는 placeholder 같은 예약어 
console.log(name)
// confirm
const isAdult = confirm("당신은 성인 입니까?"); // 확인 취소 버튼 
console.log(isAdult)
// 단점 
1. 스크립트가 일시 정지된다.
2. 스타일링 불가능하다.
```
<br>
<br>

# 형 변환
- Stirng // 문자형
    - String(3), String(true)
- Number() // 
    - Number('1234')
    - Number('true') 1
    - Number('false') 0
    - Number('hello') NaN
    - Number('null') 0
    - Number('undefined) NaN
- false
    - 숫자 0
    - 빈 문자열('')
    - null
    - undefined
    - NaN
<br>
<br>

# 논리 연산자

- || - OR
- && - AND
- ! -NOT

```javascript
const name = 'mike';
const age = 30;
// OR
if(name === 'tom' || age > 19){
  console.log('통과');
} 
// AND
if(name === 'tom' && age > 19){
  console.log('통과');
} else {
  console.log('탈락');
}
```
```javascript
// NOT
const age = prompt('나이가..?')
const isAge = age > 19;

if (!isAge){
  console.log('돌아가..')
}else{
  console.log('어서오세요')
}
```

```javascript
// 우선순위
const gender = 'F';
const name = 'Jane';
const isAdult = true;
if (gender == 'M' %% name === 'Mike' || isAdult){
    console.log('통과') // and가 or보다 우선순위가 높기 떄문에 통과가 된다.
} else {
    console.log('돌아가.')
}

if (gender == 'M' %% (name === 'Mike' || isAdult)){
    console.log('통과') // 이런식으로 바꿔줘야함
} else {
    console.log('돌아가.')
}
```
<br>
<br>

# 함수(function)
```javascript
function sayhello(name){
  const msg = `hello, ${name}`;
  console.log(msg);
 
}
sayhello('Mike'); // "hello, Mike"
```
```javascript
// 응용
function sayhello(name){
  let msg = `hello`;
  if(name){
    msg  += `, ${name}`; // msg는 지역변수이다. 함수 밖에서 호출 불가
  }
 
}
sayhello('mike');
```
```javascript
// 응용
function sayhello(name = 'friend'){ // name에 매개변수가 없을때 프렌드 호출
  let msg = `Hello, ${name}`
  console.log(msg)
  }
 
}
sayhello();// Hello firend
sayhello('mike'); // Hello, mike
```

<br>
<br>

# 전역 변수와 지역 변수
```javascript
let msg = "welcome"; // 전역변수
console.log(msg) // welcome
function sayhello(name){
    let msg = "hello" // 지역변수 
    console.log(msg + '' + name); // hello mike
}
sayhello('mike'); //welcome

```
```javascript
let name = 'mike';
function sayHello(name){
    console.log(name)
}
sayHello() //'undefined'
sayHello('jane') // 'jane'
```
<br>
<br>

# 함수 표현 방식
```javascript
// 함수 표현식
// 함수를 호출할떄 함수보다 위에 있을경우 오류 발생
showError(); 

let showError = function(){
  console.log('error')  // 에러 발생
}

// 함수 선언문 
// 함수 선언문 위에 호출해도 동작
showError(); 

function showError(){
  console.log('error') 
} 

```
<br>
<br>

# 화살표 함수
```javascript
let add = function(num1, num2){
    return num1 + num2;
}
// 화살표 함수로 변경 
let add = (num1,num2) => {
    return nume1 + num2;
}
let add = (num1,num2) => (nume1 + num2)
let add = (num1,num2) => num1 + num2; // 리턴문이 하나라면 괄호 생략 가능
let sayHello = name => `Hello, ${name}`; // 인수가 하나면 인수에 괄호도 생략 가능

```

<br>
<br>

# 객체(Object)
```javascript
const superman = {
    name : 'clark',
    age : 33,
}
// 접근
superman.name //'clark'
superman['age'] //33

// 추가
superman.gender = 'male';
superman['hairColor']='blakc';

//삭제
delete superman.hairColor;
```
```javascript
// 응용
function makeObject(name, age){
  return {
    name : name,
    age : age,
    hoby : 'football'
  }
}
const mike = makeObject('mike', 30);
console.log(mike);
```

```javascript
// 객체 in 응용
function isAdult(user){
  if (!('age' in user) || // user에 age가 없거나
      user.age<20){  // 20살 미만이거나
        return false;
      }
  return true;
}

const Mike = {
  name: "Mike",
  age : 30
}
const Jane = {
  name: "Jane"
}
```

```javascript
// 객체 for..in

const Mike = {
  name: "Mike",
  age: 30
};

for(x in Mike){
  console.log(Mike[x]) // Mike 벨류 값 
  console.log(x)  // Mike 키 값
}
```

``` javascript
let boy = {
  name : "Mike",
  showName : function (){
    console.log(this.name)
  }
};
boy.showName() // Mike

let boy = {
  name : "Mike",
  showName :  () => {
    console.log(this.name)
  }
};
boy.showName() // window 객체에서는 화살표 함수 사용 안하는걸 권장
```
<br>
<br>

# 배열 for 문

```javascript
let days = ['월','화','수']

for(let index = 0; index < days.lenght; index++){
    console.log(days[index])
}
 
for(let day of days){ // 인덱스를 못 이용하는 단점이 있음
  console.log(day)
}

```