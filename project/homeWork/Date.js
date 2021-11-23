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
