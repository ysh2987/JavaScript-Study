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
