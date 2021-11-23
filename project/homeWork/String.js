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
