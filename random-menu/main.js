import { getMenus } from './asyncFunctions.js';

function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

console.log('메뉴 고르는 중...');

// 여기에 코드를 작성하세요.
const menus = await getMenus();

const menu = getRandomElement(menus);

// <음식 이름> 부분을 랜덤 메뉴 이름으로 바꿔 주세요.
console.log(`오늘의 랜덤 메뉴는 ${menu.name} 입니다!`);
