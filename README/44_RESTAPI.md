# REST API
- REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처고, REST API는 REST를 기반으로 서비스 API를 구현할 것을 의미한다.
- REST의 기본 원측을 성실히 지킨 서비스 다자인을 RESTful이라고 표현한다.

## REST API의 구성
- REST API는 자원, 행위, 표현의 3가지 요소로 구성된다. REST는 자체 표현 구조로 구성되어 REST API만으로 HTTP 요청의 내용을 이해할 수 있다.

<img src = "../img/chap44_1.jpg">

## REST API 설계 원칙
- REST에서 가장 중요한 기본적인 원칙은 두가지다. URI는 리소스를 표현하 데 집중하고 행위에 대한 정의는 HTTP 요청 메서드를 통해 하는 것이 RESTful API를 설계하는 중심 규칙이다.


1. URI는 리소스를 표현해야 한다.
- 리소스를 식별할 수 있는 이름은 동사보다는 명사를 사용한다. 따라서 이름에 get 같은 행위에 대한 표현이 들어가서는 안 된다.

```
# bad
GET /getTodos/1
GET /todos/show/1

# good
GET /todos/1
```


2. 리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.
- HTTP 요청 메서드는 클라이언트가 서버에게 요청의 종류와 목적을 알리는 방법이다. 주로 5가지 요청 메서드를 사용하여 CRUD를 구현한다.

<img src = "../img/chap44_2.jpg">


```
# bad
GET /todos/delete/1

# good
DELETE /todos/1
```


## JSON Server를 이용한 REST API 실습

- JSON Server 설치 : JSON Server는 json 파일을 사용하여 가상 REST API 서버를 구축할 수 있는 툴이다. 
- 사용법
  - 사용할 폴더 생성
  - npm init -y
  - npm install json-server --save-dev 
  - 루트 폴더에 db.json 파일 생성
  - npx json-server --warch db.json // db.json 파일의 변경을 감지하게 하려면 watch 옵션을 추가한다. npx를 입력하지 않으면 인식하지 못한다.
  - 서버를 종료하고 실행할 일이 많으니 package.json파일에 "scripts" 하위 "start"에 "json-server --watch db.json"을 입력해 놓자 여기서는 npx를 입력하지 않아도 된다.


## GET 요청
- 모든 리소스나 특정 리소스를 취득할때 요청한다.

```javascript
// 모든 리소스 요청
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest()

// HTTP 요청 초기화
// todos 리소스에서 모든 todo를 취득(index)
xhr.open('GET', '/todos')

// HTTP 요청 전송
xhr.send()

// 요청이 성공적으로 완료된 경우 발생한다.
xhr.onload = () => {
  if(xhr.status === 200){
    //status 프로퍼티 값이 200이면 정상적으로 응답된 상태다.
    document.querySelector('pre').textContent = xhr.response
  } else {
    console.error('Error', xhr.status, xhr.statusText)
  }
}
```

```javascript
// 특정 리소스 요청
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest()

// HTTP 요청 초기화
// todos 리소스에서 모든 todo를 취득(index)
xhr.open('GET', '/todos/3')

// HTTP 요청 전송
xhr.send()

// 요청이 성공적으로 완료된 경우 발생한다.
xhr.onload = () => {
  if(xhr.status === 200){
    //status 프로퍼티 값이 200이면 정상적으로 응답된 상태다.
    document.querySelector('pre').textContent = xhr.response
  } else {
    console.error('Error', xhr.status, xhr.statusText)
  }
}
```

## POST 요청
- todos 리소스에 새로운 todo를 생성한다. POST 요청 시에는 setRequestHeader 메서드를 사용하여 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정해야 한다.

```javascript
// XMLHttpRequest 객체 생성
const xhr = new XMLHttpRequest()

// HTTP 요청 초기화
// todos 리소스에 새로운 todo를 생성
xhr.open('POST', '/todos')

// 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정
xhr.setRequestHeader('content-type', 'application/json')

// HTTP 요청 전송
// 새로운 todo를 생성하기 위해 페이로드를 서버에 전송해야 한다.
xhr.send(JSON.stringify({id:4, content: 'Angular', completed : false}))

xhr.onload = () => {
  if(xhr.status === 200 || xhr.status === 201){
    // status 프로퍼티 값이 200(ok) 또는 201(created)이면 정상적 응답 상태
    document.querySelector('pre').textContent = xhr.response;
  } else {
    console.error('Error', xhr.status, xhr.statusText)
  }
}

```

## PUT 요청
- put은 특정 리소스 전체를 교체할 때 사용한다. PUT 요청 시에는 setRequestHeader 메서드를 사용하여 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정해야 한다.

```JAVASCRIPT
const xhr = new XMLHttpRequest()

// todos 리소스에서 id로 todo를 특정하여 id를 제외한 리소스 전체를 교체
xhr.open('PUT', '/todos/4')

// 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정
xhr.setRequestHeader('content-type', 'application/json')

// 리소스 전체를 교체하기 위해 페이로드를 서버에 전송해야 한다.
xhr.send(JSON.stringify({id:4, content: 'Angular', completed : true}))

xhr.onload = () => {
  if(xhr.status === 200){
    document.querySelector('pre').textContent = xhr.response;
  } else {
    console.error('Error', xhr.status, xhr.statusText)
  }
}
```

## PATCH 요청
- PATCH는 특정 리소스의 일부를 수정할 때 사용한다. PATCH 요청 시에는 setRequestHeader 메서드를 사용하여 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정해야 한다.

```JAVASCRIPT
const xhr = new XMLHttpRequest()

// todos 리소스의 id로 todo를 특정하여 completed만 수정한다.
xhr.open('PATCH', '/todos/4')

// 요청 몸체에 담아 서버로 전송할 페이로드의 MIME 타입을 지정
xhr.setRequestHeader('content-type', 'application/json')

// 리소스 수정하기 위해 페이로드를 서버에 전송해야 한다.
xhr.send(JSON.stringify({ completed : false}))

xhr.onload = () => {
  if(xhr.status === 200){
    document.querySelector('pre').textContent = xhr.response;
  } else {
    console.error('Error', xhr.status, xhr.statusText)
  }
}
```

## DELETE
- todos 리소스에서 id를 사용하여 todo를 삭제한다.

```javascript
const xhr = new XMLHttpRequest()

// todos 리소스에서 id를 사용하여 todo를 삭제한다.
xhr.open('DELETE', '/todos/4')

xhr.send()

xhr.onload = () => {
  if(xhr.status === 200){
    document.querySelector('pre').textContent = xhr.response;
  } else {
    console.error('Error', xhr.status, xhr.statusText)
  }
}
```