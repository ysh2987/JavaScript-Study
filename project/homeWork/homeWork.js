// Array
const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];
// 1. html 생성
const render = todos =>
  todos.reduce(
    (acc, cur) =>
      acc +
      `<li id="${cur.id}"><label><input type="checkbox"${cur.completed ? ' checked' : ''}>${cur.content}</label></li>`,
    ''
  );

render(todos);

// 2. 특정 프로퍼티 값 추출
const getValues = (todos, key) => todos.map(item => item[key]);
getValues(todos, 'id');
getValues(todos, 'content');
getValues(todos, 'completed');

// 3. 프로퍼티 정렬
{
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ];

  const sortBy = (todos, key) => todos.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
  todos = sortBy(todos, 'id');

  sortBy(todos, 'id');
  sortBy(todos, 'content');
  sortBy(todos, 'completed');
}

// 4. 새로운 요소 추가
{
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ];

  const addTodo = (todos, newTodo) => [newTodo, ...todos];

  todos = addTodo(todos, { id: 4, content: 'Test', completed: false });
  console.log(todos);
}

// 5. 특정 요소 삭제

{
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ];

  const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);

  todos = removeTodo(todos, 2);
  console.log(todos);
}

// 6. 특정 요소의 프로퍼티 값 반전
{
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ];

  const toggleCompletedById = (todos, id) =>
    todos.reduce((acc, cur) => {
      cur.completed = cur.id === id ? !cur.completed : cur.completed;
      acc.push(cur);
      return acc;
    }, []);

  todos = toggleCompletedById(todos, 2);
  console.log(todos);
}

// 7. 모든 요소의 completed 프로퍼티 값을 true로 설정
{
  let todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false },
  ];

  const toggleCompletedAll = todos =>
    todos.reduce((acc, cur) => {
      cur.completed = true;
      acc.push(cur);
      return acc;
    }, []);

  todos = toggleCompletedAll(todos);
  console.log(todos);
}

// 8. completed 프로퍼티의 값이 true인 요소의 갯수 구하기
const countCompletedTodos = todos => todos.filter(todo => todo.completed === true).length;
countCompletedTodos(todos);

// 9. id 프로퍼티의 값 중에서 최대값 구하기
const getMaxId = todos => {
  todos.sort((a, b) => b.id - a.id);
  return todos[0] ? todos[0].id : 0;
};

getMaxId(todos); // 3
getMaxId([]); // 0

// Date

// #1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기
const formatDate = date => date.toISOString().slice(0, 10);

formatDate(new Date('2021/07/24'));
formatDate(new Date('1900/1/4'));

// #2. 요일 구하기
const getDay = day => {
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return dayNames[new Date(day).getDay()];
};

getDay('2021-07-24');
getDay('2021-07-25');
getDay('2021-07-26');

// 3. 특정 달의 말일 구하기

const getLastDateOfMonth = (year, month) => new Date(year, month, 0).getDate();

getLastDateOfMonth(2021, 0);
getLastDateOfMonth(2021, 1);
getLastDateOfMonth(2021, 2);

// #4. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다
const getFirstDayOfMonth = (year, day) => {
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return dayNames[new Date(year, day, 1).getDay()];
};
getFirstDayOfMonth(2021, 0);
getFirstDayOfMonth(2021, 11);

// #5. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.
const getLastDayOfMonth = (year, month) => {
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return dayNames[new Date(year, month + 1, 0).getDay()];
};

getLastDayOfMonth(2021, 0); // => 0
getLastDayOfMonth(2021, 11); // => 5

// #6. 두 날짜 사이의 일수 구하기
const diffiDays = (date1, date2) => Math.abs(date1.getTime() - date2.getTime()) / 86400000;

diffiDays(new Date('2021/01/01'), new Date('2021/12/31'));

// #7. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기
const isEqualDate = (date1, date2) => date1.getTime() === date2.getTime();

isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'));
isEqualDate(new Date('2021/07/24'), new Date('2021/07/2'));

// String

// #1. 유효한 팰린드롬
const isPalindrome = string => {
  const regExp = string.toLowerCase().replace(/[^0-9a-z]/g, '');
  return regExp === regExp.split('').reverse().join('');
};
isPalindrome('A man, a plan, a canal: Panama');
isPalindrome('race a car');

// #2. 신규 아이디 추천
const solution = str => {
  const newId = str
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');
  return newId.length > 2 ? newId : newId + newId.charAt(newId.length - 1).repeat(3 - newId.length);
};

solution('...!@BaT#*..y.abcdefghijklm');

// 3. A를 #으로
const replaceAtoSharp = string => string.replace(/A/g, '#');

replaceAtoSharp('BANANA');

// 4. 대문자 찾기
const countUpperCase = string => (string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length : 0);

countUpperCase('KoreaTimeGood');
countUpperCase('aaaa');

// 5. 문자 찾기
const count = (string, target) =>
  string.match(new RegExp(target, 'g')) ? string.match(new RegExp(target, 'g')).length : 0;
count('COMPUTERPROGRAMMING', 'R');
count('aaaa', 'R');

// 6. 대소문자 변환
const toggleCase = string =>
  string
    .split('')
    .reduce((result, str) => (/[A-Z]/.test(str) ? result + str.toLowerCase() : result + str.toUpperCase()), '');

toggleCase('StuDY');

// 7. 문자열 압축
const compress = str =>
  [...new Set(str)].reduce((acc, cur) => {
    const target = new RegExp(`${cur}{2,}`);
    return target.test(str) ? acc + `${cur}${str.match(target)[0].length}` : acc + cur;
  }, '');

compress('ABBCCCE');
